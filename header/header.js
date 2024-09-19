document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.header-content img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        img.setAttribute('src', window.location.origin + '/' + src);
    });

    // Остальной ваш код
    if (!getCookie('ageConfirmed')) {
        document.getElementById('age-check').style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        document.getElementById('content').style.display = 'block';
    }

    document.getElementById('yes').onclick = function() {
        checkAge(true);
    };

    document.getElementById('no').onclick = function() {
        checkAge(false);
    };

    // Добавляем обработчик для гамбургер-меню
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('active');
    });

    // Добавляем обработчик для кнопки закрытия меню
    document.querySelector('.close-btn').addEventListener('click', function() {
        document.querySelector('.menu').classList.remove('active');
    });
});
