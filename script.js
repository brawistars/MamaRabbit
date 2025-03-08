document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".animation-container");

    function createFloatingItem() {
        const item = document.createElement("div");
        item.classList.add("floating-item");

        // Убираем элементы сердца и мишек, оставляем только розы
        item.innerHTML = "🌹";  

        // Рандомная позиция
        item.style.left = Math.random() * 100 + "vw";

        // Рандомный размер
        item.style.fontSize = Math.random() * 20 + 20 + "px";

        // Рандомная длительность анимации
        item.style.animationDuration = Math.random() * 4 + 4 + "s";

        container.appendChild(item);

        // Удаляем элемент после анимации
        setTimeout(() => {
            item.remove();
        }, 5000);
    }

    // Создавать элементы каждую 400 мс
    setInterval(createFloatingItem, 400);
});
