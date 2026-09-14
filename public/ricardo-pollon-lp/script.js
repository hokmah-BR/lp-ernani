document.addEventListener("DOMContentLoaded", () => {

    // ─────────────────────────────────────────────────────
    // 1. NAVBAR — detecta painéis escuros e muda o estilo
    // ─────────────────────────────────────────────────────
    const nav = document.getElementById('site-nav');
    const darkPanels = document.querySelectorAll('.section-statement, .section-authority, .section-cta');

    const navObserver = new IntersectionObserver((entries) => {
        let anyDark = false;
        entries.forEach(entry => {
            if (entry.isIntersecting) anyDark = true;
        });
        // percorre todos os painéis escuros para checar
        darkPanels.forEach(panel => {
            const rect = panel.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 0) anyDark = true;
        });
        nav.classList.toggle('dark', anyDark);
    }, { threshold: [0, 0.1] });

    darkPanels.forEach(p => navObserver.observe(p));

    // Fallback — checa no scroll também
    window.addEventListener('scroll', () => {
        let isDark = false;
        darkPanels.forEach(panel => {
            const rect = panel.getBoundingClientRect();
            if (rect.top <= 80 && rect.bottom >= 30) isDark = true;
        });
        nav.classList.toggle('dark', isDark);
    }, { passive: true });

    // ─────────────────────────────────────────────────────
    // 2. REVEAL — anima seções normais ao entrar na tela
    // ─────────────────────────────────────────────────────
    const revealEls = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, parseInt(delay));
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => revealObserver.observe(el));

    // ─────────────────────────────────────────────────────
    // 3. HERO — animação de entrada nos elementos
    // ─────────────────────────────────────────────────────
    const heroFadeEls = document.querySelectorAll('.anim');
    heroFadeEls.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
        const delay = el.dataset.delay || (i * 120);
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + parseInt(delay));
    });

    // ─────────────────────────────────────────────────────
    // 4. SCROLL HINT — some ao rolar
    // ─────────────────────────────────────────────────────
    const scrollHint = document.querySelector('.hero-scroll-hint');
    if (scrollHint) {
        window.addEventListener('scroll', () => {
            const opacity = Math.max(0, 1 - window.scrollY / 300);
            scrollHint.style.opacity = opacity;
        }, { passive: true });
    }

    // ─────────────────────────────────────────────────────
    // 5. FAQ ACCORDION
    // ─────────────────────────────────────────────────────
    const accordionBtns = document.querySelectorAll('.accordion-btn');

    accordionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const isActive = btn.classList.contains('active');

            // Fecha todos os outros
            accordionBtns.forEach(other => {
                if (other !== btn && other.classList.contains('active')) {
                    other.classList.remove('active');
                    other.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle o atual
            btn.classList.toggle('active', !isActive);
            const body = btn.nextElementSibling;
            body.style.maxHeight = !isActive ? body.scrollHeight + 'px' : null;
        });
    });

    // ─────────────────────────────────────────────────────
    // 6. SMOOTH SCROLL para âncoras internas
    // ─────────────────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ─────────────────────────────────────────────────────
    // 7. STACKING CARDS INTELIGENTE
    // ─────────────────────────────────────────────────────
    const stackCards = document.querySelectorAll('.stack-card');
    
    function updateStickyCards() {
        const wh = window.innerHeight;
        stackCards.forEach(card => {
            const h = card.offsetHeight;
            // Só aplica o efeito sticky (travado na tela) se a seção couber na tela 
            // (com uma pequena folga de segurança de 50px).
            if (h <= wh + 50) {
                card.style.position = '-webkit-sticky';
                card.style.position = 'sticky';
                card.style.top = '0';
                card.style.bottom = 'auto';
            } else {
                // Se a seção for maior que a tela (muito comum no celular),
                // ela rola normalmente para não cortar conteúdo.
                card.style.position = 'relative';
                card.style.top = 'auto';
                card.style.bottom = 'auto';
            }
        });
    }

    // Calcula no início e ao redimensionar
    updateStickyCards();
    window.addEventListener('resize', updateStickyCards, { passive: true });
});
