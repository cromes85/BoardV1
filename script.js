function openLink(url) {
  window.open(url, "_blank");
}

function openInPrivate(url) {
  let edgePath = 'microsoft-edge:';
  window.open(edgePath + '--inprivate,' + url);
}

