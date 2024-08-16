function openLink(url) {
  window.open(url, "_blank");
}

function openInPrivate(url) {
  let edgeCommand = `microsoft-edge:${url} --inprivate`;
  window.location.href = edgeCommand;
}


