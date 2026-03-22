document.querySelectorAll('.product-card').forEach(card => {
    const images = card.querySelectorAll('.product-images img');

    images.forEach(img => {
        img.addEventListener('click', () => {
            images.forEach(i => i.classList.remove('active'));
            img.classList.add('active');
        });
    });
});