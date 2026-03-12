
function sendToWhatsapp() {
    const phoneNumber = "2348149217581"; 
    
    // Get form elements
    const form = document.getElementById('whatsappForm');
    const successBox = document.getElementById('successMessage');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
     const phone = document.getElementById('phone').value;
     const state = document.getElementById('state').value;
     const size = document.getElementById('size').value;
    const service = document.getElementById('service').value;

    // Validation
    if (name === "" || email === "" || service === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create the message
    const message = `Hello ArtDeco! %0A%0A` +
                    `I'd like to claim the *FREE Interior Design* offer.%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Email:* ${email}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*State:* ${state}%0A` +
                    `*Size:* ${size}%0A` +
                    `*Space:* ${service}`;

    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // --- UI SUCCESS EFFECT ---
    form.style.display = 'none'; // Hide the form
    successBox.style.display = 'block'; // Show the success message
}