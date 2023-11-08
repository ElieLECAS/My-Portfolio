document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
            });
        }
    });
});

function observeSection(sectionSelector, animateClass, delay) {
    const section = document.querySelector(sectionSelector);

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    section.classList.add(animateClass);
                }, delay);
            } else {
                section.classList.remove(animateClass);
            }
        });
    });

    sectionObserver.observe(section);
}

observeSection(".partie1", "animate-partie1", 250);
observeSection(".partie2", "animate-partie2", 250);
observeSection(".partie3", "animate-partie3", 50);
observeSection(".partie4", "animate-partie4", 250);
observeSection(".partie5", "animate-partie5", 500);

function adjustHeightOnHover(target, sibling) {
    target.addEventListener("mouseover", () => {
        target.style.height = "25vw";
        sibling.style.height = "15vw";
        sibling.style.opacity = "0.5";
    });

    target.addEventListener("mouseout", () => {
        target.style.height = "20vw";
        sibling.style.height = "20vw";
        sibling.style.opacity = "1";
    });
}

const partie3 = document.querySelector("#contact .partie3");
const partie5 = document.querySelector("#contact .partie5");

adjustHeightOnHover(partie3, partie5);
adjustHeightOnHover(partie5, partie3);
