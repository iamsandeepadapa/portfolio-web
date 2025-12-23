// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops page reload

    let parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs
        .send("service_pbbit3p", "template_b72cfsc", parameters)
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        });
});
