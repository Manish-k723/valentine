document.addEventListener("DOMContentLoaded", function () {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  const questionContainer = document.getElementById("question-container");
  const successContainer = document.getElementById("success-container");
  const cuteMessage = document.getElementById("cute-message");

  let noClickCount = 0;

  const yesMessages = [
    "Yes! 💕",
    "Yes!! 💖",
    "YES!!! 🥰",
    "YESSS!!!! 💗",
    "YESSSS!!!!! 😍",
    "YESSSSS!!!!!! 🥺💕",
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

  /* ---------------------------
       MOVE FUNCTION (FINAL FIX)
    --------------------------- */

  function moveNoButton() {
    noClickCount++;

    const card = document.querySelector(".card");
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 20;

    const maxX = cardRect.width - btnRect.width - padding;
    const maxY = cardRect.height - btnRect.height - padding;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
    noBtn.style.transition = "all 0.25s ease";

    const span = noBtn.querySelector(".btn-text");
    if (span) {
      span.textContent =
        noButtonMessages[noClickCount % noButtonMessages.length];
    }

    const growthFactor = Math.min(noClickCount, yesMessages.length - 1);
    yesBtn.querySelector(".btn-text").textContent = yesMessages[growthFactor];

    const scale = 1 + Math.min(noClickCount * 0.02, 1.3);
    yesBtn.style.transform = `scale(${scale})`;
  }

  noBtn.addEventListener("mouseenter", moveNoButton);
  noBtn.addEventListener("click", moveNoButton);
  noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    moveNoButton();
  });

  yesBtn.addEventListener("click", function () {
    questionContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
  });
});
