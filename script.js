document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !email || !subject || !message) {
        messageBox.textContent = "All fields are required.";
        messageBox.style.color = "red";
      } else {
        messageBox.textContent = "Message sent to the Site Manager!";
        messageBox.style.color = "green";
        form.reset();
      }
    });
  });
  