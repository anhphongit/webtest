//update this for DEV|UAT|PROD
var domain = "https://dev-kidsclub.aeon.com.vn/app/";
var bundleId = "com.kd.aeonkids.beta";
var scheme = "kidsclubdev";

// var domain = "https://uat-kidsclub.aeon.com.vn/app/";
// var bundleId = "vn.com.aeon.kidsclub.uat";
// var scheme = "kidsclubuat";

// var domain = "https://kidsclub.aeon.com.vn/app/";
// var bundleId = "vn.com.aeon.kidsclub";
// var scheme = "kidsclub";

document.addEventListener("DOMContentLoaded", function () {
  // Detect device mobile
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var backgroundContainer = document.getElementById("backgroundContainer");

  if (isMobile) {
    backgroundContainer.style.backgroundImage =
      "url(./assets/images/image-background.png)";
  } else {
    // When device isn't mobile
    var warningIcon = document.createElement("img");
    warningIcon.src = "warning-icon.png";
    backgroundContainer.appendChild(warningIcon);
  }

  var language = navigator.language || navigator.userLanguage;

  if (language.toLowerCase().startsWith("en")) {
    document.getElementById("btnInstall").setAttribute("title", "Install app");
    document.getElementById("btnOpen").setAttribute("title", "Open app");
  }

  // var platform = getPlatform();
  // if (platform === "ios") {
  //   window.location.href = `${scheme}://` + getCurrentUrl();
  // }
});

document.getElementById("btnOpen").addEventListener("click", function () {
  var platform = getPlatform();
  var currentUrl = getCurrentUrl();
  if (platform === "ios") {
    // window.location.href = 'itms://itunes.apple.com';
    window.open('itms://itunes.apple.com')
    // window.location.href = `${scheme}://` + currentUrl;
  } else if (platform === "android") {
    window.open(
      `intent://${currentUrl}#Intent;package=${bundleId};scheme=${scheme};S.browser_fallback_url=https://play.google.com/store/apps/details?id=vn.com.aeon.kidsclub;end;`
    );
  } else {
    alert("Platform không được hỗ trợ!");
  }
});

document.getElementById("btnInstall").addEventListener("click", function () {
  var platform = getPlatform();

  if (platform === "ios") {
    window.location.href =
      "https://apps.apple.com/app/apple-store/id6473516617";
  } else if (platform === "android") {
    window.location.href =
      "https://play.google.com/store/apps/details?id=vn.com.aeon.kidsclub";
  } else {
    alert("Platform không được hỗ trợ!");
  }
});

function getPlatform() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  } else if (/android/i.test(userAgent)) {
    return "android";
  } else {
    return null;
  }
}
function getCurrentUrl() {
  const url = window.location.href?.replace(domain, "");
  return url
}
