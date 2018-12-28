const galleryList = document.querySelector('.gallery-list');
const bigImage = document.querySelector('.gallery-big-image');

galleryList.addEventListener('click', function(event) {
  event.preventDefault();
  const target = event.target;

  if (target.nodeName != 'IMG') { return; }

  bigImage.replaceChild(
    target.cloneNode(false),
    bigImage.firstElementChild
  );
});
