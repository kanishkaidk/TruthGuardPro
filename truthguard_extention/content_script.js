chrome.storage.local.get("enabled", (data) => {
  if (data.enabled) {
    console.log("TruthGuard is scanning the page...");
    // This is where we’ll add AI detection logic later
  }
});
