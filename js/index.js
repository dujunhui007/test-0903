$(document).ready(function () {
  var isFullscreenForScroll;

  function GetRequest() {
    var url = location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }

  GetRequest();
  isFullscreenForScroll = GetRequest().type;
  if (isFullscreenForScroll == undefined) {
    isFullscreenForScroll = "false"
  }

  $("#top .container hr").addClass("aschBoundary");
  $(window).keydown(function (event) {
    if (event.keyCode == 122) {
      if (isFullscreenForScroll = "true") {
        // alert(1);
        isFullscreenForScroll = "false";
      } else {
        // alert(2);
        isFullscreenForScroll = "true";
      }
      // isFullscreenForScroll="true";
      // alert(isFullscreenForScroll)
    }
  });

  $("#top .container .containerTitle").click(function () {

    setTimeout(function () {
      window.location.href = "aschVideo.html?" + "type=" + isFullscreenForScroll;
      // $(".aschOne").addClass("isFullscreenForScroll");
      // $(".aschTwo").addClass("isFullscreenForScroll");
    }, 500);
    $("#top .container hr").addClass("closeHr")
  });

});
