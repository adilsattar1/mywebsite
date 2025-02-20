document.addEventListener('DOMContentLoaded', () => {

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkmode');
    const body = document.body;

    // Check localStorage for dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('change', () => {

        console.log(darkModeToggle.checked);
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });

    // Initialize Tiny Slider for Testimonials
    const slider = tns({
        container: '.testimonial-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayButtonOutput: false,
        controls: false,
        nav: false,
        responsive: {
            600: {
                items: 2,
            },
            900: {
                items: 1,
            },
        },
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.navbar-nav .nav-link').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Project Tab Filtering
    const tabButtons = document.querySelectorAll('.project-tabs .tab-button');
    const projectItems = document.querySelectorAll('.project-item');

    tabButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach((btn) => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');

            // Get the category to filter
            const category = button.getAttribute('data-category');

            // Filter projects
            projectItems.forEach((project) => {
                if (category === 'all' || project.getAttribute('data-category') === category) {
                    project.classList.add('active');
                } else {
                    project.classList.remove('active');
                }
            });
        });
    });

    // Show all projects by default on page load
    window.addEventListener('load', () => {
        projectItems.forEach((project) => {
            if (project.getAttribute('data-category') === 'web') {
                project.classList.add('active');
            }
        });
    });

    // Toggle Full Image Overlay
    const thumbnails = document.querySelectorAll('.project-thumbnail');

    console.log(thumbnails);

    thumbnails.forEach((thumbnail) => {
        const overlay = thumbnail.querySelector('.full-image-overlay');
        console.log(overlay);

        thumbnail.addEventListener('click', () => {
            overlay.classList.toggle('active');
        });

        // Close overlay when clicking outside the image
        overlay.addEventListener('click', (e) => {

            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });

    // Toggle Project Details Modal
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const projectModals = document.querySelectorAll('.project-modal');
    const closeModalButtons = document.querySelectorAll('.close-modal');

    viewDetailsButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            projectModals[index].classList.add('active');
        });
    });

    closeModalButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            projectModals[index].classList.remove('active');
        });
    });

    // Close modal when clicking outside the modal content
    projectModals.forEach((modal) => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const fullImageOverlay = document.createElement('div');
    fullImageOverlay.classList.add('full-image-overlay');
    document.body.appendChild(fullImageOverlay);

    galleryItems.forEach(img => {
        img.addEventListener('click', function () {
            const fullImage = document.createElement('img');
            fullImage.src = img.src;
            fullImage.classList.add('full-image');
            fullImageOverlay.innerHTML = '';
            fullImageOverlay.appendChild(fullImage);
            fullImageOverlay.classList.add('active');

            // Zoom in/out on click
            fullImage.addEventListener('click', function (e) {
                e.stopPropagation(); // Prevent closing the overlay
                if (fullImage.classList.contains('zoomed')) {
                    fullImage.classList.remove('zoomed');
                } else {
                    fullImage.classList.add('zoomed');
                }
            });
        });
    });

    // Close overlay when clicking outside the image
    fullImageOverlay.addEventListener('click', function () {
        fullImageOverlay.classList.remove('active');
    });
});


const cursor = document.getElementById('cursor');
const cursorTrail = document.getElementById('cursorTrail');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;

    // Add a delay for the trail effect
    setTimeout(() => {
        cursorTrail.style.left = `${e.pageX}px`;
        cursorTrail.style.top = `${e.pageY}px`;
        cursorTrail.style.opacity = 1;
    }, 50);

    // Fade out the trail
    setTimeout(() => {
        cursorTrail.style.opacity = 0;
    }, 200);
});

document.addEventListener('click', (e) => {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${e.pageX}px`;
        particle.style.top = `${e.pageY}px`;
        particles.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 500);
    }
});