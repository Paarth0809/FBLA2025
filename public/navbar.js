// top nav open menu when clicked on hamburger icon
import { gameState } from './gameFunctions/gameState.js';

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
           <a class="links" href="tutorial.html">Tutorial</a>
          <a class="links"  id="logoutButton" href="#" >Log Out</a>
      `;
    const logoutBtn = document.getElementById('logoutButton');
    console.log(logoutBtn); // Should not be null
    if (logoutBtn) {
      logoutBtn.addEventListener('click', function (event) {
        event.preventDefault();
        console.log("Logout clicked"); // Debug log

       
        console.log("Saving game state before logout");
       
       
        fetch('/logout')
          .then(response => {
            if (response.ok) {
              console.log("Logout successful");
              localStorage.removeItem('gameState');
              window.location.href = '/'; // Redirect to the main page or login page
            } else {
              console.error("Logout failed");
            }
          })
          .catch(error => {
            console.error("Error during logout:", error);
          });
          window.location.href = '/'; // Redirect to the main page or login page
      });
    }
  } else {
    navbar.innerHTML = `
          
          <a class="links" href="../index.html">Home</a>
          <a class="links" href="tutorial.html">Tutorial</a>
          <a class="links" href="login.html">Log In</a>
          <a class="links" id="Contactmargin" href="signup.html">Sign Up</a>
      `;
  }

}

// Call updateNavbar on page load
document.addEventListener('DOMContentLoaded', updateNavbar);

