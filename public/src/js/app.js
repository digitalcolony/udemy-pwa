var deferredPrompt;

if (!window.Promise) {
  window.Promise = Promise;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function() {
      console.log("Service worker registered!");
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt fired");
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

// var promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     //resolve('This is executed once the timer is done!');
//     reject({ code: 500, message: "An error occurred!" });
//     //console.log('This is executed once the timer is done!');
//   }, 3000);
// });

console.log("This is executed right after setTimeout()");

fetch("https://httpbin.org/ip")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  body: JSON.stringify({ message: "Does this work?" })
})
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });
