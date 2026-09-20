// Learn More button
const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", function () {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});


// Contact button
const contactBtn = document.getElementById("contactBtn");
const message = document.getElementById("message");

contactBtn.addEventListener("click", function () {
    message.textContent = "Thank you for visiting my Cloud Computing website!";
});