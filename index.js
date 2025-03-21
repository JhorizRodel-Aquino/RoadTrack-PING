function pingRoadTrack() {
  fetch("https://roadtrack.onrender.com/ping")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      console.log("✅ Ping RoadTrack successful");
    })
    .catch((error) => {
      console.error("❌ Ping failed:", error.message);
    });
}

function pingMediMinder() {
  fetch("https://mediminder-backend.onrender.com/fetch_schedules")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }
      console.log("✅ Ping MediMinder successful");
    })
    .catch((error) => {
      console.error("❌ Ping failed:", error.message);
    });
}

// Call it every 5 minutes (300,000 ms)
setInterval(pingRoadTrack, 5 * 60 * 1000);
setInterval(pingMediMinder, 5 * 60 * 1000);

// Optional: Call it once immediately on page load
pingRoadTrack();
pingMediMinder();
