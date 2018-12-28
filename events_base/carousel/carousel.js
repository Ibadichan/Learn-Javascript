(function () {
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const carousel = document.querySelector('.carousel-list');

  const containerWidth = carousel.parentElement.offsetWidth;
  const totalWidth = [].reduce.call(carousel.children, (totalWidth, item) => {
    totalWidth += item.offsetWidth;
    return totalWidth;
  }, 0);

  let index = 0;
  let transformLength = 0;

  nextButton.addEventListener('click', function () {
    moveCarousel('forward', carousel);
  });

  prevButton.addEventListener('click', function () {
    moveCarousel('backward', carousel);
  });

  function moveCarousel(direction, carousel) {
    if (direction === 'forward') {
      if (transformLength + containerWidth >= totalWidth) { return; }
      carousel.style.transform = `translateX(-${containerWidth * ++index}px)`;
      transformLength += containerWidth;
    } else if (direction === 'backward') {
      if (transformLength === 0) { return; }
      carousel.style.transform = `translateX(-${containerWidth * --index}px)`;
      transformLength -= containerWidth;
    }
  }
})();
