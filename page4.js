const burger = document.querySelector('.nav-toggle');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay); // Додаємо елемент затемнення до тіла

const navListVertical = document.createElement('ul');
navListVertical.className = 'nav-list-vertical';
navListVertical.innerHTML = document.querySelector('.nav-list').innerHTML;
document.body.appendChild(navListVertical); // Додаємо вертикальне меню до тіла

// Функція для відкриття/закриття меню
function toggleMenu() {
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    navListVertical.style.display = navListVertical.style.display === 'flex' ? 'none' : 'flex';
}

// Додаємо обробник події для кнопки-бургер
burger.addEventListener('click', toggleMenu);

// Закриття меню при натисканні на фон
overlay.addEventListener('click', toggleMenu);