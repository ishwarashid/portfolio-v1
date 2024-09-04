function initHomePage() {
    const projectsContainer = document.querySelector('.projects');
    const emailField = document.getElementById('email-field');
    const messageField = document.getElementById('message-field');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');

    const projects = [
        {
            title: "App Sharing App",
            name: "Manzil",
            category: "Mobile App",
            imgUrl: "https://lh3.googleusercontent.com/d/1cNt7xHHbelfWcEND_65G8DWwBc7fpTII=w1000",
            colorScheme: "schemeDark"
        },
        {
            title: "Grid Layout",
            name: "Bento Box Design",
            category: "Website",
            imgUrl: "https://lh3.googleusercontent.com/d/1AeMapPfU2ZWlY5nB97BZL8htjXvZawOD=w1000",
            colorScheme: "schemeLight"
        },
        {
            title: "Admin Panel",
            name: "Responsive Dashboard",
            category: "Website",
            imgUrl: "https://lh3.googleusercontent.com/d/1QlCoxFQhzIC0DxiBi_U3cthRoTjKWlQq=w1000",
            colorScheme: "schemeMedium"
        },
    ]

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    function adjustMainSectionsHeight() {
        const header = document.querySelector("header");
        const headerHeight = header.offsetHeight;
        console.log(headerHeight)
        const paddingTop = headerHeight + 20;

        const sections = document.querySelectorAll("main>.introduction, main>.contact");
        console.log(sections)
        sections.forEach(section => {
            console.log(section)
            section.style.paddingTop = `${paddingTop}px`;
        })
    }

    function createProjectHTML({ colorScheme, imgUrl, title, name, category }) {
        return `
        <section class="${colorScheme}">
            <div class="img-with-bg">
                <div class="circle"></div>
                <img src="${imgUrl}" alt="">
            </div>
            <div class="project-details">
                <span class="badge">${title}</span>
                <h2>${name}</h2>
                <p>${category}</p>
            </div>
        </section>
    `;
    }

    document.getElementById('contact-form').addEventListener('submit', function (e) {
        e.preventDefault();

        emailError.textContent = '';
        messageError.textContent = '';

        let isValid = true;

        if (!emailField.value?.trim() || !emailRegex.test(emailField.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        if (!messageField.value?.trim()) {
            messageError.textContent = 'Message cannot be empty.';
            isValid = false;
        }

        if (isValid) {
            emailField.value = ""
            messageField.value = ""
            alert('Form is submitting.');
        }
    });

    // adjustMainSectionsHeight()


    projects.forEach(project => {
        projectsContainer.innerHTML += createProjectHTML(project);
    });

}
