const buttons = document.querySelectorAll('.btnchan'); // Select all buttons

const images = document.querySelectorAll('.cardimg'); // Select all images


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const colorClass = button.getAttribute('data-color'); // Get the color class

        buttons.forEach((btn) => btn.classList.remove('active')); // Remove the active class from all buttons
        button.classList.add('active'); // Add the active class to the clicked button
        // Remove the active class from all images
        images.forEach((img) => img.classList.remove('active'));

        // Add the active class to the corresponding image
        document.querySelector(`.${colorClass}`).classList.add('active');
    });
});




const button1 = document.querySelectorAll('.btnchan1'); // Select all buttons
const image1 = document.querySelectorAll('.cardimg1'); // Select all images

button1.forEach((btn1) => {
        btn1.addEventListener('click', () => {
        const colorClass1 = btn1.getAttribute('data-color'); // Get the color class

        button1.forEach((btn11) => btn11.classList.remove('active')); // Remove the active class from all buttons
        btn1.classList.add('active'); // Add the active class to the clicked button
        // Remove the active class from all images
        image1.forEach((img1) => img1.classList.remove('active'));

        // Add the active class to the corresponding image
        document.querySelector(`.${colorClass1}`).classList.add('active');
    });
});



const button2 = document.querySelectorAll('.btnchan2'); // Select all buttons
const image2 = document.querySelectorAll('.cardimg2'); // Select all images

button2.forEach((btn2) => {
        btn2.addEventListener('click', () => {
        const colorClass2 = btn2.getAttribute('data-color'); // Get the color class

        button2.forEach((btn22) => btn22.classList.remove('active')); // Remove the active class from all buttons
        btn2.classList.add('active'); // Add the active class to the clicked button
        // Remove the active class from all images
        image2.forEach((img2) => img2.classList.remove('active'));

        // Add the active class to the corresponding image
        document.querySelector(`.${colorClass2}`).classList.add('active');
    });
});




const serveIcons = document.querySelectorAll(".serveicon"); // Select all service plus icons

serveIcons.forEach((icon, index) => {
   icon.addEventListener("click", () => {
       const serviceCards = document.querySelectorAll(".service-card"); // Select all service cards
       
    

       // Add "active" class only to the card associated with the clicked button
       serviceCards[index].classList.toggle("active");
   });
});



// quantity

document.addEventListener("DOMContentLoaded", function () {
    const quantityDivs = document.querySelectorAll(".quantity");

    quantityDivs.forEach(quantityDiv => {
        const minusBtn = quantityDiv.querySelector(".fa-minus");
        const plusBtn = quantityDiv.querySelector(".fa-plus");
        const countElement = quantityDiv.querySelector(".count");

        minusBtn.addEventListener("click", function () {
            let count = parseInt(countElement.textContent);
            if (count > 1) {
                countElement.textContent = count - 1;
            }
        });

        plusBtn.addEventListener("click", function () {
            let count = parseInt(countElement.textContent);
            countElement.textContent = count + 1;
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const userText = document.querySelector(".user");
    const voucherForm = document.querySelector(".form");
    const closeIcon = document.querySelector("#times");

    // Hide the form initially
    voucherForm.style.display = "none";

    userText.addEventListener("click", function () {
        voucherForm.style.display = "flex"; // Show form
        userText.style.display = "none"; // Hide user text
    });

    closeIcon.addEventListener("click", function () {
        voucherForm.style.display = "none"; // Hide form
        userText.style.display = "flex"; // Show user text
    });
});
