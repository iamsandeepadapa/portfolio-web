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
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_pbbit3p",
        "template_7wt6dbo",
        this
    ).then(() => {
        alert("Message Sent Succesfully");
    }).catch(err => {
        console.error(err);
        alert("FAILED To Send");
    });
});
