var joinBtn = document.getElementById("joinBtn");
var roomIdInput = document.getElementById('room-name');
var errMsg = document.getElementsByClassName('err-msg')[0];
var isPc =  function ()
{
   var userAgentInfo = navigator.userAgent;
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
   }
   return flag;
}();
roomIdInput.addEventListener('focus',function () {
    errMsg.className = 'err-msg';
});
joinBtn.onclick = function(){
	var roomId = roomIdInput.value;
  console.log(roomId);
  if(roomId.trim() == '') {
    errMsg.className += ' err-msg-show';
  } else {
  	if(isPc) {
  		window.location.href = '/meeting.html?roomId='+roomId;
  	} else {
  		window.location.href = '/meeting-mobile.html?roomId='+roomId;
  	}
  }
};
