function setPreloaderTransparentOrDisplaynone() {
    "internet explorer" == browserName && browserVersion <= 8 ? preloaderDiv.setAttribute("class", "displaynone") : preloaderDiv.setAttribute("class", "transparent")
}
var preloaderDiv = document.getElementById("preloader");
setPreloaderTransparentOrDisplaynone();
