
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