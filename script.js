document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const questionContainer = document.getElementById('question-container');
    const successContainer = document.getElementById('success-container');
    const heartsContainer = document.getElementById('hearts');

    let noClickCount = 0;
    const yesMessages = ['Yes! 💕', 'Yes!! 💖', 'YES!!! 🥰', 'YESSS!!!! 💗', 'YESSSS!!!!! 😍'];

    // Create floating hearts in background
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = ['💕', '💖', '💗', '💓', '❤️', '🩷'][Math.floor(Math.random() * 6)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (3 + Math.random() * 3) + 's';
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 6000);
    }

    // Start floating hearts
    setInterval(createFloatingHeart, 500);

    // Move the No button away
    function moveNoButton() {
        const container = document.body;
        const btnRect = noBtn.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const maxX = containerRect.width - btnRect.width - 20;
        const maxY = containerRect.height - btnRect.height - 20;

        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;

        // Make sure it doesn't overlap with yes button
        const yesRect = yesBtn.getBoundingClientRect();
        while (
            newX < yesRect.right + 50 && 
            newX + btnRect.width > yesRect.left - 50 &&
            newY < yesRect.bottom + 50 && 
            newY + btnRect.height > yesRect.top - 50
        ) {
            newX = Math.random() * maxX;
            newY = Math.random() * maxY;
        }

        noBtn.style.position = 'fixed';
        noBtn.style.left = newX + 'px';
        noBtn.style.top = newY + 'px';
        noBtn.style.transition = 'all 0.2s ease';

        // Grow the yes button and make it more appealing
        noClickCount++;
        if (noClickCount < yesMessages.length) {
            yesBtn.textContent = yesMessages[noClickCount];
            yesBtn.classList.add('growing');
            yesBtn.style.transform = `scale(${1 + noClickCount * 0.15})`;
        }
    }

    // No button events
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveNoButton();
    });
    noBtn.addEventListener('click', moveNoButton);

    // Yes button click - celebration!
    yesBtn.addEventListener('click', function() {
        questionContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
        
        // Create explosion of hearts
        createHeartExplosion();
        
        // Continue creating hearts rapidly
        for (let i = 0; i < 30; i++) {
            setTimeout(createFloatingHeart, i * 100);
        }
    });

    // Heart explosion effect
    function createHeartExplosion() {
        const hearts = ['💕', '💖', '💗', '💓', '❤️', '🩷', '💘', '💝', '💞'];
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'celebration-heart';
                heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                
                const angle = (Math.random() * 360) * (Math.PI / 180);
                const distance = 100 + Math.random() * 200;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                heart.style.left = centerX + 'px';
                heart.style.top = centerY + 'px';
                heart.style.setProperty('--tx', tx + 'px');
                heart.style.setProperty('--ty', ty + 'px');
                
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 1500);
            }, i * 50);
        }
    }
});
