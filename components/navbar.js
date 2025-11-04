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
                    background-color: #0e172a;
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
                    transition: box-shadow 0.3s ease;
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
                    position: relative;
                }
                
                .nav-links a:hover {
                    color: #64ffda;
                }

                .nav-links a.active {
                    color: #64ffda;
                }

                .nav-links a.active::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background-color: #64ffda;
                    bottom: -5px;
                    left: 0;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scaleX(0); }
                    to { opacity: 1; transform: scaleX(1); }
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
                    color: #0e172a;
                    cursor: pointer;
                }
                .mobile-section-title {
                    display: none;
                    color: #e6f1ff;
                    font-size: 1rem;
                    font-weight: 600;
                    margin-right: 1rem;
                    padding: 0.25rem 0.75rem;
                    background-color: rgba(255, 255, 255, 0.06);
                    border-radius: 9999px;
                    opacity: 1;
                    transition: opacity 0.2s ease, background-color 0.2s ease;
                }

                .mobile-section-title.hidden {
                    opacity: 0;
                }
@media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    
                    .nav-links {
                        display: none;
                    }

                    .mobile-section-title {
                        display: block;
                    }
                }
</style>
            <nav>
                <div class="logo">
                    <a href="#">KK</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
                <div class="mobile-section-title" aria-live="polite">00. Introduction</div>
<ul class="nav-links">
                    <li><a href="#introduction"><span class="text-primary-500">00.</span> Introduction</a></li>
                    <li><a href="#about"><span class="text-primary-500">01.</span> About Me</a></li>
                    <li><a href="#experience"><span class="text-primary-500">02.</span> Experience</a></li>
                    <li><a href="#projects"><span class="text-primary-500">03.</span> Projects</a></li>
                    <li><a href="#contact"><span class="text-primary-500">04.</span> Contact</a></li>
                    <li><a href="#" class="resume-btn">Resume</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);
