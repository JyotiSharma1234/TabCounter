window.addEventListener("load", () => {
  chrome.tabs.query({ windowType: "normal" }, function (tabs) {
    document.getElementById("tabCount").innerHTML = tabs.length;
  });

  chrome.windows.getAll({ windowTypes: ["normal"] }, function (windows) {
    const privateWindow = windows.filter((window) => window.incognito);
    document.getElementById("windowCount").innerHTML = windows.length;
    document.getElementById("privateWindowCount").innerHTML =
      privateWindow.length;
  });
});
