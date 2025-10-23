/**
 * footer.js
 * Defines the custom-footer Web Component for the portfolio site.
 * This component handles the structure and styling of the application footer.
 */

class CustomFooter extends HTMLElement {
    constructor() {
        super();
        // Optional: Get the current year for the copyright notice
        const currentYear = new Date().getFullYear();

        this.innerHTML = `
            <footer class="bg-gray-900 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
                        
                        <!-- Logo/Name and Motto -->
                        <div class="text-center md:text-left">
                            <h3 class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                                Shahana Monaco
                            </h3>
                            <p class="text-sm text-gray-400 mt-2">Crafting digital experiences with code & creativity.</p>
                        </div>
                        
                        <!-- Navigation Links -->
                        <div class="flex space-x-6">
                            <a href="#hero" class="text-gray-400 hover:text-purple-400 transition-colors duration-300">Home</a>
                            <a href="#about" class="text-gray-400 hover:text-purple-400 transition-colors duration-300">About</a>
                            <a href="#projects" class="text-gray-400 hover:text-purple-400 transition-colors duration-300">Projects</a>
                            <a href="#contact" class="text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</a>
                        </div>
                        
                        <!-- Social Icons -->
                        <div class="flex space-x-4">
                            <!-- GitHub -->
                            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                                <i data-feather="github" class="w-6 h-6"></i>
                            </a>
                            <!-- LinkedIn -->
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                                <i data-feather="linkedin" class="w-6 h-6"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Divider and Copyright -->
                    <div class="mt-8 pt-6 border-t border-gray-800 text-center">
                        <p class="text-sm text-gray-500">
                            &copy; ${currentYear} Shahana Monaco. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        `;
    }

    connectedCallback() {
        // Re-run Feather icons replacement after the component's innerHTML is set
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
}

// Define the new custom element
customElements.define('custom-footer', CustomFooter);
