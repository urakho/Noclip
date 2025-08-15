// Плавная прокрутка для навигационных ссылок
document.addEventListener('DOMContentLoaded', function() {
    // Получаем все навигационные ссылки
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
});

// Функция для проверки мобильного устройства
function isMobile() {
    return window.innerWidth <= 768;
}

// Адаптивное поведение для мобильных устройств
window.addEventListener('resize', function() {
    if (isMobile()) {
        // Дополнительная логика для мобильных устройств
        console.log('Мобильное устройство обнаружено');
    }
});

// Функция для скачивания скина
function downloadSkin(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Обработчик для кнопок скачивания - ЕДИНСТВЕННЫЙ обработчик
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn[data-file]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const filePath = this.getAttribute('data-file');
            const fileName = this.getAttribute('data-filename');
            
            // Создаем ссылку для скачивания
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
function isMobile() {
    return window.innerWidth <= 768;
}

// Адаптивное поведение для мобильных устройств
window.addEventListener('resize', function() {
    if (isMobile()) {
        // Дополнительная логика для мобильных устройств
        console.log('Мобильное устройство обнаружено');
    }
});

// Функция для скачивания скина
function downloadSkin(filePath, fileName) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Обработчик для кнопок скачивания
document.addEventListener('DOMContentLoaded', function() {
    const downloadButtons = document.querySelectorAll('.download-btn[data-file]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filePath = this.getAttribute('data-file');
            const fileName = this.getAttribute('data-filename');
            
            // Создаем ссылку для скачивания
            const link = document.createElement('a');
            link.href = filePath;
            link.download = fileName;
            link.style.display = 'none';
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});
