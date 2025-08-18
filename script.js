// Функция для проверки мобильного устройства
function isMobile() {
    return window.innerWidth <= 768;
}

// Функция для скачивания скинов
function downloadSkin(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Объединенный обработчик DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигационных ссылок
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Анимация для кнопки CTA
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Можете добавить здесь свою логику
            alert('Добро пожаловать на сайт Noclip!');
        });
    }

    // Добавление эффекта появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за секциями
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Эффект изменения навигации при прокрутке
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });

    // Обработчик для кнопок скачивания скинов
    const downloadButtons = document.querySelectorAll('.download-btn[data-file]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filePath = this.getAttribute('data-file');
            const fileName = this.getAttribute('data-filename');
            
            downloadSkin(filePath, fileName);
        });
    });

    // Обработчик для кнопок описания скинов
    const descriptionButtons = document.querySelectorAll('.description-btn');
    const modal = document.getElementById('skinModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    // Описания скинов
    const skinDescriptions = {
        'backrooms-explorer': {
            title: 'Backrooms Explorer',
            description: 'Исследователь Закулисья в стандартном снаряжении для выживания в бесконечных жёлтых коридорах. Экипирован фонариком, рюкзаком и защитной одеждой для длительных путешествий по лабиринтам Закулисья.'
        },
        'partygoer': {
            title: 'Partygoer',
            description: 'Иди к нам на уровень веселья:) Там всегда весело! А ещё у нас есть вкусные тортики и красивые шары!'
        },
        'wretched': {
            title: 'Wretched',
            description: 'Искажённое существо из глубин Закулисья с потрёпанным видом. Некогда было человеком, но долгое пребывание в аномальных уровнях изменило его до неузнаваемости.'
        },
        'venom': {
            title: 'Venom',
            description: 'Симбиот, связанный с носителем в крепком союзе. Вместе они стали сильнее, быстрее и опаснее. Не враг — если ты не мешаешь.'
        },
        'agony-slim': {
            title: 'Agony Slim',
            description: 'Тонкая версия фиолетового симбиота Агония с острыми когтями. Отличается повышенной агрессивностью и способностью к быстрым атакам благодаря стройному телосложению.'
        },
        'carnage': {
            title: 'Carnage',
            description: 'Ярко-красный симбиот Карнаж с чёрными прожилками и хаотичными узорами. Самый опасный и непредсказуемый из всех симбиотов, жаждущий разрушения и хаоса.'
        },
        'robocop': {
            title: 'RoboCop',
            description: 'Кибер-полицейский из будущего. Создан защищать порядок, наказывать зло и бороться с преступностью. Он не знает усталости. Его стальные мышцы и продвинутые технологии делают его неуязвимым.'
        },
        'terminator': {
            title: 'Terminator',
            description: 'Эндоскелет T-800 Терминатор с металлическим корпусом и красными глазами. Неумолимая машина времени, запрограммированная на выполнение своей миссии любой ценой.'
        },
        'ex-mind': {
            title: 'Ex-Mind',
            description: 'Паразит-робот, вонзившийся в череп жертвы. Поглотил голову, оставив только тело и мозг. Теперь это — его оболочка. Его разум. Его цель.'
        }
    };

    descriptionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const skinId = this.getAttribute('data-skin');
            const skinData = skinDescriptions[skinId];
            
            if (skinData) {
                modalTitle.textContent = skinData.title;
                modalDescription.textContent = skinData.description;
                modal.style.display = 'block';
            }
        });
    });

    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Закрытие модального окна при нажатии Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

// Адаптивное поведение для мобильных устройств
window.addEventListener('resize', function() {
    if (isMobile()) {
        // Дополнительная логика для мобильных устройств
        console.log('Мобильное устройство обнаружено');
    }
});
