document.querySelectorAll('.product-card').forEach(card => {
    const images = card.querySelectorAll('.product-images img');

    images.forEach(img => {
        img.addEventListener('click', () => {

            const active = card.querySelector('.product-images img.active');

            // swap src
            let temp = active.src;
            active.src = img.src;
            img.src = temp;

        });
    });
});