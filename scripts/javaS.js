function showMorePlayers() {
    const extraPlayers = document.getElementById('extra-players');
    const button = document.querySelector('.toggle-button');
  
    if (extraPlayers.style.display === 'none') {
      extraPlayers.style.display = 'flex';
      button.innerHTML = 'Show Less <i class="fas fa-chevron-up"></i>';
    } else
    {
      extraPlayers.style.display = 'none';
      button.innerHTML = 'Show More <i class="fas fa-chevron-down"></i>';
    }
  }
 
  document.addEventListener("DOMContentLoaded", function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slideshow .slide");
  
    function showNextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  
    setInterval(showNextSlide, 3000); // change every 4 seconds
  });
  
  function showPaymentForm() {
    const form = document.getElementById('payment-form');
    form.style.display = 'flex';
    form.scrollIntoView({ behavior: 'smooth' });
  }
  