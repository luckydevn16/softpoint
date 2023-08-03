// Navigation
const scrollToHero = () => {
    document.querySelector('#hero').scrollIntoView({ behavior: "smooth" })
}
const scrollToTop = () => {
    document.querySelector('#header').scrollIntoView({ behavior: "smooth" })
}
const scrollToAdvantages = () => {
    document.querySelector('#advantages').scrollIntoView({ behavior: "smooth" })
}
const scrollToDownload = () => {
    document.querySelector('#download').scrollIntoView({ behavior: "smooth" })
}
const scrollToPricing = () => {
    document.querySelector('#pricing').scrollIntoView({ behavior: "smooth" })
}
// Mobile Menu
let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileMenuCloseBtn = document.querySelector(".mobile-menu-close-btn");
let mobileMenu = document.querySelector(".mobile-menu");

const mobileMenuOpen = () => {
    mobileMenu.classList.add('open');
    mainWrapper.classList.add('blocked');
}
const mobileMenuClose = () => {
    mobileMenu.classList.remove('open');
    mainWrapper.classList.remove('blocked');
}
// Modal Window
let modalWindow = document.querySelector("#modalFormWindow");
let modalContent = document.querySelector(".modal-window-content");
let mainWrapper = document.querySelector(".main-wrapper");

const openModal = () => {
    modalWindow.classList.add('active');
    mainWrapper.classList.add('blocked');
}

window.onclick = (event) => {
    if (event.target == modalWindow) {
        modalWindow.classList.remove('active');
        mainWrapper.classList.remove('blocked');
    }
}
// Email Subscribtion
let modalEmailWindow = document.querySelector("#modalEmailWindow");
let heroFormInput = document.querySelector(".hero-form-input");
let emailRequired = document.querySelector(".email-required");

const emailSubscribtion = () => {
    if (heroFormInput.value != '') {
        modalEmailWindow.classList.add('active');
        mainWrapper.classList.add('blocked');
    } else {
        emailRequired.classList.add('visible');
    }
}

heroFormInput.addEventListener('focus', function() {
    if (emailRequired.classList.contains('visible')) {
        emailRequired.classList.remove('visible');
    }
});

const closeEmailModal = () => {
    modalEmailWindow.classList.remove('active');
    mainWrapper.classList.remove('blocked');
    heroFormInput.value = '';
}
// Range Slider
let slider = document.querySelector(".pricing-range-input");
let output = document.querySelector(".range-input-value");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
    output.style.left = `${this.value / 2.12}%`;
}
//Save Up Percent
let saveUpPercent = document.querySelector(".save-up-percent");
let pricingCheckboxInput = document.querySelector(".pricing-checkbox-input");
saveUpPercent.innerHTML = '40';

pricingCheckboxInput.onchange = () => {
    if (pricingCheckboxInput.checked) {
        saveUpPercent.innerHTML = '60';
    } else {
        saveUpPercent.innerHTML = '40';
    }
}
// Form Submission
let nameValue = document.querySelector('.name');
let lastnameValue = document.querySelector('.lastname');
let emailValue = document.querySelector('.email');
let requiredFields = document.querySelector('.required-fields');

const formSubmission = () => {
    if (nameValue.value != '' && lastnameValue.value != '' && emailValue.value != '') {
        window.location.href = 'thankyou.html';
    } else {
        requiredFields.classList.add('visible');
    }
}

const inputFields = document.querySelectorAll('.name, .lastname, .email');
for (let inputItem of inputFields) {
    inputItem.addEventListener('focus', function() {
        if (requiredFields.classList.contains('visible')) {
            requiredFields.classList.remove('visible');
        }
    });
}







