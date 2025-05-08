(function() {
  const prevButtonReviews = document.querySelector('#reviews-carousel .carousel-btn.prev');
  const nextButtonReviews = document.querySelector('#reviews-carousel .carousel-btn.next');
  const slidesReviews = document.querySelectorAll('#reviews-carousel .review-slide');
  let currentSlideReviews = 0;

  function goToPrevSlideReviews() {
    if (currentSlideReviews > 0) {
      currentSlideReviews--;
      updateCarouselReviews();
    }
  }

  function goToNextSlideReviews() {
    if (currentSlideReviews < slidesReviews.length - 1) {
      currentSlideReviews++;
      updateCarouselReviews();
    }
  }

  function updateCarouselReviews() {
    const offset = -currentSlideReviews * 100;
    document.querySelector('#reviews-carousel .carousel-track').style.transform = `translateX(${offset}%)`;

    if (currentSlideReviews === 0) {
      prevButtonReviews.style.display = 'none';
    } else {
      prevButtonReviews.style.display = 'block';
    }

    if (currentSlideReviews === slidesReviews.length - 1) {
      nextButtonReviews.style.display = 'none';
    } else {
      nextButtonReviews.style.display = 'block';
    }
  }

  prevButtonReviews.addEventListener('click', goToPrevSlideReviews);
  nextButtonReviews.addEventListener('click', goToNextSlideReviews);

  updateCarouselReviews();
})();

const activePage = window.location.pathname.split("/").pop(); // Get the current page name
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === activePage) { // Match the exact href
        link.classList.add('active'); // Add 'active' class to the current page link
        console.log(`Active page: ${activePage}`); // Log the active page for debugging
    }
});

function showNav() {
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'flex';
}

function hideNav() {
    const mobileNav = document.querySelector('.mobileNav');
    mobileNav.style.display = 'none';
}