/* =========================================================
   SURI × SHREYA
   MAIN INTERACTION ENGINE
========================================================= */


/* =========================================================
   PAGE LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader =
        document.querySelector(".page-loader");

    if (loader) {

        setTimeout(() => {

            loader.classList.add("loaded");

        }, 900);

    }

});


/* =========================================================
   NAVBAR
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.querySelector(".menu-toggle");

const mobileMenu =
    document.querySelector(".mobile-menu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle("open");

            document.body.classList.toggle(
                "no-scroll"
            );

        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileMenu.classList.remove(
                        "open"
                    );

                    document.body.classList.remove(
                        "no-scroll"
                    );

                }
            );

        });

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

const progress =
    document.querySelector(".scroll-progress");


window.addEventListener("scroll", () => {

    if (!progress) return;

    const scrollTop =
        window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    if (pageHeight <= 0) return;

    const percentage =
        (scrollTop / pageHeight) * 100;

    progress.style.width =
        `${percentage}%`;

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-text, .image-reveal"
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


if (
    cursor &&
    cursorDot &&
    window.innerWidth > 800
) {

    let mouseX = 0;
    let mouseY = 0;

    let cursorX = 0;
    let cursorY = 0;


    document.addEventListener(
        "mousemove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

            cursorDot.style.left =
                `${mouseX}px`;

            cursorDot.style.top =
                `${mouseY}px`;

        }
    );


    function animateCursor() {

        cursorX +=
            (mouseX - cursorX) * 0.12;

        cursorY +=
            (mouseY - cursorY) * 0.12;

        cursor.style.left =
            `${cursorX}px`;

        cursor.style.top =
            `${cursorY}px`;

        requestAnimationFrame(
            animateCursor
        );

    }


    animateCursor();


    const hoverTargets =
        document.querySelectorAll(
            "a, button, .gallery-image, .memory-card-animated, .magnetic-card"
        );


    hoverTargets.forEach(element => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursor.style.width = "55px";
                cursor.style.height = "55px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursor.style.width = "35px";
                cursor.style.height = "35px";

            }
        );

    });

}


/* =========================================================
   PARALLAX IMAGES
========================================================= */

const parallaxImages =
    document.querySelectorAll(
        ".parallax-image"
    );


window.addEventListener(
    "scroll",
    () => {

        parallaxImages.forEach(image => {

            const rect =
                image.getBoundingClientRect();

            const center =
                window.innerHeight / 2;

            const distance =
                rect.top - center;

            const movement =
                distance * -0.08;

            image.style.transform =
                `translateY(${movement}px)`;

        });

    }
);


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

const magneticElements =
    document.querySelectorAll(
        ".magnetic-button, .outline-button"
    );


if (window.innerWidth > 800) {

    magneticElements.forEach(element => {

        element.addEventListener(
            "mousemove",
            event => {

                const rect =
                    element.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;

                element.style.transform =
                    `
                    translate(
                        ${x * 0.12}px,
                        ${y * 0.12}px
                    )
                    `;

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                element.style.transform =
                    "translate(0,0)";

            }
        );

    });

}


/* =========================================================
   TILT CARDS
========================================================= */

const cards =
    document.querySelectorAll(
        ".magnetic-card"
    );


if (window.innerWidth > 800) {

    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    (y - centerY) / 25;

                const rotateY =
                    (centerX - x) / 25;

                card.style.transform =
                    `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });

}


/* =========================================================
   LIVE FRIENDSHIP COUNTER
========================================================= */

const friendshipStart =
    new Date(
        "2025-05-19T00:00:00"
    );


function updateCounter() {

    const now =
        new Date();


    let years =
        now.getFullYear() -
        friendshipStart.getFullYear();


    let months =
        now.getMonth() -
        friendshipStart.getMonth();


    if (
        now.getDate() <
        friendshipStart.getDate()
    ) {

        months--;

    }


    if (months < 0) {

        years--;

        months += 12;

    }


    const anniversary =
        new Date(
            now.getFullYear() - years,
            friendshipStart.getMonth(),
            friendshipStart.getDate()
        );


    const elapsed =
        now - anniversary;


    const days =
        Math.floor(
            elapsed /
            (
                1000 *
                60 *
                60 *
                24
            )
        );


    const hours =
        now.getHours();


    const yearsElement =
        document.querySelector("#years");

    const monthsElement =
        document.querySelector("#months");

    const daysElement =
        document.querySelector("#days");

    const hoursElement =
        document.querySelector("#hours");


    if (yearsElement) {

        yearsElement.textContent =
            years;

    }


    if (monthsElement) {

        monthsElement.textContent =
            months;

    }


    if (daysElement) {

        daysElement.textContent =
            days;

    }


    if (hoursElement) {

        hoursElement.textContent =
            String(hours)
                .padStart(2, "0");

    }

}


updateCounter();


setInterval(
    updateCounter,
    60000
);


/* =========================================================
   PAGE TRANSITIONS
========================================================= */

const pageLinks =
    document.querySelectorAll(
        "a[href$='.html']"
    );


pageLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const destination =
                link.getAttribute("href");


            if (
                !destination ||
                destination.startsWith("#") ||
                destination.startsWith("http")
            ) {

                return;

            }


            event.preventDefault();


            document.body.classList.add(
                "page-changing"
            );


            setTimeout(
                () => {

                    window.location.href =
                        destination;

                },
                350
            );

        }
    );

});


/* =========================================================
   IMAGE LIGHTBOX
========================================================= */

const galleryImages =
    document.querySelectorAll(
        ".gallery-image img"
    );


if (galleryImages.length > 0) {

    const lightbox =
        document.createElement("div");

    lightbox.className =
        "lightbox";


    lightbox.innerHTML = `
        <button class="lightbox-close">
            ×
        </button>

        <img src="" alt="">
    `;


    document.body.appendChild(
        lightbox
    );


    const lightboxImage =
        lightbox.querySelector("img");

    const closeButton =
        lightbox.querySelector(
            ".lightbox-close"
        );


    galleryImages.forEach(image => {

        image.parentElement.addEventListener(
            "click",
            () => {

                lightboxImage.src =
                    image.src;

                lightboxImage.alt =
                    image.alt;

                lightbox.classList.add(
                    "open"
                );

                document.body.classList.add(
                    "no-scroll"
                );

            }
        );

    });


    function closeLightbox() {

        lightbox.classList.remove(
            "open"
        );

        document.body.classList.remove(
            "no-scroll"
        );

    }


    closeButton.addEventListener(
        "click",
        closeLightbox
    );


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   LETTER
========================================================= */

const envelopeWrapper =
    document.querySelector(
        "#envelopeWrapper"
    );

const openLetterBtn =
    document.querySelector(
        "#openLetterBtn"
    );


if (
    envelopeWrapper &&
    openLetterBtn
) {

    openLetterBtn.addEventListener(
        "click",
        () => {

            envelopeWrapper.classList.toggle(
                "open"
            );


            if (
                envelopeWrapper.classList.contains(
                    "open"
                )
            ) {

                openLetterBtn.innerHTML =
                    `
                    Letter Opened
                    <span>✦</span>
                    `;

            } else {

                openLetterBtn.innerHTML =
                    `
                    Open My Letter
                    <span>✦</span>
                    `;

            }

        }
    );

}


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            document
                .querySelector(
                    ".mobile-menu"
                )
                ?.classList.remove(
                    "open"
                );

            document.body.classList.remove(
                "no-scroll"
            );


            document
                .querySelector(
                    ".lightbox"
                )
                ?.classList.remove(
                    "open"
                );

        }

    }
);
/* =========================================================
   LETTER OPEN / CLOSE
========================================================= */

const envelopeWrapper = document.getElementById("envelopeWrapper");
const openLetterBtn = document.getElementById("openLetterBtn");

if (envelopeWrapper && openLetterBtn) {

    openLetterBtn.addEventListener("click", () => {

        envelopeWrapper.classList.toggle("open");

        if (envelopeWrapper.classList.contains("open")) {

            openLetterBtn.innerHTML =
                'Letter Opened <span>✦</span>';

        } else {

            openLetterBtn.innerHTML =
                'Open My Letter <span>✦</span>';

        }

    });

}