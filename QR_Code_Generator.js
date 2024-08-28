'use strict';


document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text');
    const generateBtn = document.getElementById('generate');
    const qrCodeDiv = document.getElementById('qr-code');
    function generateQRCode() {
        const userInput = textInput.value.trim();
        if (!userInput) {
            alert("Please enter some text.");
            return;
        }
        qrCodeDiv.innerHTML = '';

        const xhr = new XMLHttpRequest();
        const apiURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(userInput)}`;

        xhr.open('GET', apiURL, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                const qrImg = document.createElement('img');
                qrImg.src = apiURL;
                qrImg.alt = 'QR Code';
                qrCodeDiv.appendChild(qrImg);
            } else {
                alert('Failed to generate QR code.');
            }
        };
        xhr.onerror = function() {
            alert('Request error.');
        };
        xhr.send();
    }


    generateBtn.addEventListener('click', generateQRCode);
});
