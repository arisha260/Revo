import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', () => {

    const observeSection = () => {
        const sections = document.querySelectorAll(".container-hidden");

        if (sections.length) {
            const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.remove("container-hidden"); // Убираем скрытый класс
                            observer.unobserve(entry.target); // Отключаем наблюдение за этим элементом
                        }
                    });
                },
                { threshold: 0.1 } // 10% элемента должно быть видно
            );

            sections.forEach((section) => observer.observe(section)); // Наблюдаем за всеми секциями
        }
    };

    return { observeSection }
})