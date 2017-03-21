var WildEmitter = require("wildemitter");
var adapter = require('webrtc-adapter');
module.exports = {};
if (window)
    window.WildPeerConnection = module.exports;
var sender = require('./sender');
var receiver = require('./receiver');
module.exports.Sender = sender;
module.exports.Receiver = receiver;