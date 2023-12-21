function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  document.addEventListener("DOMContentLoaded", function() {
    // Simulating loading by delaying the hiding of the splash screen
    setTimeout(function() {
      const splashScreen = document.getElementById("splash");
      const mainContent = document.getElementById("mainContent");
  
      splashScreen.style.display = "none";
      mainContent.style.display = "block";
    }, 3000); // Change the delay time (in milliseconds) as needed
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    let count = 0;
  
    function updateCounter() {
      if (count <= 100) {
        counterElement.textContent = count;
        count++;
        setTimeout(updateCounter, 25); // Change the time interval (in milliseconds) as desired
      }
    }
  
    // Start the counter when the DOM content is loaded
    updateCounter();
  });

  document.addEventListener("click",e => {
    let tar = e.target;
    if (tar.name == "toggle")
      tar.removeAttribute("class");
  });

  document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }


// main.js
document.body.onmousemove = function(e) {
  document.documentElement.style.setProperty (
    '--x', (
      e.clientX+window.scrollX
    )
    + 'px'
  );
  document.documentElement.style.setProperty (
    '--y', (
      e.clientY+window.scrollY
    ) 
    + 'px'
  );
}

let slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});