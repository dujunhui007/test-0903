$(document).ready(function () {
  var isFullscreenForScroll;
  $('.section1 #loading').hide();
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
      if (isFullscreenForScroll == "false") {
        // alert(1);
        isFullscreenForScroll = "true";
      } else {
        // alert(2);
        isFullscreenForScroll = "false";
      }
      // isFullscreenForScroll="true";
      // alert(isFullscreenForScroll)
    }
  });

  $("#top .container .containerTitle").click(function () {
    setTimeout(function () {
      $("#top .container hr").addClass("closeHr");
    },0);

    setTimeout(function () {
      window.location.href = "aschVideo.html?" + "type=" + isFullscreenForScroll;
    }, 490);
  });

});
