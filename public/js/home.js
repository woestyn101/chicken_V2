 const button = document.getElementById("dopdown-button");
 var x = document.getElementById("dropdown");
         button.addEventListener("click", function(){
         if (x.style.display === "none") {
        x.style.display = "block";
        } else {
         x.style.display = "none";
    }
  })