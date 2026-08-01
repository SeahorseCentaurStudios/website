(function () {
  function detectPlatform() {
    var ua = navigator.userAgent || "";

    var isIOS =
      /iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    if (isIOS) return "ios";

    if (/silk|kindle/i.test(ua)) return "amazon";

    if (/android/i.test(ua)) return "android";

    return null;
  }

  window.redirectToAppStore = function (storeUrls) {
    if (/[?&]nostore\b/.test(window.location.search)) return;

    var platform = detectPlatform();
    var url = platform && storeUrls[platform];
    if (url) {
      window.location.replace(url);
    }
  };
})();
