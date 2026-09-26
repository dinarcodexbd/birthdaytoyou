/* ================================= */
/* BIRTHDAY SURPRISE - FINAL SCRIPT */
/* ================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================= */
    /* GET HTML ELEMENTS */
    /* ========================= */

    const passwordScreen =
        document.getElementById("passwordScreen");

    const passwordInput =
        document.getElementById("passwordInput");

    const unlockButton =
        document.getElementById("unlockButton");

    const passwordMessage =
        document.getElementById("passwordMessage");

    const replayButton =
        document.getElementById("replayButton");

    const openLetterBtn =
        document.getElementById("openLetterBtn");

    const envelopeScreen =
        document.getElementById("envelopeScreen");

    const letterScreen =
        document.getElementById("letterScreen");

    const letterContainer =
        document.getElementById("letterContainer");


    /* ========================= */
    /* SHOW PAGE FUNCTION */
    /* ========================= */

    window.showPage = function (pageId) {

        const allPages =
            document.querySelectorAll(".surprise-page");

        allPages.forEach(function (page) {

            page.classList.remove("active");

        });

        const targetPage =
            document.getElementById(pageId);

        if (targetPage) {

            targetPage.classList.add("active");

        }

    };


    /* ========================= */
    /* PASSWORD UNLOCK */
    /* ========================= */

    if (
        unlockButton &&
        passwordInput &&
        passwordScreen
    ) {

        unlockButton.addEventListener("click", function () {

            const enteredPassword =
                passwordInput.value.trim();

            if (enteredPassword === "2715") {

                if (passwordMessage) {

                    passwordMessage.textContent = "";

                }

                showPage("welcomePage");

            } else {

                if (passwordMessage) {

                    passwordMessage.textContent =
                        "Incorrect password. Please try again 💗";

                }

            }

        });

    }


    /* ========================= */
    /* ENTER KEY SUPPORT */
    /* ========================= */

    if (
        passwordInput &&
        unlockButton
    ) {

        passwordInput.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {

                    unlockButton.click();

                }

            }
        );

    }


    /* ========================= */
    /* NEXT SURPRISE BUTTONS */
    /* ========================= */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".next-button");

            if (!button) return;

            const nextPageId =
                button.getAttribute("data-next");

            if (nextPageId) {

                showPage(nextPageId);

            }

        }
    );


    /* ========================= */
    /* CAT WALKING ANIMATION */
    /* ========================= */

    const gameCat =
        document.getElementById("gameCat");

    const walkFrames = [

        "assets/cat/walk1.png",
        "assets/cat/walk2.png",
        "assets/cat/walk3.png",
        "assets/cat/walk4.png",
        "assets/cat/walk5.png",
        "assets/cat/walk6.png",
        "assets/cat/walk7.png",
        "assets/cat/walk8.png"

    ];

    let frameIndex = 0;

    let catX = 5;

    let catDirection = 1;


    function animateCat() {

        if (!gameCat) return;

        gameCat.src =
            walkFrames[frameIndex];

        frameIndex++;

        if (
            frameIndex >= walkFrames.length
        ) {

            frameIndex = 0;

        }

        catX += 1.2 * catDirection;

        if (
            catX >= 72 ||
            catX <= 2
        ) {

            catDirection *= -1;

        }

        gameCat.style.left =
            catX + "%";

        gameCat.style.transform =
            `scaleX(${catDirection === 1 ? 1 : -1})`;

    }


    if (gameCat) {

        setInterval(animateCat, 140);

    }


    /* ========================= */
    /* CAT TOUCH REACTION */
    /* ========================= */

    function touchCat() {

        const reaction =
            document.getElementById("catReaction");

        const heartEffects =
            document.getElementById("heartEffects");


        if (reaction) {

            reaction.textContent =
                "Meow! You touched me! 🥺💗";

        }


        if (gameCat) {

            gameCat.classList.remove("happy");

            void gameCat.offsetWidth;

            gameCat.classList.add("happy");

        }


        if (heartEffects) {

            heartEffects.innerHTML = "";


            for (let i = 0; i < 6; i++) {

                const heart =
                    document.createElement("span");

                heart.className =
                    "floating-heart";

                heart.textContent = "💗";

                heart.style.left =
                    (30 + Math.random() * 40) + "%";

                heart.style.top =
                    (30 + Math.random() * 30) + "%";

                heartEffects.appendChild(heart);

            }


            setTimeout(function () {

                heartEffects.innerHTML = "";

            }, 1500);

        }

    }


    if (gameCat) {

        gameCat.addEventListener(
            "click",
            touchCat
        );

    }


    const touchCatBtn =
        document.getElementById("touchCatBtn");


    if (touchCatBtn) {

        touchCatBtn.addEventListener(
            "click",
            touchCat
        );

    }


    /* ========================= */
    /* FINAL LETTER */
    /* ========================= */

    const specialLetter = `
আজ নাকি তোমার জন্মদিন। হুমমম
Happy Birthday Tahamu 🎂

27th September,, আপনার Birthday, কি করা যায়,
কি করলে আপনার Birthday আরো special করা য়ায়। 
না, আমি, কবি,না আমি গান পারি, না আমি কোন ফুল, 

কোন এক ফুল হলে ভালো হতো, গাছেও উপর থেকে আপনার সামনে 
পড়ে গিয়ে বলতাম, আমাকেও সাথে নিয়ে যেতে, কোন বই,বা
বারান্দায় লাগিয়ে দিতে। তাহলে যখন, 
রাতে বসে আকাশ দেখেন, আমি আপনায় দেখতাম।। 

হতে এই সৌভাগ্য আমার নেই, যার আছে সে যাতে
আপনার পাশেই থাকে। 
Happy Birthday Esha, 🎂💗

`;


    let typingInterval = null;


    function typeSpecialLetter() {

        if (!letterContainer) return;

        letterContainer.textContent = "";

        let index = 0;


        if (typingInterval) {

            clearInterval(typingInterval);

        }


        typingInterval = setInterval(function () {

            letterContainer.textContent +=
                specialLetter[index];

            index++;


            if (
                index >= specialLetter.length
            ) {

                clearInterval(typingInterval);

                typingInterval = null;

            }

        }, 40);

    }


    /* ========================= */
    /* OPEN LETTER */
    /* ========================= */

    if (
        openLetterBtn &&
        envelopeScreen &&
        letterScreen
    ) {

        openLetterBtn.addEventListener(
            "click",
            function () {

                envelopeScreen.style.display =
                    "none";

                letterScreen.style.display =
                    "block";

                typeSpecialLetter();

            }
        );

    }


    /* ========================= */
    /* REPLAY BUTTON */
    /* ========================= */

    if (replayButton) {

        replayButton.addEventListener(
            "click",
            function () {

                if (typingInterval) {

                    clearInterval(typingInterval);

                    typingInterval = null;

                }


                if (passwordInput) {

                    passwordInput.value = "";

                }


                if (passwordMessage) {

                    passwordMessage.textContent = "";

                }


                if (letterContainer) {

                    letterContainer.textContent = "";

                }


                if (letterScreen) {

                    letterScreen.style.display =
                        "none";

                }


                if (envelopeScreen) {

                    envelopeScreen.style.display =
                        "block";

                }


                showPage("passwordScreen");

            }
        );

    }

}); 
