const loader = document.querySelector("#loader");
window.addEventListener('load', function () {
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
})
