# wild-peerconnection
RTCPeerConnection 的封装,使用Wilddog作为signaling channel.  
webrtc 的一大问题是p2p之间的连接建立需要第三方服务器的支持.Wilddog提供实时后端服务,是webrtc的理想signaling channel

## 安装

```
npm install wild-peerconnection

```

## 使用

发送端
```js
var ref = new Wilddog('https://<YOUR_APPID>.wilddogio.com/SOMEPATH1'); //signaling channel 的地址
var peer = null;//config 会直接传给RTCPeerConnection
navigator.getUserMedia({"video":true},function(stream){
    peer = new WildPeerConnection.Sender(ref,stream,config);
})


```
接收端

```js
var ref = new Wilddog('https://<YOUR_APPID>.wilddogio.com/SOMEPATH1');

var peer = new WildPeerConnection(ref,function(stream){
    view.src = URL.createObjectURL(stream);
    
},config);

``` 
#### known issues

* 由于浏览器支持视频格式的不同可能出现连接不成功的情况

* firefox 不支持 removeStream操作

* firefox chrome 都对renegotiation 支持不好,所以目前最好的方案是