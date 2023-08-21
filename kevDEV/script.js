function toggleNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
  
  function toggleMode() {
    var body = document.body;
    if (body.style.getPropertyValue('--bg-color') === '#fff') {
      body.style.setProperty('--bg-color', '#333');
      body.style.setProperty('--text-color', '#fff');
      body.style.setProperty('--navbar-bg', '#333');
      body.style.setProperty('--navbar-text', '#fff');
    } else {
      body.style.setProperty('--bg-color', '#fff');
      body.style.setProperty('--text-color', '#333');
      body.style.setProperty('--navbar-bg', '#333');
      body.style.setProperty('--navbar-text', '#fff');
    }
  }