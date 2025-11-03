class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 100;
                    background-color: rgba(10, 25, 47, 0.9);
                    backdrop-filter: blur(10px);
                    transition: transform 0.3s ease;
                }
                
                nav {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 1.5rem 2rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo a {
                    color: #64ffda;
                    font-weight: bold;
                    text-decoration: none;
                    font-size: 1.5rem;
                }
                
                .nav-links {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: #ccd6f6;
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #64ffda;
                }
                
                .nav-links .resume-btn {
                    border: 1px solid #64ffda;
                    border-radius: 4px;
                    padding: 0.5rem 1rem;
                    color: #64ffda;
                    transition: all 0.3s ease;
                }
                
                .nav-links .resume-btn:hover {
                    background-color: rgba(100, 255, 218, 0.1);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #ccd6f6;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        display: none;
                    }
                }
            </style>
            <nav>
                <div class="logo">
                    <a href="#">BC</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                <ul class="nav-links">
                    <li><a href="#about"><span class="text-primary-500">01.</span> About</a></li>
                    <li><a href="#experience"><span class="text-primary-500">02.</span> Experience</a></li>
                    <li><a href="#work"><span class="text-primary-500">03.</span> Work</a></li>
                    <li><a href="#contact"><span class="text-primary-500">04.</span> Contact</a></li>
                    <li><a href="#" class="resume-btn">Resume</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
