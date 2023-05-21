setInterval(() => {
  chrome.tabs.query({ windowType: "normal" }, function (tabs) {
    chrome.action.setBadgeText({ text: `${tabs.length}` });
    chrome.action.setBadgeBackgroundColor({ color: "#0f0b0b" });
  });
}, 3500);
