function openPopup() {
        document.getElementById("popupOverlay").style.display = "flex";
        }

        function closePopup(event) {
        document.getElementById("popupOverlay").style.display = "none";
        }
                let btnUp=document.getElementById("up")
        let btnDown=document.getElementById("down")

        window.onscroll =function()
        {
                if(this.scrollY>=200){
                        btnUp.style.display=("block")
                }else{
                        btnUp.style.display=("none")
                }
        }

        btnUp.onclick = function(){
                scroll(
                        {left:0,top:0,behavior:"smooth"}
                )
        }
        btnDown.onclick = function(){
                window.scroll(
                        {left:0,top:document.body.scrollHeight,behavior:"smooth"}
                )
        }


        if(document.body.scrollHeight<1080){
                btnDown.style.display=("none")
        }








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

