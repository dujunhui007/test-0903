$(document).ready(function () {
  var isFullscreenForScroll;
  $('#loading').hide();
  function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
        theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
    }
    return theRequest;
  }
  GetRequest();
  isFullscreenForScroll=GetRequest().type;

  $(window).keydown(function (event) {
    if (event.keyCode == 122) {
      $(".aschOne").removeClass("isFullscreenForScroll");
      $(".aschTwo").removeClass("isFullscreenForScroll");
      isFullscreenForScroll="true";
      if(isFullscreenForScroll=="true"){
        // isFullscreenForScroll="false";
        // $(".aschOne").removeClass("isFullscreenForScroll");
        // $(".aschTwo").removeClass("isFullscreenForScroll");
      }else {
        // isFullscreenForScroll="true";
        // $(".aschOne").addClass("isFullscreenForScroll");
        // $(".aschTwo").addClass("isFullscreenForScroll");
      }
      // isFullscreenForScroll=true;
      // alert(isFullscreenForScroll);
    }
  });

  if(isFullscreenForScroll=="true"){
    $(".aschOne").removeClass("isFullscreenForScroll");
    $(".aschTwo").removeClass("isFullscreenForScroll");
  }else{
    $(".aschOne").addClass("isFullscreenForScroll");
    $(".aschTwo").addClass("isFullscreenForScroll");
  }

  $("#aschVideo").click(function () {
    setTimeout(function () {
      $(".closeLeft").addClass("closeLeftAnimation");
      $(".closeRight").addClass("closeRightAnimation");
      // window.location.href = "index.html";
    }, 0);
    setTimeout(function () {
      $("#aschVideo").hide(".closeLeft").hide(".closeRight");
      // $("#aschVideo").remove(".closeRight");
      // window.location.href = "index.html";
    }, 500);
    setTimeout(function () {
      // $(".closeLeft").hide();
      // $(".closeRight").hide();
      window.location.href = "index.html?"+"type="+isFullscreenForScroll;
      // window.location.href = "index.html";
    }, 500);
  });
  $(".aschTwo").hide();
  setTimeout(function () {
    $(".aschOne").addClass("hideVideo");
    $(".aschTwo").show().currentTime = 0;
  }, 14100);
});