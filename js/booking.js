/* Booking Form → WhatsApp Integration */
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    if(bookingForm){
        bookingForm.addEventListener('submit', function(e){
            e.preventDefault();

            const name = document.getElementById('bname').value;
            const email = document.getElementById('bemail').value;
            const service = document.getElementById('bservice').value;
            const date = document.getElementById('bdate').value;
            const time = document.getElementById('btime').value;

            // WhatsApp link (replace number with your real one)
            const whatsappNumber = "237674200065";
            const whatsappMessage = `Hello MULTI TECH, my name is ${name}. I want to book the service: ${service} on ${date} at ${time}. My email: ${email}.`;

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, "_blank");
        });
    }
});