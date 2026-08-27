function renderSidebar(container, lessons, currentSlug) {
    container.innerHTML = "";

    lessons.forEach((group) => {
        const groupElement = document.createElement("div");
        groupElement.className = "lesson-group";

        const title = document.createElement("div");
        title.className = "group-title";
        title.textContent = group.category;

        groupElement.appendChild(title);

        group.items.forEach((lesson) => {
            const link = document.createElement("a");

            link.className = "lesson-link";
            link.textContent = lesson.title;
            link.href = `../${lesson.slug}/`;

            if (lesson.slug === currentSlug) {
                link.classList.add("active");
            }

            groupElement.appendChild(link);
        });

        container.appendChild(groupElement);
    });
}


function getAllLessons(lessons) {
    return lessons.flatMap((group) => group.items);
}


function renderLessonNavigation(container, lessons, currentSlug) {
    const allLessons = getAllLessons(lessons);

    const currentIndex = allLessons.findIndex(
        (lesson) => lesson.slug === currentSlug
    );

    if (currentIndex === -1) {
        return;
    }

    const previous = allLessons[currentIndex - 1];
    const next = allLessons[currentIndex + 1];

    container.innerHTML = "";

    if (previous) {
        const previousLink = document.createElement("a");

        previousLink.className = "nav-button";
        previousLink.href = `../${previous.slug}/`;
        previousLink.textContent = `→ ${previous.title}`;

        container.appendChild(previousLink);
    } else {
        const spacer = document.createElement("div");
        container.appendChild(spacer);
    }

    if (next) {
        const nextLink = document.createElement("a");

        nextLink.className = "nav-button primary";
        nextLink.href = `../${next.slug}/`;
        nextLink.textContent = `${next.title} ←`;

        container.appendChild(nextLink);
    }
}


async function loadLessonContent(path) {
    const container = document.querySelector("#lesson-content");

    if (!container) {
        return;
    }

    const response = await fetch(path);

    if (!response.ok) {
        container.innerHTML = "<p>خطا در بارگذاری درس.</p>";
        return;
    }

    const markdown = await response.text();

    container.innerHTML = marked.parse(markdown);
}


const currentSlug = document.body.dataset.lesson;

const lessonsNav = document.querySelector("#lessons-nav");

if (lessonsNav) {
    renderSidebar(
        lessonsNav,
        lessons,
        currentSlug
    );
}


const lessonNavigation = document.querySelector("#lesson-navigation");

if (lessonNavigation) {
    renderLessonNavigation(
        lessonNavigation,
        lessons,
        currentSlug
    );
}

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
}


const themeButton = document.createElement("button");

themeButton.id = "theme-toggle";


function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");

    themeButton.textContent = isDark ? "☀️" : "🌙";
}


document.body.prepend(themeButton);

updateThemeButton();


themeButton.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");

    const isDark = document.documentElement.classList.contains("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateThemeButton();
});

