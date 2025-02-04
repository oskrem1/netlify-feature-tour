document.getElementById("yesBtn").addEventListener("click", function() {
    window.location.href = "yes.html";
});
document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = (Math.random() * (window.innerWidth - this.clientWidth)) + "px";
    this.style.top = (Math.random() * (window.innerHeight - this.clientHeight)) + "px";
});