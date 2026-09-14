let poesje = document.querySelector("#poesje");

poesje.addEventListener("click", function() {

if (poesje.style.backgroundColor === "rgb(255, 136, 180)" ){
    poesje.innerHTML = "Man, ik ben hier echt klaar mee bro. Ik wil poffertjes eten.";
    poesje.style.backgroundColor = "rgb(164, 255, 255)";
} else {
        poesje.innerHTML = "Make it stop! :D";
        poesje.style.backgroundColor = "rgb(255, 136, 180)";
    }
});
