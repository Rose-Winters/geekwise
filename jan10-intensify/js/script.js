var snOpen = document.getElementById("sn-open"),
    snClose = document.getElementById("sn-close")
    sn = document.getElementById("sn");

console.log(snOpen, snClose, sn);

snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);

function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}
