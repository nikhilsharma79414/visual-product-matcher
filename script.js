const fileInput = document.getElementById('fileInput');
const urlInput = document.getElementById('urlInput');
const uploadBtn = document.getElementById('uploadBtn');
const imagePreview = document.getElementById('imagePreview');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');

let uploadedImage = null;

// ✅ Handle image upload or URL input
uploadBtn.addEventListener('click', () => {
  const file = fileInput.files[0];
  const url = urlInput.value.trim();

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      showPreview(e.target.result);
      uploadedImage = e.target.result;
    };
    reader.readAsDataURL(file);
  } else if (url) {
    showPreview(url);
    uploadedImage = url;
  } else {
    alert("Please upload a file or enter an image URL!");
  }
});

// ✅ Show uploaded image in preview box
function showPreview(src) {
  imagePreview.innerHTML = `<img src="${src}" alt="Uploaded Image" />`;
}

// ✅ Simulate "Finding similar images"
searchBtn.addEventListener('click', () => {
  if (!uploadedImage) {
    alert("Please upload an image first!");
    return;
  }

  loading.style.display = 'block';
  searchBtn.disabled = true;

  setTimeout(() => {
    loading.style.display = 'none';
    searchBtn.disabled = false;
    alert("✅ Similar images search complete! (Backend will handle this later)");
  }, 2000);
});
