// Отримуємо елементи
const burger = document.querySelector('.nav-toggle'); // Кнопка-бургер
const overlay = document.createElement('div'); // Створюємо затемнення фону
overlay.className = 'overlay';
document.body.appendChild(overlay); // Додаємо елемент затемнення до body

// Створюємо вертикальне меню, копіюючи вміст горизонтального меню
const navListVertical = document.createElement('ul');
navListVertical.className = 'nav-list-vertical';
navListVertical.innerHTML = document.querySelector('.nav-list').innerHTML; // Копіюємо елементи з .nav-list
document.body.appendChild(navListVertical); // Додаємо вертикальне меню до body

// Функція для відкриття/закриття меню
function toggleMenu() {
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    navListVertical.style.display = navListVertical.style.display === 'flex' ? 'none' : 'flex';
}

// Додаємо обробник події для кнопки-бургер
burger.addEventListener('click', toggleMenu);

// Закриття меню при натисканні на затемнення фону
overlay.addEventListener('click', toggleMenu);



document.addEventListener("DOMContentLoaded", () => {
    const sliderImages = document.querySelectorAll(".slider-img");

    sliderImages.forEach(image => {
        image.addEventListener("click", () => {
            // Знайти поточне активне зображення та видалити клас "active"
            const activeImage = document.querySelector(".slider-img.active");
            if (activeImage) {
                activeImage.classList.remove("active");
            }

            // Додати клас "active" до натиснутого зображення
            image.classList.add("active");
        });
    });
});





