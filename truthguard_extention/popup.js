document.getElementById("toggle-scan").addEventListener("click", () => {
  chrome.storage.local.get("enabled", (data) => {
    const newState = !data.enabled;
    chrome.storage.local.set({ enabled: newState }, () => {
      document.getElementById("status").textContent =
        "Status: " + (newState ? "Enabled" : "Disabled");
    });
  });
});

// Load status on popup open
chrome.storage.local.get("enabled", (data) => {
  document.getElementById("status").textContent =
    "Status: " + (data.enabled ? "Enabled" : "Disabled");
});
