// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animates only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach((el) => {
        observer.observe(el);
    });
});

// Sakura Petals Animation Setup
const sakuraContainer = document.getElementById('sakura-container');

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Randomize starting position and size
    const startLeft = Math.random() * window.innerWidth;
    const size = Math.random() * 10 + 10; // 10px to 20px
    const duration = Math.random() * 5 + 5; // 5s to 10s
    const delay = Math.random() * 5;
    
    petal.style.left = `${startLeft}px`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;

    // Add CSS for the petal shape directly here for simplicity in management or use style.css class
    // We'll use a class defined in JS or assume simple styling, but let's inject styles for petals in JS to keep it self-contained if style.css is missing it.
    // However, it's better to modify style.css for petals. I'll add the style injection here just in case.
    
    petal.style.position = 'absolute';
    petal.style.top = '-20px';
    petal.style.background = '#ffb7c5';
    petal.style.borderRadius = '100% 0 100% 0';
    petal.style.transform = 'rotate(0deg)';
    petal.style.animationName = 'fall';
    petal.style.animationTimingFunction = 'linear';
    petal.style.animationIterationCount = 'infinite';
    
    sakuraContainer.appendChild(petal);

    // Clean up petals that fall out of view? 
    // For a simple infinite loop with fixed animation time, we might accumulate DOM elements.
    // Better to remove them after animation ends but they are infinite loop.
    // Actually, let's make them finite and recreate them to avoid infinite DOM growth if we were dynamically spawning.
    // But CSS infinite animation is better. We just foster a fixed number of petals.
}

// Create keyframes for falling if not existing
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    0% {
        top: -50px;
        transform: translateX(0) rotate(0deg);
        opacity: 0.8;
    }
    100% {
        top: 100vh;
        transform: translateX(100px) rotate(360deg);
        opacity: 0;
    }
}
`;
document.head.appendChild(styleSheet);

// Spawn a fixed number of petals
const PETAL_COUNT = 30;
for (let i = 0; i < PETAL_COUNT; i++) {
    createPetal();
}
