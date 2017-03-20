//lightbox manage

var lb = {
    open:function openLightbox() {
        var mainLight = document.getElementById('modal');
        mainLight.style = "display:inline";
        
    },
    close: function closeLightbox() {
        var mainLight = document.getElementById("modal");
        mainLight.style = "display:none";
    }
}

module.exports = lb;