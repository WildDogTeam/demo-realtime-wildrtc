var WildEmitter = require("wildemitter");
var adapter = require('webrtc-adapter');


var Sender = function (ref, stream, config) {
  this.peerConnection = null;
  this.ref = ref;
  this.stream = stream;
  this.config = config ;
  this.rc = 0;//重试次数
  this.state = 'connecting';
  this._connect();
}
Sender.RECONNECT_MAX = 10;
WildEmitter.mixin(Sender);
module.exports = Sender;
Sender.prototype.close = function () {
  this.stream = null;
  if (this.PeerConnection) {
    this._destroyPeerConnection();
  }
}
Sender.prototype._connect = function () {
  if (this.peerConnection != null) {
    //this is a reconnect
    this._destroyPeerConnection();
  }
  //cleanup
  this.ref.remove();
  this._initPeerConnection(this.stream,
    (function () {
      this.state = 'connected';
      this.emit('connected');
    }).bind(this),
    (function () {
      if (this.stream != null && this.rc < Sender.RECONNECT_MAX) {
        //reconnect change state to 
        this.rc += 1;
        this.state = 'connecting';
      }
      else {
        //emit disconnect event
        this.state = 'disconnected';
        this._destroyPeerConnection();

      }
    }).bind(this),
    (function (ev) {
      //send offer
      console.log('send offer')
      this.sendOffer_(function (err) {
        this.answerRef.on('value', this.answerCb_, this);
      }.bind(this));
    }).bind(this),
    (function (ev) {
      if (ev.candidate == null) {
        return;
      }
      var data = JSON.stringify(ev.candidate);
      this.senderCandiRef.push(data);
    }).bind(this));

}
Sender.prototype._initPeerConnection = function (stream ,_onReady, _onDisconnect, _onNegotitionNeeded, _onIceCandidate) {
  var onDisconnect = _onDisconnect;
  var onReady = _onReady;
  this.currentRef = this.ref.push();
  this.offerRef = this.currentRef.child("offer");
  this.answerRef = this.currentRef.child("answer");
  this.senderCandiRef = this.currentRef.child("senderCandi");
  this.receiverCandiRef = this.currentRef.child("receiverCandi");
  this.peerConnection = new RTCPeerConnection(this.config);
  this.iceConnectionState = this.peerConnection.iceConnectionState;
  this.peerConnection.oniceconnectionstatechange = function (ev) {
    this.iceConnectionState = this.peerConnection.iceConnectionState;
    if (this.iceConnectionState == 'failed' || this.iceConnectionState == 'disconnected') {
      if(onDisconnect){
        onDisconnect();
        onDisconnect = null;
      }
    }
    if (this.iceConnectionState == 'connected') {
      if(onReady){
        onReady();
        onReady = null;
      }
    }
  }.bind(this);
  //this.peerConnection.onnegotiationneeded = _onNegotitionNeeded;
  this.peerConnection.onnegotiationneeded = function(ev) {
    _onNegotitionNeeded(ev);
  }.bind(this);
  this.peerConnection.onicecandidate = _onIceCandidate;
  this.peerConnection.addStream(stream);
}
Sender.prototype._destroyPeerConnection = function () {
  if (this.peerConnection == null) {
    //already destroyed
    return;
  }
  try {
    this.peerConnection.close()
  } catch (e) {
    //do nothing
  }
  this.anwserRef.off('value');
  this.receiverCandiRef.off('child_added');
  this.currentRef = null;
  this.offerRef = null;
  this.answerRef = null;
  this.senderCandiRef = null;
  this.receiverCandiRef = null;
  //init webRTCPeerConnection
  this.peerConnection = null;
  this.iceConnectionState = null;
}
Sender.prototype.answerCb_ = function (snapshot) {
  var answer = snapshot.val();
  if (answer != null /*&& this.signalingState == 'have-local-offer'*/) {
    this.lastAnswer = answer;
    var desc = new RTCSessionDescription(JSON.parse(answer));
    this.peerConnection.setRemoteDescription(desc, function () {
      //listen to candidate
      this.receiverCandiRef.on("child_added", this.candidateCb_, this);
    }.bind(this), function (err) {
      console.error(err);
    });
  }
}
Sender.prototype.candidateCb_ = function (snap) {
  var sdp = JSON.parse(snap.val());
  if (sdp != null) {
    var candidate = new RTCIceCandidate(sdp);
    this.peerConnection.addIceCandidate(candidate, function () {
    }, function (err) {
      if (err)
        console.error(err);
    })
  }
}
Sender.prototype.sendOffer_ = function (cb) {
  this.peerConnection.createOffer(function (desc) {
    this.peerConnection.setLocalDescription(desc, function () {
      this.offerRef
        .set(JSON.stringify(desc), function (err) {
          if (err) {
            cb(err);
          }
          else {
            cb(null);
          }
        }.bind(this));
    }.bind(this), function (err) {
      cb(err)
    });
  }.bind(this), function (err) {
    cb(err);
  })
}

