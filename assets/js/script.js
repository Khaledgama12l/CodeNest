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