document.addEventListener("DOMContentLoaded", function(){
  // Map - only if map div exists
  const mapDiv = document.getElementById("map");
  if(mapDiv && typeof L !== 'undefined'){
    const map = L.map('map').setView([-26.2489, 27.8546], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([-26.2489, 27.8546]).addTo(map).bindPopup("Intokozo Yemfundo Project").openPopup();
  }

  const form = document.getElementById("contactForm");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const type = document.getElementById("messageType").value;
      const msg = document.getElementById("fullMessage").value.trim();
      if(name.length<3 || !email.includes("@") || type==="" || msg.length<10){
        alert("Fill all fields - Message Type is REQUIRED");
        return;
      }
      const recipient = "info@intokozoyemfundo.org.za";
      const subject = `Contact: ${type} from ${name}`;
      const body = `Name:${name}\nEmail:${email}\nType:${type}\n\nMessage:\n${msg}`;
      document.getElementById("compiledPreview").innerHTML = `<pre>${body}</pre>`;
      document.getElementById("mailtoLink").href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      document.getElementById("contactResponse").style.display="block";
    });
  }
});
