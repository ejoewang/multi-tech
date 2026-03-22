//AI Chatbot JavaScript//

document.addEventListener("DOMContentLoaded", function(){

    const toggle = document.querySelector('.chat-toggle');
    const chatbox = document.querySelector('.chatbox');

    if(toggle && chatbox){
        toggle.addEventListener('click', function(e){
            e.preventDefault();
            chatbox.classList.toggle('active');
        });
    } else {
        console.log("Chat elements not found");
    }

});

// sendMessage function
// sendMessage function
function sendMessage(){
    const input = document.getElementById('user-input');
    const message = input.value.toLowerCase();
    const chatBody = document.getElementById('chat-body');

    // Show user message
    chatBody.innerHTML += `<p><strong>You:</strong> ${input.value}</p>`;

    // WhatsApp link
    const whatsappLink = "https://wa.me/237674200065";

    // QUICK BUTTONS
    const quickButtons = `
    <div style="margin-top:10px;">
        <button onclick="quickReply('computer')" class="chat-btn">💻 Repair Laptop</button>
        <button onclick="quickReply('phone')" class="chat-btn">📱 Fix Phone</button>
        <button onclick="quickReply('cctv')" class="chat-btn">📷 Install CCTV</button>
        <button onclick="quickReply('network')" class="chat-btn">🌐 Network Setup</button>
    </div>
    `;

    let response = "";

    if(message.includes("hello") || message.includes("hi")){
        response = `Hello 👋 Welcome to MULTI TECH.<br>
        Choose a service below:<br>
        ${quickButtons}<br><br>
        <a href="${whatsappLink}" target="_blank">Chat on WhatsApp</a>`;
    }

    else if(message.includes("computer") || message.includes("laptop")){
        response = `We provide advanced computer repairs including hardware and software.<br><br>
        👉 <a href="${whatsappLink}" target="_blank">Request service on WhatsApp</a>`;
    }

    else if(message.includes("phone")){
        response = `We repair smartphones (screen, charging, diagnostics).<br><br>
        👉 <a href="${whatsappLink}" target="_blank">Contact us on WhatsApp</a>`;
    }

    else if(message.includes("cctv")){
        response = `We install CCTV systems for homes and businesses.<br><br>
        👉 <a href="${whatsappLink}" target="_blank">Book installation</a>`;
    }

    else if(message.includes("network") || message.includes("wifi")){
        response = `We handle network setup and router configuration.<br><br>
        👉 <a href="${whatsappLink}" target="_blank">Get help on WhatsApp</a>`;
    }

    else if(message.includes("price") || message.includes("cost")){
        response = `Prices depend on your issue.<br><br>
        👉 <a href="${whatsappLink}" target="_blank">Get a quote on WhatsApp</a>`;
    }

    else{
        response = `I'm here to help 😊.<br>
        Choose a service below:<br>
        ${quickButtons}`;
    }

    // Show AI response
    chatBody.innerHTML += `<p><strong>Assistant:</strong> ${response}</p>`;

    // Scroll down
    chatBody.scrollTop = chatBody.scrollHeight;

    // Clear input
    input.value = "";
}

function quickReply(service){
    document.getElementById('user-input').value = service;
    sendMessage();
}