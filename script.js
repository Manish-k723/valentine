document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const questionContainer = document.getElementById("question-container");
  const successContainer = document.getElementById("success-container");
  const cuteMessage = document.getElementById("cute-message");

  let noClickCount = 0;
  let currentX = 0;
  let currentY = 0;

  const yesMessages = [
    "Yes! 💕",
    "Yes!! 💖",
    "YES!!! 🥰",
    "YESSS!!!! 💗",
    "YESSSS!!!!! 😍",
    "YESSSSS!!!!!! 🥺💕",
  ];

  const cuteMessages = [
    "I promise to be the best Valentine ever! 🥰",
    "We could watch movies and eat snacks together! 🍿",
    "I'll bring you your favorite treats! 🍫",
    "We'll make the cutest memories together! 📸",
    "I already picked out a perfect spot for us! 🌟",
    "You + Me = Perfect Valentine's Day! ✨",
    "I've been practicing my best compliments for you! 💝",
  ];

  const noButtonMessages = [
    "No 😢",
    "Are you sure? 🥺",
    "Really? 😭",
    "Please? 🙏",
    "Pretty please? 💔",
    "I'll be sad... 😿",
    "Don't break my heart! 💔",
    "Think again! 🥺",
    "But why not? 😢",
    "I'll be your best Valentine! 💝",
    "Give me a chance? 🌹",
    "I promise it'll be fun! 🎉",
    "Just one date? 💕",
    "I've been dreaming about this! ✨",
    "You won't regret it! 🥰",
    "I'll make you smile! 😊",
    "We're meant to be! 💫",
    "Don't say no! 🙏",
    "My heart is breaking... 💔",
    "I bought chocolate already! 🍫",
    "I'll be the sweetest! 🍬",
    "Come on... please? 🥺",
    "I've been waiting forever! ⏰",
    "You're making me cry! 😭",
    "Just think about it! 💭",
    "I'll do anything! 🌟",
    "We could have so much fun! 🎊",
    "I already told everyone! 😳",
    "My friends said you'd say yes! 👫",
    "Don't make me beg! 🙇",
    "I'll bring flowers! 🌸",
    "I practiced what to say! 💬",
    "You're my only choice! 💖",
    "I can't imagine anyone else! 💕",
    "This is my dream! ✨",
    "I'll write you poems! 📝",
    "I'll sing for you! 🎵",
    "We'd be so cute together! 👫",
    "I've liked you forever! ⏳",
    "You make my heart race! 💓",
    "I get butterflies around you! 🦋",
    "You're the one I want! 💘",
    "I'll never ask again... 😢",
    "This is my last hope! 🌠",
    "I believe in us! 💫",
    "We're perfect together! 💑",
    "You complete me! 🧩",
    "I need you! 💕",
    "Say yes, please! 🥺",
    "Fine, I give up... 😔",
  ];

  let messageIndex = 0;

  // Rotate cute messages
  setInterval(() => {
    messageIndex = (messageIndex + 1) % cuteMessages.length;
    cuteMessage.style.opacity = "0";
    setTimeout(() => {
      cuteMessage.textContent = cuteMessages[messageIndex];
      cuteMessage.style.opacity = "1";
    }, 300);
  }, 4000);

  /* -----------------------------
       FIXED MOVE LOGIC
    ----------------------------- */

  function moveNoButton() {
    noClickCount++;

    const padding = 20;
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = window.innerWidth - btnRect.width - padding;
    const maxY = window.innerHeight - btnRect.height - padding;

    const newX = padding + Math.random() * (maxX - padding);
    const newY = padding + Math.random() * (maxY - padding);

    currentX = newX;
    currentY = newY;

    noBtn.style.position = "fixed";
    noBtn.style.left = "0px";
    noBtn.style.top = "0px";
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${currentX}px, ${currentY}px)`;

    // Update text safely
    const textSpan = noBtn.querySelector(".btn-text");
    if (textSpan) {
      textSpan.textContent =
        noButtonMessages[noClickCount % noButtonMessages.length];
    }

    // Grow Yes button slightly
    const growthFactor = Math.min(noClickCount, yesMessages.length - 1);
    yesBtn.querySelector(".btn-text").textContent = yesMessages[growthFactor];

    const scale = 1 + Math.min(noClickCount * 0.02, 1.5);
    yesBtn.style.transform = `scale(${scale})`;
  }

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);
  noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
  });

  /* -----------------------------
       YES BUTTON
    ----------------------------- */

  yesBtn.addEventListener("click", function () {
    yesBtn.style.transform = "scale(0.9)";
    setTimeout(() => {
      yesBtn.style.transform = "";
    }, 100);

    setTimeout(() => {
      questionContainer.classList.add("hidden");
      successContainer.classList.remove("hidden");
    }, 300);
  });
});
