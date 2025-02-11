document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("loveButton");
    const heartsContainer = document.getElementById("heartsContainer");

    loveButton.addEventListener("click", function () {
        // Floating heart effect
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);

        // Flashing background colors
        const colors = ["#ff9999", "#ff66b2", "#ff4d4d", "#ffcc66", "#ff6666"];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
});
