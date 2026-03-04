// LOADING SCREEN
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.classList.add("hidden");
    }, 1500);
});

// Navbar effect
window.addEventListener("scroll", function () {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Reveal
function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// Typing Effect
const text = "Creative Developer | Tech Enthusiast | Problem Solver";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// PARTICLES
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        color: { value: "#00f0ff" },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00f0ff",
            opacity: 0.4,
            width: 1
        },
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

// CURSOR GLOW
const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// MAGNETIC BUTTON
const magneticBtn = document.querySelector(".btn");

magneticBtn.addEventListener("mousemove", (e) => {
    const rect = magneticBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    magneticBtn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

magneticBtn.addEventListener("mouseleave", () => {
    magneticBtn.style.transform = "translate(0,0)";
});

// 3D TILT CARD
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});
