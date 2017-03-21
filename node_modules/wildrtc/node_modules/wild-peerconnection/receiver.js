var WildEmitter = require("wildemitter");
var adapter = require('webrtc-adapter');


var Receiver = function (ref, onStream, config) {
  this.peerConnection = null;
  this.ref = ref;
  this.onStream = onStream;
  this.config = config;
  this.state = 'connecting';
  this._init();

}
WildEmitter.mixin(Receiver);
module.exports = Receiver;
Receiver.prototype._init = function () {

  this.ref.limitToLast(1).on('child_added', function (snapshot) {
    if (this.peerConnection != null) {
      this._destroyPeerConnection();
    }
    if (snapshot.child('answer').val() == null)
      this._initPeerConnection(snapshot.ref(),
        (function () {
          //onReady
          //do nothing
          this.state = 'connected'
        }).bind(this),
        (function () {
          //onDisconnect
          this.state = 'connecting';
          //do noting wait for sender to reconnect
        }).bind(this),
        (function (ev) {
          //onIceCandidate
          if (ev.candidate == null) {
            return;
          }
          var data = JSON.stringify(ev.candidate);
          this.receiverCandiRef.push(data);
        }).bind(this),
        (function (snapshot) {
          //onRemoteOffer
          this.offerCb_(snapshot);
        }).bind(this),
        (function (ev) {
          this.onStream(ev.stream);
        }).bind(this));
  }.bind(this));
}
Receiver.prototype._initPeerConnection = function (ref, _onReady, _onDisconnect, _onIceCandidate, _onRemoteOffer, _onStreamAdd) {
  var onDisconnect = _onDisconnect;
  var onReady = _onReady;
  this.currentRef = ref;
  this.offerRef = this.currentRef.child("offer");
  this.answerRef = this.currentRef.child("answer");
  this.senderCandiRef = this.currentRef.child("senderCandi");
  this.receiverCandiRef = this.currentRef.child("receiverCandi");
  this.peerConnection = new RTCPeerConnection(this.config);
  this.iceConnectionState = this.peerConnection.iceConnectionState;
  this.peerConnection.oniceconnectionstatechange = function (ev) {
    this.iceConnectionState = this.peerConnection.iceConnectionState;
    if (this.iceConnectionState == 'failed' || this.iceConnectionState == 'disconnected') {

      if (onDisconnect) {
        onDisconnect();
        onDisconnect = null;
      }
    }
    if (this.iceConnectionState == 'connected') {
      if (onReady) {
        onReady();
        onReady = null;
      }
    }
  }.bind(this);
  this.peerConnection.onicecandidate = _onIceCandidate;
  this.offerRef.on('value', _onRemoteOffer, this);
  this.peerConnection.onaddstream = _onStreamAdd;
}
Receiver.prototype._destroyPeerConnection = function () {

  if (this.peerConnection == null) {
    //already destroyed
    return;
  }
  try {
    this.peerConnection.close()
  } catch (e) {
    //do nothing
  }
  this.offerRef.off('value');
  this.senderCandiRef.off('child_added');
  this.currentRef = null;
  this.offerRef = null;
  this.answerRef = null;
  this.senderCandiRef = null;
  this.receiverCandiRef = null;
  //init webRTCPeerConnection
  this.peerConnection = null;
  this.iceConnectionState = null;
}

Receiver.prototype.close = function () {
  this._destroyPeerConnection()
}

Receiver.prototype.candidateCb_ = function (snap) {
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

Receiver.prototype.sendAnswer_ = function (cb) {
  this.peerConnection.createAnswer(function (desc) {
    this.peerConnection.setLocalDescription(desc, function () {
      this.answerRef.set(JSON.stringify(desc), function (err) {
        if (err) {
          cb(err);
        }
        else {
          cb(null);
        }
      });
    }.bind(this), function (err) {
      cb(err);
    });
  }.bind(this), function (err) {
    cb(err);
  })
}
Receiver.prototype.offerCb_ = function (snapshot) {
  var offer = snapshot.val();
  if (offer == null) {
    return;
  }
  //回answer 并且set remoteref
  var desc = new RTCSessionDescription(JSON.parse(offer));

  this.peerConnection.setRemoteDescription(desc, function () {
    this.sendAnswer_(function (err) {
      if (err) {
        console.error(err);
      }
    });
    //listen to candidate
    this.senderCandiRef.on("child_added", this.candidateCb_, this);
  }.bind(this), function (err) {
    console.error(err);

  });

  // }
}

Receiver.prototype.close = function () {
  this.peerConnection.close();
}
