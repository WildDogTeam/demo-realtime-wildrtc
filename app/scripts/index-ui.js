var arr = window.location.href.split('=');
var roomId = decodeURI(arr[arr.length - 1]);
var ref = new Wilddog('https://<Your appId>.wilddogio.com/rtc/' + roomId);
var rtc, currentFullScreenSrc;
var localAudioTracks = [];
var localVideoTracks = [];
var remoteList = [];
var header = document.getElementsByClassName('header')[0];
var listContent = document.getElementsByClassName('video-list-content')[0];
var fullScreen = document.getElementsByClassName('video-full')[0];
var arrows = document.getElementsByClassName('arr');
var arrLeft = arrows[0];
var arrRight = arrows[1];
var shadows = document.getElementsByClassName('shadow');
var shadowLeft = shadows[0];
var shadowRight = shadows[1];
var meetingUrl = document.getElementById('meeting-url');
if (meetingUrl) {
    meetingUrl.value = window.location.href;
};

/*创建公共方法，添加和删除类名*/
var addClass = function(ele, className) {
    if (ele.className.indexOf(className) === -1) {
        ele.className += (' ' + className);
    }
};
var removeClass = function(ele, className) {
    var oldClass = ele.className;
    var replaceClass;
    if (oldClass.indexOf(className) !== 1) {
        replaceClass = ' ' + className;
    };
    ele.className = oldClass.replace(replaceClass, '');
};
var toggleClass = function(ele, className) {
    var add = (ele.className.indexOf(className) === -1);
    if (add) {
        addClass(ele, className);
    } else {
        removeClass(ele, className);
    }
};
//更换全屏视频显示的src
function changeFullScreen(src) {
    fullScreen.src = src;
    currentFullScreenSrc = src;
    fullScreen.setAttribute('autoplay', 'true');
    if (src === item.getElementsByClassName('video')[0].src) {
        fullscreen.muted = true;
    };
};

/*判断pc*/
var isPc = function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}();

/*获取视频列表元素*/
var item = document.querySelector('.video-item');
var list = document.querySelector('.video-list');
var itemWidth = Number(getComputedStyle(item).width.replace('px', ''));
var count; //列表中视频的个数,可以更改为存放id的数组的长度
var listCurrentWidth = Number(getComputedStyle(list).width.replace('px', ''));
item.getElementsByClassName('video')[0].muted = true;
/*创建并插入元素*/
var insertItem = function(wildStream) {
    var newItem = item.cloneNode(true);
    wildStream.bindToDOM(newItem.querySelector('.video'));
    newItem.querySelector('.video').setAttribute('id', '');
    newItem.querySelector('.video').setAttribute('width', '100%');
    newItem.querySelector('.video').setAttribute('height', '100%');
    newItem.querySelector('.video').muted = false;
    removeClass(newItem, 'video-item-current');
    if (list.children.length > 2 && !isPc) {
        listCurrentWidth = (20 + (list.children.length) * itemWidth);
        list.style.width = (listCurrentWidth + 'px');
    };
    list.appendChild(newItem);
    count = remoteList.length;
    if (isPc) {
        newItem.querySelector('.camera-tips').textContent = '对方未开启摄像头';
        newItem.querySelector('.video-content').removeChild(newItem.querySelector('.video-ctrl'));
        if (count === 2) {
            addClass(list, 'video-list-double');
        } else if (count === 3) {
            addClass(list, 'video-list-multiple');
        };
    } else {
        addTouchListener(newItem);
    };
    if (!isPc) {
        arrShow();
        var listHeight = getComputedStyle(newItem).height;
        document.getElementsByClassName('shadow-img')[0].style.height = listHeight;
        document.getElementsByClassName('shadow-img')[1].style.height = listHeight;
    };
};

function addTouchListener(item) {
    item.addEventListener('touchend', function() {
        list.getElementsByClassName('video-item-current')[0].getElementsByClassName('video')[0].setAttribute('autoplay', 'true');
        removeClass(list.getElementsByClassName('video-item-current')[0], 'video-item-current');
        addClass(this, 'video-item-current');
        item.getElementsByClassName('video')[0].setAttribute('autoplay', 'false');
        if (!isPc) {
            changeFullScreen(item.getElementsByClassName('video')[0].src);
        }
    });
};
if (!isPc) {
    addTouchListener(item);
}
/*删除元素，需要传入元素的索引值*/
var removeItem = function(index) {
    if (index < 0)
        return;
    list.removeChild(list.children[index]);
    count = remoteList.length;
    if (count === 2) {
        removeClass(list, 'video-list-multiple');
    } else if (count === 1) {
        removeClass(list, 'video-list-double');
        if (!isPc) {
            changeFullScreen(item.getElementsByClassName('video')[0].src);
        }
        addClass(item, 'video-item-current');
    };
    if (!isPc) {
        listCurrentWidth = (20 + (list.children.length - 1) * itemWidth);
        list.style.width = (listCurrentWidth + 'px');
        arrShow();
    }
};

/*绑定按钮触发的复制效果*/
if (document.getElementsByClassName('copy-btn')[0]) {
    var clipboard = new Clipboard('.copy-btn');
    clipboard.on('success', function(e) {
        e.trigger.textContent = '复制成功'
    });
    clipboard.on('error', function(e) {
        e.trigger.textContent = '已经选中'
    });
};

//voice off
function mute() {
    removeClass(document.querySelector('.mute'), 'mute-hide')
};
//voice on
function voice() {
    addClass(document.querySelector('.mute'), 'mute-hide')
};

function muteAll() {
    Array.prototype.slice.call(list.children, 0).forEach(function(ele, index) {
        ele.getElementsByClassName('video')[0].muted = true;
    });
};

function unmuteAll() {
    Array.prototype.slice.call(list.children, 0).forEach(function(ele, index) {
        if (index !== 0) {
            ele.getElementsByClassName('video')[0].muted = false;
        };
    });
};

/*为视频项绑定事件监听*/
function itemBindHover(item) {
    item.addEventListener('mouseenter', function() {
        addClass(this.querySelector('.video-ctrl'), 'video-ctrl-show');
    });
    item.addEventListener('mouseleave', function() {
        removeClass(this.querySelector('.video-ctrl'), 'video-ctrl-show');
    });
    item.querySelector('.camera-on').addEventListener('click', function() {
        removeClass(this, 'ctrl-show');
        addClass(item.querySelector('.camera-off'), 'ctrl-show');
        //关闭视频
        for (var i = localVideoTracks.length - 1; i >= 0; i--) {
            localVideoTracks[i].enabled = false;
        }
        var uid = ref.getAuth().uid;
        ref.child('isVideo/' + uid).set(false);
        ref.child('isVideo/' + uid).onDisconnect().remove();
    });
    item.querySelector('.camera-off').addEventListener('click', function() {
        removeClass(this, 'ctrl-show');
        addClass(item.querySelector('.camera-on'), 'ctrl-show');
        //开启视频
        for (var i = localVideoTracks.length - 1; i >= 0; i--) {
            localVideoTracks[i].enabled = true;
        }
        var uid = ref.getAuth().uid;
        ref.child('isVideo/' + uid).set(true);
        ref.child('isVideo/' + uid).onDisconnect().remove();
    });
    item.querySelector('.voice-on').addEventListener('click', function() {
        removeClass(this, 'ctrl-show');
        addClass(item.querySelector('.voice-off'), 'ctrl-show');
        //关闭音频
        for (var i = localAudioTracks.length - 1; i >= 0; i--) {
            localAudioTracks[i].enabled = false;
        }
    });
    item.querySelector('.voice-off').addEventListener('click', function() {
        removeClass(this, 'ctrl-show');
        addClass(item.querySelector('.voice-on'), 'ctrl-show');
        //开启音频
        for (var i = localAudioTracks.length - 1; i >= 0; i--) {
            localAudioTracks[i].enabled = true;
        }
    });
};

// video-item-current 隐藏当前全屏的视频
//视频连接时，底部操作摄像头和音频设备的开关
// ctrl-show 表示显示
// camera-on、voice-on 表示设备开启
// camera-off 、voice-off 表示设备关闭
// insertItem();
if (isPc) {
    itemBindHover(item);
    addClass(item.querySelector('.voice-on'), 'ctrl-show');
    addClass(item.querySelector('.camera-on'), 'ctrl-show');
} else {
    var mute = false,
        cameraOff = false,
        voiceOff = false;
    document.getElementsByClassName('video-ctrl-m')[0].addEventListener('touchend', function(e) {
        e.stopPropagation();
        toggleClass(this.children[0], 'ctrl-content-hide');
        toggleClass(document.getElementsByClassName('video-list-content')[0], 'video-list-content-down');
        toggleClass(header, 'header-hide');
        toggleClass(arrLeft, 'arr-down');
        toggleClass(arrRight, 'arr-down');
        toggleClass(shadowLeft, 'shadow-down');
        toggleClass(shadowRight, 'shadow-down');
    });
    Array.prototype.slice.call(document.getElementsByClassName('ctrls')[0].children, 0).forEach(function(ele, index) {
        ele.children[0].addEventListener('touchend', function(e) {
            e.stopPropagation();
            toggleClass(this, 'ctrl-on');
            if (index === 0) {
                mute = !mute;
                if (mute == false) {
                    //开启音频
                    for (var i = localAudioTracks.length - 1; i >= 0; i--) {
                        localAudioTracks[i].enabled = true;
                    }
                } else {
                    //关闭音频
                    for (var i = localAudioTracks.length - 1; i >= 0; i--) {
                        localAudioTracks[i].enabled = false;
                    }
                }
            } else if (index === 1) {
                cameraOff = !cameraOff;
                //摄像头
                if (cameraOff == false) {
                    //开启视频
                    for (var i = localVideoTracks.length - 1; i >= 0; i--) {
                        localVideoTracks[i].enabled = true;
                    }
                    var uid = ref.getAuth().uid;
                    ref.child('isVideo/' + uid).set(true);
                    ref.child('isVideo/' + uid).onDisconnect().remove();
                } else {
                    //关闭视频
                    for (var i = localVideoTracks.length - 1; i >= 0; i--) {
                        localVideoTracks[i].enabled = false;
                    }
                    var uid = ref.getAuth().uid;
                    ref.child('isVideo/' + uid).set(false);
                }
            } else if (index === 2) {
                voiceOff = !voiceOff;
                //声音
                if (voiceOff == false) {
                    //打开声音
                    unmuteAll();
                } else {
                    //关闭声音
                    muteAll();
                }
            }
        });
    });

    function arrShow() {
        var left = listContent.scrollLeft;
        var width = Number(getComputedStyle(listContent).width.replace('px', ''));
        if (left === 0) {
            arrLeft.style.display = 'none'
            shadowLeft.style.display = 'none'
        } else {
            arrLeft.style.display = 'block';
            shadowLeft.style.display = 'block';
            if (left === (listCurrentWidth - width)) {
                arrRight.style.display = 'none';
                shadowRight.style.display = 'none';
            } else {
                arrRight.style.display = 'block';
                shadowRight.style.display = 'block';
            }
        };
    };
    document.getElementById('roomid').textContent = roomId;
    document.getElementsByClassName('video-list-content')[0].addEventListener('scroll', arrShow);
    document.addEventListener('touchend', function() {
        addClass(header, 'header-hide');
        addClass(document.getElementsByClassName('ctrl-content')[0], 'ctrl-content-hide');
        addClass(document.getElementsByClassName('video-list-content')[0], 'video-list-content-down');
        addClass(shadowLeft, 'shadow-down');
        addClass(shadowRight, 'shadow-down');
        addClass(arrLeft, 'arr-down');
        addClass(arrRight, 'arr-down');
    });
};

//视频列表中视频个数对应的类名
//video-list-single => 当前只有一个视频时加给ul.video-list
//video-list-double => 当前有两个视频时加给ul.video-list
//video-list-multiple => 当前视频大于两个时加给ul.video-list

//设置音视频参数
var constraints;

if (isPc) {
    constraints = {
        'audio': true,
        'video': {
            'frameRate': 15,
            'width': 320,
            'height': 180
        }
    };
} else {
    constraints = {
        'audio': true,
        'video': {
            'frameRate': 15,
            'width': 320,
            'height': 240
        }
    };
}

/*
 * 匿名登录，并建立wildrtc
 * */
ref.authAnonymously(function(err) {
    if (err != null)
        return;
    ref.onAuth(function(auth) {
        if (auth == null)
            return;
        rtc = new WildRTC(ref);
        rtc.join(function(err) {
            if (err != null)
                return;
            remoteList.push(ref.getAuth().uid);
            rtc.getLocalStream(constraints, function(wildStream) {
                localAudioTracks = wildStream.getStream().getAudioTracks();
                localVideoTracks = wildStream.getStream().getVideoTracks();
                var localElement = document.getElementById('localStream');
                wildStream.bindToDOM(localElement);
                if (/macintosh|mac os x/i.test(navigator.userAgent)) {
                    document.getElementById('localStream').style.width = '100%';
                    document.getElementById('localStream').style.height = '100%';
                }
                item.getElementsByClassName('video')[0].muted = true;
                if (!isPc) {
                    var fullscreenElement = document.getElementById('fullscreen');
                    wildStream.bindToDOM(fullscreenElement);
                }

                localStream = wildStream;
                rtc.addStream(wildStream);
                var uid = ref.getAuth().uid;
                ref.child('isVideo/' + uid).set(true);
                ref.child('isVideo/' + uid).onDisconnect().remove();
            }, function(err) {
                console.error(err);
            });
        });

        //监听远端音视频流连接事件
        rtc.on('stream_added', function(wildStream) {
            remoteList.push(wildStream.getId());
            insertItem(wildStream);
            var remoteId = wildStream.getId();
        });

        //监听远端音视频流断开事件
        rtc.on('stream_removed', function(wildStream) {
            var remoteId = wildStream.getId();
            var removeIndex = remoteList.indexOf(remoteId);
            if (removeIndex >= 0) {
                remoteList.splice(removeIndex, 1);
                removeItem(removeIndex);
            }
            ref.child('isVideo/' + remoteId).off('value');
            ref.child('isVideo/' + remoteId).set(null);
        })
        ref.child('isVideo/').on('child_changed', function(snap) {
            var uid = snap.key();
            var removeIndex = remoteList.indexOf(uid);
            if (snap.val() === false) {
                list.children[removeIndex].querySelector('.video').style.display = 'none';
            } else if (snap.val() === true) {
                list.children[removeIndex].querySelector('.video').style.display = 'inline-block';
            }
        })
    })
});

var exit = document.querySelector('.exit');
exit.onclick = function() {
    window.location.href = '/'
}
