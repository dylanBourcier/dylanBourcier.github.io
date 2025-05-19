const translations = {
    en: {
        title: "Dylan Bourcier - Portfolio - Fullstack Developer",
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        description: "Fullstack Developer in training, passionate about building functional and user-friendly websites. I enjoy solving problems, learning new technologies, and turning ideas into working projects.",
        seeMore: "See more",
        downloadResume: "Download resume",
        realTimeDescription: "A real-time forum application featuring private messaging capabilities, enabling seamless real-time communication.",
        forumDescription: "Go and SQLite-based web app for posting, commenting, and filtering content with authentication and session management.",
        MyGDescription: "Video game developed in JavaScript vanilla. Space invaders like on the theme of Star Wars",
        groupieDescription: "Go-powered web app that displays music artists, their history, and concert data through interactive visualizations.",
        portfolioDescription: "The website you are currently visiting, Developed in HTML/CSS and JavaScript vanilla",
        githubRepo: "Github repository",
        contactSentence: "Interested in working together? Feel free to reach out!",
        copyright: "© 2025 Dylan Bourcier - All rights reserved",
        languages: "Languages",
        tools: "Tools"
    },
    fr: {
        title: "Dylan Bourcier - Portfolio - Développeur Fullstack",
        home: "Accueil",
        projects: "Projets",
        skills: "Compétences",
        description: "Développeur Fullstack en formation, passionné par la création de sites web fonctionnels et conviviaux. J'aime résoudre des problèmes, apprendre de nouvelles technologies et transformer des idées en projets concrets.",
        seeMore: "Voir plus",
        downloadResume: "Télécharger le CV",
        realTimeDescription: "Une application de forum en temps réel avec des fonctionnalités de messagerie privée, permettant une communication fluide en temps réel.",
        forumDescription: "Application web basée sur Go et SQLite pour publier, commenter et filtrer du contenu avec gestion de l'authentification et des sessions.",
        MyGDescription: "Jeu vidéo développé en JavaScript vanilla. Space invaders sur le thème de Star Wars.",
        groupieDescription: "Application web propulsée par Go affichant des artistes musicaux, leur histoire et des données de concert via des visualisations interactives.",
        portfolioDescription: "Le site que vous visitez actuellement, développé en HTML/CSS et JavaScript vanilla.",
        githubRepo: "Dépôt Github",
        contactSentence: "Intéressé par une collaboration ? N'hésitez pas à me contacter !",
        copyright: "© 2025 Dylan Bourcier - Tous droits réservés",
        languages: "Langages",
        tools: "Outils"
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link"); // All nav links
    const indicator = document.querySelector(".nav-indicator"); // The moving dot

    window.addEventListener("scroll", () => {
        let sections = document.querySelectorAll("section");
        let scrollPosition = window.scrollY + window.innerHeight / 2; // On prend le milieu de l'écran
    
        sections.forEach((section) => {
            let sectionTop = section.offsetTop;
            let sectionBottom = sectionTop + section.offsetHeight;
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                let activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
    
                let { left, width } = activeLink.getBoundingClientRect();
                let navbarLeft = document.querySelector("nav ul").getBoundingClientRect().left;
                let newX = left - navbarLeft + width / 2 - 3;
    
                indicator.style.width = "4px";
                indicator.style.height = "4px";
                indicator.style.transform = `translateX(${newX}px)`;
    
                setTimeout(() => {
                    indicator.style.width = "6px";
                    indicator.style.height = "2px";
                }, 250);
    
                navLinks.forEach((link) => link.classList.remove("active"));
                activeLink.classList.add("active");
            }
        });
    });
    // Initialize the indicator position on load
    let activeLink = document.querySelector(".nav-link.active");
    console.log(activeLink);
    
    if (activeLink) {
        let { left, width } = activeLink.getBoundingClientRect();
        let navbarLeft = document.querySelector("nav ul").getBoundingClientRect().left;
        indicator.style.transform = `translateX(${left - navbarLeft + width / 2 - 3}px)`;
    }
});

document.querySelectorAll(".projectCard").forEach((card) => {
    const video = card.querySelector(".projectVideo");

    if (video) {
        card.addEventListener("mouseenter", () => {
            video.play();
        });

        card.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0; // Reset the video to the start
        });
    }

    card.addEventListener("click", (event) => {
        const url = card.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank"); // Ouvre dans un nouvel onglet
        }
    });
});

document.querySelectorAll(".contactLink").forEach((link) => {
    link.addEventListener("click", () => {
        const url = link.getAttribute("data-url");
        if (url) {
            window.open(url, "_blank"); // Ouvre dans un nouvel onglet
        }
    });
}
);

document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-btn");
    const elementsToTranslate = document.querySelectorAll("[data-translate]");
    const currentLang = localStorage.getItem("lang") || "en";

    // Set initial language
    updateLanguage(currentLang);

    langButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const lang = button.id.split("-")[1]; // Get 'en' or 'fr'
            updateLanguage(lang);
        });
    });

    function updateLanguage(lang) {
        localStorage.setItem("lang", lang);
        elementsToTranslate.forEach((el) => {
            const key = el.getAttribute("data-translate");
            el.textContent = translations[lang][key];
        });

        // Update active flag
        langButtons.forEach((btn) => {
            const flag = btn.querySelector(".flag-icon");
            flag.style.opacity = btn.id === `lang-${lang}` ? "1" : "0.5";
        });
    }
});