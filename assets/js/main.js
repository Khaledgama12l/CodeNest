document.addEventListener("DOMContentLoaded", () => {
  const pageContainer = document.getElementById("page-content");
  const buttons = document.querySelectorAll(".links button");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const page = btn.dataset.page;
      loadPage(page);
    });
  });

  function loadPage(page) {
    if (page === "home") {
      pageContainer.innerHTML = ""; // يرجع للهوم الأصلية
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    fetch(`pages/${page}.html`)
      .then(res => res.text())
      .then(data => {
        pageContainer.innerHTML = data;
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch(() => {
        pageContainer.innerHTML = "<p>حدث خطأ أثناء تحميل الصفحة.</p>";
      });
  }
});
function toggleMenu() {
    const links = document.querySelector('.links');
    links.classList.toggle('active');
}

function openPopup() {
    document.getElementById('popupOverlay').style.display = 'flex';
}

function closePopup(event) {
    if(event) event.stopPropagation();
    document.getElementById('popupOverlay').style.display = 'none';
}

