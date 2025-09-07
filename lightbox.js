document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = modal.querySelector('.lightbox-img');
  const closeBtn = modal.querySelector('.close');
  const nextBtn = modal.querySelector('.next');
  const prevBtn = modal.querySelector('.prev');

  let currentGallery = [];
  let currentIndex = 0;

  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Get all images inside clicked gallery-item div
    const imgs = item.querySelectorAll('img');

    // Use all images, starting from the first
    currentGallery = Array.from(imgs);
    currentIndex = 0;
    openModal(currentGallery[0].src);
  });
});


  function openModal(src) {
    modal.style.display = 'flex';
    modalImg.src = src;
  }

  function closeModal() {
    modal.style.display = 'none';
    modalImg.src = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex].src;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
    modalImg.src = currentGallery[currentIndex].src;
  }

  closeBtn.addEventListener('click', closeModal);
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
});
