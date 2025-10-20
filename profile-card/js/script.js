
// Select elements
const timeEl = document.querySelector('[data-testid="test-user-time"]');
const avatarImage = document.getElementById('avatarImage');
const avatarUrlInput = document.getElementById('avatarUrl');
const avatarFileInput = document.getElementById('avatarFile');

// --- Time updater ---
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// --- Avatar from URL ---
avatarUrlInput.addEventListener('change', (e) => {
  const url = e.target.value.trim();
  if (url) avatarImage.src = url;
});

// --- Avatar from File Upload ---
avatarFileInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = (event) => {
      const dataUrl = event.target.result;
      // Update image preview
      avatarImage.src = dataUrl;
      // Show the data URL in the input box
      avatarUrlInput.value = dataUrl;
    };

    reader.readAsDataURL(file);
  }
});


// ===== Contact Form Validation =====
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const formSuccess = document.getElementById("formSuccess");

    [nameError, emailError, messageError, formSuccess].forEach(el => (el.textContent = ""));

    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      valid = false;
    }

    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      emailError.textContent = "Enter a valid email address.";
      valid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long.";
      valid = false;
    }

    if (valid) {
      formSuccess.textContent = "✅ Your message has been sent!";
      contactForm.reset();
    }
  });
}