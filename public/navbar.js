// top nav open menu when clicked on hamburger icon
function hamburgerFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


async function updateNavbar() {
  
  const response = await fetch('/session-status');
  console.log(response);
  if (!response.ok) {
    console.error('Failed to fetch session status');
    return;
  }
  const status = await response.json();
  

  const navbar = document.querySelector('.navbar');
  if (status.isLoggedIn) {
    navbar.innerHTML = `
        
          <a class="links" href="../index.html">Home</a>
          <a class="links" href="dashboard.html">Account</a>
          <a class="links" id="LogoutButton" href="/logout" >Log Out</a>
      `;
  } else {
    navbar.innerHTML = `
          
          <a class="links" href="../index.html">Home</a>
         
          <a class="links" href="login.html">Log In</a>
          <a class="links" id="Contactmargin" href="signup.html">Sign Up</a>
      `;
  }
 
}

// Call updateNavbar on page load
document.addEventListener('DOMContentLoaded', updateNavbar);

