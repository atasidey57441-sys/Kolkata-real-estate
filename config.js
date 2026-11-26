// Single place to set the business contact number.
// phone: country code + number, digits only (used for WhatsApp and tel: links)
// display: how the number is shown on the page
const CONFIG={phone:'919830000000',display:'+91 98300 00000'};
document.querySelectorAll('[data-phone]').forEach(e=>e.textContent=CONFIG.display);
document.querySelectorAll('[data-tel]').forEach(e=>e.href='tel:+'+CONFIG.phone);
