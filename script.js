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

    // MIT License Modal functionality
    const licenseLink = document.getElementById('license-link');
    const licenseModal = document.getElementById('license-modal');
    const closeBtn = document.querySelector('.close');
    const agreeBtn = document.querySelector('.agree-btn');

    if (licenseLink) {
        licenseLink.addEventListener('click', function(e) {
            e.preventDefault();
            licenseModal.style.display = 'block';
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            licenseModal.style.display = 'none';
        });
    }

    if (agreeBtn) {
        agreeBtn.addEventListener('click', function() {
            licenseModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === licenseModal) {
            licenseModal.style.display = 'none';
        }
    });

    // Установить начальный стиль для header
    const header = document.querySelector('header');
    if (header) {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
});

// Эффект изменения навигации при прокрутке
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    }
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
