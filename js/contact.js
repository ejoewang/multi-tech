/* Contact Form → WhatsApp Integration */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if(contactForm){
        contactForm.addEventListener('submit', function(e){
            e.preventDefault();

            const name = document.getElementById('name')?.value || contactForm.name.value;
            const email = contactForm.email.value;
            const service = contactForm.service.value;
            const message = contactForm.message.value;

            // WhatsApp link (replace number with your real one)
            const whatsappNumber = "237674200065";
            const whatsappMessage = `Hello MULTI TECH, my name is ${name}. I would like to request the service: ${service}. Message: ${message}. My email is ${email}.`;

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, "_blank");
        });
    }
});