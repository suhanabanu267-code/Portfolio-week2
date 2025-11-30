
const menuBtn = document.getElementById("toggle-btn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");

    const expanded = navList.classList.contains("show");
    menuBtn.setAttribute("aria-expanded", expanded);
    menuBtn.textContent = expanded ? "✕" : "☰";
});

const form = document.getElementById("contactForm");
const responseBox = document.getElementById("form-response");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "" || email === ""){
        responseBox.textContent = "Please fill all the required fields.";
        responseBox.style.color = "red";
    }
    else{
        responseBox.textContent = "Thanks! Your message has been received.";
        responseBox.style.color = "lightgreen";
        form.reset();
    }
});
