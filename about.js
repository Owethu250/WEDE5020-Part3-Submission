document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll(".accordion").forEach(btn=>{
    btn.addEventListener("click", function(){
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      panel.style.display = panel.style.display==="block" ? "none" : "block";
    });
  });
});
