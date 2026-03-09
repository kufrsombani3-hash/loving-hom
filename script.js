
let zoomLevel = 1;

function increaseFont() {
zoomLevel += 0.1;
document.body.style.zoom = zoomLevel;
}

function decreaseFont() {
zoomLevel -= 0.1;
document.body.style.zoom = zoomLevel;
}



window.addEventListener('load', function() {
    if (!sessionStorage.getItem('welcomed')) {
        alert("أهلاً بك في Loving Home Hotel 🐾\nنتمنى لك تجربة رائعة!");
        sessionStorage.setItem('welcomed', 'true');
    }
});

function validateForm(event) {
    event.preventDefault(); // يمنع إعادة تحميل الصفحة
    // جمع البيانات
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;
    let date = document.querySelector('input[type="date"]').value;
    
    if(name && email && date) {
        alert(`شكراً لك يا ${name}!\nتم استلام حجزك بتاريخ ${date}.\nسنرسل لك تأكيد على البريد: ${email}`);
    } else {
        alert("يرجى ملء جميع الحقول المطلوبة قبل الإرسال 🐾");
    }
}

//////////////////////////////
// تأثير hover على البوكسات (اختياري)
//////////////////////////////
const boxes = document.querySelectorAll('.package-box, .room-box');
boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "transform 0.2s";
    });
    box.addEventListener('mouseleave', () => {
        box.style.transform = "scale(1)";
    });
});
let curentSlide = 0;
const slideshow = document.querySelectorAll(".slideshow-container img");

function showSlide() {
    slides.forEach(img => img.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    currentSlide++;
    if(currentSlide >= slides.length) currentSlide = 0;
    setTimeout(showSlide, 3000); // كل 1 ثانية
}

let currentIndex = 0;
const slides = document.querySelectorAll('.section img');

// إخفاء كل الصور بالبداية
slides.forEach((img) => {
    img.style.display = 'none';
});

// عرض أول صورة
slides[currentIndex].style.display = 'block';

// function لتغيير الصورة
function showNextSlide() {
    slides[currentIndex].style.display = 'none'; // إخفاء الصورة الحالية
    currentIndex = (currentIndex + 1) % slides.length; // الانتقال للصورة التالية
    slides[currentIndex].style.display = 'block'; // عرض الصورة الجديدة
}

// تغيير الصورة كل 1 ثانية
setInterval(showNextSlide, 3000);

