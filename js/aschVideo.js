$(document).ready(function () {
  var isFullscreenForScroll, isChrome, isQQBrowser, is360,isUBrowser;

  isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
  if (isChrome) {
    isQQBrowser = window.navigator.userAgent.indexOf("QQBrowser") !== -1;
    isUBrowser = window.navigator.userAgent.indexOf("UBrowser") !== -1;
    is360 = _mime("type", "application/vnd.chromium.remoting-viewer");

    function _mime(option, value) {
      var mimeTypes = navigator.mimeTypes;
      for (var mt in mimeTypes) {
        if (mimeTypes[mt][option] == value) {
          return true;
        }
      }
      return false;
    }

    if (isQQBrowser||isUBrowser||is360) {
      // alert("是QQBrowser");
      $(".openLeft .container .containerTitle").addClass("isNoChorm");
      $(".openRight .container .containerTitle").addClass("isNoChorm");
      $(".closeLeft .container .containerTitle").addClass("isNoChorm");
      $(".closeRight .container .containerTitle").addClass("isNoChorm")
    }

    // if (isUBrowser) {
    //   // alert("isUBrowser");
    //   $(".openLeft .container .containerTitle").addClass("isNoChorm");
    //   $(".openRight .container .containerTitle").addClass("isNoChorm");
    //   $(".closeLeft .container .containerTitle").addClass("isNoChorm");
    //   $(".closeRight .container .containerTitle").addClass("isNoChorm")
    // }

    // if (is360) {
    //   // alert("360");
    //   $(".openLeft .container .containerTitle").addClass("isNoChorm");
    //   $(".openRight .container .containerTitle").addClass("isNoChorm");
    //   $(".closeLeft .container .containerTitle").addClass("isNoChorm");
    //   $(".closeRight .container .containerTitle").addClass("isNoChorm")
    // }
    // $("#aschVideo .openLeft .container .containerTitle").addClass("isChorm");
    $("#aschVideo .openLeft .container .containerTitle").addClass("isChorm");
    $("#aschVideo .openRight .container .containerTitle").addClass("isChorm");
    $("#aschVideo .closeLeft .container .containerTitle").addClass("isChorm");
    $("#aschVideo .closeRight .container .containerTitle").addClass("isChorm")
  }

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
      $("#aschVideo").remove(".closeLeft").remove(".closeRight");
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