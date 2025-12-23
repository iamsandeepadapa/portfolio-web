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

function sendMail(){

    let parameter={

 
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
      }
      emailjs.send("service_pbbit3p","template_7wt6dbo",parameter).then (alert("Message has been send successfully!"));

}