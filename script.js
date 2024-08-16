function openLink(url) {
  window.open(url, "_blank");
}

function openInPrivate(url) {
  // Utilisation de Microsoft Edge pour ouvrir une nouvelle fenêtre InPrivate
  let edgePath = "microsoft-edge:";
  // window.open(edgePath + '--inprivate ' + url, '_blank');
  window.open(edgePath +"--inprivate"+ url);
}
