// Shared JavaScript across all pages
console.log('JuliaCodes Portfolio loaded');

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation to elements when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe elements with data-animate attribute
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Mobile menu functionality (if needed in components)
    console.log('All scripts loaded successfully');
});

// API call example for future use
async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/juliacodes/repos');
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

// Utility function for formatting dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}