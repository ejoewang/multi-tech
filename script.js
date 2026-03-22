//Add Basic JavaScript File
//prepare your site for future features like AI assistant and booking system.

// MULTI TECH MAIN JAVASCRIPT FILE

console.log("MULTI TECH website loaded successfully");

//WHAT JavaScript Does= Detects which button was clicked, Reads the service name, Creates a message automatically, Opens WhatsApp with that message, As below//

// SMART WHATSAPP SERVICE REQUEST

const buttons = document.querySelectorAll('.whatsapp-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(){

        const service = this.getAttribute('data-service');

        const message = `Hello MULTI TECH, I want to request ${service}.`;

        const url = `https://wa.me/237674200065?text=${encodeURIComponent(message)}`;

        window.open(url, '_blank');

    });
});

//Original Line AbovE Before Editing To Put Number: const url = `https://wa.me/YOUR_NUMBER?text=${encodeURIComponent(message)}`;//

//If you want Phones, Laptops, etc. to still highlight STORE, use this improved JS://

const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if(href === currentPage || 
       (currentPage.includes("phones") && href === "store.html") ||
       (currentPage.includes("laptops") && href === "store.html") ||
       (currentPage.includes("accessories") && href === "store.html") ||
       (currentPage.includes("networking") && href === "store.html") ||
       (currentPage.includes("cctv") && href === "store.html")
    ){
        link.classList.add("active");
    }
});