const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Close menu after clicking link (mobile fix)
document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

// BACKGROUND SLIDER

const home = document.querySelector(".home");

const images = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
];

let index = 0;

function changeBackground(){
  home.style.background =
    `url(${images[index]}) center/cover no-repeat`;

  index = (index + 1) % images.length;
}

setInterval(changeBackground, 4000);


const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    message: form.message.value
  };

  try {
    const res = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.success) {
      alert("Message Sent Successfully ✅");
      form.reset();
    } else {
      alert("Error sending message ❌");
    }

  } catch (err) {
    alert("Server error ❌");
  }
});