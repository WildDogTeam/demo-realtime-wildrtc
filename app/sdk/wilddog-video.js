! function e(t, n, i) {
  function r(s, a) {
    if (!n[s]) {
      if (!t[s]) {
        var c = "function" == typeof require && require;
        if (!a && c) return c(s, !0);
        if (o) return o(s, !0);
        throw new Error("Cannot find module '" + s + "'")
      }
      var d = n[s] = {
        exports: {}
      };
      t[s][0].call(d.exports, function(e) {
        var n = t[s][1][e];
        return r(n ? n : e)
      }, d, d.exports, e, t, n, i)
    }
    return n[s].exports
  }
  for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) r(i[s]);
  return r
}({
  1: [function(e, t, n) {
    (function(r, o, s, a, c, d, u, l, f) {
      function h(e) {
        return new Promise(function(t, n) {
          g(e, t, n)
        })
      }
      var p = p || {};
      if ("undefined" != typeof n && (t.exports = p), p.options = p.options || {}, p.VERSION = "0.13.4", p.onwebrtcready = p.onwebrtcready || function(e) {}, p._onwebrtcreadies = [], p.webRTCReady = function(e) {
          if ("function" != typeof e) throw new Error("Callback provided is not a function");
          !0 === p.onwebrtcreadyDone ? e(null !== p.WebRTCPlugin.plugin) : p._onwebrtcreadies.push(e)
        }, p.WebRTCPlugin = p.WebRTCPlugin || {}, p.WebRTCPlugin.pluginInfo = p.WebRTCPlugin.pluginInfo || {
          prefix: "Tem",
          plugName: "TemWebRTCPlugin",
          pluginId: "plugin0",
          type: "application/x-temwebrtcplugin",
          onload: "__TemWebRTCReady0",
          portalLink: "http://skylink.io/plugin/",
          downloadLink: null,
          companyName: "Temasys",
          downloadLinks: {
            mac: "https://cdn.wilddog.com/wildrtc/rtcplugin/TemWebRTCPlugin.pkg",
            win: "https://cdn.wilddog.com/wildrtc/rtcplugin/TemWebRTCPlugin.msi"
          }
        }, "undefined" != typeof p.WebRTCPlugin.pluginInfo.downloadLinks && null !== p.WebRTCPlugin.pluginInfo.downloadLinks && (navigator.platform.match(/^Mac/i) ? p.WebRTCPlugin.pluginInfo.downloadLink = p.WebRTCPlugin.pluginInfo.downloadLinks.mac : navigator.platform.match(/^Win/i) && (p.WebRTCPlugin.pluginInfo.downloadLink = p.WebRTCPlugin.pluginInfo.downloadLinks.win)), p.WebRTCPlugin.TAGS = {
          NONE: "none",
          AUDIO: "audio",
          VIDEO: "video"
        }, p.WebRTCPlugin.pageId = Math.random().toString(36).slice(2), p.WebRTCPlugin.plugin = null, p.WebRTCPlugin.setLogLevel = null, p.WebRTCPlugin.defineWebRTCInterface = null, p.WebRTCPlugin.isPluginInstalled = null, p.WebRTCPlugin.pluginInjectionInterval = null, p.WebRTCPlugin.injectPlugin = null, p.WebRTCPlugin.PLUGIN_STATES = {
          NONE: 0,
          INITIALIZING: 1,
          INJECTING: 2,
          INJECTED: 3,
          READY: 4
        }, p.WebRTCPlugin.pluginState = p.WebRTCPlugin.PLUGIN_STATES.NONE, p.onwebrtcreadyDone = !1, p.WebRTCPlugin.PLUGIN_LOG_LEVELS = {
          NONE: "NONE",
          ERROR: "ERROR",
          WARNING: "WARNING",
          INFO: "INFO",
          VERBOSE: "VERBOSE",
          SENSITIVE: "SENSITIVE"
        }, p.WebRTCPlugin.WaitForPluginReady = null, p.WebRTCPlugin.callWhenPluginReady = null, __TemWebRTCReady0 = function() {
          if ("complete" === document.readyState) p.WebRTCPlugin.pluginState = p.WebRTCPlugin.PLUGIN_STATES.READY, p.maybeThroughWebRTCReady();
          else var e = setInterval(function() {
            "complete" === document.readyState && (clearInterval(e), p.WebRTCPlugin.pluginState = p.WebRTCPlugin.PLUGIN_STATES.READY, p.maybeThroughWebRTCReady())
          }, 100)
        }, p.maybeThroughWebRTCReady = function() {
          p.onwebrtcreadyDone || (p.onwebrtcreadyDone = !0, p._onwebrtcreadies.length ? p._onwebrtcreadies.forEach(function(e) {
            "function" == typeof e && e(null !== p.WebRTCPlugin.plugin)
          }) : "function" == typeof p.onwebrtcready && p.onwebrtcready(null !== p.WebRTCPlugin.plugin))
        }, p.TEXT = {
          PLUGIN: {
            REQUIRE_INSTALLATION: "This website requires you to install a WebRTC-enabling plugin to work on this browser.",
            NOT_SUPPORTED: "Your browser does not support WebRTC.",
            BUTTON: "Install Now"
          },
          REFRESH: {
            REQUIRE_REFRESH: "Please refresh page",
            BUTTON: "Refresh Page"
          }
        }, p._iceConnectionStates = {
          starting: "starting",
          checking: "checking",
          connected: "connected",
          completed: "connected",
          done: "completed",
          disconnected: "disconnected",
          failed: "failed",
          closed: "closed"
        }, p._iceConnectionFiredStates = [], p.isDefined = null, p.parseWebrtcDetectedBrowser = function() {
          var e = null;
          window.opr && opr.addons || window.opera || navigator.userAgent.indexOf(" OPR/") >= 0 ? (w = "opera", webrtcDetectedType = "webkit", y = 26, e = /OPR\/(\d+)/i.exec(navigator.userAgent) || [], b = parseInt(e[1], 10)) : "undefined" != typeof InstallTrigger ? webrtcDetectedType = "moz" : Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? (w = "safari", webrtcDetectedType = "plugin", y = 7, e = /version\/(\d+)/i.exec(navigator.userAgent) || [], b = parseInt(e[1], 10)) : document.documentMode ? (w = "IE", webrtcDetectedType = "plugin", y = 9, e = /\brv[ :]+(\d+)/g.exec(navigator.userAgent) || [], b = parseInt(e[1] || "0", 10), b || (e = /\bMSIE[ :]+(\d+)/g.exec(navigator.userAgent) || [], b = parseInt(e[1] || "0", 10))) : window.StyleMedia ?
            webrtcDetectedType = "" : window.chrome && window.chrome.webstore ? webrtcDetectedType = "webkit" : "chrome" !== w && "opera" !== w || !window.CSS || (w = "blink"), 0 === (navigator.userAgent.match(/android/gi) || []).length && 0 === (navigator.userAgent.match(/chrome/gi) || []).length && navigator.userAgent.indexOf("Safari/") > 0 && (w = "safari", b = parseInt((navigator.userAgent.match(/Version\/(.*)\ /) || ["", "0"])[1], 10), y = 7, webrtcDetectedType = "plugin"), window.webrtcDetectedBrowser = w, window.webrtcDetectedVersion = b, window.webrtcMinimumVersion = y
        }, p.addEvent = function(e, t, n) {
          e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        }, p.renderNotificationBar = function(e, t, n, i, r) {
          if ("complete" === document.readyState) {
            var o = window,
              s = document.createElement("iframe");
            s.name = "adapterjs-alert", s.style.position = "fixed", s.style.top = "-41px", s.style.left = 0, s.style.right = 0, s.style.width = "100%", s.style.height = "40px", s.style.backgroundColor = "#ffffe1", s.style.border = "none", s.style.borderBottom = "1px solid #888888", s.style.zIndex = "9999999", "string" == typeof s.style.webkitTransition ? s.style.webkitTransition = "all .5s ease-out" : "string" == typeof s.style.transition && (s.style.transition = "all .5s ease-out"), document.body.appendChild(s);
            var a = s.contentWindow ? s.contentWindow : s.contentDocument.document ? s.contentDocument.document : s.contentDocument;
            a.document.open(), a.document.write('<span style="display: inline-block; font-family: Helvetica, Arial,sans-serif; font-size: .9rem; padding: 4px; vertical-align: middle; cursor: default;">' + e + "</span>"), t && n ? (a.document.write('<button id="okay">' + t + '</button><button id="cancel">Cancel</button>'), a.document.close(), p.addEvent(a.document.getElementById("okay"), "click", function(e) {
              r && p.renderNotificationBar(p.TEXT.EXTENSION ? p.TEXT.EXTENSION.REQUIRE_REFRESH : p.TEXT.REFRESH.REQUIRE_REFRESH, p.TEXT.REFRESH.BUTTON, "javascript:location.reload()"), window.open(n, i ? "_blank" : "_top"), e.preventDefault();
              try {
                e.cancelBubble = !0
              } catch (e) {}
              var t = setInterval(function() {
                isIE || navigator.plugins.refresh(!1), p.WebRTCPlugin.isPluginInstalled(p.WebRTCPlugin.pluginInfo.prefix, p.WebRTCPlugin.pluginInfo.plugName, p.WebRTCPlugin.pluginInfo.type, function() {
                  clearInterval(t), p.WebRTCPlugin.defineWebRTCInterface()
                }, function() {})
              }, 500)
            }), p.addEvent(a.document.getElementById("cancel"), "click", function(e) {
              o.document.body.removeChild(s)
            })) : a.document.close(), setTimeout(function() {
              "string" == typeof s.style.webkitTransform ? s.style.webkitTransform = "translateY(40px)" : "string" == typeof s.style.transform ? s.style.transform = "translateY(40px)" : s.style.top = "0px"
            }, 300)
          }
        }, webrtcDetectedType = null, checkMediaDataChannelSettings = function(e, t, n, i) {
          if ("function" == typeof n) {
            var r = !0,
              o = "firefox" === w,
              s = "moz" === webrtcDetectedType && b > 30,
              a = "firefox" === e;
            if (o && a || s) try {
              delete i.mandatory.MozDontOfferDataChannel
            } catch (e) {} else o && !a && (i.mandatory.MozDontOfferDataChannel = !0);
            if (!o)
              for (var c in i.mandatory) i.mandatory.hasOwnProperty(c) && c.indexOf("Moz") !== -1 && delete i.mandatory[c];
            !o || a || s || (r = !1), n(r, i)
          }
        }, checkIceConnectionState = function(e, t, n) {
          "function" == typeof n && (e = e ? e : "peer", p._iceConnectionFiredStates[e] && t !== p._iceConnectionStates.disconnected && t !== p._iceConnectionStates.failed && t !== p._iceConnectionStates.closed || (p._iceConnectionFiredStates[e] = []), t = p._iceConnectionStates[t], p._iceConnectionFiredStates[e].indexOf(t) < 0 && (p._iceConnectionFiredStates[e].push(t), t === p._iceConnectionStates.connected && setTimeout(function() {
            p._iceConnectionFiredStates[e].push(p._iceConnectionStates.done), n(p._iceConnectionStates.done)
          }, 1e3), n(t)))
        }, createIceServer = null, createIceServers = null, RTCPeerConnection = null, RTCSessionDescription = "function" == typeof RTCSessionDescription ? RTCSessionDescription : null, RTCIceCandidate = "function" == typeof RTCIceCandidate ? RTCIceCandidate : null, g = null, m = null, v = null, w = null, b = null, y = null, !(navigator.mozGetUserMedia || navigator.webkitGetUserMedia || navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) || 0 === (navigator.userAgent.match(/android/gi) || []).length && 0 === (navigator.userAgent.match(/chrome/gi) || []).length && navigator.userAgent.indexOf("Safari/") > 0) "object" == typeof console && "function" == typeof console.log || (console = {} || console, console.log = function(e) {}, console.info = function(e) {},
        console.error = function(e) {}, console.dir = function(e) {}, console.exception = function(e) {}, console.trace = function(e) {}, console.warn = function(e) {}, console.count = function(e) {}, console.debug = function(e) {}, console.count = function(e) {}, console.time = function(e) {}, console.timeEnd = function(e) {}, console.group = function(e) {}, console.groupCollapsed = function(e) {}, console.groupEnd = function(e) {}), p.parseWebrtcDetectedBrowser(), isIE = "IE" === w, p.WebRTCPlugin.WaitForPluginReady = function() {
        for (; p.WebRTCPlugin.pluginState !== p.WebRTCPlugin.PLUGIN_STATES.READY;);
      }, p.WebRTCPlugin.callWhenPluginReady = function(e) {
        if (p.WebRTCPlugin.pluginState === p.WebRTCPlugin.PLUGIN_STATES.READY) e();
        else var t = setInterval(function() {
          p.WebRTCPlugin.pluginState === p.WebRTCPlugin.PLUGIN_STATES.READY && (clearInterval(t), e())
        }, 100)
      }, p.WebRTCPlugin.setLogLevel = function(e) {
        p.WebRTCPlugin.callWhenPluginReady(function() {
          p.WebRTCPlugin.plugin.setLogLevel(e)
        })
      }, p.WebRTCPlugin.injectPlugin = function() {
        if ("complete" === document.readyState && p.WebRTCPlugin.pluginState === p.WebRTCPlugin.PLUGIN_STATES.INITIALIZING) {
          if (p.WebRTCPlugin.pluginState = p.WebRTCPlugin.PLUGIN_STATES.INJECTING, "IE" === w && b <= 10) {
            var e = document.createDocumentFragment();
            for (p.WebRTCPlugin.plugin = document.createElement("div"), p.WebRTCPlugin.plugin.innerHTML = '<object id="' + p.WebRTCPlugin.pluginInfo.pluginId + '" type="' + p.WebRTCPlugin.pluginInfo.type + '" width="1" height="1"><param name="pluginId" value="' + p.WebRTCPlugin.pluginInfo.pluginId + '" /> <param name="windowless" value="false" /> <param name="pageId" value="' + p.WebRTCPlugin.pageId + '" /> <param name="onload" value="' + p.WebRTCPlugin.pluginInfo.onload + '" /><param name="tag" value="' + p.WebRTCPlugin.TAGS.NONE + '" />' + (p.options.getAllCams ? '<param name="forceGetAllCams" value="True" />' : "") + "</object>"; p.WebRTCPlugin.plugin.firstChild;) e.appendChild(p.WebRTCPlugin.plugin.firstChild);
            document.body.appendChild(e), p.WebRTCPlugin.plugin = document.getElementById(p.WebRTCPlugin.pluginInfo.pluginId)
          } else p.WebRTCPlugin.plugin = document.createElement("object"), p.WebRTCPlugin.plugin.id = p.WebRTCPlugin.pluginInfo.pluginId, isIE ? (p.WebRTCPlugin.plugin.width = "1px", p.WebRTCPlugin.plugin.height = "1px") : (p.WebRTCPlugin.plugin.width = "0px", p.WebRTCPlugin.plugin.height = "0px"), p.WebRTCPlugin.plugin.type = p.WebRTCPlugin.pluginInfo.type, p.WebRTCPlugin.plugin.innerHTML = '<param name="onload" value="' + p.WebRTCPlugin.pluginInfo.onload + '"><param name="pluginId" value="' + p.WebRTCPlugin.pluginInfo.pluginId + '"><param name="windowless" value="false" /> ' + (p.options.getAllCams ? '<param name="forceGetAllCams" value="True" />' : "") + '<param name="pageId" value="' + p.WebRTCPlugin.pageId + '"><param name="tag" value="' + p.WebRTCPlugin.TAGS.NONE + '" />',
            document.body.appendChild(p.WebRTCPlugin.plugin);
          p.WebRTCPlugin.pluginState = p.WebRTCPlugin.PLUGIN_STATES.INJECTED
        }
      }, p.WebRTCPlugin.isPluginInstalled = function(e, t, n, i, r) {
        if (isIE) {
          try {
            new ActiveXObject(e + "." + t)
          } catch (e) {
            return void r()
          }
          i()
        } else {
          for (var o = navigator.mimeTypes, s = 0; s < o.length; s++)
            if (o[s].type.indexOf(n) >= 0) return void i();
          r()
        }
      }, p.WebRTCPlugin.defineWebRTCInterface = function() {
        if (p.WebRTCPlugin.pluginState !== p.WebRTCPlugin.PLUGIN_STATES.READY) {
          p.WebRTCPlugin.pluginState = p.WebRTCPlugin.PLUGIN_STATES.INITIALIZING, p.isDefined = function(e) {
            return null !== e && void 0 !== e
          }, createIceServer = function(e, t, n) {
            var i = null,
              r = e.split(":");
            return 0 === r[0].indexOf("stun") ? i = {
              url: e,
              hasCredentials: !1
            } : 0 === r[0].indexOf("turn") && (i = {
              url: e,
              hasCredentials: !0,
              credential: n,
              username: t
            }), i
          }, createIceServers = function(e, t, n) {
            for (var i = [], r = 0; r < e.length; ++r) i.push(createIceServer(e[r], t, n));
            return i
          }, RTCSessionDescription = function(e) {
            return p.WebRTCPlugin.WaitForPluginReady(), p.WebRTCPlugin.plugin.ConstructSessionDescription(e.type, e.sdp)
          }, RTCPeerConnection = function(e, t) {
            if (void 0 !== e && null !== e && !Array.isArray(e.iceServers)) throw new Error("Failed to construct 'RTCPeerConnection': Malformed RTCConfiguration");
            if ("undefined" != typeof t && null !== t) {
              var n = !1;
              if (n |= "object" != typeof t, n |= t.hasOwnProperty("mandatory") && void 0 !== t.mandatory && null !== t.mandatory && t.mandatory.constructor !== Object, n |= t.hasOwnProperty("optional") && void 0 !== t.optional && null !== t.optional && !Array.isArray(t.optional)) throw new Error("Failed to construct 'RTCPeerConnection': Malformed constraints object")
            }
            p.WebRTCPlugin.WaitForPluginReady();
            var i = null;
            if (e && Array.isArray(e.iceServers)) {
              i = e.iceServers;
              for (var r = 0; r < i.length; r++) i[r].urls && !i[r].url && (i[r].url = i[r].urls), i[r].hasCredentials = p.isDefined(i[r].username) && p.isDefined(i[r].credential)
            }
            if (p.WebRTCPlugin.plugin.PEER_CONNECTION_VERSION && p.WebRTCPlugin.plugin.PEER_CONNECTION_VERSION > 1) return i && (e.iceServers = i), p.WebRTCPlugin.plugin.PeerConnection(e);
            var o = t && t.mandatory ? t.mandatory : null,
              s = t && t.optional ? t.optional : null;
            return p.WebRTCPlugin.plugin.PeerConnection(p.WebRTCPlugin.pageId, i, o, s)
          }, MediaStreamTrack = function() {}, MediaStreamTrack.getSources = function(e) {
            p.WebRTCPlugin.callWhenPluginReady(function() {
              p.WebRTCPlugin.plugin.GetSources(e)
            })
          };
          var e = function(e) {
            if ("object" != typeof e || e.mandatory || e.optional) return e;
            var t = {};
            return Object.keys(e).forEach(function(n) {
              if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                var i = "object" == typeof e[n] ? e[n] : {
                  ideal: e[n]
                };
                void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                var r = function(e, t) {
                  return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                };
                if (void 0 !== i.ideal) {
                  t.optional = t.optional || [];
                  var o = {};
                  "number" == typeof i.ideal ? (o[r("min", n)] = i.ideal, t.optional.push(o), o = {}, o[r("max", n)] = i.ideal, t.optional.push(o)) : (o[r("", n)] = i.ideal, t.optional.push(o))
                }
                void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", n)] = i.exact) : ["min", "max"].forEach(function(e) {
                  void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, n)] = i[e])
                })
              }
            }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
          };
          g = function(t, n, i) {
            var r = {};
            r.audio = !!t.audio && e(t.audio), r.video = !!t.video && e(t.video), p.WebRTCPlugin.callWhenPluginReady(function() {
              p.WebRTCPlugin.plugin.getUserMedia(r, n, i)
            })
          }, window.navigator.getUserMedia = g, navigator.mediaDevices || "undefined" == typeof Promise || (h = function(e) {
            return new Promise(function(t, n) {
              g(e, t, n)
            })
          }, navigator.mediaDevices = {
            getUserMedia: h,
            enumerateDevices: function() {
              return new Promise(function(e) {
                var t = {
                  audio: "audioinput",
                  video: "videoinput"
                };
                return MediaStreamTrack.getSources(function(n) {
                  e(n.map(function(e) {
                    return {
                      label: e.label,
                      kind: t[e.kind],
                      id: e.id,
                      deviceId: e.id,
                      groupId: ""
                    }
                  }))
                })
              })
            }
          }), m = function(e, t) {
            if (e && e.parentNode) {
              var n;
              null === t ? n = "" : ("undefined" != typeof t.enableSoundTracks && t.enableSoundTracks(!0), n = t.id);
              var i = 0 === e.id.length ? Math.random().toString(36).slice(2) : e.id,
                r = e.nodeName.toLowerCase();
              if ("object" !== r) {
                var o;
                switch (r) {
                  case "audio":
                    o = p.WebRTCPlugin.TAGS.AUDIO;
                    break;
                  case "video":
                    o = p.WebRTCPlugin.TAGS.VIDEO;
                    break;
                  default:
                    o = p.WebRTCPlugin.TAGS.NONE
                }
                var s = document.createDocumentFragment(),
                  a = document.createElement("div"),
                  c = "";
                for (e.className ? c = 'class="' + e.className + '" ' : e.attributes && e.attributes.class && (c = 'class="' + e.attributes.class.value + '" '), a.innerHTML = '<object id="' + i + '" ' + c + 'type="' + p.WebRTCPlugin.pluginInfo.type + '"><param name="pluginId" value="' + i + '" /> <param name="pageId" value="' + p.WebRTCPlugin.pageId + '" /> <param name="windowless" value="true" /> <param name="streamId" value="' + n + '" /> <param name="tag" value="' + o + '" /> </object>'; a.firstChild;) s.appendChild(a.firstChild);
                var d = "",
                  u = "";
                e.clientWidth || e.clientHeight ? (u = e.clientWidth, d = e.clientHeight) : (e.width || e.height) && (u = e.width, d = e.height), e.parentNode.insertBefore(s, e), s = document.getElementById(i), s.width = u, s.height = d, e.parentNode.removeChild(e)
              } else {
                for (var l = e.children, f = 0; f !== l.length; ++f)
                  if ("streamId" === l[f].name) {
                    l[f].value = n;
                    break
                  }
                e.setStreamId(n)
              }
              var h = document.getElementById(i);
              return p.forwardEventHandlers(h, e, Object.getPrototypeOf(e)), h
            }
          }, v = function(e, t) {
            for (var n = null, i = t.children, r = 0; r !== i.length; ++r)
              if ("streamId" === i[r].name) {
                p.WebRTCPlugin.WaitForPluginReady(), n = p.WebRTCPlugin.plugin.getStreamWithId(p.WebRTCPlugin.pageId, i[r].value);
                break
              }
            if (null !== n) return m(e, n)
          }, window.attachMediaStream = m, window.reattachMediaStream = v, window.getUserMedia = g, p.attachMediaStream = m, p.reattachMediaStream = v, p.getUserMedia = g, p.forwardEventHandlers = function(e, t, n) {
            properties = Object.getOwnPropertyNames(n);
            for (var i in properties) i && (propName = properties[i], "function" == typeof propName.slice && "on" === propName.slice(0, 2) && "function" == typeof t[propName] && p.addEvent(e, propName.slice(2), t[propName]));
            var r = Object.getPrototypeOf(n);
            r && p.forwardEventHandlers(e, t, r)
          }, RTCIceCandidate = function(e) {
            return e.sdpMid || (e.sdpMid = ""), p.WebRTCPlugin.WaitForPluginReady(), p.WebRTCPlugin.plugin.ConstructIceCandidate(e.sdpMid, e.sdpMLineIndex, e.candidate)
          }, p.addEvent(document, "readystatechange", p.WebRTCPlugin.injectPlugin), p.WebRTCPlugin.injectPlugin()
        }
      }, p.WebRTCPlugin.pluginNeededButNotInstalledCb = p.WebRTCPlugin.pluginNeededButNotInstalledCb || function() {
        p.addEvent(document, "readystatechange", p.WebRTCPlugin.pluginNeededButNotInstalledCbPriv), p.WebRTCPlugin.pluginNeededButNotInstalledCbPriv()
      }, p.WebRTCPlugin.pluginNeededButNotInstalledCbPriv = function() {
        if (!p.options.hidePluginInstallPrompt) {
          var e = p.WebRTCPlugin.pluginInfo.downloadLink;
          if (e) {
            var t;
            t = p.WebRTCPlugin.pluginInfo.portalLink ? 'This website requires you to install the  <a href="' + p.WebRTCPlugin.pluginInfo.portalLink + '" target="_blank">' + p.WebRTCPlugin.pluginInfo.companyName + " WebRTC Plugin</a> to work on this browser." : p.TEXT.PLUGIN.REQUIRE_INSTALLATION, p.renderNotificationBar(t, p.TEXT.PLUGIN.BUTTON, e)
          } else p.renderNotificationBar(p.TEXT.PLUGIN.NOT_SUPPORTED)
        }
      }, p.WebRTCPlugin.isPluginInstalled(p.WebRTCPlugin.pluginInfo.prefix, p.WebRTCPlugin.pluginInfo.plugName, p.WebRTCPlugin.pluginInfo.type, p.WebRTCPlugin.defineWebRTCInterface, p.WebRTCPlugin.pluginNeededButNotInstalledCb);
      else {
        var g = null,
          m = null,
          v = null,
          w = null,
          b = null,
          y = null,
          _ = {
            log: function() {
              "undefined" != typeof t || "function" == typeof e && "function" == typeof define
            },
            extractVersion: function(e, t, n) {
              var i = e.match(t);
              return i && i.length >= n && parseInt(i[n], 10)
            }
          };
        if ("object" == typeof window && (!window.HTMLMediaElement || "srcObject" in window.HTMLMediaElement.prototype || Object.defineProperty(window.HTMLMediaElement.prototype, "srcObject", {
            get: function() {
              return "mozSrcObject" in this ? this.mozSrcObject : this._srcObject
            },
            set: function(e) {
              "mozSrcObject" in this ? this.mozSrcObject = e : (this._srcObject = e, this.src = URL.createObjectURL(e))
            }
          }), g = window.navigator && window.navigator.getUserMedia), m = function(e, t) {
            e.srcObject = t
          }, v = function(e, t) {
            e.srcObject = t.srcObject
          }, "undefined" != typeof window && window.navigator)
          if (navigator.mozGetUserMedia) {
            if (_.log("This appears to be Firefox"), w = "firefox", b = _.extractVersion(navigator.userAgent, /Firefox\/([0-9]+)\./, 1), y = 31, window.RTCPeerConnection || (window.RTCPeerConnection = function(e, t) {
                if (b < 38 && e && e.iceServers) {
                  for (var n = [], i = 0; i < e.iceServers.length; i++) {
                    var r = e.iceServers[i];
                    if (r.hasOwnProperty("urls"))
                      for (var o = 0; o < r.urls.length; o++) {
                        var s = {
                          url: r.urls[o]
                        };
                        0 === r.urls[o].indexOf("turn") && (s.username = r.username, s.credential = r.credential), n.push(s)
                      } else n.push(e.iceServers[i])
                  }
                  e.iceServers = n
                }
                return new mozRTCPeerConnection(e, t)
              }, mozRTCPeerConnection.generateCertificate && Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
                get: function() {
                  return arguments.length ? mozRTCPeerConnection.generateCertificate.apply(null, arguments) : mozRTCPeerConnection.generateCertificate
                }
              }), window.RTCSessionDescription = mozRTCSessionDescription, window.RTCIceCandidate = mozRTCIceCandidate), g = function(e, t, n) {
                var i = function(e) {
                  if ("object" != typeof e || e.require) return e;
                  var t = [];
                  return Object.keys(e).forEach(function(n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                      var i = e[n] = "object" == typeof e[n] ? e[n] : {
                        ideal: e[n]
                      };
                      if (void 0 === i.min && void 0 === i.max && void 0 === i.exact || t.push(n), void 0 !== i.exact && ("number" == typeof i.exact ? i.min = i.max = i.exact : e[n] = i.exact, delete i.exact), void 0 !== i.ideal) {
                        e.advanced = e.advanced || [];
                        var r = {};
                        "number" == typeof i.ideal ? r[n] = {
                          min: i.ideal,
                          max: i.ideal
                        } : r[n] = i.ideal, e.advanced.push(r), delete i.ideal, Object.keys(i).length || delete e[n]
                      }
                    }
                  }), t.length && (e.require = t), e
                };
                return b < 38 && (_.log("spec: " + JSON.stringify(e)), e.audio && (e.audio = i(e.audio)), e.video && (e.video = i(e.video)), _.log("ff37: " + JSON.stringify(e))), navigator.mozGetUserMedia(e, t, n)
              }, navigator.getUserMedia = g, navigator.mediaDevices || (navigator.mediaDevices = {
                getUserMedia: h,
                addEventListener: function() {},
                removeEventListener: function() {}
              }), navigator.mediaDevices.enumerateDevices = navigator.mediaDevices.enumerateDevices || function() {
                return new Promise(function(e) {
                  var t = [{
                    kind: "audioinput",
                    deviceId: "default",
                    label: "",
                    groupId: ""
                  }, {
                    kind: "videoinput",
                    deviceId: "default",
                    label: "",
                    groupId: ""
                  }];
                  e(t)
                })
              }, b < 41) {
              var S = navigator.mediaDevices.enumerateDevices.bind(navigator.mediaDevices);
              navigator.mediaDevices.enumerateDevices = function() {
                return S().then(void 0, function(e) {
                  if ("NotFoundError" === e.name) return [];
                  throw e
                })
              }
            }
          } else if (navigator.webkitGetUserMedia && window.webkitRTCPeerConnection) {
          _.log("This appears to be Chrome"), w = "chrome", b = _.extractVersion(navigator.userAgent, /Chrom(e|ium)\/([0-9]+)\./, 2), y = 38, window.RTCPeerConnection = function(e, t) {
            e && e.iceTransportPolicy && (e.iceTransports = e.iceTransportPolicy);
            var n = new webkitRTCPeerConnection(e, t),
              i = n.getStats.bind(n);
            return n.getStats = function(e, t, n) {
              var r = this,
                o = arguments;
              if (arguments.length > 0 && "function" == typeof e) return i(e, t);
              var s = function(e) {
                var t = {},
                  n = e.result();
                return n.forEach(function(e) {
                  var n = {
                    id: e.id,
                    timestamp: e.timestamp,
                    type: e.type
                  };
                  e.names().forEach(function(t) {
                    n[t] = e.stat(t)
                  }), t[n.id] = n
                }), t
              };
              if (arguments.length >= 2) {
                var a = function(e) {
                  o[1](s(e))
                };
                return i.apply(this, [a, arguments[0]])
              }
              return new Promise(function(t, n) {
                1 === o.length && null === e ? i.apply(r, [function(e) {
                  t.apply(null, [s(e)])
                }, n]) : i.apply(r, [t, n])
              })
            }, n
          }, webkitRTCPeerConnection.generateCertificate && Object.defineProperty(window.RTCPeerConnection, "generateCertificate", {
            get: function() {
              return arguments.length ? webkitRTCPeerConnection.generateCertificate.apply(null, arguments) : webkitRTCPeerConnection.generateCertificate
            }
          }), ["createOffer", "createAnswer"].forEach(function(e) {
            var t = webkitRTCPeerConnection.prototype[e];
            webkitRTCPeerConnection.prototype[e] = function() {
              var e = this;
              if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
                var n = 1 === arguments.length ? arguments[0] : void 0;
                return new Promise(function(i, r) {
                  t.apply(e, [i, r, n])
                })
              }
              return t.apply(this, arguments)
            }
          }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function(e) {
            var t = webkitRTCPeerConnection.prototype[e];
            webkitRTCPeerConnection.prototype[e] = function() {
              var e = arguments,
                n = this;
              return new Promise(function(i, r) {
                t.apply(n, [e[0], function() {
                  i(), e.length >= 2 && e[1].apply(null, [])
                }, function(t) {
                  r(t), e.length >= 3 && e[2].apply(null, [t])
                }])
              })
            }
          });
          var I = function(e) {
            if ("object" != typeof e || e.mandatory || e.optional) return e;
            var t = {};
            return Object.keys(e).forEach(function(n) {
              if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                var i = "object" == typeof e[n] ? e[n] : {
                  ideal: e[n]
                };
                void 0 !== i.exact && "number" == typeof i.exact && (i.min = i.max = i.exact);
                var r = function(e, t) {
                  return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                };
                if (void 0 !== i.ideal) {
                  t.optional = t.optional || [];
                  var o = {};
                  "number" == typeof i.ideal ? (o[r("min", n)] = i.ideal, t.optional.push(o), o = {}, o[r("max", n)] = i.ideal, t.optional.push(o)) : (o[r("", n)] = i.ideal, t.optional.push(o))
                }
                void 0 !== i.exact && "number" != typeof i.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[r("", n)] = i.exact) : ["min", "max"].forEach(function(e) {
                  void 0 !== i[e] && (t.mandatory = t.mandatory || {}, t.mandatory[r(e, n)] = i[e])
                })
              }
            }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
          };
          if (g = function(e, t, n) {
              return e.audio && (e.audio = I(e.audio)), e.video && (e.video = I(e.video)), _.log("chrome: " + JSON.stringify(e)), navigator.webkitGetUserMedia(e, t, n)
            }, navigator.getUserMedia = g, navigator.mediaDevices || (navigator.mediaDevices = {
              getUserMedia: h,
              enumerateDevices: function() {
                return new Promise(function(e) {
                  var t = {
                    audio: "audioinput",
                    video: "videoinput"
                  };
                  return MediaStreamTrack.getSources(function(n) {
                    e(n.map(function(e) {
                      return {
                        label: e.label,
                        kind: t[e.kind],
                        deviceId: e.id,
                        groupId: ""
                      }
                    }))
                  })
                })
              }
            }), navigator.mediaDevices.getUserMedia) {
            var C = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
            navigator.mediaDevices.getUserMedia = function(e) {
              return _.log("spec:   " + JSON.stringify(e)), e.audio = I(e.audio), e.video = I(e.video), _.log("chrome: " + JSON.stringify(e)), C(e)
            }
          } else navigator.mediaDevices.getUserMedia = function(e) {
            return h(e)
          };
          "undefined" == typeof navigator.mediaDevices.addEventListener && (navigator.mediaDevices.addEventListener = function() {
            _.log("Dummy mediaDevices.addEventListener called.")
          }), "undefined" == typeof navigator.mediaDevices.removeEventListener && (navigator.mediaDevices.removeEventListener = function() {
            _.log("Dummy mediaDevices.removeEventListener called.")
          }), m = function(e, t) {
            b >= 43 ? e.srcObject = t : "undefined" != typeof e.src ? e.src = URL.createObjectURL(t) : _.log("Error attaching stream to element.")
          }, v = function(e, t) {
            b >= 43 ? e.srcObject = t.srcObject : e.src = t.src
          }
        } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
          if (_.log("This appears to be Edge"), w = "edge", b = _.extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2), y = 10547, window.RTCIceGatherer) {
            var T = function() {
                return Math.random().toString(36).substr(2, 10)
              },
              E = T(),
              R = {};
            R.splitLines = function(e) {
              return e.trim().split("\n").map(function(e) {
                return e.trim()
              })
            }, R.splitSections = function(e) {
              var t = e.split("\r\nm=");
              return t.map(function(e, t) {
                return (t > 0 ? "m=" + e : e).trim() + "\r\n"
              })
            }, R.matchPrefix = function(e, t) {
              return R.splitLines(e).filter(function(e) {
                return 0 === e.indexOf(t)
              })
            }, R.parseCandidate = function(e) {
              var t;
              t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" ");
              for (var n = {
                  foundation: t[0],
                  component: t[1],
                  protocol: t[2].toLowerCase(),
                  priority: parseInt(t[3], 10),
                  ip: t[4],
                  port: parseInt(t[5], 10),
                  type: t[7]
                }, i = 8; i < t.length; i += 2) switch (t[i]) {
                case "raddr":
                  n.relatedAddress = t[i + 1];
                  break;
                case "rport":
                  n.relatedPort = parseInt(t[i + 1], 10);
                  break;
                case "tcptype":
                  n.tcpType = t[i + 1]
              }
              return n
            }, R.writeCandidate = function(e) {
              var t = [];
              t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port);
              var n = e.type;
              return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), "candidate:" + t.join(" ")
            }, R.parseRtpMap = function(e) {
              var t = e.substr(9).split(" "),
                n = {
                  payloadType: parseInt(t.shift(), 10)
                };
              return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.numChannels = 3 === t.length ? parseInt(t[2], 10) : 1, n
            }, R.writeRtpMap = function(e) {
              var t = e.payloadType;
              return void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType), "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== e.numChannels ? "/" + e.numChannels : "") + "\r\n"
            }, R.parseFmtp = function(e) {
              for (var t, n = {}, i = e.substr(e.indexOf(" ") + 1).split(";"), r = 0; r < i.length; r++) t = i[r].trim().split("="), n[t[0].trim()] = t[1];
              return n
            }, R.writeFtmp = function(e) {
              var t = "",
                n = e.payloadType;
              if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && e.parameters.length) {
                var i = [];
                Object.keys(e.parameters).forEach(function(t) {
                  i.push(t + "=" + e.parameters[t])
                }), t += "a=fmtp:" + n + " " + i.join(";") + "\r\n"
              }
              return t
            }, R.parseRtcpFb = function(e) {
              var t = e.substr(e.indexOf(" ") + 1).split(" ");
              return {
                type: t.shift(),
                parameter: t.join(" ")
              }
            }, R.writeRtcpFb = function(e) {
              var t = "",
                n = e.payloadType;
              return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function(e) {
                t += "a=rtcp-fb:" + n + " " + e.type + " " + e.parameter + "\r\n"
              }), t
            }, R.parseSsrcMedia = function(e) {
              var t = e.indexOf(" "),
                n = {
                  ssrc: e.substr(7, t - 7)
                },
                i = e.indexOf(":", t);
              return i > -1 ? (n.attribute = e.substr(t + 1, i - t - 1), n.value = e.substr(i + 1)) : n.attribute = e.substr(t + 1), n
            }, R.getDtlsParameters = function(e, t) {
              var n = R.splitLines(e);
              n = n.concat(R.splitLines(t));
              var i = n.filter(function(e) {
                  return 0 === e.indexOf("a=fingerprint:")
                })[0].substr(14),
                r = {
                  role: "auto",
                  fingerprints: [{
                    algorithm: i.split(" ")[0],
                    value: i.split(" ")[1]
                  }]
                };
              return r
            }, R.writeDtlsParameters = function(e, t) {
              var n = "a=setup:" + t + "\r\n";
              return e.fingerprints.forEach(function(e) {
                n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
              }), n
            }, R.getIceParameters = function(e, t) {
              var n = R.splitLines(e);
              n = n.concat(R.splitLines(t));
              var i = {
                usernameFragment: n.filter(function(e) {
                  return 0 === e.indexOf("a=ice-ufrag:")
                })[0].substr(12),
                password: n.filter(function(e) {
                  return 0 === e.indexOf("a=ice-pwd:")
                })[0].substr(10)
              };
              return i
            }, R.writeIceParameters = function(e) {
              return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
            }, R.parseRtpParameters = function(e) {
              for (var t = {
                  codecs: [],
                  headerExtensions: [],
                  fecMechanisms: [],
                  rtcp: []
                }, n = R.splitLines(e), i = n[0].split(" "), r = 3; r < i.length; r++) {
                var o = i[r],
                  s = R.matchPrefix(e, "a=rtpmap:" + o + " ")[0];
                if (s) {
                  var a = R.parseRtpMap(s),
                    c = R.matchPrefix(e, "a=fmtp:" + o + " ");
                  a.parameters = c.length ? R.parseFmtp(c[0]) : {}, a.rtcpFeedback = R.matchPrefix(e, "a=rtcp-fb:" + o + " ").map(R.parseRtcpFb), t.codecs.push(a)
                }
              }
              return t
            }, R.writeRtpDescription = function(e, t) {
              var n = "";
              return n += "m=" + e + " ", n += t.codecs.length > 0 ? "9" : "0", n += " UDP/TLS/RTP/SAVPF ", n += t.codecs.map(function(e) {
                return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
              }).join(" ") + "\r\n", n += "c=IN IP4 0.0.0.0\r\n", n += "a=rtcp:9 IN IP4 0.0.0.0\r\n", t.codecs.forEach(function(e) {
                n += R.writeRtpMap(e), n += R.writeFtmp(e), n += R.writeRtcpFb(e)
              }), n += "a=rtcp-mux\r\n"
            }, R.writeSessionBoilerplate = function() {
              return "v=0\r\no=thisisadapterortc 8169639915646943137 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
            }, R.writeMediaSection = function(e, t, n, i) {
              var r = R.writeRtpDescription(e.kind, t);
              if (r += R.writeIceParameters(e.iceGatherer.getLocalParameters()), r += R.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : "active"), r += "a=mid:" + e.mid + "\r\n", r += e.rtpSender && e.rtpReceiver ? "a=sendrecv\r\n" : e.rtpSender ? "a=sendonly\r\n" : e.rtpReceiver ? "a=recvonly\r\n" : "a=inactive\r\n", e.rtpSender) {
                var o = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                r += "a=" + o, r += "a=ssrc:" + e.sendSsrc + " " + o
              }
              return r += "a=ssrc:" + e.sendSsrc + " cname:" + E + "\r\n"
            }, R.getDirection = function(e, t) {
              for (var n = R.splitLines(e), i = 0; i < n.length; i++) switch (n[i]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                  return n[i].substr(2)
              }
              return t ? R.getDirection(t) : "sendrecv"
            }, window.RTCIceCandidate || (window.RTCIceCandidate = function(e) {
              return e
            }), window.RTCSessionDescription || (window.RTCSessionDescription = function(e) {
              return e
            }), window.RTCPeerConnection = function(e) {
              var t = this;
              if (this.onicecandidate = null, this.onaddstream = null, this.onremovestream = null, this.onsignalingstatechange = null, this.oniceconnectionstatechange = null, this.onnegotiationneeded = null, this.ondatachannel = null, this.localStreams = [], this.remoteStreams = [], this.getLocalStreams = function() {
                  return t.localStreams
                }, this.getRemoteStreams = function() {
                  return t.remoteStreams
                }, this.localDescription = new RTCSessionDescription({
                  type: "",
                  sdp: ""
                }), this.remoteDescription = new RTCSessionDescription({
                  type: "",
                  sdp: ""
                }), this.signalingState = "stable", this.iceConnectionState = "new", this.iceOptions = {
                  gatherPolicy: "all",
                  iceServers: []
                }, e && e.iceTransportPolicy) switch (e.iceTransportPolicy) {
                case "all":
                case "relay":
                  this.iceOptions.gatherPolicy = e.iceTransportPolicy;
                  break;
                case "none":
                  throw new TypeError('iceTransportPolicy "none" not supported')
              }
              e && e.iceServers && e.iceServers.forEach(function(e) {
                if (e.urls) {
                  var n;
                  n = "string" == typeof e.urls ? e.urls : e.urls[0], n.indexOf("transport=udp") !== -1 && t.iceServers.push({
                    username: e.username,
                    credential: e.credential,
                    urls: n
                  })
                }
              }), this.transceivers = [], this._localIceCandidatesBuffer = []
            }, window.RTCPeerConnection.prototype._emitBufferedCandidates = function() {
              var e = this;
              this._localIceCandidatesBuffer.forEach(function(t) {
                null !== e.onicecandidate && e.onicecandidate(t)
              }), this._localIceCandidatesBuffer = []
            }, window.RTCPeerConnection.prototype.addStream = function(e) {
              this.localStreams.push(e.clone()), this._maybeFireNegotiationNeeded()
            }, window.RTCPeerConnection.prototype.removeStream = function(e) {
              var t = this.localStreams.indexOf(e);
              t > -1 && (this.localStreams.splice(t, 1), this._maybeFireNegotiationNeeded())
            }, window.RTCPeerConnection.prototype._getCommonCapabilities = function(e, t) {
              var n = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: []
              };
              return e.codecs.forEach(function(e) {
                for (var i = 0; i < t.codecs.length; i++) {
                  var r = t.codecs[i];
                  if (e.name.toLowerCase() === r.name.toLowerCase() && e.clockRate === r.clockRate && e.numChannels === r.numChannels) {
                    n.codecs.push(r);
                    break
                  }
                }
              }), e.headerExtensions.forEach(function(e) {
                for (var i = 0; i < t.headerExtensions.length; i++) {
                  var r = t.headerExtensions[i];
                  if (e.uri === r.uri) {
                    n.headerExtensions.push(r);
                    break
                  }
                }
              }), n
            }, window.RTCPeerConnection.prototype._createIceAndDtlsTransports = function(e, t) {
              var n = this,
                i = new RTCIceGatherer(n.iceOptions),
                r = new RTCIceTransport(i);
              i.onlocalcandidate = function(o) {
                var s = {};
                s.candidate = {
                  sdpMid: e,
                  sdpMLineIndex: t
                };
                var a = o.candidate;
                a && 0 !== Object.keys(a).length ? (a.component = "RTCP" === r.component ? 2 : 1, s.candidate.candidate = R.writeCandidate(a)) : (void 0 === i.state && (i.state = "completed"), s.candidate.candidate = "candidate:1 1 udp 1 0.0.0.0 9 typ endOfCandidates");
                var c = n.transceivers.every(function(e) {
                  return e.iceGatherer && "completed" === e.iceGatherer.state
                });
                null !== n.onicecandidate && (n.localDescription && "" === n.localDescription.type ? (n._localIceCandidatesBuffer.push(s), c && n._localIceCandidatesBuffer.push({})) : (n.onicecandidate(s), c && n.onicecandidate({})))
              }, r.onicestatechange = function() {
                n._updateConnectionState()
              };
              var o = new RTCDtlsTransport(r);
              return o.ondtlsstatechange = function() {
                n._updateConnectionState()
              }, o.onerror = function() {
                o.state = "failed", n._updateConnectionState()
              }, {
                iceGatherer: i,
                iceTransport: r,
                dtlsTransport: o
              }
            }, window.RTCPeerConnection.prototype._transceive = function(e, t, n) {
              var i = this._getCommonCapabilities(e.localCapabilities, e.remoteCapabilities);
              t && e.rtpSender && (i.encodings = [{
                ssrc: e.sendSsrc
              }], i.rtcp = {
                cname: E,
                ssrc: e.recvSsrc
              }, e.rtpSender.send(i)), n && e.rtpReceiver && (i.encodings = [{
                ssrc: e.recvSsrc
              }], i.rtcp = {
                cname: e.cname,
                ssrc: e.sendSsrc
              }, e.rtpReceiver.receive(i))
            }, window.RTCPeerConnection.prototype.setLocalDescription = function(e) {
              var t = this;
              if ("offer" === e.type) this._pendingOffer && (this.transceivers = this._pendingOffer, delete this._pendingOffer);
              else if ("answer" === e.type) {
                var n = R.splitSections(t.remoteDescription.sdp),
                  i = n.shift();
                n.forEach(function(e, n) {
                  var r = t.transceivers[n],
                    o = r.iceGatherer,
                    s = r.iceTransport,
                    a = r.dtlsTransport,
                    c = r.localCapabilities,
                    d = r.remoteCapabilities,
                    u = "0" === e.split("\n", 1)[0].split(" ", 2)[1];
                  if (!u) {
                    var l = R.getIceParameters(e, i);
                    s.start(o, l, "controlled");
                    var f = R.getDtlsParameters(e, i);
                    a.start(f);
                    var h = t._getCommonCapabilities(c, d);
                    t._transceive(r, h.codecs.length > 0, !1)
                  }
                })
              }
              switch (this.localDescription = e, e.type) {
                case "offer":
                  this._updateSignalingState("have-local-offer");
                  break;
                case "answer":
                  this._updateSignalingState("stable");
                  break;
                default:
                  throw new TypeError('unsupported type "' + e.type + '"')
              }
              var r = arguments.length > 1 && "function" == typeof arguments[1];
              if (r) {
                var o = arguments[1];
                window.setTimeout(function() {
                  o(), t._emitBufferedCandidates()
                }, 0)
              }
              var s = Promise.resolve();
              return s.then(function() {
                r || window.setTimeout(t._emitBufferedCandidates.bind(t), 0)
              }), s
            }, window.RTCPeerConnection.prototype.setRemoteDescription = function(e) {
              var t = this,
                n = new MediaStream,
                i = R.splitSections(e.sdp),
                r = i.shift();
              switch (i.forEach(function(i, o) {
                var s, a, c, d, u, l, f, h, p, g, m, v = R.splitLines(i),
                  w = v[0].substr(2).split(" "),
                  b = w[0],
                  y = "0" === w[1],
                  _ = R.getDirection(i, r),
                  S = R.parseRtpParameters(i);
                y || (g = R.getIceParameters(i, r), m = R.getDtlsParameters(i, r));
                var I, C = R.matchPrefix(i, "a=mid:")[0].substr(6),
                  T = R.matchPrefix(i, "a=ssrc:").map(function(e) {
                    return R.parseSsrcMedia(e)
                  }).filter(function(e) {
                    return "cname" === e.attribute
                  })[0];
                if (T && (h = parseInt(T.ssrc, 10), I = T.value), "offer" === e.type) {
                  var E = t._createIceAndDtlsTransports(C, o);
                  if (p = RTCRtpReceiver.getCapabilities(b), f = 1001 * (2 * o + 2), l = new RTCRtpReceiver(E.dtlsTransport, b), n.addTrack(l.track), t.localStreams.length > 0 && t.localStreams[0].getTracks().length >= o) {
                    var A = t.localStreams[0].getTracks()[o];
                    u = new RTCRtpSender(A, E.dtlsTransport)
                  }
                  t.transceivers[o] = {
                    iceGatherer: E.iceGatherer,
                    iceTransport: E.iceTransport,
                    dtlsTransport: E.dtlsTransport,
                    localCapabilities: p,
                    remoteCapabilities: S,
                    rtpSender: u,
                    rtpReceiver: l,
                    kind: b,
                    mid: C,
                    cname: I,
                    sendSsrc: f,
                    recvSsrc: h
                  }, t._transceive(t.transceivers[o], !1, "sendrecv" === _ || "sendonly" === _)
                } else "answer" !== e.type || y || (s = t.transceivers[o], a = s.iceGatherer, c = s.iceTransport, d = s.dtlsTransport, u = s.rtpSender, l = s.rtpReceiver, f = s.sendSsrc, p = s.localCapabilities, t.transceivers[o].recvSsrc = h, t.transceivers[o].remoteCapabilities = S, t.transceivers[o].cname = I, c.start(a, g, "controlling"), d.start(m), t._transceive(s, "sendrecv" === _ || "recvonly" === _, "sendrecv" === _ || "sendonly" === _), !l || "sendrecv" !== _ && "sendonly" !== _ ? delete s.rtpReceiver : n.addTrack(l.track))
              }), this.remoteDescription = e, e.type) {
                case "offer":
                  this._updateSignalingState("have-remote-offer");
                  break;
                case "answer":
                  this._updateSignalingState("stable");
                  break;
                default:
                  throw new TypeError('unsupported type "' + e.type + '"')
              }
              return window.setTimeout(function() {
                null !== t.onaddstream && n.getTracks().length && (t.remoteStreams.push(n), window.setTimeout(function() {
                  t.onaddstream({
                    stream: n
                  })
                }, 0))
              }, 0), arguments.length > 1 && "function" == typeof arguments[1] && window.setTimeout(arguments[1], 0), Promise.resolve()
            }, window.RTCPeerConnection.prototype.close = function() {
              this.transceivers.forEach(function(e) {
                e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
              }), this._updateSignalingState("closed")
            }, window.RTCPeerConnection.prototype._updateSignalingState = function(e) {
              this.signalingState = e, null !== this.onsignalingstatechange && this.onsignalingstatechange()
            }, window.RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
              null !== this.onnegotiationneeded && this.onnegotiationneeded()
            }, window.RTCPeerConnection.prototype._updateConnectionState = function() {
              var e, t = this,
                n = {
                  new: 0,
                  closed: 0,
                  connecting: 0,
                  checking: 0,
                  connected: 0,
                  completed: 0,
                  failed: 0
                };
              this.transceivers.forEach(function(e) {
                n[e.iceTransport.state]++, n[e.dtlsTransport.state]++
              }), n.connected += n.completed, e = "new", n.failed > 0 ? e = "failed" : n.connecting > 0 || n.checking > 0 ? e = "connecting" : n.disconnected > 0 ? e = "disconnected" : n.new > 0 ? e = "new" : (n.connecting > 0 || n.completed > 0) && (e = "connected"), e !== t.iceConnectionState && (t.iceConnectionState = e, null !== this.oniceconnectionstatechange && this.oniceconnectionstatechange())
            }, window.RTCPeerConnection.prototype.createOffer = function() {
              var e = this;
              if (this._pendingOffer) throw new Error("createOffer called while there is a pending offer.");
              var t;
              1 === arguments.length && "function" != typeof arguments[0] ? t = arguments[0] : 3 === arguments.length && (t = arguments[2]);
              var n = [],
                i = 0,
                r = 0;
              if (this.localStreams.length && (i = this.localStreams[0].getAudioTracks().length, r = this.localStreams[0].getVideoTracks().length), t) {
                if (t.mandatory || t.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                void 0 !== t.offerToReceiveAudio && (i = t.offerToReceiveAudio), void 0 !== t.offerToReceiveVideo && (r = t.offerToReceiveVideo)
              }
              for (this.localStreams.length && this.localStreams[0].getTracks().forEach(function(e) {
                  n.push({
                    kind: e.kind,
                    track: e,
                    wantReceive: "audio" === e.kind ? i > 0 : r > 0
                  }), "audio" === e.kind ? i-- : "video" === e.kind && r--
                }); i > 0 || r > 0;) i > 0 && (n.push({
                kind: "audio",
                wantReceive: !0
              }), i--), r > 0 && (n.push({
                kind: "video",
                wantReceive: !0
              }), r--);
              var o = R.writeSessionBoilerplate(),
                s = [];
              n.forEach(function(t, n) {
                var i, r, a = t.track,
                  c = t.kind,
                  d = T(),
                  u = e._createIceAndDtlsTransports(d, n),
                  l = RTCRtpSender.getCapabilities(c),
                  f = 1001 * (2 * n + 1);
                a && (i = new RTCRtpSender(a, u.dtlsTransport)), t.wantReceive && (r = new RTCRtpReceiver(u.dtlsTransport, c)), s[n] = {
                  iceGatherer: u.iceGatherer,
                  iceTransport: u.iceTransport,
                  dtlsTransport: u.dtlsTransport,
                  localCapabilities: l,
                  remoteCapabilities: null,
                  rtpSender: i,
                  rtpReceiver: r,
                  kind: c,
                  mid: d,
                  sendSsrc: f,
                  recvSsrc: null
                };
                var h = s[n];
                o += R.writeMediaSection(h, h.localCapabilities, "offer", e.localStreams[0])
              }), this._pendingOffer = s;
              var a = new RTCSessionDescription({
                type: "offer",
                sdp: o
              });
              return arguments.length && "function" == typeof arguments[0] && window.setTimeout(arguments[0], 0, a), Promise.resolve(a)
            }, window.RTCPeerConnection.prototype.createAnswer = function() {
              var e, t = this;
              1 === arguments.length && "function" != typeof arguments[0] ? e = arguments[0] : 3 === arguments.length && (e = arguments[2]);
              var n = R.writeSessionBoilerplate();
              this.transceivers.forEach(function(e) {
                var i = t._getCommonCapabilities(e.localCapabilities, e.remoteCapabilities);
                n += R.writeMediaSection(e, i, "answer", t.localStreams[0])
              });
              var i = new RTCSessionDescription({
                type: "answer",
                sdp: n
              });
              return arguments.length && "function" == typeof arguments[0] && window.setTimeout(arguments[0], 0, i), Promise.resolve(i)
            }, window.RTCPeerConnection.prototype.addIceCandidate = function(e) {
              var t = e.sdpMLineIndex;
              if (e.sdpMid)
                for (var n = 0; n < this.transceivers.length; n++)
                  if (this.transceivers[n].mid === e.sdpMid) {
                    t = n;
                    break
                  }
              var i = this.transceivers[t];
              if (i) {
                var r = Object.keys(e.candidate).length > 0 ? R.parseCandidate(e.candidate) : {};
                if ("tcp" === r.protocol && 0 === r.port) return;
                if ("1" !== r.component) return;
                "endOfCandidates" === r.type && (r = {}), i.iceTransport.addRemoteCandidate(r)
              }
              return arguments.length > 1 && "function" == typeof arguments[1] && window.setTimeout(arguments[1], 0), Promise.resolve()
            }, window.RTCPeerConnection.prototype.getStats = function() {
              var e = [];
              this.transceivers.forEach(function(t) {
                ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function(n) {
                  t[n] && e.push(t[n].getStats())
                })
              });
              var t = arguments.length > 1 && "function" == typeof arguments[1] && arguments[1];
              return new Promise(function(n) {
                var i = {};
                Promise.all(e).then(function(e) {
                  e.forEach(function(e) {
                    Object.keys(e).forEach(function(t) {
                      i[t] = e[t]
                    })
                  }), t && window.setTimeout(t, 0, i), n(i)
                })
              })
            }
          }
        } else _.log("Browser does not appear to be WebRTC-capable");
        else _.log("This does not appear to be a browser"), w = "not a browser";
        var A = {};
        try {
          Object.defineProperty(A, "version", {
            set: function(e) {
              b = e
            }
          })
        } catch (e) {}
        p.parseWebrtcDetectedBrowser(), navigator.mozGetUserMedia ? (MediaStreamTrack.getSources = function(e) {
          setTimeout(function() {
            var t = [{
              kind: "audio",
              id: "default",
              label: "",
              facing: ""
            }, {
              kind: "video",
              id: "default",
              label: "",
              facing: ""
            }];
            e(t)
          }, 0)
        }, createIceServer = function(e, t, n) {
          var i = null,
            r = e.split(":");
          if (0 === r[0].indexOf("stun")) i = {
            urls: [e]
          };
          else if (0 === r[0].indexOf("turn"))
            if (b < 27) {
              var o = e.split("?");
              1 !== o.length && 0 !== o[1].indexOf("transport=udp") || (i = {
                urls: [o[0]],
                credential: n,
                username: t
              })
            } else i = {
              urls: [e],
              credential: n,
              username: t
            };
          return i
        }, createIceServers = function(e, t, n) {
          var r = [];
          for (i = 0; i < e.length; i++) {
            var o = createIceServer(e[i], t, n);
            null !== o && r.push(o)
          }
          return r
        }) : navigator.webkitGetUserMedia && (createIceServer = function(e, t, n) {
          var i = null,
            r = e.split(":");
          return 0 === r[0].indexOf("stun") ? i = {
            url: e
          } : 0 === r[0].indexOf("turn") && (i = {
            url: e,
            credential: n,
            username: t
          }), i
        }, createIceServers = function(e, t, n) {
          var r = [];
          if (b >= 34) r = {
            urls: e,
            credential: n,
            username: t
          };
          else
            for (i = 0; i < e.length; i++) {
              var o = createIceServer(e[i], t, n);
              null !== o && r.push(o)
            }
          return r
        }), navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) && (g = window.getUserMedia = navigator.getUserMedia.bind(navigator), m = function(e, t) {
          return e.srcObject = t, e
        }, v = function(e, t) {
          return e.srcObject = t.srcObject, e
        }), attachMediaStream_base = m, "opera" === w && (attachMediaStream_base = function(e, t) {
          b > 38 ? e.srcObject = t : "undefined" != typeof e.src && (e.src = URL.createObjectURL(t))
        }), m = function(e, t) {
          return "chrome" !== w && "opera" !== w || t ? attachMediaStream_base(e, t) : e.src = "", e
        }, reattachMediaStream_base = v, v = function(e, t) {
          return reattachMediaStream_base(e, t), e
        }, window.attachMediaStream = m, window.reattachMediaStream = v, window.getUserMedia = g, p.attachMediaStream = m, p.reattachMediaStream = v, p.getUserMedia = g, "undefined" == typeof Promise && (h = null), p.maybeThroughWebRTCReady()
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../adapter.min.js", "/..")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  2: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-IncomingInvite.js"),
        f = e("./Wilddog-OutgoingInvite.js"),
        h = e("./Wilddog-Conference.js"),
        p = e("events"),
        g = (e("https"), e("./Wilddog-Errors.js")),
        m = e("./Wilddog-Utils-Valid.js"),
        v = e("./Wilddog-Gateway-Transport.js"),
        w = function(e) {
          this.__wdService = e, this.conversations = {}, this.conferences = {}, this.__auth = e.getAuth(), this.uid = this.__auth.currentUser.uid, this.__appId = e.getAppId(), this.__mode = null, this.__config = {}, this.__emitter = new p.EventEmitter, this.__init()
        };
      t.exports = w, w.prototype.__init = function() {
        var e = this,
          t = this.__auth.currentUser,
          n = new XMLHttpRequest,
          i = "https://mediaapi.wilddog.com/rest/video/v1/clientConfig.json?appId=" + this.__appId + "&auth=" + t.getToken();
        n.onreadystatechange = function() {
          if (4 === n.readyState) {
            var t = n.responseText;
            if (200 == n.status)
              if (JSON.parse(t).code && JSON.parse(t).message)
                if ("expired_token" == JSON.parse(t).code) {
                  var i = g.getError("VIDEO_INVALID_AUTH_ARGUMENT", JSON.parse(t).message);
                  e.__initError = i, e.__emitter.emit("error", i)
                } else {
                  var i = g.getError("VIDEO_CLIENT_REGISTRATION_FAILED", JSON.parse(t).message);
                  e.__initError = i, e.__emitter.emit("error", i)
                } else "on" == JSON.parse(t).conversation ? e.__conversationSwitch = "on" : "off" == JSON.parse(t).conversation && (e.__conversationSwitch = "off"), "on" == JSON.parse(t).conference ? e.__conferenceSwitch = "on" : "off" == JSON.parse(t).conference && (e.__conferenceSwitch = "off"), JSON.parse(t).addons && "on" == JSON.parse(t).addons.meetingcast ? e.__meetingCastSwitch = "on" : JSON.parse(t).addons && "off" == JSON.parse(t).addons.meetingcast && (e.__meetingCastSwitch = "off"), JSON.parse(t).iceServers && (e.__config.iceServers = JSON.parse(t).iceServers), JSON.parse(t).mediagw && (e.__medidagw = JSON.parse(t).mediagw), e.__transport = new v(e.__medidagw, e.__wdService), e.__transport.emitter.once(0, function() {
              e.__state = "inited", e.__emitter.emit("initSuccess")
            })
          }
        }, n.open("GET", i, !0), n.onerror = function(t) {
          var t = g.getError("VIDEO_CLIENT_REGISTRATION_FAILED", t.message);
          e.__initError = t, e.__emitter.emit("error", t)
        }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.send()
      }, w.prototype.inviteToConversation = function(e, t, n) {
        var i = this;
        if (m.validateArgCount("Client.inviteToConversation", 2, 2, arguments.length), m.validateObject("Client.inviteToConversation", 2, t), !t || !t.stream) throw g.getError("VIDEO_INVALID_ARGUMENT");
        var r, o = this.__wdService.ref.push().key();
        return "inited" != this.__state ? (r = new f(e, t, o, this.__wdService), this.__emitter.on("initSuccess", function() {
          r.__init(i.__config)
        }), r.then(function(e) {
          i.conversations[o] = e
        })) : (r = new f(e, t, o, this.__wdService), r.__init(this.__config), r.then(function(e) {
          i.conversations[o] = e
        })), r
      }, w.prototype.connectToConference = function(e, t) {
        var n = this;
        if (m.validateArgCount("Client.inviteToConversation", 2, 2, arguments.length), m.validateObject("Client.inviteToConversation", 2, t), "p2p" == this.__mode) throw g.getError("VIDEO_INVALID_CONVERSATION_MODE");
        if (!t || !t.stream) throw g.getError("VIDEO_INVALID_ARGUMENT");
        var i;
        return "inited" != this.__state ? (i = new h(this.uid, t, e), this.__emitter.on("initSuccess", function() {
          i.__init(n.__config, n.__transport)
        })) : (i = new h(this.uid, t, e), i.__init(this.__config, this.__transport)), i
      }, w.prototype.on = function(e, t) {
        var n = this;
        m.validateArgCount("Client.on", 2, 2, arguments.length), m.validateCallback("Client.of", 2, t);
        var i = function() {
          switch (e) {
            case "error":
              n.__emitter.on("error", t);
              break;
            case "invite":
              n.__wdService.onInvite(function(e, i, r, o) {
                var s = new l(e, r, i, o, n.__config, n.__wdService);
                s.on("accepted", function() {
                  n.conversations[r] = s.conversation
                }), t(s)
              })
          }
        };
        "inited" != this.__state ? this.__emitter.on("initSuccess", function() {
          i()
        }) : i()
      }, w.prototype.off = function(e, t) {
        var n = this;
        m.validateArgCount("Client.off", 1, 2, arguments.length);
        var i = function() {
          switch (e) {
            case "error":
              t ? n.__emitter.removeListener("error", t) : n.__emitter.removeAllListeners("error");
              break;
            case "invite":
              n.__wdService.offInvite()
          }
        };
        "inited" != this.__state ? this.__emitter.on("initSuccess", function() {
          i()
        }) : i()
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Client.js", "/")
  }, {
    "./Wilddog-Conference.js": 3,
    "./Wilddog-Errors.js": 5,
    "./Wilddog-Gateway-Transport.js": 6,
    "./Wilddog-IncomingInvite.js": 7,
    "./Wilddog-OutgoingInvite.js": 10,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23,
    https: 28
  }],
  3: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-Participant.js"),
        f = e("./Wilddog-LocalParticipant.js"),
        h = e("events"),
        p = e("./Wilddog-Errors.js"),
        g = e("./Wilddog-Utils-Valid.js"),
        m = function(e, t, n) {
          var i = this;
          this.__inited = !1, this.__emitter = new h.EventEmitter;
          var r = new f(e, t, n, "P2S");
          r.on("connected", function() {
            i.status = "connected", i.__emitter.emit("connected")
          }), r.on("connect_failed", function() {
            i.status = "connect_failed", i.__emitter.emit("connect_failed")
          }), r.on("disconnected", function() {
            i.status = "disconnected", i.__emitter.emit("disconnected")
          }), this.localParticipant = r, this.conferenceId = n, this.status = "connecting", this.participants = {}, this.meetingCast = {
            isStarted: "off",
            anchor: null,
            play: {
              rtmp: null,
              hls: null
            }
          }, this.meetingCast.start = function(e) {
            var t = this;
            g.validateArgCount("meetingCast.start", 1, 1, arguments.length);
            var n = new Promise(function(n, i) {
              return t.participants[e] || !t.localParticipant.Id != e ? "connected" != t.status ? void i(p.getError("VIDEO_MEETINGCAST_START_FAILED", "conference is not connected!")) : void t.__transport.castStart(t.conferenceId, e, function(e) {
                t.__transport.emitter.once(e, function(e) {
                  200 == e.content.state ? n() : i(p.getError("VIDEO_MEETINGCAST_START_FAILED", e.content.reason))
                })
              }) : void i(p.getError("VIDEO_MEETINGCAST_START_FAILED", "participant is not exist!"))
            });
            return n
          }.bind(this), this.meetingCast.switchParticipant = function(e) {
            var t = this;
            g.validateArgCount("meetingCast.switchParticipant", 1, 1, arguments.length);
            var n = new Promise(function(n, i) {
              return t.participants[e] || !t.localParticipant.Id != e ? "connected" != t.status ? void i(p.getError("VIDEO_MEETINGCAST_SWITCH_FAILEDT_FAILED", "conference is not connected!")) : void t.__transport.castSwitch(t.conferenceId, e, function(e) {
                t.__transport.emitter.once(e, function(e) {
                  200 == e.content.state ? n() : i(p.getError("VIDEO_MEETINGCAST_SWITCH_FAILED"), e.content.reason)
                })
              }) : void i(p.getError("VIDEO_MEETINGCAST_SWITCH_FAILEDT_FAILED", "participant is not exist!"))
            });
            return n
          }.bind(this), this.meetingCast.stop = function() {
            var e = this;
            g.validateArgCount("meetingCast.stop", 0, 0, arguments.length);
            var t = new Promise(function(t, n) {
              return e.meetingCast.isStarted ? "connected" != e.status ? void n(p.getError("VIDEO_MEETINGCAST_SWITCH_FAILEDT_FAILED", "conference is not connected!")) : void e.__transport.castStop(e.conferenceId, function(i) {
                e.__transport.emitter.once(i, function(e) {
                  200 == e.content.state ? t() : n(p.getError("VIDEO_MEETINGCAST_START_FAILED"), e.content.reason)
                })
              }) : void n(p.getError("VIDEO_MEETINGCAST_STOP_FAILED"))
            });
            return t
          }.bind(this)
        };
      t.exports = m, m.prototype.__init = function(e, t) {
        var n = this;
        this.__config = e, this.__transport = t, this.__inited = !0, this.localParticipant.__init(e, t), this.localParticipant.__connect();
        var i = function(e) {
            if (e.conferenceId == n.conferenceId) {
              var t = e.content.rParticipants;
              for (var i in t) {
                var r = new l(t[i].id, n.conferenceId, n.__config, "p2s", t[i].streamId, n.__transport);
                n.participants[r.Id] = r, n.__emitter.emit("participant_connected", r)
              }
            }
          },
          r = function(e) {
            if (e.conferenceId == n.conferenceId) {
              var t = e.content.rParticipants;
              for (var i in t) n.__emitter.emit("participant_disconnected", n.participants[t[i].id]), delete n.participants[t[i].id]
            }
          },
          o = function(e) {
            if (e.conferenceId == n.conferenceId) {
              var t = e.content.rParticipants;
              for (var i in t) n.participants[t[i].id] && n.participants[t[i].id].__receive()
            }
          },
          s = function(e) {
            e.conferenceId == n.conferenceId && (n.meetingCast.isStarted = e.content.meetingCast.state, n.meetingCast.anchor = e.content.meetingCast.anchor, n.meetingCast.play = e.content.meetingCast.play)
          };
        t.emitter.on("userJoined", i), t.emitter.on("userLeaved", r), t.emitter.on("streamAdded", o), t.emitter.on("mCastUpdated", s), this.__emitter.emit("inited")
      }, m.prototype.disconnect = function() {
        this.localParticipant.__disconnect();
        for (var e in this.participants) e.__disconnect();
        this.__transport.emitter.removeAllListeners("userJoined"), this.__transport.emitter.removeAllListeners("userLeaved"), this.__transport.emitter.removeAllListeners("streamAdded"), this.__transport.emitter.removeAllListeners("mCastUpdated"), this.__emitter.emit("disconnected")
      }, m.prototype.on = function(e, t) {
        switch (g.validateArgCount("Conference.on", 2, 2, arguments.length), g.validateCallback("Conference.on", 2, t), e) {
          case "connected":
            this.__emitter.on("connected", t);
            break;
          case "disconnected":
            this.__emitter.on("disconnected", t);
            break;
          case "connect_failed":
            this.__emitter.on("connect_failed", t);
            break;
          case "participant_connected":
            this.__emitter.on("participant_connected", t);
            break;
          case "participant_disconnected":
            this.__emitter.on("participant_disconnected", t)
        }
        for (var n in this.participants) this.__emitter.emit("participant_connected", participants[n])
      }, m.prototype.once = function(e, t) {
        switch (g.validateArgCount("Conference.once", 2, 2, arguments.length), g.validateCallback("Conference.once", 2, t), e) {
          case "connected":
            this.__emitter.once("connected", t);
            break;
          case "disconnected":
            this.__emitter.once("disconnected", t);
            break;
          case "connect_failed":
            this.__emitter.once("connect_failed", t);
            break;
          case "participant_connected":
            this.__emitter.once("participant_connected", t);
            break;
          case "participant_disconnected":
            this.__emitter.once("participant_disconnected", t)
        }
        for (var n in this.participants) this.__emitter.emit("participant_connected", participants[n])
      }, m.prototype.off = function(e, t) {
        if (g.validateArgCount("Conference.off", 1, 2, arguments.length), t) switch (e) {
          case "connected":
            this.__emitter.removeListener("connected", t);
            break;
          case "disconnected":
            this.__emitter.removeListener("disconnected", t);
            break;
          case "connect_failed":
            this.__emitter.removeListener("connect_failed", t);
            break;
          case "participant_connected":
            this.__emitter.removeListener("participant_connected", t);
            break;
          case "participant_disconnected":
            this.__emitter.removeListener("participant_disconnected", t)
        } else switch (e) {
          case "connected":
            this.__emitter.removeAllListeners("connected");
            break;
          case "disconnected":
            this.__emitter.removeAllListeners("disconnected");
            break;
          case "connect_failed":
            this.__emitter.removeAllListeners("connect_failed");
            break;
          case "participant_connected":
            this.__emitter.removeAllListeners("participant_connected");
            break;
          case "participant_disconnected":
            this.__emitter.removeAllListeners("participant_disconnected")
        }
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Conference.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "./Wilddog-LocalParticipant.js": 8,
    "./Wilddog-Participant.js": 11,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23
  }],
  4: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-Participant.js"),
        f = e("./Wilddog-LocalParticipant.js"),
        h = e("events"),
        p = (e("./Wilddog-Errors.js"), e("./Wilddog-Utils-Valid.js")),
        g = function(e, t, n, i) {
          var r = this;
          this.__wdService = i;
          var o = new f(this.__wdService.getAuth().currentUser.uid, {
            stream: e
          }, t, "P2P");
          this.localParticipant = o, this.localParticipant.__init(n, i), this.conversationId = t, this.status = "connecting", this.participant = null, this.emitter = new h.EventEmitter, this.__wdService.join(this.conversationId, function(e) {
            e ? r.emitter.emit("connect_failed", e) : r.emitter.emit("connected")
          }), this.__wdService.onUserAdded(this.conversationId, function(e) {
            var o = new l(e, t, n, "p2p", null, i);
            o.__receive(), r.participant = o, r.emitter.emit("participant_connected", o), r.localParticipant.__connect(e, r.conversationId)
          }), this.__wdService.onUserRemoved(this.conversationId, function(e) {
            r.participant.Id == e && (r.emitter.emit("participant_disconnected", r.participant), r.participant = null)
          })
        };
      t.exports = g, g.prototype.disconnect = function() {
        this.localParticipant.__disconnect(), this.participant.__disconnect(), this.__wdService.leave(this.conversationId), this.emitter.emit("disconnected", this.conversationId)
      }, g.prototype.on = function(e, t) {
        switch (p.validateArgCount("Conversation.on", 2, 2, arguments.length), p.validateCallback("Conversation.on", 2, t), e) {
          case "connected":
            this.emitter.on("connected", t);
            break;
          case "disconnected":
            this.emitter.on("disconnected", t);
            break;
          case "connect_failed":
            this.emitter.on("connect_failed", t);
            break;
          case "participant_connected":
            this.emitter.on("participant_connected", t);
            break;
          case "participant_disconnected":
            this.emitter.on("participant_disconnected", t)
        }
        this.participant && this.emitter.emit("participant_connected", this.participant)
      }, g.prototype.once = function(e, t) {
        switch (p.validateArgCount("Conversation.once", 2, 2, arguments.length), p.validateCallback("Conversation.once", 2, t), e) {
          case "connected":
            this.emitter.once("connected", t);
            break;
          case "disconnected":
            this.emitter.once("disconnected", t);
            break;
          case "connect_failed":
            this.emitter.once("connect_failed", t);
            break;
          case "participant_connected":
            this.emitter.once("participant_connected", t);
            break;
          case "participant_disconnected":
            this.emitter.once("participant_disconnected", t)
        }
        this.participant && this.emitter.emit("participant_connected", this.participant)
      }, g.prototype.off = function(e, t) {
        if (p.validateArgCount("Conversation.off", 1, 2, arguments.length), t) switch (e) {
          case "connected":
            this.emitter.removeListener("connected", t);
            break;
          case "disconnected":
            this.emitter.removeListener("disconnected", t);
            break;
          case "connect_failed":
            this.emitter.removeListener("connect_failed", t);
            break;
          case "participant_connected":
            this.emitter.removeListener("participant_connected", t);
            break;
          case "participant_disconnected":
            this.emitter.removeListener("participant_disconnected", t)
        } else switch (e) {
          case "connected":
            this.emitter.removeAllListeners("connected", t);
            break;
          case "disconnected":
            this.emitter.removeAllListeners("disconnected", t);
            break;
          case "connect_failed":
            this.emitter.removeAllListeners("connect_failed", t);
            break;
          case "participant_connected":
            this.emitter.removeAllListeners("participant_connected", t);
            break;
          case "participant_disconnected":
            this.emitter.removeAllListeners("participant_disconnected", t)
        }
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Conversation.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "./Wilddog-LocalParticipant.js": 8,
    "./Wilddog-Participant.js": 11,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23
  }],
  5: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      "use strict";
      var u = {
        VIDEO_INVALID_ARGUMENT: {
          code: 40001,
          msg: "Invalid argument."
        },
        VIDEO_DEVICE_NOT_AVAILABLE: {
          code: 40002,
          msg: "Device not available."
        },
        VIDEO_CLIENT_REGISTRATION_FAILED: {
          code: 40100,
          msg: "Client registation error."
        },
        VIDEO_INVALID_AUTH_ARGUMENT: {
          code: 40101,
          msg: "Invalid auth argument."
        },
        VIDEO_INVALID_SYNC_ARGUMENT: {
          code: 40102,
          msg: "Invalid sync argument."
        },
        VIDEO_INVALID_STREAM_STATE: {
          code: 40103,
          msg: "Invalid stream state."
        },
        VIDEO_INVALID_CONVERSATION_MODE: {
          code: 40104,
          msg: "Invalid conversation mode."
        },
        VIDEO_TOO_MANY_PARTICIPANTS: {
          code: 40200,
          msg: "Too many participants."
        },
        VIDEO_CONVERSATION_INVITATION_FAILED: {
          code: 40201,
          msg: "Conversation invitation failed."
        },
        VIDEO_CONVERSATION_INVITATION_REJECTED: {
          code: 40202,
          msg: "Conversation invitation rejected."
        },
        VIDEO_CONVERSATION_INVITATION_IGNORED: {
          code: 40203,
          msg: "Conversation invitation ignored."
        },
        VIDEO_PARTICIPANT_CONNECTION_FAILED: {
          code: 40204,
          msg: "Participant connection failed."
        },
        VIDEO_TOO_MANY_ACTIVE_CONVERSATIONS: {
          code: 40205,
          msg: "Too many active conversations."
        },
        VIDEO_MEETINGCAST_REGISTRATION_FAILED: {
          code: 40310,
          msg: "MeetingCast registation error."
        },
        VIDEO_MEETINGCAST_START_FAILED: {
          code: 40311,
          msg: "MeetingCast start failed."
        },
        VIDEO_MEETINGCAST_SWITCH_FAILED: {
          code: 40312,
          msg: "MeetingCast switch participant failed."
        },
        VIDEO_MEETINGCAST_STOP_FAILED: {
          code: 40313,
          msg: "MeetingCast stop meetingCast failed."
        },
        getError: function(e, t) {
          var n;
          return this[e] ? t ? (n = new Error(t), n.code = this[e].code) : (n = new Error(this[e].msg), n.code = this[e].code) : n = new Error("Unknown error."), n
        }
      };
      t.exports = u
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Errors.js", "/")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  6: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("events"),
        f = function(e, t) {
          var n = this;
          this.wdService = t, this.ws = new WebSocket("wss://mgw.wilddog.com/ws"), this.ws.onopen = function() {
            n.regist(), n.isOpened = !0;
            for (var e in n.buffer) n.ws.send(JSON.stringify(n.buffer[e])), delete n.buffer[e]
          }, this.ws.onmessage = function(e) {
            var t = JSON.parse(e.data);
            "resp" == t.type ? n.emitter.emit(t.sequenceId, t) : "info" == t.type && ("sdp" == t.command && t.content.lParticipant && "answer" == t.content.lParticipant.description.type ? n.emitter.emit("answer", t) : "userJoined" == t.command ? n.emitter.emit("userJoined", t) : "userLeaved" == t.command ? n.emitter.emit("userLeaved", t) : "streamAdded" == t.command ? n.emitter.emit("streamAdded", t) : "mCastUpdated" == t.command && n.emitter.emit("mCastUpdated", t))
          }, this.keepalive = setInterval(function() {
            n.ws.send(JSON.stringify({}))
          }, 3e4)
        };
      f.prototype = {
        constructor: f,
        emitter: new l.EventEmitter,
        ws: null,
        counter: 0,
        buffer: {},
        isOpened: !1,
        regist: function(e) {
          var t = {
            type: "req",
            command: "register",
            sequenceId: this.counter,
            conferenceId: null,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              accessToken: this.wdService.getAuth().currentUser.getToken(),
              userAgent: "xxxx",
              platform: "xxxx",
              version: 1
            }
          };
          this.counter += 1, e && e(t.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(t)) : this.buffer[t.sequenceId] = t
        },
        invite: function(e, t, n, i) {
          var r = {
            type: "req",
            command: "invite",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              accessToken: this.wdService.getAuth().currentUser.getToken(),
              lParticipant: {
                id: this.wdService.getAuth().currentUser.uid,
                tracks: [{
                  type: "audio",
                  value: !0
                }, {
                  type: "video",
                  value: !0
                }],
                description: t
              },
              userData: n
            }
          };
          this.counter += 1, i && i(r.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(r)) : this.buffer[r.sequenceId] = r
        },
        subStream: function(e, t, n, i) {
          var r = {
            type: "req",
            command: "subStream",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              rParticipants: [{
                id: t,
                streamId: n
              }]
            }
          };
          this.counter += 1, i && i(r.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(r)) : this.buffer[r.sequenceId] = r
        },
        sendLParticipantCandidate: function(e, t, n, i) {
          var r = {
            type: "info",
            command: "sdp",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              lParticipant: {
                id: this.wdService.getAuth().currentUser.uid,
                sessionId: n,
                description: t
              }
            }
          };
          this.counter += 1, i && i(r.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(r)) : this.buffer[r.sequenceId] = r
        },
        sendRParticipantsCandidate: function(e, t, n, i, r) {
          var o = {
            type: "info",
            command: "sdp",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              rParticipants: [{
                id: t,
                sessionId: i,
                description: n
              }]
            }
          };
          this.counter += 1, r && r(o.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(o)) : this.buffer[o.sequenceId] = o
        },
        sendAnswer: function(e, t, n, i, r) {
          var o = {
            type: "info",
            command: "sdp",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              rParticipants: [{
                id: t,
                sessionId: i,
                description: n
              }]
            }
          };
          this.counter += 1, r && r(o.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(o)) : this.buffer[o.sequenceId] = o
        },
        sendBye: function(e, t, n) {
          var i = {
            type: "req",
            command: "bye",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              lParticipant: {
                id: this.wdService.getAuth().currentUser.uid,
                sessionId: t
              }
            }
          };
          this.counter += 1, n && n(i.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(i)) : this.buffer[i.sequenceId] = i
        },
        castStart: function(e, t, n) {
          var i = {
            type: "req",
            command: "meetingCast",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              lParticipant: {
                id: this.wdService.getAuth().currentUser.uid
              },
              meetingCast: {
                cmd: "start",
                value: {
                  id: t
                }
              }
            }
          };
          this.counter += 1, n && n(i.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(i)) : this.buffer[i.sequenceId] = i
        },
        castSwitch: function(e, t, n) {
          var i = {
            type: "req",
            command: "meetingCast",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              lParticipant: {
                id: this.wdService.getAuth().currentUser.uid
              },
              meetingCast: {
                cmd: "switch",
                value: {
                  id: t
                }
              }
            }
          };
          this.counter += 1, n && n(i.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(i)) : this.buffer[i.sequenceId] = i
        },
        castStop: function(e, t) {
          var n = {
            type: "req",
            command: "meetingCast",
            sequenceId: this.counter,
            conferenceId: e,
            appId: this.wdService.appId,
            from: this.wdService.getAuth().currentUser.uid + "@" + this.wdService.appId + ".wilddogio.com",
            to: "orchestrator@" + this.wdService.appId + ".orchestrator.wilddogio.com",
            kind: "video",
            content: {
              lParticipant: {
                id: this.wdService.getAuth().currentUser.uid
              },
              meetingCast: {
                cmd: "stop"
              }
            }
          };
          this.counter += 1, t && t(n.sequenceId), this.isOpened ? this.ws.send(JSON.stringify(n)) : this.buffer[n.sequenceId] = n
        }
      }, t.exports = f
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Gateway-Transport.js", "/")
  }, {
    "1YiZ5S": 30,
    buffer: 20,
    events: 23
  }],
  7: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-Conversation.js"),
        f = e("events"),
        h = (e("./Wilddog-Errors.js"), e("./Wilddog-Utils-Valid.js")),
        p = function(e, t, n, i, r, o) {
          this.__wdService = o, this.status = "pending", this.from = n, this.conversationId = t, this.__conversation = null, this.__key = e, this.__config = r, this.__emitter = new f.EventEmitter, this.__onStatus()
        };
      t.exports = p, p.prototype.__onStatus = function() {
        var e = this;
        this.__wdService.onInviteStatus(this.__key, this.from, this.__wdService.auth.currentUser.uid, function(t) {
          t.val() ? e.status = t.val() : e.status = "canceled", e.__emitter.emit(e.status)
        })
      }, p.prototype.accept = function(e) {
        var t = this;
        h.validateArgCount("IncomingInvite.accept", 1, 1, arguments.length), h.validateStream("IncomingInvite.accept", 1, e);
        var n = new Promise(function(n, i) {
          if ("pending" == t.status && "canceled" != t.status) t.__emitter.on("accepted", function() {
            t.__conversation = new l(e, t.conversationId, t.__config, t.__wdService), n(t.__conversation)
          }), t.__wdService.acceptingInvitation(t.__key, t.from, function(e) {
            e && (t.__emitter.removeAllListeners("accepted"), i(e))
          });
          else {
            var r = new Error("this invitation has been dealt or canceled!");
            i(r)
          }
        });
        return n
      }, p.prototype.reject = function() {
        var e = this,
          t = new Promise(function(t, n) {
            "pending" == e.status && "canceled" != e.status ? e.__wdService.rejectInvitation(e.__key, e.from, function(e) {
              t()
            }) : n(new Error("this invitation has been dealt or canceled!"))
          });
        return t
      }, p.prototype.on = function(e, t) {
        switch (h.validateArgCount("IncomingInvite.on", 2, 2, arguments.length), h.validateCallback("IncomingInvite.on", 2, t), e) {
          case "accepted":
            this.__emitter.on("accepted", t);
            break;
          case "rejected":
            this.__emitter.on("rejected", t);
            break;
          case "canceled":
            this.__emitter.on("canceled", t);
            break;
          case "failed":
            this.__emitter.on("failed", t);
            break;
          case "pending":
            this.__emitter.on("pending", t);
            break;
          case "accepting":
            this.__emitter.on("accepting", t)
        }
        this.__emitter.emit(this.status)
      }, p.prototype.off = function(e, t) {
        if (h.validateArgCount("IncomingInvite.off", 1, 2, arguments.length), t) switch (e) {
          case "accepted":
            this.__emitter.removeListener("accepted", t);
            break;
          case "accepting":
            this.__emitter.removeListener("accepting", t);
            break;
          case "rejected":
            this.__emitter.removeListener("rejected", t);
            break;
          case "canceled":
            this.__emitter.removeListener("canceled", t);
            break;
          case "failed":
            this.__emitter.removeListener("failed", t);
            break;
          case "pending":
            this.__emitter.removeListener("pending", t)
        } else switch (e) {
          case "accepted":
            this.__emitter.removeAllListeners("accepted");
            break;
          case "accepting":
            this.__emitter.removeAllListeners("accepting");
            break;
          case "rejected":
            this.__emitter.removeAllListeners("rejected");
            break;
          case "canceled":
            this.__emitter.removeAllListeners("canceled");
            break;
          case "failed":
            this.__emitter.removeAllListeners("failed");
            break;
          case "pending":
            this.__emitter.removeAllListeners("pending")
        }
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-IncomingInvite.js", "/")
  }, {
    "./Wilddog-Conversation.js": 4,
    "./Wilddog-Errors.js": 5,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23
  }],
  8: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-RTC-P2P.js").Sender,
        f = e("./Wilddog-RTC-P2S.js").Sender,
        h = (e("./Wilddog-Errors.js"), e("./Wilddog-Utils-Valid.js"), e("wildemitter")),
        p = function(e, t, n, i) {
          var r = this;
          this.stream = t.stream, t.userData && (this.__userData = t.userData), this.Id = e, this.cId = n, this.once("inited", function() {
            "P2P" == i ? r.__peer = new l(r.config, r.transport) : "P2S" == i && (r.__peer = new f(e, r.config, r.transport), r.__peer.on("connected", function() {
              r.emit("connected")
            }), r.__peer.on("connectFailed", function() {
              r.emit("connect_failed")
            }), r.__peer.on("disconnect", function() {
              r.emit("disconnect")
            }))
          })
        };
      h.mixin(p), t.exports = p, p.prototype.__init = function(e, t) {
        this.config = e, this.transport = t, this.emit("inited")
      }, p.prototype.__disconnect = function() {
        this.__peer.disconnect()
      }, p.prototype.__connect = function(e) {
        this.__peer.connect(this.stream, e, this.cId, this.__userData)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-LocalParticipant.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "./Wilddog-RTC-P2P.js": 12,
    "./Wilddog-RTC-P2S.js": 13,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20,
    wildemitter: 47
  }],
  9: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-Stream.js"),
        f = function(e) {
          l.call(this, e)
        };
      f.prototype = new l, t.exports = f
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-LocalStream.js", "/")
  }, {
    "./Wilddog-Stream.js": 16,
    "1YiZ5S": 30,
    buffer: 20
  }],
  10: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-Conversation.js"),
        f = e("events"),
        h = (e("./Wilddog-Errors.js"), e("./Wilddog-Utils-Valid.js")),
        p = function(e, t, n, i) {
          var r = this;
          if (this.__wdService = i, this.status = "pending", this.to = e, this.conversationId = n, t.userData) var o = t.userData;
          else var o = null;
          this.__invite = new Promise(function(s, a) {
            i.sendInvitation(e, n, o, function(e) {
              e instanceof Error ? (r.status = "failed", a(e)) : (r.__key = e, r.__onStatus(), r.__emitter.once("accepted", function() {
                r.__config ? (r.conversation = new l(t.stream, n, r.__config, i), s(r.conversation)) : r.__emitter.once("inited", function() {
                  r.conversation = new l(t.stream, n, r.__config, i), s(r.conversation)
                })
              }), r.__timeOut = setTimeout(function() {
                "pending" == r.status && ("canceled" == r.status, i.cancelInvitation(r.__key, r.to))
              }, 3e4))
            })
          }), this.__emitter = new f.EventEmitter
        };
      t.exports = p, p.prototype.__init = function(e) {
        this.__config = e, this.__emitter.emit("inited")
      }, p.prototype.__onStatus = function() {
        var e = this;
        this.__wdService.onInviteStatus(this.__key, this.__wdService.getAuth().currentUser.uid, this.to, function(t) {
          "pending" != t.val() && clearTimeout(e.__timeOut), "canceled" == e.status ? e.__wdService.cancelInvitation(e.__key, e.to, function(e) {}) : "accepting" == t.val() ? e.__wdService.acceptedInvitation(e.__key, e.to, function(t) {
            t && (e.status = "failed")
          }) : t.val() && (e.status = t.val(), e.__emitter.emit(t.val()))
        })
      }, p.prototype.cancel = function() {
        var e = this,
          t = new Promise(function(t, n) {
            if ("pending" !== e.status) {
              var i = new Error("this invitation has been dealt!");
              n(i)
            } else if ("canceled" == e.status) {
              e.__emitter.emit("canceled");
              var i = new Error("this invitation has been canceled!");
              n(i)
            } else e.__wdService.cancelInvitation(e.__key, e.to).then(function(e) {
              e ? n(e) : t()
            })
          });
        return t
      }, p.prototype.on = function(e, t) {
        switch (h.validateArgCount("OutgoingInvite.on", 2, 2, arguments.length), h.validateCallback("OutgoingInvite.on", 2, t), e) {
          case "accepted":
            this.__emitter.on("accepted", t);
            break;
          case "rejected":
            this.__emitter.on("rejected", t);
            break;
          case "canceled":
            this.__emitter.on("canceled", t);
            break;
          case "failed":
            this.__emitter.on("failed", t);
            break;
          case "pending":
            this.__emitter.on("pending", t)
        }
        this.__emitter.emit(this.status)
      }, p.prototype.off = function(e, t) {
        if (h.validateArgCount("OutgoingInvite.off", 1, 2, arguments.length), t) switch (e) {
          case "accepted":
            this.__emitter.removeListener("accepted", t);
            break;
          case "rejected":
            this.__emitter.removeListener("rejected", t);
            break;
          case "canceled":
            this.__emitter.removeListener("canceled", t);
            break;
          case "failed":
            this.__emitter.removeListener("failed", t);
            break;
          case "pending":
            this.__emitter.removeListener("pending", t)
        } else switch (e) {
          case "accepted":
            this.__emitter.removeAllListeners("accepted", t);
            break;
          case "rejected":
            this.__emitter.removeAllListeners("rejected", t);
            break;
          case "canceled":
            this.__emitter.removeAllListeners("canceled", t);
            break;
          case "failed":
            this.__emitter.removeAllListeners("failed", t);
            break;
          case "pending":
            this.__emitter.removeAllListeners("pending", t)
        }
      }, p.prototype.catch = function() {
        return this.__invite.catch.apply(this.__invite, arguments)
      }, p.prototype.then = function() {
        return this.__invite.then.apply(this.__invite, arguments)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-OutgoingInvite.js", "/")
  }, {
    "./Wilddog-Conversation.js": 4,
    "./Wilddog-Errors.js": 5,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23
  }],
  11: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-RTC-P2P.js").Receiver,
        f = e("./Wilddog-RTC-P2S.js").Receiver,
        h = e("./Wilddog-Errors.js"),
        p = e("./Wilddog-Utils-Valid.js"),
        g = function(e, t, n, i, r, o) {
          this.__streamId = r, this.Id = e, this.stream = null, this.cId = t, "p2p" == i ? this.__peer = new l(n, o) : "p2s" == i && (this.__peer = new f(e, n, r, o))
        };
      t.exports = g, g.prototype.on = function(e, t) {
        var n = this;
        switch (p.validateArgCount("Participant.on", 2, 2, arguments.length), p.validateCallback("Participant.on", 2, t), e) {
          case "streamAdded":
            this.__peer.on("streamAdded", function(e) {
              n.stream = e, t(e)
            });
            break;
          case "streamRemoved":
            this.__peer.on("remoteDisconnect", function() {
              n.stream = null, t()
            });
            break;
          case "error":
            this.__peer.on("failed", function() {
              var e = h.getError("VIDEO_PARTICIPANT_CONNECTION_FAILED");
              t(e)
            })
        }
        this.stream && this.__peer.emit("streamAdded", this.stream)
      }, g.prototype.off = function(e, t) {
        switch (p.validateArgCount("Conversation.of", 1, 2, arguments.length), e) {
          case "streamAdded":
            this.__peer.off("streamAdded", t);
            break;
          case "streamRemoved":
            this.__peer.off("remoteDisconnect", t);
            break;
          case "error":
            this.__peer.off("failed", t)
        }
      }, g.prototype.__disconnect = function() {
        this.__peer.disconnect()
      }, g.prototype.__receive = function() {
        this.__peer.receive(this.Id, this.cId)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Participant.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "./Wilddog-RTC-P2P.js": 12,
    "./Wilddog-RTC-P2S.js": 13,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20
  }],
  12: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-RemoteStream.js"),
        f = e("wildemitter"),
        h = function(e, t) {
          this.wdService = t, this.config = e, this.uid = t.getAuth().currentUser.uid, this.sendRef = null, this.peer
        },
        p = function(e, t) {
          this.wdService = t, this.config = e, this.uid = t.getAuth().currentUser.uid, this.ref = t.getRef(), this.peer, this.sdpdealed = !1, this.candiBuffer = [], Window.videoLogs = {}, Window.videoLogs.videos = {}, Window.videoLogs.audios = {}
        };
      f.mixin(h), f.mixin(p), t.exports.Sender = h, t.exports.Receiver = p, h.prototype.connect = function(e, t, n, i) {
        var r = this;
        this.sendRef = this.wdService.getRef().child("conversations/" + n + "/messages/" + this.uid + ">>>" + t), this.receiveRef = this.wdService.getRef().child("conversations/" + n + "/messages/" + t + ">>>" + this.uid), this.sendRef.onDisconnect().remove(), this.receiveRef.on("child_added", function(e) {
          var t = e.val();
          if (t.sid == r.sid)
            if ("answer" == t.type) {
              var n = JSON.parse(t.sdp);
              r.answerCb(n)
            } else if ("candi" == t.type) {
            var i = JSON.parse(t.candi);
            r.candidateCb(i)
          } else "offer" == t.type
        }), this.sid = this.sendRef.push().key();
        var o = new RTCPeerConnection(this.config);
        this.peer = o, g(o, e.stream, null, function() {}.bind(this), function() {
          this.emit("failed")
        }.bind(this), function() {
          this.emit("disconnected"), this.peer.close()
        }.bind(this), function() {
          this.sendOffer()
        }.bind(this), function(e) {
          if (null != e.candidate) {
            var t = e.candidate.candidate,
              n = e.candidate.sdpMid,
              i = e.candidate.sdpMLineIndex,
              r = {
                candidate: t,
                sdpMid: n,
                sdpMLineIndex: i
              };
            this.sendCandi(r)
          }
        }.bind(this))
      }, h.prototype.disconnect = function() {
        this.peer.close()
      }, h.prototype.sendOffer = function() {
        var e = this;
        this.peer.createOffer(function(t) {
          e.peer.setLocalDescription(t, function() {
            var n = {
              sid: e.sid,
              type: "offer",
              sdp: JSON.stringify(t)
            };
            e.sendRef.push(n)
          }, function(e) {})
        }, function(e) {})
      }, h.prototype.sendCandi = function(e) {
        var t = {
          sid: this.sid,
          type: "candi",
          candi: JSON.stringify(e)
        };
        this.sendRef.push(t)
      }, h.prototype.answerCb = function(e) {
        if (null != e) {
          var t = new RTCSessionDescription(e);
          this.peer.setRemoteDescription(t, function() {}, function(e) {
            e && console.error(e)
          })
        }
      }, h.prototype.candidateCb = function(e) {
        if (null != e) {
          var t = new RTCIceCandidate(e);
          this.peer.addIceCandidate(t, function() {}, function(e) {
            e && console.error(e)
          })
        }
      }, p.prototype.receive = function(e, t) {
        var n = this;
        this.sendRef = this.wdService.getRef().child("conversations/" + t + "/messages/" + this.uid + ">>>" + e), this.receiveRef = this.wdService.getRef().child("conversations/" + t + "/messages/" + e + ">>>" + this.uid), this.sendRef.onDisconnect().remove(), this.receiveRef.on("child_added", function(e) {
          var t = e.val();
          if ("offer" == t.type) {
            n.sid = t.sid;
            var i = JSON.parse(t.sdp);
            for (n.offerCb(i), n.sdpdealed = !0; n.candiBuffer.length > 0;) n.candidateCb(n.candiBuffer.shift())
          } else if ("candi" == t.type) {
            if (t.sid == n.sid) {
              var r = JSON.parse(t.candi);
              n.sdpdealed ? n.candidateCb(r) : n.candiBuffer.push(r)
            }
          } else "answer" == t.type
        })
      }, p.prototype.disconnect = function() {
        this.peer.close()
      }, p.prototype.sendAnswer = function() {
        var e = this;
        this.peer.createAnswer(function(t) {
          e.peer.setLocalDescription(t, function() {
            var n = {
              sid: e.sid,
              type: "answer",
              sdp: JSON.stringify(t)
            };
            e.sendRef.push(n)
          }, function(e) {})
        }, function(e) {})
      }, p.prototype.sendCandi = function(e) {
        var t = {
          sid: this.sid,
          type: "candi",
          candi: JSON.stringify(e)
        };
        this.sendRef.push(t)
      }, p.prototype.offerCb = function(e) {
        var t = new RTCPeerConnection(this.config);
        this.peer = t, g(t, null, function(e) {
          var t = new l(e.stream);
          this.emit("streamAdded", t)
        }.bind(this), function() {}.bind(this), function() {
          this.emit("failed")
        }.bind(this), function() {
          this.emit("remoteDisconnect")
        }.bind(this), function() {}.bind(this), function(e) {
          if (null != e.candidate) {
            var t = e.candidate.candidate,
              n = e.candidate.sdpMid,
              i = e.candidate.sdpMLineIndex,
              r = {
                candidate: t,
                sdpMid: n,
                sdpMLineIndex: i
              };
            this.sendCandi(r)
          }
        }.bind(this));
        var n = new RTCSessionDescription(e);
        t.setRemoteDescription(n, function() {}.bind(this), function(e) {
          console.error(e)
        }), this.sendAnswer()
      }, p.prototype.candidateCb = function(e) {
        if (null != e) {
          var t = new RTCIceCandidate(e);
          this.peer.addIceCandidate(t, function() {}, function(e) {
            e && console.error(e)
          })
        }
      };
      var g = function(e, t, n, i, r, o, s, a) {
        var c = o,
          d = i;
        e.oniceconnectionstatechange = function(t) {
          null != e && ("failed" == e.iceConnectionState && r && (r(), r = null), "disconnected" == e.iceConnectionState && c && (c(), c = null), "connected" == e.iceConnectionState && d && (d(), d = null))
        }, e.onnegotiationneeded = function(e) {
          s(e)
        }, e.onicecandidate = a, t ? e.addStream(t) : n && (e.onaddstream = n)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-RTC-P2P.js", "/")
  }, {
    "./Wilddog-RemoteStream.js": 14,
    "1YiZ5S": 30,
    buffer: 20,
    wildemitter: 47
  }],
  13: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-RemoteStream.js"),
        f = (e("./Wilddog-Errors.js"), e("wildemitter")),
        h = function(e, t, n) {
          this.transport = n, this.config = t, this.uid = e, this.peer, this.__candiBuffer = [], this.__inviteId
        },
        p = function(e, t, n, i) {
          this.transport = i, this.__streamId = n, this.config = t, this.uid = e, this.peer, this.__subId, Window.videoLogs = {}, Window.videoLogs.videos = {}, Window.videoLogs.audios = {}
        };
      f.mixin(h), f.mixin(p), t.exports.Sender = h, t.exports.Receiver = p, h.prototype.connect = function(e, t, n, i) {
        this.cid = n;
        var r = new RTCPeerConnection(this.config);
        this.peer = r, g(r, e.stream, null, function() {}.bind(this), function() {
          this.emit("connectFailed")
        }.bind(this), function() {
          this.emit("disconnected"), this.peer.close()
        }.bind(this), function() {
          this.sendOffer(i)
        }.bind(this), function(e) {
          if (null != e.candidate) {
            var t = e.candidate.candidate,
              n = e.candidate.sdpMid,
              i = e.candidate.sdpMLineIndex,
              r = {
                candidate: t,
                sdpMid: n,
                sdpMLineIndex: i,
                type: "candidate"
              };
            this.sendCandi(r)
          }
        }.bind(this))
      }, h.prototype.disconnect = function() {
        this.peer.close(), this.transport.sendBye(this.cid, this.sessionId, function(e) {})
      }, h.prototype.sendOffer = function(e) {
        var t = this,
          n = function(e) {
            200 == e.content.state ? (t.__hasConnected = !0, t.emit("connected")) : t.emit("connectFailed", e.content.reason)
          },
          i = function e(n) {
            if (n.conferenceId == t.cid) {
              t.answerCb(n.content.lParticipant.description), t.__sessionId = n.content.lParticipant.sessionId;
              for (var i in t.__candiBuffer) t.transport.sendLParticipantCandidate(t.cid, t.__candiBuffer[i], t.__sessionId);
              t.transport.emitter.removeListener("answer", e)
            }
          };
        this.peer.createOffer(function(r) {
          t.peer.setLocalDescription(r, function() {
            t.transport.invite(t.cid, r, e, function(e) {
              t.__inviteId = e, t.transport.emitter.once(e, n), t.transport.emitter.on("answer", i)
            })
          }, function(e) {})
        }, function(e) {})
      }, h.prototype.sendCandi = function(e) {
        this.__sessionId ? (data.content.lParticipant.sessionId = this.__sessionId, this.transport.sendLParticipantCandidate(this.cid, e, this.__sessionId)) : this.__candiBuffer.push(e)
      }, h.prototype.answerCb = function(e) {
        if (null != e) {
          var t = new RTCSessionDescription(e);
          this.peer.setRemoteDescription(t, function() {}, function(e) {
            e && console.error(e)
          })
        }
      }, p.prototype.receive = function(e, t) {
        var n = this;
        this.cid = t, this.pId = e;
        var i = function(e) {
          200 == e.content.state ? (n.__hasConnected = !0, n.__sessionId = e.content.rParticipants[0].sessionId, n.emit("connected"), n.offerCb(e.content.rParticipants[0].description)) : n.emit("connectFailed", e.content.reason)
        };
        this.transport.subStream(this.cid, this.pId, this.__streamId, function(e) {
          n.__subId = e, n.transport.emitter.once(e, i)
        })
      }, p.prototype.disconnect = function() {
        this.peer.close()
      }, p.prototype.sendAnswer = function() {
        var e = this;
        this.peer.createAnswer(function(t) {
          e.peer.setLocalDescription(t, function() {
            e.transport.sendAnswer(e.cid, e.pId, t, e.__sessionId)
          }, function(e) {})
        }, function(e) {})
      }, p.prototype.sendCandi = function(e) {
        this.transport.sendRParticipantsCandidate(this.cid, this.pId, e, this.__sessionId)
      }, p.prototype.offerCb = function(e) {
        var t = new RTCPeerConnection(this.config);
        this.peer = t, g(t, null, function(e) {
          var t = new l(e.stream);
          this.emit("streamAdded", t)
        }.bind(this), function() {}.bind(this), function() {
          this.emit("failed")
        }.bind(this), function() {
          this.emit("remoteDisconnect")
        }.bind(this), function() {}.bind(this), function(e) {
          if (null != e.candidate) {
            var t = e.candidate.candidate,
              n = e.candidate.sdpMid,
              i = e.candidate.sdpMLineIndex,
              r = {
                candidate: t,
                sdpMid: n,
                sdpMLineIndex: i,
                type: "candidate"
              };
            this.sendCandi(r)
          }
        }.bind(this));
        var n = new RTCSessionDescription(e);
        t.setRemoteDescription(n, function() {}.bind(this), function(e) {
          console.error(e)
        }), this.sendAnswer()
      }, p.prototype.candidateCb = function(e) {
        if (null != e) {
          var t = new RTCIceCandidate(e);
          this.peer.addIceCandidate(t, function() {}, function(e) {
            e && console.error(e)
          })
        }
      };
      var g = function(e, t, n, i, r, o, s, a) {
        var c = o,
          d = i;
        e.oniceconnectionstatechange = function(t) {
          null != e && ("failed" == e.iceConnectionState && r && (r(), r = null), "disconnected" == e.iceConnectionState && c && (c(), c = null), "connected" == e.iceConnectionState && d && (d(), d = null))
        }, e.onnegotiationneeded = function(e) {
          s(e)
        }, e.onicecandidate = a, t ? e.addStream(t) : n && (e.onaddstream = n)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-RTC-P2S.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "./Wilddog-RemoteStream.js": 14,
    "1YiZ5S": 30,
    buffer: 20,
    wildemitter: 47
  }],
  14: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-Stream.js"),
        f = function(e) {
          l.call(this, e)
        };
      f.prototype = new l, t.exports = f
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-RemoteStream.js", "/")
  }, {
    "./Wilddog-Stream.js": 16,
    "1YiZ5S": 30,
    buffer: 20
  }],
  15: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      "use strict";
      var u = function(e) {
        this.ref = e.sync().ref("wilddogVideo"), this.appId = this.ref.toString().split("//")[1].split(".")[0], this.auth = e.auth()
      };
      u.prototype = {
        constructor: u,
        onInvites: {},
        setRef: function(e) {
          e ? this.ref = this.ref.child(e) : this.ref = this.ref.child("wilddogVideo")
        },
        getRef: function() {
          if (this.ref) return this.ref;
          throw new Error("ref is null!")
        },
        getAuth: function() {
          if (this.auth) return this.auth;
          throw new Error("auth is null!")
        },
        getAppId: function() {
          if (this.appId) return this.appId;
          throw new Error("appId is null!")
        },
        sendInvitation: function(e, t, n, i) {
          var r = {};
          r.uid = this.auth.currentUser.uid, r.cid = t, r.data = n, r.status = "pending";
          var o = this.ref.child("invitations/" + e + "/" + this.auth.currentUser.uid + ">>>" + e).push(r, function(e) {
            i(e ? e : o)
          }).key();
          this.ref.child("invitations/" + e + "/" + this.auth.currentUser.uid + ">>>" + e + "/" + o).onDisconnect().remove()
        },
        onInviteStatus: function(e, t, n, i) {
          this.ref.child("invitations/" + n + "/" + t + ">>>" + n + "/" + e + "/status").on("value", i)
        },
        offInviteStatus: function(e, t, n, i) {
          this.ref.child("invitations/" + n + "/" + t + ">>>" + n + "/" + e + "/status").off("value", i)
        },
        acceptedInvitation: function(e, t, n) {
          this.ref.child("invitations/" + t + "/" + this.auth.currentUser.uid + ">>>" + t + "/" + e + "/status").set("accepted", n)
        },
        getMessagesRef: function(e) {
          var t = this.ref.child("conversations/" + e + "/messages/");
          return t
        },
        cancelInvitation: function(e, t, n) {
          this.ref.child("invitations/" + t + "/" + this.auth.currentUser.uid + ">>>" + t + "/" + e).remove(n)
        },
        acceptingInvitation: function(e, t, n) {
          this.ref.child("invitations/" + this.auth.currentUser.uid + "/" + t + ">>>" + this.auth.currentUser.uid + "/" + e + "/status").set("accepting", n)
        },
        rejectInvitation: function(e, t, n) {
          this.ref.child("invitations/" + this.auth.currentUser.uid + "/" + t + ">>>" + this.auth.currentUser.uid + "/" + e + "/status").set("rejected", n)
        },
        onInvite: function(e) {
          var t = this;
          this.ref.child("invitations/" + this.auth.currentUser.uid).on("child_added", function(n) {
            var i = n.key();
            t.onInvites[i] = !0, t.ref.child("invitations/" + t.auth.currentUser.uid + "/" + i).on("child_added", function(t) {
              e(t.key(), t.val().uid, t.val().cid, t.val().data)
            })
          })
        },
        offInvite: function() {
          this.ref.child("invitations/" + this.auth.currentUser.uid).off("child_added");
          for (var e in this.onInvites) this.ref.child("invitations/" + this.auth.currentUser.uid + "/" + e).off("child_added"), delete this.onInvites[e]
        },
        join: function(e, t) {
          var n = this;
          this.auth.currentUser.uid && e ? this.ref.child("conversations/" + e + "/users/" + this.auth.currentUser.uid).set(!0, function(i) {
            t(i), n.ref.child("conversations/" + e + "/users/" + n.auth.currentUser.uid).onDisconnect().remove()
          }) : t(new Error("the uid or conversationId is not exist!"))
        },
        leave: function(e) {
          this.offUserAdded(e), this.offUserRemoved(e), this.ref.child("conversations/" + e + "/users/" + this.auth.currentUser.uid).remove()
        },
        onUserAdded: function(e, t) {
          var n = this;
          this.ref.child("conversations/" + e + "/users/").on("child_added", function(e) {
            e.key() !== n.auth.currentUser.uid && t(e.key())
          })
        },
        offUserAdded: function(e, t) {
          this.ref.child("conversations/" + e + "/users/").off("child_added", t)
        },
        onUserRemoved: function(e, t) {
          var n = this;
          this.ref.child("conversations/" + e + "/users/").on("child_removed", function(e) {
            e.key() !== n.auth.currentUser.uid && t(e.key())
          })
        },
        offUserRemoved: function(e, t) {
          this.ref.child("conversations/" + e + "/users/").off("child_removed", t)
        }
      }, t.exports = u
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Service.js", "/")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  16: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        f = (e("./Wilddog-Errors.js"), e("./Wilddog-Utils-Valid.js")),
        h = function(e) {
          this.stream = e, this.isAudioEnabled = !0, this.isVideoEnabled = !0, this.elements = []
        };
      t.exports = h, h.prototype.attach = function(e) {
        f.validateArgCount("Stream.attach", 0, 1, arguments.length);
        var t;
        return e ? "string" == typeof e ? t = document.querySelector(e) : "object" == ("undefined" == typeof e ? "undefined" : l(e)) && (t = e) : t = document.createElement("video"), attachMediaStream(t, this.stream), t
      }, h.prototype.detach = function(e) {
        f.validateArgCount("Stream.detach", 1, 1, arguments.length);
        var t;
        return "string" == typeof e ? t = document.querySelector(e) : "object" == ("undefined" == typeof e ? "undefined" : l(e)) && (t = e), attachMediaStream(t, null), t
      }, h.prototype.enableAudio = function(e) {
        f.validateArgCount("Stream.enableAudio", 1, 1, arguments.length), f.validateBoolean("Stream.enableAudio", 1, e);
        for (var t = this.stream.getAudioTracks(), n = t.length - 1; n >= 0; n--) t[n].enabled = e
      }, h.prototype.enableVideo = function(e) {
        f.validateArgCount("Stream.enableVideo", 1, 1, arguments.length), f.validateBoolean("Stream.enableVideo", 1, e);
        for (var t = this.stream.getVideoTracks(), n = t.length - 1; n >= 0; n--) t[n].enabled = e
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Stream.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20
  }],
  17: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        f = e("./Wilddog-Errors.js"),
        h = {
          validateArgCount: function(e, t, n, i) {
            var r;
            if (i < t ? r = "at least " + t : i > n && (r = 0 === n ? "none" : "no more than " + n), r) {
              var o = e + " failed: Was called with " + i + (1 === i ? " argument." : " arguments.") + " Expects " + r + ".";
              throw f.getError("VIDEO_INVALID_ARGUMENT", o)
            }
          },
          errorPrefix: function(e, t, n) {
            var i = "";
            switch (t) {
              case 1:
                i = n ? "first" : "First";
                break;
              case 2:
                i = n ? "second" : "Second";
                break;
              case 3:
                i = n ? "third" : "Third";
                break;
              case 4:
                i = n ? "fourth" : "Fourth";
                break;
              default:
                throw f.getError("VIDEO_INVALID_ARGUMENT", "errorPrefix called with argumentNumber > 4.  Need to update it?")
            }
            var r = e + " failed: ";
            return r += i + " argument "
          },
          validateCallback: function(e, t, n, i) {
            if ("function" != typeof n) throw f.getError("VIDEO_INVALID_ARGUMENT", this.errorPrefix(e, t, i) + "must be a valid function.")
          },
          validateBoolean: function(e, t, n, i) {
            if ("boolean" != typeof n) throw f.getError("VIDEO_INVALID_ARGUMENT", wd.util.validation.errorPrefix(e, t, i) + "must be a boolean.")
          },
          validateString: function(e, t, n, i) {
            if ("string" != typeof n) throw f.getError("VIDEO_INVALID_ARGUMENT", wd.util.validation.errorPrefix(e, t, i) + "must be a valid string.")
          },
          validateObject: function(e, t, n, i) {
            if ("object" != ("undefined" == typeof n ? "undefined" : l(n)) || null === n) throw f.getError("VIDEO_INVALID_ARGUMENT", wd.util.validation.errorPrefix(e, t, i) + "must be a valid object.")
          },
          validateStream: function(e, t, n, i) {
            if ("object" != ("undefined" == typeof n ? "undefined" : l(n)) || n.getTracks || n.addTrack) throw f.getError("VIDEO_INVALID_STREAM_STATE", e + "failedparam.localstream must be a valid stream.")
          }
        };
      t.exports = h
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Utils-Valid.js", "/")
  }, {
    "./Wilddog-Errors.js": 5,
    "1YiZ5S": 30,
    buffer: 20
  }],
  18: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      "use strict";
      var l = e("./Wilddog-LocalStream.js"),
        f = e("./Wilddog-Client.js"),
        h = e("./Wilddog-Errors.js"),
        p = e("./Wilddog-Utils-Valid.js"),
        g = (e("../adapter.min.js"), e("./Wilddog-Service.js")),
        m = function(e) {
          this.app = e, this.wdService = new g(e)
        };
      t.exports = m, m.prototype.client = function() {
        return this.__client || (this.__client = new f(this.wdService)), this.__client
      }, m.prototype.createStream = function(e) {
        if (p.validateArgCount("Video.createStream", 1, 1, arguments.length), p.validateObject("Video.createStream", 1, e), !e.audio && "boolean" != typeof e.audio) throw h.getError("VIDEO_INVALID_ARGUMENT", "Video.createStream failed: param.audio must be exists, and the type must be boolean!");
        if (!e.video && "boolean" != typeof e.video && "string" != typeof e.video) throw h.getError("VIDEO_INVALID_ARGUMENT", "Video.createStream failed: param.audio must be exists!");
        var t = new Promise(function(t, n) {
          var i = {};
          i.audio = e.audio, "low" == e.video ? i.video = {
            Width: 320,
            Height: 240
          } : "low-16:9" == e.video ? i.video = {
            Width: 320,
            Height: 180
          } : "standard" == e.video ? i.video = {
            Width: 640,
            Height: 480
          } : "standard-16:9" == e.video ? i.video = {
            Width: 640,
            Height: 360
          } : "high-16:9" == e.video ? i.video = {
            Width: 1280,
            Height: 720
          } : 1 == e.video ? i.video = {
            Width: 640,
            Height: 480
          } : 0 == e.video ? i.video = !1 : n(h.getError("VIDEO_INVALID_ARGUMENT", "Video.createStream failed: unknown param.audio!")), getUserMedia(i, function(e) {
            var n = new l(e);
            t(n)
          }, function(e) {
            n(h.getError("VIDEO_DEVICE_NOT_AVAILABLE", e.message))
          })
        });
        return t
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/Wilddog-Video.js", "/")
  }, {
    "../adapter.min.js": 1,
    "./Wilddog-Client.js": 2,
    "./Wilddog-Errors.js": 5,
    "./Wilddog-LocalStream.js": 9,
    "./Wilddog-Service.js": 15,
    "./Wilddog-Utils-Valid.js": 17,
    "1YiZ5S": 30,
    buffer: 20
  }],
  19: [function(e, t, n) {
    (function(t, n, i, r, o, s, a, c, d) {
      "use strict";
      var u = e("./Wilddog-Video.js");
      wilddog ? wilddog.regService("video", function(e) {
        if (null == e) throw new Error("application not initialized!Please call wilddog.initializeApp first");
        return new u(e)
      }) : console.error("wilddog is not exist")
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/fake_6fe0eb23.js", "/")
  }, {
    "./Wilddog-Video.js": 18,
    "1YiZ5S": 30,
    buffer: 20
  }],
  20: [function(e, t, n) {
    (function(t, i, r, o, s, a, c, d, u) {
      function r(e, t, n) {
        if (!(this instanceof r)) return new r(e, t, n);
        var i = typeof e;
        if ("base64" === t && "string" === i)
          for (e = N(e); e.length % 4 !== 0;) e += "=";
        var o;
        if ("number" === i) o = D(e);
        else if ("string" === i) o = r.byteLength(e, t);
        else {
          if ("object" !== i) throw new Error("First argument needs to be a number, array or string.");
          o = D(e.length)
        }
        var s;
        r._useTypedArrays ? s = r._augment(new Uint8Array(o)) : (s = this, s.length = o, s._isBuffer = !0);
        var a;
        if (r._useTypedArrays && "number" == typeof e.byteLength) s._set(e);
        else if (M(e))
          for (a = 0; a < o; a++) r.isBuffer(e) ? s[a] = e.readUInt8(a) : s[a] = e[a];
        else if ("string" === i) s.write(e, 0, t);
        else if ("number" === i && !r._useTypedArrays && !n)
          for (a = 0; a < o; a++) s[a] = 0;
        return s
      }

      function l(e, t, n, i) {
        n = Number(n) || 0;
        var o = e.length - n;
        i ? (i = Number(i), i > o && (i = o)) : i = o;
        var s = t.length;
        X(s % 2 === 0, "Invalid hex string"), i > s / 2 && (i = s / 2);
        for (var a = 0; a < i; a++) {
          var c = parseInt(t.substr(2 * a, 2), 16);
          X(!isNaN(c), "Invalid hex string"), e[n + a] = c
        }
        return r._charsWritten = 2 * a, a
      }

      function f(e, t, n, i) {
        var o = r._charsWritten = Z(V(t), e, n, i);
        return o
      }

      function h(e, t, n, i) {
        var o = r._charsWritten = Z(Y(t), e, n, i);
        return o
      }

      function p(e, t, n, i) {
        return h(e, t, n, i)
      }

      function g(e, t, n, i) {
        var o = r._charsWritten = Z(F(t), e, n, i);
        return o
      }

      function m(e, t, n, i) {
        var o = r._charsWritten = Z(q(t), e, n, i);
        return o
      }

      function v(e, t, n) {
        return 0 === t && n === e.length ? $.fromByteArray(e) : $.fromByteArray(e.slice(t, n))
      }

      function w(e, t, n) {
        var i = "",
          r = "";
        n = Math.min(e.length, n);
        for (var o = t; o < n; o++) e[o] <= 127 ? (i += G(r) + String.fromCharCode(e[o]), r = "") : r += "%" + e[o].toString(16);
        return i + G(r)
      }

      function b(e, t, n) {
        var i = "";
        n = Math.min(e.length, n);
        for (var r = t; r < n; r++) i += String.fromCharCode(e[r]);
        return i
      }

      function y(e, t, n) {
        return b(e, t, n)
      }

      function _(e, t, n) {
        var i = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
        for (var r = "", o = t; o < n; o++) r += B(e[o]);
        return r
      }

      function S(e, t, n) {
        for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
        return r
      }

      function I(e, t, n, i) {
        i || (X("boolean" == typeof n, "missing or invalid endian"), X(void 0 !== t && null !== t, "missing offset"), X(t + 1 < e.length, "Trying to read beyond buffer length"));
        var r = e.length;
        if (!(t >= r)) {
          var o;
          return n ? (o = e[t], t + 1 < r && (o |= e[t + 1] << 8)) : (o = e[t] << 8, t + 1 < r && (o |= e[t + 1])), o
        }
      }

      function C(e, t, n, i) {
        i || (X("boolean" == typeof n, "missing or invalid endian"), X(void 0 !== t && null !== t, "missing offset"), X(t + 3 < e.length, "Trying to read beyond buffer length"));
        var r = e.length;
        if (!(t >= r)) {
          var o;
          return n ? (t + 2 < r && (o = e[t + 2] << 16), t + 1 < r && (o |= e[t + 1] << 8), o |= e[t], t + 3 < r && (o += e[t + 3] << 24 >>> 0)) : (t + 1 < r && (o = e[t + 1] << 16), t + 2 < r && (o |= e[t + 2] << 8), t + 3 < r && (o |= e[t + 3]), o += e[t] << 24 >>> 0), o
        }
      }

      function T(e, t, n, i) {
        i || (X("boolean" == typeof n, "missing or invalid endian"), X(void 0 !== t && null !== t, "missing offset"), X(t + 1 < e.length, "Trying to read beyond buffer length"));
        var r = e.length;
        if (!(t >= r)) {
          var o = I(e, t, n, !0),
            s = 32768 & o;
          return s ? (65535 - o + 1) * -1 : o
        }
      }

      function E(e, t, n, i) {
        i || (X("boolean" == typeof n, "missing or invalid endian"), X(void 0 !== t && null !== t, "missing offset"), X(t + 3 < e.length, "Trying to read beyond buffer length"));
        var r = e.length;
        if (!(t >= r)) {
          var o = C(e, t, n, !0),
            s = 2147483648 & o;
          return s ? (4294967295 - o + 1) * -1 : o
        }
      }

      function R(e, t, n, i) {
        return i || (X("boolean" == typeof n, "missing or invalid endian"), X(t + 3 < e.length, "Trying to read beyond buffer length")), Q.read(e, t, n, 23, 4)
      }

      function A(e, t, n, i) {
        return i || (X("boolean" == typeof n, "missing or invalid endian"), X(t + 7 < e.length, "Trying to read beyond buffer length")), Q.read(e, t, n, 52, 8)
      }

      function P(e, t, n, i, r) {
        r || (X(void 0 !== t && null !== t, "missing value"), X("boolean" == typeof i, "missing or invalid endian"), X(void 0 !== n && null !== n, "missing offset"), X(n + 1 < e.length, "trying to write beyond buffer length"), H(t, 65535));
        var o = e.length;
        if (!(n >= o))
          for (var s = 0, a = Math.min(o - n, 2); s < a; s++) e[n + s] = (t & 255 << 8 * (i ? s : 1 - s)) >>> 8 * (i ? s : 1 - s)
      }

      function L(e, t, n, i, r) {
        r || (X(void 0 !== t && null !== t, "missing value"), X("boolean" == typeof i, "missing or invalid endian"), X(void 0 !== n && null !== n, "missing offset"), X(n + 3 < e.length, "trying to write beyond buffer length"), H(t, 4294967295));
        var o = e.length;
        if (!(n >= o))
          for (var s = 0, a = Math.min(o - n, 4); s < a; s++) e[n + s] = t >>> 8 * (i ? s : 3 - s) & 255
      }

      function j(e, t, n, i, r) {
        r || (X(void 0 !== t && null !== t, "missing value"), X("boolean" == typeof i, "missing or invalid endian"), X(void 0 !== n && null !== n, "missing offset"), X(n + 1 < e.length, "Trying to write beyond buffer length"), J(t, 32767, -32768));
        var o = e.length;
        n >= o || (t >= 0 ? P(e, t, n, i, r) : P(e, 65535 + t + 1, n, i, r))
      }

      function k(e, t, n, i, r) {
        r || (X(void 0 !== t && null !== t, "missing value"), X("boolean" == typeof i, "missing or invalid endian"), X(void 0 !== n && null !== n, "missing offset"), X(n + 3 < e.length, "Trying to write beyond buffer length"), J(t, 2147483647, -2147483648));
        var o = e.length;
        n >= o || (t >= 0 ? L(e, t, n, i, r) : L(e, 4294967295 + t + 1, n, i, r))
      }

      function O(e, t, n, i, r) {
        r || (X(void 0 !== t && null !== t, "missing value"), X("boolean" == typeof i, "missing or invalid endian"), X(void 0 !== n && null !== n, "missing offset"), X(n + 3 < e.length, "Trying to write beyond buffer length"), z(t, 3.4028234663852886e38, -3.4028234663852886e38));
        var o = e.length;
        n >= o || Q.write(e, t, n, i, 23, 4)
      }

      function W(e, t, n, i, r) {
        r || (X(void 0 !== t && null !== t, "missing value"), X("boolean" == typeof i, "missing or invalid endian"), X(void 0 !== n && null !== n, "missing offset"), X(n + 7 < e.length, "Trying to write beyond buffer length"), z(t, 1.7976931348623157e308, -1.7976931348623157e308));
        var o = e.length;
        n >= o || Q.write(e, t, n, i, 52, 8)
      }

      function N(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
      }

      function x(e, t, n) {
        return "number" != typeof e ? n : (e = ~~e, e >= t ? t : e >= 0 ? e : (e += t, e >= 0 ? e : 0))
      }

      function D(e) {
        return e = ~~Math.ceil(+e), e < 0 ? 0 : e
      }

      function U(e) {
        return (Array.isArray || function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        })(e)
      }

      function M(e) {
        return U(e) || r.isBuffer(e) || e && "object" == typeof e && "number" == typeof e.length
      }

      function B(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16)
      }

      function V(e) {
        for (var t = [], n = 0; n < e.length; n++) {
          var i = e.charCodeAt(n);
          if (i <= 127) t.push(e.charCodeAt(n));
          else {
            var r = n;
            i >= 55296 && i <= 57343 && n++;
            for (var o = encodeURIComponent(e.slice(r, n + 1)).substr(1).split("%"), s = 0; s < o.length; s++) t.push(parseInt(o[s], 16))
          }
        }
        return t
      }

      function Y(e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
        return t
      }

      function q(e) {
        for (var t, n, i, r = [], o = 0; o < e.length; o++) t = e.charCodeAt(o), n = t >> 8, i = t % 256, r.push(i), r.push(n);
        return r
      }

      function F(e) {
        return $.toByteArray(e)
      }

      function Z(e, t, n, i) {
        for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); r++) t[r + n] = e[r];
        return r
      }

      function G(e) {
        try {
          return decodeURIComponent(e)
        } catch (e) {
          return String.fromCharCode(65533)
        }
      }

      function H(e, t) {
        X("number" == typeof e, "cannot write a non-number as a number"), X(e >= 0, "specified a negative value for writing an unsigned value"), X(e <= t, "value is larger than maximum value for type"), X(Math.floor(e) === e, "value has a fractional component")
      }

      function J(e, t, n) {
        X("number" == typeof e, "cannot write a non-number as a number"), X(e <= t, "value larger than maximum allowed value"), X(e >= n, "value smaller than minimum allowed value"), X(Math.floor(e) === e, "value has a fractional component")
      }

      function z(e, t, n) {
        X("number" == typeof e, "cannot write a non-number as a number"), X(e <= t, "value larger than maximum allowed value"), X(e >= n, "value smaller than minimum allowed value")
      }

      function X(e, t) {
        if (!e) throw new Error(t || "Failed assertion")
      }
      var $ = e("base64-js"),
        Q = e("ieee754");
      n.Buffer = r, n.SlowBuffer = r, n.INSPECT_MAX_BYTES = 50, r.poolSize = 8192, r._useTypedArrays = function() {
        try {
          var e = new ArrayBuffer(0),
            t = new Uint8Array(e);
          return t.foo = function() {
            return 42
          }, 42 === t.foo() && "function" == typeof t.subarray
        } catch (e) {
          return !1
        }
      }(), r.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "raw":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return !0;
          default:
            return !1
        }
      }, r.isBuffer = function(e) {
        return !(null === e || void 0 === e || !e._isBuffer)
      }, r.byteLength = function(e, t) {
        var n;
        switch (e += "", t || "utf8") {
          case "hex":
            n = e.length / 2;
            break;
          case "utf8":
          case "utf-8":
            n = V(e).length;
            break;
          case "ascii":
          case "binary":
          case "raw":
            n = e.length;
            break;
          case "base64":
            n = F(e).length;
            break;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            n = 2 * e.length;
            break;
          default:
            throw new Error("Unknown encoding")
        }
        return n
      }, r.concat = function(e, t) {
        if (X(U(e), "Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."), 0 === e.length) return new r(0);
        if (1 === e.length) return e[0];
        var n;
        if ("number" != typeof t)
          for (t = 0, n = 0; n < e.length; n++) t += e[n].length;
        var i = new r(t),
          o = 0;
        for (n = 0; n < e.length; n++) {
          var s = e[n];
          s.copy(i, o), o += s.length
        }
        return i
      }, r.prototype.write = function(e, t, n, i) {
        if (isFinite(t)) isFinite(n) || (i = n, n = void 0);
        else {
          var r = i;
          i = t, t = n, n = r
        }
        t = Number(t) || 0;
        var o = this.length - t;
        n ? (n = Number(n), n > o && (n = o)) : n = o, i = String(i || "utf8").toLowerCase();
        var s;
        switch (i) {
          case "hex":
            s = l(this, e, t, n);
            break;
          case "utf8":
          case "utf-8":
            s = f(this, e, t, n);
            break;
          case "ascii":
            s = h(this, e, t, n);
            break;
          case "binary":
            s = p(this, e, t, n);
            break;
          case "base64":
            s = g(this, e, t, n);
            break;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            s = m(this, e, t, n);
            break;
          default:
            throw new Error("Unknown encoding")
        }
        return s
      }, r.prototype.toString = function(e, t, n) {
        var i = this;
        if (e = String(e || "utf8").toLowerCase(), t = Number(t) || 0, n = void 0 !== n ? Number(n) : n = i.length, n === t) return "";
        var r;
        switch (e) {
          case "hex":
            r = _(i, t, n);
            break;
          case "utf8":
          case "utf-8":
            r = w(i, t, n);
            break;
          case "ascii":
            r = b(i, t, n);
            break;
          case "binary":
            r = y(i, t, n);
            break;
          case "base64":
            r = v(i, t, n);
            break;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            r = S(i, t, n);
            break;
          default:
            throw new Error("Unknown encoding")
        }
        return r
      }, r.prototype.toJSON = function() {
        return {
          type: "Buffer",
          data: Array.prototype.slice.call(this._arr || this, 0)
        }
      }, r.prototype.copy = function(e, t, n, i) {
        var o = this;
        if (n || (n = 0), i || 0 === i || (i = this.length), t || (t = 0), i !== n && 0 !== e.length && 0 !== o.length) {
          X(i >= n, "sourceEnd < sourceStart"), X(t >= 0 && t < e.length, "targetStart out of bounds"), X(n >= 0 && n < o.length, "sourceStart out of bounds"), X(i >= 0 && i <= o.length, "sourceEnd out of bounds"), i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
          var s = i - n;
          if (s < 100 || !r._useTypedArrays)
            for (var a = 0; a < s; a++) e[a + t] = this[a + n];
          else e._set(this.subarray(n, n + s), t)
        }
      }, r.prototype.slice = function(e, t) {
        var n = this.length;
        if (e = x(e, n, 0), t = x(t, n, n), r._useTypedArrays) return r._augment(this.subarray(e, t));
        for (var i = t - e, o = new r(i, (void 0), (!0)), s = 0; s < i; s++) o[s] = this[s + e];
        return o
      }, r.prototype.get = function(e) {
        return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(e)
      }, r.prototype.set = function(e, t) {
        return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(e, t)
      }, r.prototype.readUInt8 = function(e, t) {
        if (t || (X(void 0 !== e && null !== e, "missing offset"), X(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) return this[e]
      }, r.prototype.readUInt16LE = function(e, t) {
        return I(this, e, !0, t)
      }, r.prototype.readUInt16BE = function(e, t) {
        return I(this, e, !1, t)
      }, r.prototype.readUInt32LE = function(e, t) {
        return C(this, e, !0, t)
      }, r.prototype.readUInt32BE = function(e, t) {
        return C(this, e, !1, t)
      }, r.prototype.readInt8 = function(e, t) {
        if (t || (X(void 0 !== e && null !== e, "missing offset"), X(e < this.length, "Trying to read beyond buffer length")), !(e >= this.length)) {
          var n = 128 & this[e];
          return n ? (255 - this[e] + 1) * -1 : this[e]
        }
      }, r.prototype.readInt16LE = function(e, t) {
        return T(this, e, !0, t)
      }, r.prototype.readInt16BE = function(e, t) {
        return T(this, e, !1, t)
      }, r.prototype.readInt32LE = function(e, t) {
        return E(this, e, !0, t)
      }, r.prototype.readInt32BE = function(e, t) {
        return E(this, e, !1, t)
      }, r.prototype.readFloatLE = function(e, t) {
        return R(this, e, !0, t)
      }, r.prototype.readFloatBE = function(e, t) {
        return R(this, e, !1, t)
      }, r.prototype.readDoubleLE = function(e, t) {
        return A(this, e, !0, t)
      }, r.prototype.readDoubleBE = function(e, t) {
        return A(this, e, !1, t)
      }, r.prototype.writeUInt8 = function(e, t, n) {
        n || (X(void 0 !== e && null !== e, "missing value"), X(void 0 !== t && null !== t, "missing offset"), X(t < this.length, "trying to write beyond buffer length"), H(e, 255)), t >= this.length || (this[t] = e)
      }, r.prototype.writeUInt16LE = function(e, t, n) {
        P(this, e, t, !0, n)
      }, r.prototype.writeUInt16BE = function(e, t, n) {
        P(this, e, t, !1, n)
      }, r.prototype.writeUInt32LE = function(e, t, n) {
        L(this, e, t, !0, n)
      }, r.prototype.writeUInt32BE = function(e, t, n) {
        L(this, e, t, !1, n)
      }, r.prototype.writeInt8 = function(e, t, n) {
        n || (X(void 0 !== e && null !== e, "missing value"), X(void 0 !== t && null !== t, "missing offset"), X(t < this.length, "Trying to write beyond buffer length"), J(e, 127, -128)), t >= this.length || (e >= 0 ? this.writeUInt8(e, t, n) : this.writeUInt8(255 + e + 1, t, n))
      }, r.prototype.writeInt16LE = function(e, t, n) {
        j(this, e, t, !0, n)
      }, r.prototype.writeInt16BE = function(e, t, n) {
        j(this, e, t, !1, n)
      }, r.prototype.writeInt32LE = function(e, t, n) {
        k(this, e, t, !0, n)
      }, r.prototype.writeInt32BE = function(e, t, n) {
        k(this, e, t, !1, n)
      }, r.prototype.writeFloatLE = function(e, t, n) {
        O(this, e, t, !0, n)
      }, r.prototype.writeFloatBE = function(e, t, n) {
        O(this, e, t, !1, n)
      }, r.prototype.writeDoubleLE = function(e, t, n) {
        W(this, e, t, !0, n)
      }, r.prototype.writeDoubleBE = function(e, t, n) {
        W(this, e, t, !1, n)
      }, r.prototype.fill = function(e, t, n) {
        if (e || (e = 0), t || (t = 0), n || (n = this.length), "string" == typeof e && (e = e.charCodeAt(0)), X("number" == typeof e && !isNaN(e), "value is not a number"), X(n >= t, "end < start"), n !== t && 0 !== this.length) {
          X(t >= 0 && t < this.length, "start out of bounds"), X(n >= 0 && n <= this.length, "end out of bounds");
          for (var i = t; i < n; i++) this[i] = e
        }
      }, r.prototype.inspect = function() {
        for (var e = [], t = this.length, i = 0; i < t; i++)
          if (e[i] = B(this[i]), i === n.INSPECT_MAX_BYTES) {
            e[i + 1] = "...";
            break
          }
        return "<Buffer " + e.join(" ") + ">"
      }, r.prototype.toArrayBuffer = function() {
        if ("undefined" != typeof Uint8Array) {
          if (r._useTypedArrays) return new r(this).buffer;
          for (var e = new Uint8Array(this.length), t = 0, n = e.length; t < n; t += 1) e[t] = this[t];
          return e.buffer
        }
        throw new Error("Buffer.toArrayBuffer not supported in this browser")
      };
      var K = r.prototype;
      r._augment = function(e) {
        return e._isBuffer = !0, e._get = e.get, e._set = e.set, e.get = K.get, e.set = K.set, e.write = K.write, e.toString = K.toString, e.toLocaleString = K.toString, e.toJSON = K.toJSON, e.copy = K.copy, e.slice = K.slice, e.readUInt8 = K.readUInt8, e.readUInt16LE = K.readUInt16LE, e.readUInt16BE = K.readUInt16BE, e.readUInt32LE = K.readUInt32LE, e.readUInt32BE = K.readUInt32BE, e.readInt8 = K.readInt8, e.readInt16LE = K.readInt16LE, e.readInt16BE = K.readInt16BE, e.readInt32LE = K.readInt32LE, e.readInt32BE = K.readInt32BE, e.readFloatLE = K.readFloatLE, e.readFloatBE = K.readFloatBE, e.readDoubleLE = K.readDoubleLE, e.readDoubleBE = K.readDoubleBE, e.writeUInt8 = K.writeUInt8, e.writeUInt16LE = K.writeUInt16LE, e.writeUInt16BE = K.writeUInt16BE, e.writeUInt32LE = K.writeUInt32LE,
          e.writeUInt32BE = K.writeUInt32BE, e.writeInt8 = K.writeInt8, e.writeInt16LE = K.writeInt16LE, e.writeInt16BE = K.writeInt16BE, e.writeInt32LE = K.writeInt32LE, e.writeInt32BE = K.writeInt32BE, e.writeFloatLE = K.writeFloatLE, e.writeFloatBE = K.writeFloatBE, e.writeDoubleLE = K.writeDoubleLE, e.writeDoubleBE = K.writeDoubleBE, e.fill = K.fill, e.inspect = K.inspect, e.toArrayBuffer = K.toArrayBuffer, e
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
  }, {
    "1YiZ5S": 30,
    "base64-js": 21,
    buffer: 20,
    ieee754: 22
  }],
  21: [function(e, t, n) {
    (function(e, t, i, r, o, s, a, c, d) {
      var u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      ! function(e) {
        "use strict";

        function t(e) {
          var t = e.charCodeAt(0);
          return t === o || t === l ? 62 : t === s || t === f ? 63 : t < a ? -1 : t < a + 10 ? t - a + 26 + 26 : t < d + 26 ? t - d : t < c + 26 ? t - c + 26 : void 0
        }

        function n(e) {
          function n(e) {
            d[l++] = e
          }
          var i, o, s, a, c, d;
          if (e.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var u = e.length;
          c = "=" === e.charAt(u - 2) ? 2 : "=" === e.charAt(u - 1) ? 1 : 0, d = new r(3 * e.length / 4 - c), s = c > 0 ? e.length - 4 : e.length;
          var l = 0;
          for (i = 0, o = 0; i < s; i += 4, o += 3) a = t(e.charAt(i)) << 18 | t(e.charAt(i + 1)) << 12 | t(e.charAt(i + 2)) << 6 | t(e.charAt(i + 3)), n((16711680 & a) >> 16), n((65280 & a) >> 8), n(255 & a);
          return 2 === c ? (a = t(e.charAt(i)) << 2 | t(e.charAt(i + 1)) >> 4, n(255 & a)) : 1 === c && (a = t(e.charAt(i)) << 10 | t(e.charAt(i + 1)) << 4 | t(e.charAt(i + 2)) >> 2, n(a >> 8 & 255), n(255 & a)), d
        }

        function i(e) {
          function t(e) {
            return u.charAt(e)
          }

          function n(e) {
            return t(e >> 18 & 63) + t(e >> 12 & 63) + t(e >> 6 & 63) + t(63 & e)
          }
          var i, r, o, s = e.length % 3,
            a = "";
          for (i = 0, o = e.length - s; i < o; i += 3) r = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2], a += n(r);
          switch (s) {
            case 1:
              r = e[e.length - 1], a += t(r >> 2), a += t(r << 4 & 63), a += "==";
              break;
            case 2:
              r = (e[e.length - 2] << 8) + e[e.length - 1], a += t(r >> 10), a += t(r >> 4 & 63), a += t(r << 2 & 63), a += "="
          }
          return a
        }
        var r = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          o = "+".charCodeAt(0),
          s = "/".charCodeAt(0),
          a = "0".charCodeAt(0),
          c = "a".charCodeAt(0),
          d = "A".charCodeAt(0),
          l = "-".charCodeAt(0),
          f = "_".charCodeAt(0);
        e.toByteArray = n, e.fromByteArray = i
      }("undefined" == typeof n ? this.base64js = {} : n)
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  22: [function(e, t, n) {
    (function(e, t, i, r, o, s, a, c, d) {
      n.read = function(e, t, n, i, r) {
        var o, s, a = 8 * r - i - 1,
          c = (1 << a) - 1,
          d = c >> 1,
          u = -7,
          l = n ? r - 1 : 0,
          f = n ? -1 : 1,
          h = e[t + l];
        for (l += f, o = h & (1 << -u) - 1, h >>= -u, u += a; u > 0; o = 256 * o + e[t + l], l += f, u -= 8);
        for (s = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; s = 256 * s + e[t + l], l += f, u -= 8);
        if (0 === o) o = 1 - d;
        else {
          if (o === c) return s ? NaN : (h ? -1 : 1) * (1 / 0);
          s += Math.pow(2, i), o -= d
        }
        return (h ? -1 : 1) * s * Math.pow(2, o - i)
      }, n.write = function(e, t, n, i, r, o) {
        var s, a, c, d = 8 * o - r - 1,
          u = (1 << d) - 1,
          l = u >> 1,
          f = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = i ? 0 : o - 1,
          p = i ? 1 : -1,
          g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), t += s + l >= 1 ? f / c : f * Math.pow(2, 1 - l), t * c >= 2 && (s++, c /= 2), s + l >= u ? (a = 0, s = u) : s + l >= 1 ? (a = (t * c - 1) * Math.pow(2, r), s += l) : (a = t * Math.pow(2, l - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + h] = 255 & a, h += p, a /= 256, r -= 8);
        for (s = s << r | a, d += r; d > 0; e[n + h] = 255 & s, h += p, s /= 256, d -= 8);
        e[n + h - p] |= 128 * g
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  23: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      function u() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
      }

      function l(e) {
        return "function" == typeof e
      }

      function f(e) {
        return "number" == typeof e
      }

      function h(e) {
        return "object" == typeof e && null !== e
      }

      function p(e) {
        return void 0 === e
      }
      t.exports = u, u.EventEmitter = u, u.prototype._events = void 0, u.prototype._maxListeners = void 0, u.defaultMaxListeners = 10, u.prototype.setMaxListeners = function(e) {
        if (!f(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
      }, u.prototype.emit = function(e) {
        var t, n, i, r, o, s;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || h(this._events.error) && !this._events.error.length)) {
          if (t = arguments[1], t instanceof Error) throw t;
          throw TypeError('Uncaught, unspecified "error" event.')
        }
        if (n = this._events[e], p(n)) return !1;
        if (l(n)) switch (arguments.length) {
          case 1:
            n.call(this);
            break;
          case 2:
            n.call(this, arguments[1]);
            break;
          case 3:
            n.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (i = arguments.length, r = new Array(i - 1), o = 1; o < i; o++) r[o - 1] = arguments[o];
            n.apply(this, r)
        } else if (h(n)) {
          for (i = arguments.length, r = new Array(i - 1), o = 1; o < i; o++) r[o - 1] = arguments[o];
          for (s = n.slice(), i = s.length, o = 0; o < i; o++) s[o].apply(this, r)
        }
        return !0
      }, u.prototype.addListener = function(e, t) {
        var n;
        if (!l(t)) throw TypeError("listener must be a function");
        if (this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, l(t.listener) ? t.listener : t), this._events[e] ? h(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, h(this._events[e]) && !this._events[e].warned) {
          var n;
          n = p(this._maxListeners) ? u.defaultMaxListeners : this._maxListeners, n && n > 0 && this._events[e].length > n && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())
        }
        return this
      }, u.prototype.on = u.prototype.addListener, u.prototype.once = function(e, t) {
        function n() {
          this.removeListener(e, n), i || (i = !0, t.apply(this, arguments))
        }
        if (!l(t)) throw TypeError("listener must be a function");
        var i = !1;
        return n.listener = t, this.on(e, n), this
      }, u.prototype.removeListener = function(e, t) {
        var n, i, r, o;
        if (!l(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (n = this._events[e], r = n.length, i = -1, n === t || l(n.listener) && n.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (h(n)) {
          for (o = r; o-- > 0;)
            if (n[o] === t || n[o].listener && n[o].listener === t) {
              i = o;
              break
            }
          if (i < 0) return this;
          1 === n.length ? (n.length = 0, delete this._events[e]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
      }, u.prototype.removeAllListeners = function(e) {
        var t, n;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
          for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
          return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (n = this._events[e], l(n)) this.removeListener(e, n);
        else
          for (; n.length;) this.removeListener(e, n[n.length - 1]);
        return delete this._events[e], this
      }, u.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? l(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
      }, u.listenerCount = function(e, t) {
        var n;
        return n = e._events && e._events[t] ? l(e._events[t]) ? 1 : e._events[t].length : 0
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/events/events.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/events")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  24: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      var l = t.exports,
        f = (e("events").EventEmitter, e("./lib/request")),
        h = e("url");
      l.request = function(e, t) {
        "string" == typeof e && (e = h.parse(e)), e || (e = {}), e.host || e.port || (e.port = parseInt(window.location.port, 10)), !e.host && e.hostname && (e.host = e.hostname), e.scheme || (e.scheme = window.location.protocol.split(":")[0]), e.host || (e.host = window.location.hostname || window.location.host), /:/.test(e.host) && (e.port || (e.port = e.host.split(":")[1]), e.host = e.host.split(":")[0]), e.port || (e.port = "https" == e.scheme ? 443 : 80);
        var n = new f(new p, e);
        return t && n.on("response", t), n
      }, l.get = function(e, t) {
        e.method = "GET";
        var n = l.request(e, t);
        return n.end(), n
      }, l.Agent = function() {}, l.Agent.defaultMaxSockets = 4;
      var p = function() {
        if ("undefined" == typeof window) throw new Error("no window object present");
        if (window.XMLHttpRequest) return window.XMLHttpRequest;
        if (window.ActiveXObject) {
          for (var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"], t = 0; t < e.length; t++) try {
            var n = new window.ActiveXObject(e[t]);
            return function() {
              if (n) {
                var i = n;
                return n = null, i
              }
              return new window.ActiveXObject(e[t])
            }
          } catch (e) {}
          throw new Error("ajax not supported in this browser")
        }
        throw new Error("ajax not supported in this browser")
      }();
      l.STATUS_CODES = {
        100: "Continue",
        101: "Switching Protocols",
        102: "Processing",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        207: "Multi-Status",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Moved Temporarily",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Time-out",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Large",
        415: "Unsupported Media Type",
        416: "Requested Range Not Satisfiable",
        417: "Expectation Failed",
        418: "I'm a teapot",
        422: "Unprocessable Entity",
        423: "Locked",
        424: "Failed Dependency",
        425: "Unordered Collection",
        426: "Upgrade Required",
        428: "Precondition Required",
        429: "Too Many Requests",
        431: "Request Header Fields Too Large",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Time-out",
        505: "HTTP Version Not Supported",
        506: "Variant Also Negotiates",
        507: "Insufficient Storage",
        509: "Bandwidth Limit Exceeded",
        510: "Not Extended",
        511: "Network Authentication Required"
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify")
  }, {
    "./lib/request": 25,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23,
    url: 43
  }],
  25: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      var l = e("stream"),
        f = e("./response"),
        h = e("Base64"),
        p = e("inherits"),
        g = t.exports = function(e, t) {
          var n = this;
          n.writable = !0, n.xhr = e, n.body = [], n.uri = (t.scheme || "http") + "://" + t.host + (t.port ? ":" + t.port : "") + (t.path || "/"), "undefined" == typeof t.withCredentials && (t.withCredentials = !0);
          try {
            e.withCredentials = t.withCredentials
          } catch (e) {}
          if (e.open(t.method || "GET", n.uri, !0), n._headers = {}, t.headers)
            for (var i = m(t.headers), r = 0; r < i.length; r++) {
              var o = i[r];
              if (n.isSafeRequestHeader(o)) {
                var s = t.headers[o];
                n.setHeader(o, s)
              }
            }
          t.auth && this.setHeader("Authorization", "Basic " + h.btoa(t.auth));
          var a = new f;
          a.on("close", function() {
            n.emit("close")
          }), a.on("ready", function() {
            n.emit("response", a)
          }), e.onreadystatechange = function() {
            e.__aborted || a.handle(e)
          }
        };
      p(g, l), g.prototype.setHeader = function(e, t) {
        this._headers[e.toLowerCase()] = t
      }, g.prototype.getHeader = function(e) {
        return this._headers[e.toLowerCase()]
      }, g.prototype.removeHeader = function(e) {
        delete this._headers[e.toLowerCase()]
      }, g.prototype.write = function(e) {
        this.body.push(e)
      }, g.prototype.destroy = function(e) {
        this.xhr.__aborted = !0, this.xhr.abort(), this.emit("close")
      }, g.prototype.end = function(e) {
        void 0 !== e && this.body.push(e);
        for (var t = m(this._headers), n = 0; n < t.length; n++) {
          var i = t[n],
            r = this._headers[i];
          if (v(r))
            for (var o = 0; o < r.length; o++) this.xhr.setRequestHeader(i, r[o]);
          else this.xhr.setRequestHeader(i, r)
        }
        if (0 === this.body.length) this.xhr.send("");
        else if ("string" == typeof this.body[0]) this.xhr.send(this.body.join(""));
        else if (v(this.body[0])) {
          for (var s = [], n = 0; n < this.body.length; n++) s.push.apply(s, this.body[n]);
          this.xhr.send(s)
        } else if (/Array/.test(Object.prototype.toString.call(this.body[0]))) {
          for (var a = 0, n = 0; n < this.body.length; n++) a += this.body[n].length;
          for (var s = new this.body[0].constructor(a), c = 0, n = 0; n < this.body.length; n++)
            for (var d = this.body[n], o = 0; o < d.length; o++) s[c++] = d[o];
          this.xhr.send(s)
        } else {
          for (var s = "", n = 0; n < this.body.length; n++) s += this.body[n].toString();
          this.xhr.send(s)
        }
      }, g.unsafeHeaders = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "content-transfer-encoding", "date", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "user-agent", "via"], g.prototype.isSafeRequestHeader = function(e) {
        return !!e && w(g.unsafeHeaders, e.toLowerCase()) === -1
      };
      var m = Object.keys || function(e) {
          var t = [];
          for (var n in e) t.push(n);
          return t
        },
        v = Array.isArray || function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        w = function(e, t) {
          if (e.indexOf) return e.indexOf(t);
          for (var n = 0; n < e.length; n++)
            if (e[n] === t) return n;
          return -1
        }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/lib/request.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/lib")
  }, {
    "./response": 26,
    "1YiZ5S": 30,
    Base64: 27,
    buffer: 20,
    inherits: 29,
    stream: 36
  }],
  26: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l(e) {
        for (var t = e.getAllResponseHeaders().split(/\r?\n/), n = {}, i = 0; i < t.length; i++) {
          var r = t[i];
          if ("" !== r) {
            var o = r.match(/^([^:]+):\s*(.*)/);
            if (o) {
              var s = o[1].toLowerCase(),
                a = o[2];
              void 0 !== n[s] ? m(n[s]) ? n[s].push(a) : n[s] = [n[s], a] : n[s] = a
            } else n[r] = !0
          }
        }
        return n
      }
      var f = e("stream"),
        h = e("util"),
        p = t.exports = function(e) {
          this.offset = 0, this.readable = !0
        };
      h.inherits(p, f);
      var g = {
        streaming: !0,
        status2: !0
      };
      p.prototype.getResponse = function(e) {
        var t = String(e.responseType).toLowerCase();
        return "blob" === t ? e.responseBlob || e.response : "arraybuffer" === t ? e.response : e.responseText
      }, p.prototype.getHeader = function(e) {
        return this.headers[e.toLowerCase()]
      }, p.prototype.handle = function(e) {
        if (2 === e.readyState && g.status2) {
          try {
            this.statusCode = e.status, this.headers = l(e)
          } catch (e) {
            g.status2 = !1
          }
          g.status2 && this.emit("ready")
        } else if (g.streaming && 3 === e.readyState) {
          try {
            this.statusCode || (this.statusCode = e.status, this.headers = l(e), this.emit("ready"))
          } catch (e) {}
          try {
            this._emitData(e)
          } catch (e) {
            g.streaming = !1
          }
        } else 4 === e.readyState && (this.statusCode || (this.statusCode = e.status, this.emit("ready")), this._emitData(e), e.error ? this.emit("error", this.getResponse(e)) : this.emit("end"), this.emit("close"))
      }, p.prototype._emitData = function(e) {
        var t = this.getResponse(e);
        return t.toString().match(/ArrayBuffer/) ? (this.emit("data", new Uint8Array(t, this.offset)), void(this.offset = t.byteLength)) : void(t.length > this.offset && (this.emit("data", t.slice(this.offset)), this.offset = t.length))
      };
      var m = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/lib/response.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/lib")
  }, {
    "1YiZ5S": 30,
    buffer: 20,
    stream: 36,
    util: 46
  }],
  27: [function(e, t, n) {
    (function(e, t, i, r, o, s, a, c, d) {
      ! function() {
        function e(e) {
          this.message = e
        }
        var t = "undefined" != typeof n ? n : this,
          i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        e.prototype = new Error, e.prototype.name = "InvalidCharacterError", t.btoa || (t.btoa = function(t) {
          for (var n, r, o = 0, s = i, a = ""; t.charAt(0 | o) || (s = "=", o % 1); a += s.charAt(63 & n >> 8 - o % 1 * 8)) {
            if (r = t.charCodeAt(o += .75), r > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
            n = n << 8 | r
          }
          return a
        }), t.atob || (t.atob = function(t) {
          if (t = t.replace(/=+$/, ""), t.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
          for (var n, r, o = 0, s = 0, a = ""; r = t.charAt(s++); ~r && (n = o % 4 ? 64 * n + r : r, o++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * o & 6)) : 0) r = i.indexOf(r);
          return a
        })
      }()
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/node_modules/Base64/base64.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/http-browserify/node_modules/Base64")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  28: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      var l = e("http"),
        f = t.exports;
      for (var h in l) l.hasOwnProperty(h) && (f[h] = l[h]);
      f.request = function(e, t) {
        return e || (e = {}), e.scheme = "https", e.protocol = "https:", l.request.call(this, e, t)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/https-browserify/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/https-browserify")
  }, {
    "1YiZ5S": 30,
    buffer: 20,
    http: 24
  }],
  29: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      "function" == typeof Object.create ? t.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })
      } : t.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/inherits/inherits_browser.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/inherits");
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  30: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      function u() {}
      var e = t.exports = {};
      e.nextTick = function() {
        var e = "undefined" != typeof window && window.setImmediate,
          t = "undefined" != typeof window && window.postMessage && window.addEventListener;
        if (e) return function(e) {
          return window.setImmediate(e)
        };
        if (t) {
          var n = [];
          return window.addEventListener("message", function(e) {
              var t = e.source;
              if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), n.length > 0)) {
                var i = n.shift();
                i()
              }
            }, !0),
            function(e) {
              n.push(e), window.postMessage("process-tick", "*")
            }
        }
        return function(e) {
          setTimeout(e, 0)
        }
      }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.on = u, e.addListener = u, e.once = u, e.off = u, e.removeListener = u, e.removeAllListeners = u, e.emit = u, e.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, e.cwd = function() {
        return "/"
      }, e.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  31: [function(e, t, n) {
    (function(e, i, r, o, s, a, c, d, u) {
      ! function(e) {
        function r(e) {
          throw RangeError(O[e])
        }

        function o(e, t) {
          for (var n = e.length; n--;) e[n] = t(e[n]);
          return e
        }

        function s(e, t) {
          return o(e.split(k), t).join(".")
        }

        function a(e) {
          for (var t, n, i = [], r = 0, o = e.length; r < o;) t = e.charCodeAt(r++), t >= 55296 && t <= 56319 && r < o ? (n = e.charCodeAt(r++), 56320 == (64512 & n) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--)) : i.push(t);
          return i
        }

        function c(e) {
          return o(e, function(e) {
            var t = "";
            return e > 65535 && (e -= 65536, t += x(e >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += x(e)
          }).join("")
        }

        function d(e) {
          return e - 48 < 10 ? e - 22 : e - 65 < 26 ? e - 65 : e - 97 < 26 ? e - 97 : S
        }

        function u(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }

        function l(e, t, n) {
          var i = 0;
          for (e = n ? N(e / E) : e >> 1, e += N(e / t); e > W * C >> 1; i += S) e = N(e / W);
          return N(i + (W + 1) * e / (e + T))
        }

        function f(e) {
          var t, n, i, o, s, a, u, f, h, p, g = [],
            m = e.length,
            v = 0,
            w = A,
            b = R;
          for (n = e.lastIndexOf(P), n < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && r("not-basic"), g.push(e.charCodeAt(i));
          for (o = n > 0 ? n + 1 : 0; o < m;) {
            for (s = v, a = 1, u = S; o >= m && r("invalid-input"), f = d(e.charCodeAt(o++)), (f >= S || f > N((_ - v) / a)) && r("overflow"), v += f * a, h = u <= b ? I : u >= b + C ? C : u - b, !(f < h); u += S) p = S - h, a > N(_ / p) && r("overflow"), a *= p;
            t = g.length + 1, b = l(v - s, t, 0 == s), N(v / t) > _ - w && r("overflow"), w += N(v / t), v %= t, g.splice(v++, 0, w)
          }
          return c(g)
        }

        function h(e) {
          var t, n, i, o, s, c, d, f, h, p, g, m, v, w, b, y = [];
          for (e = a(e), m = e.length, t = A, n = 0, s = R, c = 0; c < m; ++c) g = e[c], g < 128 && y.push(x(g));
          for (i = o = y.length, o && y.push(P); i < m;) {
            for (d = _, c = 0; c < m; ++c) g = e[c], g >= t && g < d && (d = g);
            for (v = i + 1, d - t > N((_ - n) / v) && r("overflow"), n += (d - t) * v, t = d, c = 0; c < m; ++c)
              if (g = e[c], g < t && ++n > _ && r("overflow"), g == t) {
                for (f = n, h = S; p = h <= s ? I : h >= s + C ? C : h - s, !(f < p); h += S) b = f - p, w = S - p, y.push(x(u(p + b % w, 0))), f = N(b / w);
                y.push(x(u(f, 0))), s = l(n, v, i == o), n = 0, ++i
              }++n, ++t
          }
          return y.join("")
        }

        function p(e) {
          return s(e, function(e) {
            return L.test(e) ? f(e.slice(4).toLowerCase()) : e
          })
        }

        function g(e) {
          return s(e, function(e) {
            return j.test(e) ? "xn--" + h(e) : e
          })
        }
        var m = "object" == typeof n && n,
          v = "object" == typeof t && t && t.exports == m && t,
          w = "object" == typeof i && i;
        w.global !== w && w.window !== w || (e = w);
        var b, y, _ = 2147483647,
          S = 36,
          I = 1,
          C = 26,
          T = 38,
          E = 700,
          R = 72,
          A = 128,
          P = "-",
          L = /^xn--/,
          j = /[^ -~]/,
          k = /\x2E|\u3002|\uFF0E|\uFF61/g,
          O = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          },
          W = S - I,
          N = Math.floor,
          x = String.fromCharCode;
        if (b = {
            version: "1.2.4",
            ucs2: {
              decode: a,
              encode: c
            },
            decode: f,
            encode: h,
            toASCII: g,
            toUnicode: p
          }, "function" == typeof define && "object" == typeof define.amd && define.amd) define("punycode", function() {
          return b
        });
        else if (m && !m.nodeType)
          if (v) v.exports = b;
          else
            for (y in b) b.hasOwnProperty(y) && (m[y] = b[y]);
        else e.punycode = b
      }(this)
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/punycode/punycode.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/punycode")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  32: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      "use strict";

      function u(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      t.exports = function(e, t, n, i) {
        t = t || "&", n = n || "=";
        var r = {};
        if ("string" != typeof e || 0 === e.length) return r;
        var o = /\+/g;
        e = e.split(t);
        var s = 1e3;
        i && "number" == typeof i.maxKeys && (s = i.maxKeys);
        var a = e.length;
        s > 0 && a > s && (a = s);
        for (var c = 0; c < a; ++c) {
          var d, f, h, p, g = e[c].replace(o, "%20"),
            m = g.indexOf(n);
          m >= 0 ? (d = g.substr(0, m), f = g.substr(m + 1)) : (d = g, f = ""), h = decodeURIComponent(d), p = decodeURIComponent(f), u(r, h) ? l(r[h]) ? r[h].push(p) : r[h] = [r[h], p] : r[h] = p
        }
        return r
      };
      var l = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/querystring-es3/decode.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/querystring-es3")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  33: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      "use strict";

      function u(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], i = 0; i < e.length; i++) n.push(t(e[i], i));
        return n
      }
      var l = function(e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return ""
        }
      };
      t.exports = function(e, t, n, i) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? u(h(e), function(i) {
          var r = encodeURIComponent(l(i)) + n;
          return f(e[i]) ? e[i].map(function(e) {
            return r + encodeURIComponent(l(e))
          }).join(t) : r + encodeURIComponent(l(e[i]))
        }).join(t) : i ? encodeURIComponent(l(i)) + n + encodeURIComponent(l(e)) : ""
      };
      var f = Array.isArray || function(e) {
          return "[object Array]" === Object.prototype.toString.call(e)
        },
        h = Object.keys || function(e) {
          var t = [];
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
          return t
        }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/querystring-es3/encode.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/querystring-es3")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  34: [function(e, t, n) {
    (function(t, i, r, o, s, a, c, d, u) {
      "use strict";
      n.decode = n.parse = e("./decode"), n.encode = n.stringify = e("./encode")
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/querystring-es3/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/querystring-es3")
  }, {
    "./decode": 32,
    "./encode": 33,
    "1YiZ5S": 30,
    buffer: 20
  }],
  35: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l(e) {
        return this instanceof l ? (g.call(this, e), m.call(this, e), e && e.readable === !1 && (this.readable = !1), e && e.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1), void this.once("end", f)) : new l(e)
      }

      function f() {
        if (!this.allowHalfOpen && !this._writableState.ended) {
          var e = this;
          p(function() {
            e.end()
          })
        }
      }
      t.exports = l;
      var h = e("inherits"),
        p = e("process/browser.js").nextTick,
        g = e("./readable.js"),
        m = e("./writable.js");
      h(l, g), l.prototype.write = m.prototype.write, l.prototype.end = m.prototype.end, l.prototype._write = m.prototype._write
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/duplex.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify")
  }, {
    "./readable.js": 39,
    "./writable.js": 41,
    "1YiZ5S": 30,
    buffer: 20,
    inherits: 29,
    "process/browser.js": 37
  }],
  36: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l() {
        f.call(this)
      }
      t.exports = l;
      var f = e("events").EventEmitter,
        h = e("inherits");
      h(l, f), l.Readable = e("./readable.js"), l.Writable = e("./writable.js"), l.Duplex = e("./duplex.js"), l.Transform = e("./transform.js"), l.PassThrough = e("./passthrough.js"), l.Stream = l, l.prototype.pipe = function(e, t) {
        function n(t) {
          e.writable && !1 === e.write(t) && c.pause && c.pause()
        }

        function i() {
          c.readable && c.resume && c.resume()
        }

        function r() {
          d || (d = !0, e.end())
        }

        function o() {
          d || (d = !0, "function" == typeof e.destroy && e.destroy())
        }

        function s(e) {
          if (a(), 0 === f.listenerCount(this, "error")) throw e
        }

        function a() {
          c.removeListener("data", n), e.removeListener("drain", i), c.removeListener("end", r), c.removeListener("close", o), c.removeListener("error", s), e.removeListener("error", s), c.removeListener("end", a), c.removeListener("close", a), e.removeListener("close", a)
        }
        var c = this;
        c.on("data", n), e.on("drain", i), e._isStdio || t && t.end === !1 || (c.on("end", r), c.on("close", o));
        var d = !1;
        return c.on("error", s), e.on("error", s), c.on("end", a), c.on("close", a), e.on("close", a), e.emit("pipe", c), e
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify")
  }, {
    "./duplex.js": 35,
    "./passthrough.js": 38,
    "./readable.js": 39,
    "./transform.js": 40,
    "./writable.js": 41,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23,
    inherits: 29
  }],
  37: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      var e = t.exports = {};
      e.nextTick = function() {
        var e = "undefined" != typeof window && window.setImmediate,
          t = "undefined" != typeof window && window.postMessage && window.addEventListener;
        if (e) return function(e) {
          return window.setImmediate(e)
        };
        if (t) {
          var n = [];
          return window.addEventListener("message", function(e) {
              var t = e.source;
              if ((t === window || null === t) && "process-tick" === e.data && (e.stopPropagation(), n.length > 0)) {
                var i = n.shift();
                i()
              }
            }, !0),
            function(e) {
              n.push(e), window.postMessage("process-tick", "*")
            }
        }
        return function(e) {
          setTimeout(e, 0)
        }
      }(), e.title = "browser", e.browser = !0, e.env = {}, e.argv = [], e.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, e.cwd = function() {
        return "/"
      }, e.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/node_modules/process/browser.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/node_modules/process")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  38: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l(e) {
        return this instanceof l ? void f.call(this, e) : new l(e)
      }
      t.exports = l;
      var f = e("./transform.js"),
        h = e("inherits");
      h(l, f), l.prototype._transform = function(e, t, n) {
        n(null, e)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/passthrough.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify")
  }, {
    "./transform.js": 40,
    "1YiZ5S": 30,
    buffer: 20,
    inherits: 29
  }],
  39: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l(t, n) {
        t = t || {};
        var i = t.highWaterMark;
        this.highWaterMark = i || 0 === i ? i : 16384, this.highWaterMark = ~~this.highWaterMark, this.buffer = [], this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = !1, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.calledRead = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.objectMode = !!t.objectMode, this.defaultEncoding = t.defaultEncoding || "utf8", this.ranOut = !1, this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (j || (j = e("string_decoder").StringDecoder), this.decoder = new j(t.encoding), this.encoding = t.encoding)
      }

      function f(e) {
        return this instanceof f ? (this._readableState = new l(e, this), this.readable = !0, void O.call(this)) : new f(e)
      }

      function h(e, t, n, i, r) {
        var o = v(t, n);
        if (o) e.emit("error", o);
        else if (null === n || void 0 === n) t.reading = !1, t.ended || w(e, t);
        else if (t.objectMode || n && n.length > 0)
          if (t.ended && !r) {
            var s = new Error("stream.push() after EOF");
            e.emit("error", s)
          } else if (t.endEmitted && r) {
          var s = new Error("stream.unshift() after end event");
          e.emit("error", s)
        } else !t.decoder || r || i || (n = t.decoder.write(n)), t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : (t.reading = !1, t.buffer.push(n)), t.needReadable && b(e), _(e, t);
        else r || (t.reading = !1);
        return p(t)
      }

      function p(e) {
        return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
      }

      function g(e) {
        if (e >= x) e = x;
        else {
          e--;
          for (var t = 1; t < 32; t <<= 1) e |= e >> t;
          e++
        }
        return e
      }

      function m(e, t) {
        return 0 === t.length && t.ended ? 0 : t.objectMode ? 0 === e ? 0 : 1 : isNaN(e) || null === e ? t.flowing && t.buffer.length ? t.buffer[0].length : t.length : e <= 0 ? 0 : (e > t.highWaterMark && (t.highWaterMark = g(e)), e > t.length ? t.ended ? t.length : (t.needReadable = !0, 0) : e)
      }

      function v(e, t) {
        var n = null;
        return r.isBuffer(t) || "string" == typeof t || null === t || void 0 === t || e.objectMode || n || (n = new TypeError("Invalid non-string/buffer chunk")), n
      }

      function w(e, t) {
        if (t.decoder && !t.ended) {
          var n = t.decoder.end();
          n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
        }
        t.ended = !0, t.length > 0 ? b(e) : A(e)
      }

      function b(e) {
        var t = e._readableState;
        t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, t.sync ? W(function() {
          y(e)
        }) : y(e))
      }

      function y(e) {
        e.emit("readable")
      }

      function _(e, t) {
        t.readingMore || (t.readingMore = !0, W(function() {
          S(e, t)
        }))
      }

      function S(e, t) {
        for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (e.read(0), n !== t.length);) n = t.length;
        t.readingMore = !1
      }

      function I(e) {
        return function() {
          var t = e._readableState;
          t.awaitDrain--, 0 === t.awaitDrain && C(e)
        }
      }

      function C(e) {
        function t(e, t, r) {
          var o = e.write(n);
          !1 === o && i.awaitDrain++
        }
        var n, i = e._readableState;
        for (i.awaitDrain = 0; i.pipesCount && null !== (n = e.read());)
          if (1 === i.pipesCount ? t(i.pipes, 0, null) : P(i.pipes, t), e.emit("data", n), i.awaitDrain > 0) return;
        return 0 === i.pipesCount ? (i.flowing = !1, void(k.listenerCount(e, "data") > 0 && E(e))) : void(i.ranOut = !0)
      }

      function T() {
        this._readableState.ranOut && (this._readableState.ranOut = !1, C(this))
      }

      function E(e, t) {
        var n = e._readableState;
        if (n.flowing) throw new Error("Cannot switch to old mode now.");
        var i = t || !1,
          r = !1;
        e.readable = !0, e.pipe = O.prototype.pipe, e.on = e.addListener = O.prototype.on, e.on("readable", function() {
          r = !0;
          for (var t; !i && null !== (t = e.read());) e.emit("data", t);
          null === t && (r = !1, e._readableState.needReadable = !0)
        }), e.pause = function() {
          i = !0, this.emit("pause")
        }, e.resume = function() {
          i = !1, r ? W(function() {
            e.emit("readable")
          }) : this.read(0), this.emit("resume")
        }, e.emit("readable")
      }

      function R(e, t) {
        var n, i = t.buffer,
          o = t.length,
          s = !!t.decoder,
          a = !!t.objectMode;
        if (0 === i.length) return null;
        if (0 === o) n = null;
        else if (a) n = i.shift();
        else if (!e || e >= o) n = s ? i.join("") : r.concat(i, o), i.length = 0;
        else if (e < i[0].length) {
          var c = i[0];
          n = c.slice(0, e), i[0] = c.slice(e)
        } else if (e === i[0].length) n = i.shift();
        else {
          n = s ? "" : new r(e);
          for (var d = 0, u = 0, l = i.length; u < l && d < e; u++) {
            var c = i[0],
              f = Math.min(e - d, c.length);
            s ? n += c.slice(0, f) : c.copy(n, d, 0, f), f < c.length ? i[0] = c.slice(f) : i.shift(), d += f
          }
        }
        return n
      }

      function A(e) {
        var t = e._readableState;
        if (t.length > 0) throw new Error("endReadable called on non-empty stream");
        !t.endEmitted && t.calledRead && (t.ended = !0, W(function() {
          t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"))
        }))
      }

      function P(e, t) {
        for (var n = 0, i = e.length; n < i; n++) t(e[n], n)
      }

      function L(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
          if (e[n] === t) return n;
        return -1
      }
      t.exports = f, f.ReadableState = l;
      var j, k = e("events").EventEmitter,
        O = e("./index.js"),
        r = e("buffer").Buffer,
        W = e("process/browser.js").nextTick,
        N = e("inherits");
      N(f, O), f.prototype.push = function(e, t) {
        var n = this._readableState;
        return "string" != typeof e || n.objectMode || (t = t || n.defaultEncoding, t !== n.encoding && (e = new r(e, t), t = "")), h(this, n, e, t, !1)
      }, f.prototype.unshift = function(e) {
        var t = this._readableState;
        return h(this, t, e, "", !0)
      }, f.prototype.setEncoding = function(t) {
        j || (j = e("string_decoder").StringDecoder), this._readableState.decoder = new j(t), this._readableState.encoding = t
      };
      var x = 8388608;
      f.prototype.read = function(e) {
        var t = this._readableState;
        t.calledRead = !0;
        var n = e;
        if (("number" != typeof e || e > 0) && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return b(this), null;
        if (e = m(e, t), 0 === e && t.ended) return 0 === t.length && A(this), null;
        var i = t.needReadable;
        t.length - e <= t.highWaterMark && (i = !0), (t.ended || t.reading) && (i = !1), i && (t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1), i && !t.reading && (e = m(n, t));
        var r;
        return r = e > 0 ? R(e, t) : null, null === r && (t.needReadable = !0, e = 0), t.length -= e, 0 !== t.length || t.ended || (t.needReadable = !0), t.ended && !t.endEmitted && 0 === t.length && A(this), r
      }, f.prototype._read = function(e) {
        this.emit("error", new Error("not implemented"))
      }, f.prototype.pipe = function(e, t) {
        function i(e) {
          e === u && o()
        }

        function r() {
          e.end()
        }

        function o() {
          e.removeListener("close", a), e.removeListener("finish", c), e.removeListener("drain", p), e.removeListener("error", s), e.removeListener("unpipe", i), u.removeListener("end", r), u.removeListener("end", o), e._writableState && !e._writableState.needDrain || p()
        }

        function s(t) {
          d(), 0 === g && 0 === k.listenerCount(e, "error") && e.emit("error", t)
        }

        function a() {
          e.removeListener("finish", c), d()
        }

        function c() {
          e.removeListener("close", a), d()
        }

        function d() {
          u.unpipe(e)
        }
        var u = this,
          l = this._readableState;
        switch (l.pipesCount) {
          case 0:
            l.pipes = e;
            break;
          case 1:
            l.pipes = [l.pipes, e];
            break;
          default:
            l.pipes.push(e)
        }
        l.pipesCount += 1;
        var f = (!t || t.end !== !1) && e !== n.stdout && e !== n.stderr,
          h = f ? r : o;
        l.endEmitted ? W(h) : u.once("end", h), e.on("unpipe", i);
        var p = I(u);
        e.on("drain", p);
        var g = k.listenerCount(e, "error");
        return e.once("error", s), e.once("close", a), e.once("finish", c), e.emit("pipe", u), l.flowing || (this.on("readable", T), l.flowing = !0, W(function() {
          C(u)
        })), e
      }, f.prototype.unpipe = function(e) {
        var t = this._readableState;
        if (0 === t.pipesCount) return this;
        if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, this.removeListener("readable", T), t.flowing = !1, e && e.emit("unpipe", this), this);
        if (!e) {
          var n = t.pipes,
            i = t.pipesCount;
          t.pipes = null, t.pipesCount = 0, this.removeListener("readable", T), t.flowing = !1;
          for (var r = 0; r < i; r++) n[r].emit("unpipe", this);
          return this
        }
        var r = L(t.pipes, e);
        return r === -1 ? this : (t.pipes.splice(r, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this), this)
      }, f.prototype.on = function(e, t) {
        var n = O.prototype.on.call(this, e, t);
        if ("data" !== e || this._readableState.flowing || E(this), "readable" === e && this.readable) {
          var i = this._readableState;
          i.readableListening || (i.readableListening = !0, i.emittedReadable = !1, i.needReadable = !0, i.reading ? i.length && b(this, i) : this.read(0))
        }
        return n
      }, f.prototype.addListener = f.prototype.on, f.prototype.resume = function() {
        E(this), this.read(0), this.emit("resume")
      }, f.prototype.pause = function() {
        E(this, !0), this.emit("pause")
      }, f.prototype.wrap = function(e) {
        var t = this._readableState,
          n = !1,
          i = this;
        e.on("end", function() {
          if (t.decoder && !t.ended) {
            var e = t.decoder.end();
            e && e.length && i.push(e)
          }
          i.push(null)
        }), e.on("data", function(r) {
          if (t.decoder && (r = t.decoder.write(r)), r && (t.objectMode || r.length)) {
            var o = i.push(r);
            o || (n = !0, e.pause())
          }
        });
        for (var r in e) "function" == typeof e[r] && "undefined" == typeof this[r] && (this[r] = function(t) {
          return function() {
            return e[t].apply(e, arguments)
          }
        }(r));
        var o = ["error", "close", "destroy", "pause", "resume"];
        return P(o, function(t) {
          e.on(t, function(e) {
            return i.emit.apply(i, t, e)
          })
        }), i._read = function(t) {
          n && (n = !1, e.resume())
        }, i
      }, f._fromList = R
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/readable.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify")
  }, {
    "./index.js": 36,
    "1YiZ5S": 30,
    buffer: 20,
    events: 23,
    inherits: 29,
    "process/browser.js": 37,
    string_decoder: 42
  }],
  40: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l(e, t) {
        this.afterTransform = function(e, n) {
          return f(t, e, n)
        }, this.needTransform = !1, this.transforming = !1, this.writecb = null, this.writechunk = null
      }

      function f(e, t, n) {
        var i = e._transformState;
        i.transforming = !1;
        var r = i.writecb;
        if (!r) return e.emit("error", new Error("no writecb in Transform class"));
        i.writechunk = null, i.writecb = null, null !== n && void 0 !== n && e.push(n), r && r(t);
        var o = e._readableState;
        o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && e._read(o.highWaterMark)
      }

      function h(e) {
        if (!(this instanceof h)) return new h(e);
        g.call(this, e);
        var t = (this._transformState = new l(e, this), this);
        this._readableState.needReadable = !0, this._readableState.sync = !1, this.once("finish", function() {
          "function" == typeof this._flush ? this._flush(function(e) {
            p(t, e)
          }) : p(t)
        })
      }

      function p(e, t) {
        if (t) return e.emit("error", t);
        var n = e._writableState,
          i = (e._readableState, e._transformState);
        if (n.length) throw new Error("calling transform done when ws.length != 0");
        if (i.transforming) throw new Error("calling transform done when still transforming");
        return e.push(null)
      }
      t.exports = h;
      var g = e("./duplex.js"),
        m = e("inherits");
      m(h, g), h.prototype.push = function(e, t) {
        return this._transformState.needTransform = !1, g.prototype.push.call(this, e, t)
      }, h.prototype._transform = function(e, t, n) {
        throw new Error("not implemented")
      }, h.prototype._write = function(e, t, n) {
        var i = this._transformState;
        if (i.writecb = n, i.writechunk = e, i.writeencoding = t, !i.transforming) {
          var r = this._readableState;
          (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)
        }
      }, h.prototype._read = function(e) {
        var t = this._transformState;
        t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/transform.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify")
  }, {
    "./duplex.js": 35,
    "1YiZ5S": 30,
    buffer: 20,
    inherits: 29
  }],
  41: [function(e, t, n) {
    (function(n, i, r, o, s, a, c, d, u) {
      function l(e, t, n) {
        this.chunk = e, this.encoding = t, this.callback = n
      }

      function f(e, t) {
        e = e || {};
        var n = e.highWaterMark;
        this.highWaterMark = n || 0 === n ? n : 16384, this.objectMode = !!e.objectMode, this.highWaterMark = ~~this.highWaterMark, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1;
        var i = e.decodeStrings === !1;
        this.decodeStrings = !i, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
          _(t, e)
        }, this.writecb = null, this.writelen = 0, this.buffer = []
      }

      function h(e) {
        return this instanceof h || this instanceof j.Duplex ? (this._writableState = new f(e, this), this.writable = !0, void j.call(this)) : new h(e)
      }

      function p(e, t, n) {
        var i = new Error("write after end");
        e.emit("error", i), k(function() {
          n(i)
        })
      }

      function g(e, t, n, i) {
        var o = !0;
        if (!r.isBuffer(n) && "string" != typeof n && null !== n && void 0 !== n && !t.objectMode) {
          var s = new TypeError("Invalid non-string/buffer chunk");
          e.emit("error", s), k(function() {
            i(s)
          }), o = !1
        }
        return o
      }

      function m(e, t, n) {
        return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = new r(t, n)), t
      }

      function v(e, t, n, i, r) {
        n = m(t, n, i);
        var o = t.objectMode ? 1 : n.length;
        t.length += o;
        var s = t.length < t.highWaterMark;
        return t.needDrain = !s, t.writing ? t.buffer.push(new l(n, i, r)) : w(e, t, o, n, i, r), s
      }

      function w(e, t, n, i, r, o) {
        t.writelen = n, t.writecb = o, t.writing = !0, t.sync = !0, e._write(i, r, t.onwrite), t.sync = !1
      }

      function b(e, t, n, i, r) {
        n ? k(function() {
          r(i)
        }) : r(i), e.emit("error", i)
      }

      function y(e) {
        e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
      }

      function _(e, t) {
        var n = e._writableState,
          i = n.sync,
          r = n.writecb;
        if (y(n), t) b(e, n, i, t, r);
        else {
          var o = T(e, n);
          o || n.bufferProcessing || !n.buffer.length || C(e, n), i ? k(function() {
            S(e, n, o, r)
          }) : S(e, n, o, r)
        }
      }

      function S(e, t, n, i) {
        n || I(e, t), i(), n && E(e, t)
      }

      function I(e, t) {
        0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
      }

      function C(e, t) {
        t.bufferProcessing = !0;
        for (var n = 0; n < t.buffer.length; n++) {
          var i = t.buffer[n],
            r = i.chunk,
            o = i.encoding,
            s = i.callback,
            a = t.objectMode ? 1 : r.length;
          if (w(e, t, a, r, o, s), t.writing) {
            n++;
            break
          }
        }
        t.bufferProcessing = !1, n < t.buffer.length ? t.buffer = t.buffer.slice(n) : t.buffer.length = 0
      }

      function T(e, t) {
        return t.ending && 0 === t.length && !t.finished && !t.writing
      }

      function E(e, t) {
        var n = T(e, t);
        return n && (t.finished = !0, e.emit("finish")), n
      }

      function R(e, t, n) {
        t.ending = !0, E(e, t), n && (t.finished ? k(n) : e.once("finish", n)), t.ended = !0
      }
      t.exports = h, h.WritableState = f;
      var A = "undefined" != typeof Uint8Array ? function(e) {
          return e instanceof Uint8Array
        } : function(e) {
          return e && e.constructor && "Uint8Array" === e.constructor.name
        },
        P = "undefined" != typeof ArrayBuffer ? function(e) {
          return e instanceof ArrayBuffer
        } : function(e) {
          return e && e.constructor && "ArrayBuffer" === e.constructor.name
        },
        L = e("inherits"),
        j = e("./index.js"),
        k = e("process/browser.js").nextTick,
        r = e("buffer").Buffer;
      L(h, j), h.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe. Not readable."))
      }, h.prototype.write = function(e, t, n) {
        var i = this._writableState,
          o = !1;
        return "function" == typeof t && (n = t, t = null), !r.isBuffer(e) && A(e) && (e = new r(e)), P(e) && "undefined" != typeof Uint8Array && (e = new r(new Uint8Array(e))), r.isBuffer(e) ? t = "buffer" : t || (t = i.defaultEncoding), "function" != typeof n && (n = function() {}), i.ended ? p(this, i, n) : g(this, i, e, n) && (o = v(this, i, e, t, n)), o
      }, h.prototype._write = function(e, t, n) {
        n(new Error("not implemented"))
      }, h.prototype.end = function(e, t, n) {
        var i = this._writableState;
        "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), "undefined" != typeof e && null !== e && this.write(e, t), i.ending || i.finished || R(this, i, n)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify/writable.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/stream-browserify")
  }, {
    "./index.js": 36,
    "1YiZ5S": 30,
    buffer: 20,
    inherits: 29,
    "process/browser.js": 37
  }],
  42: [function(e, t, n) {
    (function(t, i, r, o, s, a, c, d, u) {
      function l(e) {
        if (e && !r.isEncoding(e)) throw new Error("Unknown encoding: " + e)
      }

      function f(e) {
        return e.toString(this.encoding)
      }

      function h(e) {
        var t = this.charReceived = e.length % 2;
        return this.charLength = t ? 2 : 0, t
      }

      function p(e) {
        var t = this.charReceived = e.length % 3;
        return this.charLength = t ? 3 : 0, t
      }
      var r = e("buffer").Buffer,
        g = n.StringDecoder = function(e) {
          switch (this.encoding = (e || "utf8").toLowerCase().replace(/[-_]/, ""), l(e), this.encoding) {
            case "utf8":
              this.surrogateSize = 3;
              break;
            case "ucs2":
            case "utf16le":
              this.surrogateSize = 2, this.detectIncompleteChar = h;
              break;
            case "base64":
              this.surrogateSize = 3, this.detectIncompleteChar = p;
              break;
            default:
              return void(this.write = f)
          }
          this.charBuffer = new r(6), this.charReceived = 0, this.charLength = 0
        };
      g.prototype.write = function(e) {
        for (var t = "", n = 0; this.charLength;) {
          var i = e.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e.length;
          if (e.copy(this.charBuffer, this.charReceived, n, i), this.charReceived += i - n, n = i, this.charReceived < this.charLength) return "";
          t = this.charBuffer.slice(0, this.charLength).toString(this.encoding);
          var r = t.charCodeAt(t.length - 1);
          if (!(r >= 55296 && r <= 56319)) {
            if (this.charReceived = this.charLength = 0, i == e.length) return t;
            e = e.slice(i, e.length);
            break
          }
          this.charLength += this.surrogateSize, t = ""
        }
        var o = this.detectIncompleteChar(e),
          s = e.length;
        this.charLength && (e.copy(this.charBuffer, 0, e.length - o, s), this.charReceived = o, s -= o), t += e.toString(this.encoding, 0, s);
        var s = t.length - 1,
          r = t.charCodeAt(s);
        if (r >= 55296 && r <= 56319) {
          var a = this.surrogateSize;
          return this.charLength += a, this.charReceived += a, this.charBuffer.copy(this.charBuffer, a, 0, a), this.charBuffer.write(t.charAt(t.length - 1), this.encoding), t.substring(0, s)
        }
        return t
      }, g.prototype.detectIncompleteChar = function(e) {
        for (var t = e.length >= 3 ? 3 : e.length; t > 0; t--) {
          var n = e[e.length - t];
          if (1 == t && n >> 5 == 6) {
            this.charLength = 2;
            break
          }
          if (t <= 2 && n >> 4 == 14) {
            this.charLength = 3;
            break
          }
          if (t <= 3 && n >> 3 == 30) {
            this.charLength = 4;
            break
          }
        }
        return t
      }, g.prototype.end = function(e) {
        var t = "";
        if (e && e.length && (t = this.write(e)), this.charReceived) {
          var n = this.charReceived,
            i = this.charBuffer,
            r = this.encoding;
          t += i.slice(0, n).toString(r)
        }
        return t
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/string_decoder/index.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/string_decoder")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  43: [function(e, t, n) {
    (function(t, i, r, o, s, a, c, d, u) {
      function l() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
      }

      function f(e, t, n) {
        if (e && v(e) && e instanceof l) return e;
        var i = new l;
        return i.parse(e, t, n), i
      }

      function h(e) {
        return m(e) && (e = f(e)), e instanceof l ? e.format() : l.prototype.format.call(e)
      }

      function p(e, t) {
        return f(e, !1, !0).resolve(t)
      }

      function g(e, t) {
        return e ? f(e, !1, !0).resolveObject(t) : t
      }

      function m(e) {
        return "string" == typeof e
      }

      function v(e) {
        return "object" == typeof e && null !== e
      }

      function w(e) {
        return null === e
      }

      function b(e) {
        return null == e
      }
      var y = e("punycode");
      n.parse = f, n.resolve = p, n.resolveObject = g, n.format = h, n.Url = l;
      var _ = /^([a-z0-9.+-]+:)/i,
        S = /:[0-9]*$/,
        I = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        C = ["{", "}", "|", "\\", "^", "`"].concat(I),
        T = ["'"].concat(C),
        E = ["%", "/", "?", ";", "#"].concat(T),
        R = ["/", "?", "#"],
        A = 255,
        P = /^[a-z0-9A-Z_-]{0,63}$/,
        L = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
        j = {
          javascript: !0,
          "javascript:": !0
        },
        k = {
          javascript: !0,
          "javascript:": !0
        },
        O = {
          http: !0,
          https: !0,
          ftp: !0,
          gopher: !0,
          file: !0,
          "http:": !0,
          "https:": !0,
          "ftp:": !0,
          "gopher:": !0,
          "file:": !0
        },
        W = e("querystring");
      l.prototype.parse = function(e, t, n) {
        if (!m(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var i = e;
        i = i.trim();
        var r = _.exec(i);
        if (r) {
          r = r[0];
          var o = r.toLowerCase();
          this.protocol = o, i = i.substr(r.length)
        }
        if (n || r || i.match(/^\/\/[^@\/]+@[^@\/]+/)) {
          var s = "//" === i.substr(0, 2);
          !s || r && k[r] || (i = i.substr(2), this.slashes = !0)
        }
        if (!k[r] && (s || r && !O[r])) {
          for (var a = -1, c = 0; c < R.length; c++) {
            var d = i.indexOf(R[c]);
            d !== -1 && (a === -1 || d < a) && (a = d)
          }
          var u, l;
          l = a === -1 ? i.lastIndexOf("@") : i.lastIndexOf("@", a), l !== -1 && (u = i.slice(0, l), i = i.slice(l + 1), this.auth = decodeURIComponent(u)), a = -1;
          for (var c = 0; c < E.length; c++) {
            var d = i.indexOf(E[c]);
            d !== -1 && (a === -1 || d < a) && (a = d)
          }
          a === -1 && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || "";
          var f = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
          if (!f)
            for (var h = this.hostname.split(/\./), c = 0, p = h.length; c < p; c++) {
              var g = h[c];
              if (g && !g.match(P)) {
                for (var v = "", w = 0, b = g.length; w < b; w++) v += g.charCodeAt(w) > 127 ? "x" : g[w];
                if (!v.match(P)) {
                  var S = h.slice(0, c),
                    I = h.slice(c + 1),
                    C = g.match(L);
                  C && (S.push(C[1]), I.unshift(C[2])), I.length && (i = "/" + I.join(".") + i), this.hostname = S.join(".");
                  break
                }
              }
            }
          if (this.hostname.length > A ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !f) {
            for (var N = this.hostname.split("."), x = [], c = 0; c < N.length; ++c) {
              var D = N[c];
              x.push(D.match(/[^A-Za-z0-9_-]/) ? "xn--" + y.encode(D) : D)
            }
            this.hostname = x.join(".")
          }
          var U = this.port ? ":" + this.port : "",
            M = this.hostname || "";
          this.host = M + U, this.href += this.host, f && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i))
        }
        if (!j[o])
          for (var c = 0, p = T.length; c < p; c++) {
            var B = T[c],
              V = encodeURIComponent(B);
            V === B && (V = escape(B)), i = i.split(B).join(V)
          }
        var Y = i.indexOf("#");
        Y !== -1 && (this.hash = i.substr(Y), i = i.slice(0, Y));
        var q = i.indexOf("?");
        if (q !== -1 ? (this.search = i.substr(q), this.query = i.substr(q + 1),
            t && (this.query = W.parse(this.query)), i = i.slice(0, q)) : t && (this.search = "", this.query = {}), i && (this.pathname = i), O[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
          var U = this.pathname || "",
            D = this.search || "";
          this.path = U + D
        }
        return this.href = this.format(), this
      }, l.prototype.format = function() {
        var e = this.auth || "";
        e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
          n = this.pathname || "",
          i = this.hash || "",
          r = !1,
          o = "";
        this.host ? r = e + this.host : this.hostname && (r = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && v(this.query) && Object.keys(this.query).length && (o = W.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || O[t]) && r !== !1 ? (r = "//" + (r || ""), n && "/" !== n.charAt(0) && (n = "/" + n)) : r || (r = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), n = n.replace(/[?#]/g, function(e) {
          return encodeURIComponent(e)
        }), s = s.replace("#", "%23"), t + r + n + s + i
      }, l.prototype.resolve = function(e) {
        return this.resolveObject(f(e, !1, !0)).format()
      }, l.prototype.resolveObject = function(e) {
        if (m(e)) {
          var t = new l;
          t.parse(e, !1, !0), e = t
        }
        var n = new l;
        if (Object.keys(this).forEach(function(e) {
            n[e] = this[e]
          }, this), n.hash = e.hash, "" === e.href) return n.href = n.format(), n;
        if (e.slashes && !e.protocol) return Object.keys(e).forEach(function(t) {
          "protocol" !== t && (n[t] = e[t])
        }), O[n.protocol] && n.hostname && !n.pathname && (n.path = n.pathname = "/"), n.href = n.format(), n;
        if (e.protocol && e.protocol !== n.protocol) {
          if (!O[e.protocol]) return Object.keys(e).forEach(function(t) {
            n[t] = e[t]
          }), n.href = n.format(), n;
          if (n.protocol = e.protocol, e.host || k[e.protocol]) n.pathname = e.pathname;
          else {
            for (var i = (e.pathname || "").split("/"); i.length && !(e.host = i.shift()););
            e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== i[0] && i.unshift(""), i.length < 2 && i.unshift(""), n.pathname = i.join("/")
          }
          if (n.search = e.search, n.query = e.query, n.host = e.host || "", n.auth = e.auth, n.hostname = e.hostname || e.host, n.port = e.port, n.pathname || n.search) {
            var r = n.pathname || "",
              o = n.search || "";
            n.path = r + o
          }
          return n.slashes = n.slashes || e.slashes, n.href = n.format(), n
        }
        var s = n.pathname && "/" === n.pathname.charAt(0),
          a = e.host || e.pathname && "/" === e.pathname.charAt(0),
          c = a || s || n.host && e.pathname,
          d = c,
          u = n.pathname && n.pathname.split("/") || [],
          i = e.pathname && e.pathname.split("/") || [],
          f = n.protocol && !O[n.protocol];
        if (f && (n.hostname = "", n.port = null, n.host && ("" === u[0] ? u[0] = n.host : u.unshift(n.host)), n.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === i[0] ? i[0] = e.host : i.unshift(e.host)), e.host = null), c = c && ("" === i[0] || "" === u[0])), a) n.host = e.host || "" === e.host ? e.host : n.host, n.hostname = e.hostname || "" === e.hostname ? e.hostname : n.hostname, n.search = e.search, n.query = e.query, u = i;
        else if (i.length) u || (u = []), u.pop(), u = u.concat(i), n.search = e.search, n.query = e.query;
        else if (!b(e.search)) {
          if (f) {
            n.hostname = n.host = u.shift();
            var h = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
            h && (n.auth = h.shift(), n.host = n.hostname = h.shift())
          }
          return n.search = e.search, n.query = e.query, w(n.pathname) && w(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.href = n.format(), n
        }
        if (!u.length) return n.pathname = null, n.search ? n.path = "/" + n.search : n.path = null, n.href = n.format(), n;
        for (var p = u.slice(-1)[0], g = (n.host || e.host) && ("." === p || ".." === p) || "" === p, v = 0, y = u.length; y >= 0; y--) p = u[y], "." == p ? u.splice(y, 1) : ".." === p ? (u.splice(y, 1), v++) : v && (u.splice(y, 1), v--);
        if (!c && !d)
          for (; v--; v) u.unshift("..");
        !c || "" === u[0] || u[0] && "/" === u[0].charAt(0) || u.unshift(""), g && "/" !== u.join("/").substr(-1) && u.push("");
        var _ = "" === u[0] || u[0] && "/" === u[0].charAt(0);
        if (f) {
          n.hostname = n.host = _ ? "" : u.length ? u.shift() : "";
          var h = !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@");
          h && (n.auth = h.shift(), n.host = n.hostname = h.shift())
        }
        return c = c || n.host && u.length, c && !_ && u.unshift(""), u.length ? n.pathname = u.join("/") : (n.pathname = null, n.path = null), w(n.pathname) && w(n.search) || (n.path = (n.pathname ? n.pathname : "") + (n.search ? n.search : "")), n.auth = e.auth || n.auth, n.slashes = n.slashes || e.slashes, n.href = n.format(), n
      }, l.prototype.parseHost = function() {
        var e = this.host,
          t = S.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/url/url.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/url")
  }, {
    "1YiZ5S": 30,
    buffer: 20,
    punycode: 31,
    querystring: 34
  }],
  44: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      "function" == typeof Object.create ? t.exports = function(e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        })
      } : t.exports = function(e, t) {
        e.super_ = t;
        var n = function() {};
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/util/node_modules/inherits/inherits_browser.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/util/node_modules/inherits")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  45: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      t.exports = function(e) {
        return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/util/support/isBufferBrowser.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/util/support")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }],
  46: [function(e, t, n) {
    (function(t, i, r, o, s, a, c, d, u) {
      function l(e, t) {
        var i = {
          seen: [],
          stylize: h
        };
        return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), S(t) ? i.showHidden = t : t && n._extend(i, t), A(i.showHidden) && (i.showHidden = !1), A(i.depth) && (i.depth = 2), A(i.colors) && (i.colors = !1), A(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = f), g(i, e, i.depth)
      }

      function f(e, t) {
        var n = l.styles[t];
        return n ? "[" + l.colors[n][0] + "m" + e + "[" + l.colors[n][1] + "m" : e
      }

      function h(e, t) {
        return e
      }

      function p(e) {
        var t = {};
        return e.forEach(function(e, n) {
          t[e] = !0
        }), t
      }

      function g(e, t, i) {
        if (e.customInspect && t && O(t.inspect) && t.inspect !== n.inspect && (!t.constructor || t.constructor.prototype !== t)) {
          var r = t.inspect(i, e);
          return E(r) || (r = g(e, r, i)), r
        }
        var o = m(e, t);
        if (o) return o;
        var s = Object.keys(t),
          a = p(s);
        if (e.showHidden && (s = Object.getOwnPropertyNames(t)), k(t) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0)) return v(t);
        if (0 === s.length) {
          if (O(t)) {
            var c = t.name ? ": " + t.name : "";
            return e.stylize("[Function" + c + "]", "special")
          }
          if (P(t)) return e.stylize(RegExp.prototype.toString.call(t), "regexp");
          if (j(t)) return e.stylize(Date.prototype.toString.call(t), "date");
          if (k(t)) return v(t)
        }
        var d = "",
          u = !1,
          l = ["{", "}"];
        if (_(t) && (u = !0, l = ["[", "]"]), O(t)) {
          var f = t.name ? ": " + t.name : "";
          d = " [Function" + f + "]"
        }
        if (P(t) && (d = " " + RegExp.prototype.toString.call(t)), j(t) && (d = " " + Date.prototype.toUTCString.call(t)), k(t) && (d = " " + v(t)), 0 === s.length && (!u || 0 == t.length)) return l[0] + d + l[1];
        if (i < 0) return P(t) ? e.stylize(RegExp.prototype.toString.call(t), "regexp") : e.stylize("[Object]", "special");
        e.seen.push(t);
        var h;
        return h = u ? w(e, t, i, a, s) : s.map(function(n) {
          return b(e, t, i, a, n, u)
        }), e.seen.pop(), y(h, d, l)
      }

      function m(e, t) {
        if (A(t)) return e.stylize("undefined", "undefined");
        if (E(t)) {
          var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
          return e.stylize(n, "string")
        }
        return T(t) ? e.stylize("" + t, "number") : S(t) ? e.stylize("" + t, "boolean") : I(t) ? e.stylize("null", "null") : void 0
      }

      function v(e) {
        return "[" + Error.prototype.toString.call(e) + "]"
      }

      function w(e, t, n, i, r) {
        for (var o = [], s = 0, a = t.length; s < a; ++s) U(t, String(s)) ? o.push(b(e, t, n, i, String(s), !0)) : o.push("");
        return r.forEach(function(r) {
          r.match(/^\d+$/) || o.push(b(e, t, n, i, r, !0))
        }), o
      }

      function b(e, t, n, i, r, o) {
        var s, a, c;
        if (c = Object.getOwnPropertyDescriptor(t, r) || {
            value: t[r]
          }, c.get ? a = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (a = e.stylize("[Setter]", "special")), U(i, r) || (s = "[" + r + "]"), a || (e.seen.indexOf(c.value) < 0 ? (a = I(n) ? g(e, c.value, null) : g(e, c.value, n - 1), a.indexOf("\n") > -1 && (a = o ? a.split("\n").map(function(e) {
            return "  " + e
          }).join("\n").substr(2) : "\n" + a.split("\n").map(function(e) {
            return "   " + e
          }).join("\n"))) : a = e.stylize("[Circular]", "special")), A(s)) {
          if (o && r.match(/^\d+$/)) return a;
          s = JSON.stringify("" + r), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = e.stylize(s, "string"))
        }
        return s + ": " + a
      }

      function y(e, t, n) {
        var i = 0,
          r = e.reduce(function(e, t) {
            return i++, t.indexOf("\n") >= 0 && i++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
          }, 0);
        return r > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
      }

      function _(e) {
        return Array.isArray(e)
      }

      function S(e) {
        return "boolean" == typeof e
      }

      function I(e) {
        return null === e
      }

      function C(e) {
        return null == e
      }

      function T(e) {
        return "number" == typeof e
      }

      function E(e) {
        return "string" == typeof e
      }

      function R(e) {
        return "symbol" == typeof e
      }

      function A(e) {
        return void 0 === e
      }

      function P(e) {
        return L(e) && "[object RegExp]" === N(e)
      }

      function L(e) {
        return "object" == typeof e && null !== e
      }

      function j(e) {
        return L(e) && "[object Date]" === N(e)
      }

      function k(e) {
        return L(e) && ("[object Error]" === N(e) || e instanceof Error)
      }

      function O(e) {
        return "function" == typeof e
      }

      function W(e) {
        return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
      }

      function N(e) {
        return Object.prototype.toString.call(e)
      }

      function x(e) {
        return e < 10 ? "0" + e.toString(10) : e.toString(10)
      }

      function D() {
        var e = new Date,
          t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":");
        return [e.getDate(), Y[e.getMonth()], t].join(" ")
      }

      function U(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      var M = /%[sdj%]/g;
      n.format = function(e) {
        if (!E(e)) {
          for (var t = [], n = 0; n < arguments.length; n++) t.push(l(arguments[n]));
          return t.join(" ")
        }
        for (var n = 1, i = arguments, r = i.length, o = String(e).replace(M, function(e) {
            if ("%%" === e) return "%";
            if (n >= r) return e;
            switch (e) {
              case "%s":
                return String(i[n++]);
              case "%d":
                return Number(i[n++]);
              case "%j":
                try {
                  return JSON.stringify(i[n++])
                } catch (e) {
                  return "[Circular]"
                }
              default:
                return e
            }
          }), s = i[n]; n < r; s = i[++n]) o += I(s) || !L(s) ? " " + s : " " + l(s);
        return o
      }, n.deprecate = function(e, r) {
        function o() {
          if (!s) {
            if (t.throwDeprecation) throw new Error(r);
            t.traceDeprecation ? console.trace(r) : console.error(r), s = !0
          }
          return e.apply(this, arguments)
        }
        if (A(i.process)) return function() {
          return n.deprecate(e, r).apply(this, arguments)
        };
        if (t.noDeprecation === !0) return e;
        var s = !1;
        return o
      };
      var B, V = {};
      n.debuglog = function(e) {
        if (A(B) && (B = t.env.NODE_DEBUG || ""), e = e.toUpperCase(), !V[e])
          if (new RegExp("\\b" + e + "\\b", "i").test(B)) {
            var i = t.pid;
            V[e] = function() {
              var t = n.format.apply(n, arguments);
              console.error("%s %d: %s", e, i, t)
            }
          } else V[e] = function() {};
        return V[e]
      }, n.inspect = l, l.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
      }, l.styles = {
        special: "cyan",
        number: "yellow",
        boolean: "yellow",
        undefined: "grey",
        null: "bold",
        string: "green",
        date: "magenta",
        regexp: "red"
      }, n.isArray = _, n.isBoolean = S, n.isNull = I, n.isNullOrUndefined = C, n.isNumber = T, n.isString = E, n.isSymbol = R, n.isUndefined = A, n.isRegExp = P, n.isObject = L, n.isDate = j, n.isError = k, n.isFunction = O, n.isPrimitive = W, n.isBuffer = e("./support/isBuffer");
      var Y = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      n.log = function() {
        console.log("%s - %s", D(), n.format.apply(n, arguments))
      }, n.inherits = e("inherits"), n._extend = function(e, t) {
        if (!t || !L(t)) return e;
        for (var n = Object.keys(t), i = n.length; i--;) e[n[i]] = t[n[i]];
        return e
      }
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/util/util.js", "/../node_modules/gulp-browserify/node_modules/browserify/node_modules/util")
  }, {
    "./support/isBuffer": 45,
    "1YiZ5S": 30,
    buffer: 20,
    inherits: 44
  }],
  47: [function(e, t, n) {
    (function(e, n, i, r, o, s, a, c, d) {
      function u() {}
      t.exports = u, u.mixin = function(e) {
        var t = e.prototype || e;
        t.isWildEmitter = !0, t.on = function(e, t, n) {
          this.callbacks = this.callbacks || {};
          var i = 3 === arguments.length,
            r = i ? arguments[1] : void 0,
            o = i ? arguments[2] : arguments[1];
          return o._groupName = r, (this.callbacks[e] = this.callbacks[e] || []).push(o), this
        }, t.once = function(e, t, n) {
          function i() {
            r.off(e, i), a.apply(this, arguments)
          }
          var r = this,
            o = 3 === arguments.length,
            s = o ? arguments[1] : void 0,
            a = o ? arguments[2] : arguments[1];
          return this.on(e, s, i), this
        }, t.releaseGroup = function(e) {
          this.callbacks = this.callbacks || {};
          var t, n, i, r;
          for (t in this.callbacks)
            for (r = this.callbacks[t], n = 0, i = r.length; n < i; n++) r[n]._groupName === e && (r.splice(n, 1), n--, i--);
          return this
        }, t.off = function(e, t) {
          this.callbacks = this.callbacks || {};
          var n, i = this.callbacks[e];
          return i ? 1 === arguments.length ? (delete this.callbacks[e], this) : (n = i.indexOf(t), i.splice(n, 1), 0 === i.length && delete this.callbacks[e], this) : this
        }, t.emit = function(e) {
          this.callbacks = this.callbacks || {};
          var t, n, i, r = [].slice.call(arguments, 1),
            o = this.callbacks[e],
            s = this.getWildcardCallbacks(e);
          if (o)
            for (i = o.slice(), t = 0, n = i.length; t < n && i[t]; ++t) i[t].apply(this, r);
          if (s)
            for (n = s.length, i = s.slice(), t = 0, n = i.length; t < n && i[t]; ++t) i[t].apply(this, [e].concat(r));
          return this
        }, t.getWildcardCallbacks = function(e) {
          this.callbacks = this.callbacks || {};
          var t, n, i = [];
          for (t in this.callbacks) n = t.split("*"), ("*" === t || 2 === n.length && e.slice(0, n[0].length) === n[0]) && (i = i.concat(this.callbacks[t]));
          return i
        }
      }, u.mixin(u)
    }).call(this, e("1YiZ5S"), "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, e("buffer").Buffer, arguments[3], arguments[4], arguments[5], arguments[6], "/../node_modules/wildemitter/wildemitter.js", "/../node_modules/wildemitter")
  }, {
    "1YiZ5S": 30,
    buffer: 20
  }]
}, {}, [19]);
