const btnFront = document.getElementById("btnFront");
const btnBack = document.getElementById("btnBack");
const wellcomerShow = document.getElementById("wellcomer_show");

let wellcomeCount = 0;

btnFront.addEventListener("click", () => {
    if (wellcomeCount == 0) {
        wellcomerShow.innerHTML = `
        
        
        
        `
    }
})