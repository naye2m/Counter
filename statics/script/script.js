const d = document.getElementById("touchbody");
const resetButton = document.getElementById("reset");
let count = 0;

// Prompt to enable fullscreen
if ("requestFullscreen" in document.body && false && confirm("Run fullscreen?")) {
  try {
    document.body.requestFullscreen();
  } catch (e) {
    console.error(e);
  }
}

// Color palette for background changes
const colors = ["#000"];

// Update counter and change appearance
function updateCounter() {
  count++;
  d.textContent = count;

  // Change background and text color
  const bgColor = colors[count % colors.length];
  // const textColor = count % 2 === 0 ? "white" : "black";
  d.style.background = bgColor;
  // d.style.color = textColor;

  // Vibrate pattern increases with count
  if ("vibrate" in window.navigator) {
    //const pattern = Array(count).fill(50);
    //window.navigator.vibrate(pattern);
    window.navigator.vibrate(15);

  }
}

// Reset counter and appearance
function resetCounter() {
  if (!confirm("reset counter?")) return;
  count = 0;
  d.textContent = count;
  d.style.background = "black";
  d.style.color = "white";
}

// Event listeners
// d.addEventListener("touchstart", updateCounter);
d.addEventListener("mousedown", updateCounter);
// resetButton.addEventListener("touchstart", resetCounter);
resetButton.addEventListener("mousedown", resetCounter);



// PWA confs
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/statics/script/comp.sw.js').then((registration) => {
    // navigator.serviceWorker.register('/dist/service-worker.js').then((registration) => {
      navigator.serviceWorker.register('dist/service-worker.js').then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    }).catch((error) => {
      console.log('Service Worker registration failed:', error);
    });
  });
}


// # notifications

if ('Notification' in window && navigator.serviceWorker) {
  // Request notification permission
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
    } else {
      console.log("Notification permission denied.");
    }
  });
}

self.addEventListener('push', (event) => {
  let options = {
    body: event.data ? event.data.text() : 'New message received!',
    icon: 'icons/icon-192x192.png',
    badge: 'icons/icon-192x192.png'
  };

  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.ready.then(function (registration) {
    return registration.pushManager.getSubscription().then(function (subscription) {
      // If there's already a subscription, return it
      if (subscription) {
        return subscription;
      }

      // Otherwise, subscribe the user
      const vapidPublicKey = 'YOUR_PUBLIC_VAPID_KEY'; // Replace with your VAPID public key
      const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey);

      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey
      }).then(function (newSubscription) {
        console.log('User subscribed:', newSubscription);
        // Here, you should send the subscription to your server to store and send push notifications
      });
    });
  });
}

// Utility function to convert the VAPID public key to a Uint8Array
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}


self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event.notification);

  event.notification.close();

  // Navigate to the app's homepage or any other page
  event.waitUntil(
    clients.openWindow('https://your-website.com')
  );
});

// @ background sync
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

function syncData() {
  return fetch('/sync-data', {
    method: 'POST',
    body: JSON.stringify({ data: 'Your data' }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Sync failed');
    }
  }).catch((error) => {
    console.error('Sync failed:', error);
  });
}







// # end notifications


//  #  PWA confs
let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

// main.js
if ((window.navigator && window.navigator.standalone && window.navigator.standalone === true)|| window.matchMedia('(display-mode: standalone)').matches) {
  // iOS PWA installed
  const installButton = document.getElementById('install');
  installButton.style.display = 'none'; // Hide the install button
} else {
  // PWA is not installed
  const installButton = document.getElementById('install');
  installButton.style.display = 'block'; // Show the install button
}


window.addEventListener("appinstalled", () => {
  alert("Congratulations!\nThe app has been successfully installed.\n🎉🥳🎊")
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

//  #  PWA confs end
