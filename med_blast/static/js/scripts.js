function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showCopyMessage();
    }, function(err) {
        alert("Erro ao copiar o comando: ", err);
    });
}

function showCopyMessage() {
    const messageElement = document.getElementById("copy-message");
    messageElement.style.display = "block";
    setTimeout(function() {
        messageElement.style.display = "none";
    }, 2000);
}
