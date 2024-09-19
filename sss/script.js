document.addEventListener('DOMContentLoaded', function() {
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

function checkAge(isAdult) {
    if (isAdult) {
        setCookie('ageConfirmed', 'true', 365);
        document.getElementById('age-check').style.display = 'none';
        document.body.style.overflow = 'visible';
        document.getElementById('content').style.display = 'block';
    } else {
        window.location.href = "https://disneyland.disney.go.com/";
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // Исправлено: добавлено значение по умолчанию
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length);
    }
    return null;
}

function searchCards() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(card => {
        const title = card.getElementsByTagName('h3')[0].innerText.toLowerCase();
        card.style.display = title.includes(input) ? '' : 'none';
    });
}

function filterCategory(category) {
    const cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(card => {
        card.style.display = (category === 'all' || card.getAttribute('data-category') === category) ? '' : 'none'; // Исправлено: добавлен оператор "или"
    });
}
