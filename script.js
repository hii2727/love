document.addEventListener("DOMContentLoaded", function () {
    const loveButton = document.getElementById("loveButton");
    const heartsContainer = document.getElementById("heartsContainer");

    loveButton.addEventListener("click", function () {
        // Create floating heart effect
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${window.innerHeight - 50}px`;
        heart.style.position = "absolute";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);

        // Change background color on click
        const colors = ["#ff9999", "#ff66b2", "#ff4d4d", "#ffcc66", "#ff6666"];
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
});
