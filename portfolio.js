document.addEventListener("DOMContentLoaded", () => {
    /* =====================
       Section Animation
    ====================== */
    const sections = document.querySelectorAll(
        ".section-1, .section-2, .section-3, .section-4, .section-5, .section-6"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // animate once
                }
            });
        },
        {
            threshold: window.innerWidth <= 480 ? 0.05 : 0.1
        }
    );

    sections.forEach(section => observer.observe(section));

    /* =====================
       Modal Functionality
    ====================== */
    const readMoreButtons = document.querySelectorAll(".read-more");
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content p");
    const modalTitle = document.querySelector(".modal-content h2");
    const closeModal = document.querySelector(".close-modal");

    if (modal && modalContent && modalTitle && closeModal) {
        readMoreButtons.forEach(button => {
            button.addEventListener("click", () => {
                const skillContainer = button.closest("div"); // safer
                const skillTitle = skillContainer.querySelector("h3");
                const skillDetails = skillContainer.querySelector(".skill-details p");

                if (skillTitle && skillDetails) {
                    modalTitle.textContent = skillTitle.textContent;
                    modalContent.textContent = skillDetails.textContent;

                    modal.style.display = "flex";
                    setTimeout(() => (modal.style.opacity = "1"), 10);
                }
            });
        });

        // Close modal
        const hideModal = () => {
            modal.style.opacity = "0";
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); // match CSS transition
        };

        closeModal.addEventListener("click", hideModal);
        modal.addEventListener("click", e => {
            if (e.target === modal) hideModal();
        });
        document.addEventListener("keydown", e => {
            if (e.key === "Escape" && modal.style.display === "flex") {
                hideModal();
            }
        });
    }

    /* =====================
       Hamburger Menu
    ====================== */
    const menuToggle = document.querySelector(".menu-toggle");
    const rhsElements = document.querySelector(".rhs-elements");

    if (menuToggle && rhsElements) {
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            rhsElements.classList.toggle("active");
        });

        rhsElements.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                rhsElements.classList.remove("active");
            });
        });

        document.addEventListener("click", e => {
            if (
                !menuToggle.contains(e.target) &&
                !rhsElements.contains(e.target) &&
                rhsElements.classList.contains("active")
            ) {
                menuToggle.classList.remove("active");
                rhsElements.classList.remove("active");
            }
        });
    }

    /* =====================
       Night Mode
    ====================== */
    const toggleBtn = document.getElementById("night");
    const body = document.body;

    if (toggleBtn) {
        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
        }

        toggleBtn.addEventListener("click", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem(
                "theme",
                body.classList.contains("dark-mode") ? "dark" : "light"
            );
        });
    } else {
        console.error("Night mode button with id='night' not found in the DOM.");
    }

    /* =====================
       Responsive Font Sizes
    ====================== */
    const adjustFontSizes = () => {
        const headings = document.querySelectorAll("h1, h2, h3");
        headings.forEach(heading => {
            const baseFontSize = parseFloat(getComputedStyle(heading).fontSize);
            if (window.innerWidth <= 280) {
                heading.style.fontSize = `${baseFontSize * 0.6}px`;
            } else if (window.innerWidth <= 320) {
                heading.style.fontSize = `${baseFontSize * 0.7}px`;
            } else if (window.innerWidth <= 480) {
                heading.style.fontSize = `${baseFontSize * 0.8}px`;
            } else {
                heading.style.fontSize = ""; // reset
            }
        });
    };

    adjustFontSizes();
    window.addEventListener("resize", adjustFontSizes);
});
