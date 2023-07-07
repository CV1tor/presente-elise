const cards = document.querySelector(".cards-display").children;
const cardsArray = [...cards];

cardsArray.forEach((e) => {
    
    e.addEventListener("click", () => {
        e.classList.toggle("active");

    })

    
})