const deferredPrompt;

if ("serviceWorker" in navigator) {
  console.log("SW available");
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("service worker registered");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
    console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferredPrompt = event;
    return false;
});