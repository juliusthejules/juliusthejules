const emojis = ["💁", "🙆", "🙇", "🙋", "🙍", "🙎", "🙅", "🤦", "🧘", "🤷", "💃", "🕺", "🧑‍🎓", "👩‍🏫", "👨‍🏫", "🧑‍💼", "👩‍🔬", "👨‍🔬"];
const emojiDisplay = document.getElementById('emoji-display');
const askBtn = document.getElementById('ask-btn');
const clearBtn = document.getElementById('clear-btn');
const helpBtn = document.getElementById('help-btn');
const helpModal = document.getElementById('help-modal');
const closeBtn = document.getElementsByClassName('close')[0];

askBtn.addEventListener('click', () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiDisplay.textContent = randomEmoji;
});

clearBtn.addEventListener('click', () => {
    emojiDisplay.textContent = '🔮';
});

helpBtn.addEventListener('click', () => {
    helpModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    helpModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == helpModal) {
        helpModal.style.display = 'none';
    }
});