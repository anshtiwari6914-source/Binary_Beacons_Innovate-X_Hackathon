// Enhanced Trigger.dev Clone with Binary Beacons AI Features
// Advanced animations, glassmorphism effects, and interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Show loading screen briefly
    showLoadingScreen();
    
    // Initialize the application after loading
    setTimeout(() => {
        hideLoadingScreen();
        initializeApp();
    }, 2000);
});

function initializeApp() {
    console.log('🤖 Binary Beacons AI Enhanced Trigger.dev - Initializing...');
    
    // Core functionality
    initializeNavigation();
    initializeModal();
    initializeCodeCopying();
    initializeFormHandling();
    initializePageTransitions();
    initializeMobileNavigation();
    
    // Enhanced features
    initializeParticleSystem();
    initializeScrollAnimations();
    initializeAIFeatures();
    initializeAdvancedAnimations();
    initializeGlassmorphismEffects();
    initializeInteractiveElements();
    initializeLoadingStates();
    
    console.log('✨ Binary Beacons AI Enhancement Complete!');
}

// Loading Screen
function showLoadingScreen() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.remove('hidden');
    }
}

function hideLoadingScreen() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (loadingOverlay) {
        loadingOverlay.classList.add('hidden');
    }
}

// Particle System
function initializeParticleSystem() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 4 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const colors = ['#00D4FF', '#8B5CF6', '#00FF88', '#FF6B35'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
        opacity: 0.6;
        animation: particleFloat ${5 + Math.random() * 10}s ease-in-out infinite;
        filter: blur(0.5px);
    `;
    
    container.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 15000);
}

// Add particle animation CSS
const particleCSS = `
@keyframes particleFloat {
    0%, 100% {
        transform: translateY(0px) translateX(0px);
        opacity: 0.6;
    }
    25% {
        transform: translateY(-20px) translateX(10px);
        opacity: 1;
    }
    50% {
        transform: translateY(-40px) translateX(-5px);
        opacity: 0.8;
    }
    75% {
        transform: translateY(-20px) translateX(-10px);
        opacity: 1;
    }
}
`;

// Add styles to document
if (!document.getElementById('particleStyles')) {
    const style = document.createElement('style');
    style.id = 'particleStyles';
    style.textContent = particleCSS;
    document.head.appendChild(style);
}

// Enhanced Navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav__link[data-page]');
    const footerLinks = document.querySelectorAll('[data-page]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetPage = this.getAttribute('data-page');
            if (targetPage) {
                switchPageWithAnimation(targetPage);
            }
        });
    });
    
    footerLinks.forEach(link => {
        if (link.getAttribute('data-page')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetPage = this.getAttribute('data-page');
                if (targetPage) {
                    switchPageWithAnimation(targetPage);
                }
            });
        }
    });
    
    // Logo click
    const logo = document.querySelector('.nav__brand');
    if (logo) {
        logo.addEventListener('click', function(e) {
            e.preventDefault();
            switchPageWithAnimation('homepage');
        });
        logo.style.cursor = 'pointer';
    }
    
    // External links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('🚀 This would open ' + this.textContent + ' in a new tab!', 'info');
        });
    });
}

function switchPageWithAnimation(targetPageId) {
    const pages = document.querySelectorAll('.page');
    const targetPage = document.getElementById(targetPageId);
    
    if (!targetPage) {
        console.error(`Page with id "${targetPageId}" not found`);
        return;
    }
    
    showLoadingScreen();
    
    // Hide all pages with staggered animation
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.style.transform = 'translateY(-20px)';
            page.style.opacity = '0';
            setTimeout(() => {
                page.classList.add('hidden');
            }, 200);
        }, index * 50);
    });
    
    // Show target page with animation
    setTimeout(() => {
        targetPage.classList.remove('hidden');
        targetPage.style.transform = 'translateY(20px)';
        targetPage.style.opacity = '0';
        
        setTimeout(() => {
            targetPage.style.transform = 'translateY(0)';
            targetPage.style.opacity = '1';
            hideLoadingScreen();
        }, 100);
        
        // Reinitialize scroll animations for new page
        setTimeout(() => {
            initializeScrollAnimations();
        }, 300);
    }, 400);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMobileMenu();
    updateActiveNavLink(targetPageId);
}

function updateActiveNavLink(pageId) {
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
}

// Mobile Navigation
function initializeMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = this.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transform = this.classList.contains('active') ? 
                    `rotate(${index === 1 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 0 ? '5px, 5px' : index === 2 ? '5px, -5px' : '0, 0'})` : 
                    'none';
            });
        });
        
        const navLinks = navMenu.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileMenu();
            }
        });
    }
}

function closeMobileMenu() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
        });
    }
}

// AI Features Modal System
function initializeAIFeatures() {
    const featureCards = document.querySelectorAll('.ai-feature-card');
    const featureButtons = document.querySelectorAll('.ai-feature__btn');
    const viewAiFeaturesBtn = document.getElementById('viewAiFeatures');
    
    // Feature card interactions
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const feature = this.getAttribute('data-feature');
            if (feature) {
                showAIFeatureModal(feature);
            }
        });
        
        // Magnetic hover effect
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `perspective(1000px) rotateX(${y / 20}deg) rotateY(${x / 20}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
        });
    });
    
    // Feature buttons
    featureButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const card = this.closest('.ai-feature-card');
            const feature = card.getAttribute('data-feature');
            if (feature) {
                showAIFeatureDemo(feature);
            }
        });
    });
    
    // View AI Features button
    if (viewAiFeaturesBtn) {
        viewAiFeaturesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const aiSection = document.querySelector('.ai-features-showcase');
            if (aiSection) {
                aiSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function showAIFeatureModal(feature) {
    const modal = document.getElementById('aiFeatureModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalTitle || !modalContent) return;
    
    const features = {
        alerts: {
            title: '🤖 AI-Powered Alerts by Binary Beacons',
            content: `
                <div class="ai-feature-demo">
                    <h3>Smart Anomaly Detection</h3>
                    <p>Our AI continuously monitors your workflows and detects anomalies in real-time.</p>
                    
                    <div class="demo-section">
                        <h4>Live Demo</h4>
                        <div class="alert-demo">
                            <div class="alert-item success">✅ Image generation completed - Normal pattern</div>
                            <div class="alert-item warning">⚠️ API response time increased by 45% - Investigating</div>
                            <div class="alert-item error">🚨 Failure rate spike detected - Auto-scaling initiated</div>
                        </div>
                    </div>
                    
                    <div class="demo-features">
                        <div class="feature-item">
                            <strong>Predictive Analysis:</strong> Forecasts failures before they happen
                        </div>
                        <div class="feature-item">
                            <strong>Smart Routing:</strong> Routes alerts to the right team members
                        </div>
                        <div class="feature-item">
                            <strong>Learning Algorithm:</strong> Improves accuracy over time
                        </div>
                    </div>
                    
                    <button class="btn btn--primary glow-btn" style="margin-top: 20px;">Start Free Trial</button>
                </div>
            `
        },
        marketplace: {
            title: '🏪 AI Workflow Templates Marketplace by Binary Beacons',
            content: `
                <div class="ai-feature-demo">
                    <h3>200+ Ready-to-Use Templates</h3>
                    <p>Curated by Binary Beacons AI specialists for maximum efficiency.</p>
                    
                    <div class="demo-section">
                        <h4>Popular Templates</h4>
                        <div class="template-grid">
                            <div class="template-item">
                                <div class="template-icon">🎨</div>
                                <div class="template-info">
                                    <h5>AI Image Pipeline</h5>
                                    <span class="template-stats">⭐ 4.9 • 1.2k users</span>
                                </div>
                            </div>
                            <div class="template-item">
                                <div class="template-icon">📊</div>
                                <div class="template-info">
                                    <h5>Data Processing Chain</h5>
                                    <span class="template-stats">⭐ 4.8 • 890 users</span>
                                </div>
                            </div>
                            <div class="template-item">
                                <div class="template-icon">🤖</div>
                                <div class="template-info">
                                    <h5>ChatBot Workflow</h5>
                                    <span class="template-stats">⭐ 4.7 • 654 users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="demo-features">
                        <div class="feature-item">
                            <strong>One-Click Deploy:</strong> Install templates instantly
                        </div>
                        <div class="feature-item">
                            <strong>Version Control:</strong> Built-in versioning and rollbacks
                        </div>
                        <div class="feature-item">
                            <strong>Community Driven:</strong> Contribute and earn rewards
                        </div>
                    </div>
                    
                    <button class="btn btn--primary glow-btn" style="margin-top: 20px;">Browse Templates</button>
                </div>
            `
        },
        docs: {
            title: '📚 AI-Powered Documentation Assistant by Binary Beacons',
            content: `
                <div class="ai-feature-demo">
                    <h3>Intelligent Documentation Generation</h3>
                    <p>Let our AI understand your code and generate comprehensive documentation automatically.</p>
                    
                    <div class="demo-section">
                        <h4>Live Code Analysis</h4>
                        <div class="code-analysis-demo">
                            <div class="code-input">
                                <pre><code>export const processOrder = task({
  id: 'process-order',
  run: async (order) => {
    // Process payment and inventory
  }
});</code></pre>
                            </div>
                            <div class="arrow">→</div>
                            <div class="generated-docs">
                                <h5>Generated Documentation:</h5>
                                <p><strong>processOrder</strong> - Handles order processing workflow</p>
                                <ul>
                                    <li>Validates payment information</li>
                                    <li>Checks inventory availability</li>
                                    <li>Updates order status</li>
                                    <li>Sends confirmation emails</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="demo-features">
                        <div class="feature-item">
                            <strong>Multi-Language:</strong> Supports TypeScript, JavaScript, Python
                        </div>
                        <div class="feature-item">
                            <strong>API Docs:</strong> Auto-generates API documentation
                        </div>
                        <div class="feature-item">
                            <strong>Code Comments:</strong> Suggests inline comments
                        </div>
                    </div>
                    
                    <button class="btn btn--primary glow-btn" style="margin-top: 20px;">Try Documentation AI</button>
                </div>
            `
        }
    };
    
    const featureData = features[feature];
    if (!featureData) return;
    
    modalTitle.innerHTML = featureData.title;
    modalContent.innerHTML = featureData.content;
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Add modal styles if not exist
    if (!document.getElementById('modalStyles')) {
        const modalCSS = `
            .ai-feature-demo { color: var(--color-text); }
            .demo-section { margin: 20px 0; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; }
            .alert-demo { display: flex; flex-direction: column; gap: 8px; }
            .alert-item { padding: 8px 12px; border-radius: 8px; font-size: 14px; }
            .alert-item.success { background: rgba(0,255,136,0.1); border-left: 3px solid #00FF88; }
            .alert-item.warning { background: rgba(255,107,53,0.1); border-left: 3px solid #FF6B35; }
            .alert-item.error { background: rgba(255,84,89,0.1); border-left: 3px solid #FF5459; }
            .template-grid { display: flex; flex-direction: column; gap: 12px; }
            .template-item { display: flex; align-items: center; gap: 12px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; }
            .template-icon { font-size: 24px; }
            .template-info h5 { margin: 0; color: var(--color-text); }
            .template-stats { font-size: 12px; color: var(--color-text-secondary); }
            .code-analysis-demo { display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center; }
            .code-input { background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px; }
            .arrow { font-size: 24px; color: var(--bb-electric-blue); }
            .generated-docs { background: rgba(0,212,255,0.1); padding: 12px; border-radius: 8px; border: 1px solid rgba(0,212,255,0.2); }
            .demo-features { margin-top: 20px; }
            .feature-item { margin: 8px 0; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
            @media (max-width: 768px) {
                .code-analysis-demo { grid-template-columns: 1fr; text-align: center; }
                .arrow { transform: rotate(90deg); }
            }
        `;
        
        const style = document.createElement('style');
        style.id = 'modalStyles';
        style.textContent = modalCSS;
        document.head.appendChild(style);
    }
}

function showAIFeatureDemo(feature) {
    const demos = {
        alerts: () => {
            showNotification('🤖 AI Alerts Demo: Anomaly detected in image generation task!', 'warning');
            setTimeout(() => {
                showNotification('✅ AI Alerts: Auto-scaling resolved the issue!', 'success');
            }, 2000);
        },
        marketplace: () => {
            showNotification('🏪 Marketplace Demo: Loading AI Image Generation template...', 'info');
            setTimeout(() => {
                showNotification('✨ Template deployed successfully with Binary Beacons optimizations!', 'success');
            }, 1500);
        },
        docs: () => {
            showNotification('📚 Documentation AI: Analyzing your code...', 'info');
            setTimeout(() => {
                showNotification('🎯 Generated comprehensive documentation with 95% accuracy!', 'success');
            }, 2500);
        }
    };
    
    const demo = demos[feature];
    if (demo) {
        demo();
    }
}

// Enhanced Modal System
function initializeModal() {
    const modals = document.querySelectorAll('.modal');
    const getStartedBtns = document.querySelectorAll('#getStartedBtn, #heroGetStarted');
    const allGetStartedBtns = document.querySelectorAll('button');
    
    // AI Feature modal close
    const closeFeatureModal = document.getElementById('closeFeatureModal');
    if (closeFeatureModal) {
        closeFeatureModal.addEventListener('click', function(e) {
            e.preventDefault();
            closeAIFeatureModal();
        });
    }
    
    // Main signup modal
    allGetStartedBtns.forEach(btn => {
        const btnText = btn.textContent.toLowerCase();
        if (btnText.includes('get started') || btnText.includes('start free') || btnText.includes('join binary') || btnText.includes('create account')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openSignupModal();
            });
        }
    });
    
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openSignupModal();
        });
    });
    
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeSignupModal();
        });
    }
    
    // Close modals with backdrop click
    modals.forEach(modal => {
        const backdrop = modal.querySelector('.modal__backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', function(e) {
                if (e.target === backdrop) {
                    if (modal.id === 'aiFeatureModal') {
                        closeAIFeatureModal();
                    } else {
                        closeSignupModal();
                    }
                }
            });
        }
    });
    
    // ESC key handling
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (!modal.classList.contains('hidden')) {
                    if (modal.id === 'aiFeatureModal') {
                        closeAIFeatureModal();
                    } else {
                        closeSignupModal();
                    }
                }
            });
        }
    });
}

function openSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        // Animate modal entrance
        const modalContent = modal.querySelector('.modal__content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.8) translateY(20px)';
            modalContent.style.opacity = '0';
            
            setTimeout(() => {
                modalContent.style.transform = 'scale(1) translateY(0)';
                modalContent.style.opacity = '1';
            }, 100);
        }
        
        const firstInput = modal.querySelector('input');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 200);
        }
    }
}

function closeSignupModal() {
    const modal = document.getElementById('signupModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal__content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.8) translateY(20px)';
            modalContent.style.opacity = '0';
        }
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 200);
    }
}

function closeAIFeatureModal() {
    const modal = document.getElementById('aiFeatureModal');
    if (modal) {
        const modalContent = modal.querySelector('.modal__content');
        if (modalContent) {
            modalContent.style.transform = 'scale(0.8) translateY(20px)';
            modalContent.style.opacity = '0';
        }
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
        }, 200);
    }
}

// Code Copying with Enhanced Feedback
function initializeCodeCopying() {
    const copyButtons = document.querySelectorAll('.code-block__copy');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            let codeText = this.getAttribute('data-code');
            
            if (!codeText) {
                const codeBlock = this.closest('.code-block');
                const codeElement = codeBlock.querySelector('.code-block__content code') || 
                                 codeBlock.querySelector('.code-block__content');
                if (codeElement) {
                    codeText = codeElement.textContent.trim();
                }
            }
            
            if (codeText) {
                copyToClipboardWithAnimation(codeText, this);
            }
        });
    });
}

function copyToClipboardWithAnimation(text, button) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showEnhancedCopyFeedback(button);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            fallbackCopyToClipboard(text, button);
        });
    } else {
        fallbackCopyToClipboard(text, button);
    }
}

function showEnhancedCopyFeedback(button) {
    if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied! ✨';
        button.classList.add('copied');
        button.style.background = 'var(--bb-glow-gradient)';
        button.style.transform = 'scale(1.1)';
        
        // Add particle effect
        createCopyParticles(button);
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('copied');
            button.style.background = '';
            button.style.transform = '';
        }, 2000);
    }
    
    showNotification('📋 Code copied to clipboard with Binary Beacons enhancements!', 'success');
}

function createCopyParticles(element) {
    const rect = element.getBoundingClientRect();
    const particles = 8;
    
    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: var(--bb-electric-blue);
            border-radius: 50%;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            pointer-events: none;
            z-index: 10000;
            animation: copyParticle 1s ease-out forwards;
        `;
        
        particle.style.setProperty('--angle', `${(360 / particles) * i}deg`);
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000);
    }
}

// Add copy particle animation
if (!document.getElementById('copyParticleStyles')) {
    const style = document.createElement('style');
    style.id = 'copyParticleStyles';
    style.textContent = `
        @keyframes copyParticle {
            0% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateY(0px);
                opacity: 1;
                scale: 1;
            }
            100% {
                transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-30px);
                opacity: 0;
                scale: 0.5;
            }
        }
    `;
    document.head.appendChild(style);
}

function fallbackCopyToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showEnhancedCopyFeedback(button);
        } else {
            showNotification('❌ Failed to copy code', 'error');
        }
    } catch (err) {
        console.error('Fallback: Could not copy text: ', err);
        showNotification('❌ Copy failed - please try again', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Enhanced Notification System
function showNotification(message, type = 'info', duration = 4000) {
    const notification = document.createElement('div');
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${icons[type] || icons.info}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    const colors = {
        success: 'var(--bb-cyber-green)',
        error: '#FF5459',
        warning: 'var(--bb-neon-orange)',
        info: 'var(--bb-electric-blue)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 20px;
        background: var(--bb-card-gradient);
        backdrop-filter: blur(20px);
        border: 1px solid var(--bb-glass-border);
        border-left: 4px solid ${colors[type]};
        border-radius: 12px;
        color: var(--color-text);
        z-index: 10000;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        animation: notificationSlideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        font-size: 14px;
        font-weight: 500;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'notificationSlideOut 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, duration);
}

// Add notification animations
if (!document.getElementById('notificationStyles')) {
    const style = document.createElement('style');
    style.id = 'notificationStyles';
    style.textContent = `
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .notification-icon {
            font-size: 18px;
        }
        .notification-message {
            flex: 1;
        }
        @keyframes notificationSlideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes notificationSlideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll(
        '.animate-on-scroll, .ai-feature-card, .step, .ai-pattern, .feature-category, .pricing-card, .example-card, .product-feature, .runtime-tech'
    );
    
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Advanced Animations
function initializeAdvancedAnimations() {
    // Typing animation for hero title
    const heroTitle = document.querySelector('.typing-animation');
    if (heroTitle) {
        animateTyping(heroTitle);
    }
    
    // Floating animation for code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach((block, index) => {
        block.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Progress bar animations
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bar.classList.add('animate');
                }
            });
        });
        observer.observe(bar);
    });
}

function animateTyping(element) {
    const text = element.textContent;
    element.textContent = '';
    let index = 0;
    
    const typeChar = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeChar, 100);
        }
    };
    
    setTimeout(typeChar, 1000);
}

// Glassmorphism Effects
function initializeGlassmorphismEffects() {
    const glassElements = document.querySelectorAll('.glass-card, .glass-btn');
    
    glassElements.forEach(element => {
        // Mouse move parallax effect
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

// Interactive Elements
function initializeInteractiveElements() {
    // Magnetic buttons
    const magneticButtons = document.querySelectorAll('.glow-btn, .magnetic-btn');
    
    magneticButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0px, 0px)';
        });
    });
    
    // Ripple effect
    const rippleButtons = document.querySelectorAll('.ripple-btn');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple animation
if (!document.getElementById('rippleStyles')) {
    const style = document.createElement('style');
    style.id = 'rippleStyles';
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Loading States
function initializeLoadingStates() {
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                showButtonLoading(this);
                
                setTimeout(() => {
                    hideButtonLoading(this);
                }, 1500);
            }
        });
    });
}

function showButtonLoading(button) {
    if (button.textContent.includes('Get started') || 
        button.textContent.includes('Try') || 
        button.textContent.includes('Browse') || 
        button.textContent.includes('Generate')) {
        
        const originalText = button.textContent;
        button.dataset.originalText = originalText;
        button.textContent = 'Loading...';
        button.classList.add('loading');
        button.disabled = true;
        
        // Add spinner
        const spinner = document.createElement('span');
        spinner.className = 'button-spinner';
        spinner.style.cssText = `
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 8px;
        `;
        button.appendChild(spinner);
    }
}

function hideButtonLoading(button) {
    const originalText = button.dataset.originalText;
    if (originalText) {
        button.textContent = originalText;
        button.classList.remove('loading');
        button.disabled = false;
        
        const spinner = button.querySelector('.button-spinner');
        if (spinner) {
            spinner.remove();
        }
    }
}

// Form Handling with Enhanced UX
function initializeFormHandling() {
    const signupForm = document.querySelector('.signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleEnhancedSignupSubmit(this);
        });
        
        // Real-time validation
        const inputs = signupForm.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateInputRealTime(this);
            });
        });
    }
}

function handleEnhancedSignupSubmit(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const emailInput = form.querySelector('#email');
    const companyInput = form.querySelector('#company');
    
    // Enhanced validation
    if (!emailInput.value || !isValidEmail(emailInput.value)) {
        showFormError('Please enter a valid email address', emailInput);
        return;
    }
    
    // Show enhanced loading state
    const originalText = submitBtn.textContent;
    submitBtn.innerHTML = `
        <span class="loading-text">Creating Binary Beacons account...</span>
        <div class="loading-dots">
            <span>.</span><span>.</span><span>.</span>
        </div>
    `;
    submitBtn.disabled = true;
    
    // Simulate API call with progress
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
            const messages = [
                'Initializing Binary Beacons AI...',
                'Setting up your workspace...',
                'Configuring AI features...',
                'Preparing templates...',
                'Finalizing setup...',
                'Welcome to Binary Beacons! 🚀'
            ];
            const messageIndex = Math.floor((progress - 1) / 20);
            if (messages[messageIndex]) {
                submitBtn.querySelector('.loading-text').textContent = messages[messageIndex];
            }
        }
    }, 300);
    
    setTimeout(() => {
        clearInterval(progressInterval);
        form.reset();
        
        showSuccessMessage(`
            <div class="success-animation">
                <div class="success-icon">🎉</div>
                <h3>Welcome to Binary Beacons!</h3>
                <p>Your AI-enhanced account has been created successfully!</p>
                <div class="success-features">
                    <div>✅ AI-Powered Alerts activated</div>
                    <div>✅ Template Marketplace access granted</div>
                    <div>✅ Documentation Assistant ready</div>
                </div>
            </div>
        `);
        
        setTimeout(() => {
            closeSignupModal();
            showNotification('🚀 Binary Beacons account ready! Check your email for next steps.', 'success');
        }, 3000);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 3000);
}

function validateInputRealTime(input) {
    const isValid = input.type === 'email' ? isValidEmail(input.value) : input.value.length > 0;
    
    if (isValid) {
        input.style.borderColor = 'var(--bb-cyber-green)';
        input.style.boxShadow = '0 0 0 3px rgba(0, 255, 136, 0.2)';
    } else if (input.value.length > 0) {
        input.style.borderColor = '#FF5459';
        input.style.boxShadow = '0 0 0 3px rgba(255, 84, 89, 0.2)';
    } else {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormError(message, input) {
    const existingError = input.parentNode.querySelector('.form-error');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.style.cssText = `
        color: #FF5459;
        font-size: 12px;
        margin-top: 4px;
        animation: errorShake 0.5s ease-in-out;
    `;
    errorDiv.textContent = message;
    
    input.parentNode.appendChild(errorDiv);
    input.style.borderColor = '#FF5459';
    input.style.boxShadow = '0 0 0 3px rgba(255, 84, 89, 0.2)';
    
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

function showSuccessMessage(message) {
    const existingSuccess = document.querySelector('.success-message');
    if (existingSuccess) {
        existingSuccess.remove();
    }
    
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        text-align: center;
        margin-top: 20px;
        padding: 20px;
        background: var(--bb-card-gradient);
        border-radius: 12px;
        border: 1px solid var(--bb-glass-border);
        animation: successBounce 0.8s ease-out;
    `;
    successDiv.innerHTML = message;
    
    const modalBody = document.querySelector('#signupModal .modal__body');
    if (modalBody) {
        modalBody.appendChild(successDiv);
    }
}

// Add form animations
if (!document.getElementById('formAnimationStyles')) {
    const style = document.createElement('style');
    style.id = 'formAnimationStyles';
    style.textContent = `
        @keyframes errorShake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
        }
        @keyframes successBounce {
            0% { transform: scale(0.8); opacity: 0; }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); opacity: 1; }
        }
        .loading-dots span {
            animation: loadingDot 1.4s ease-in-out infinite both;
        }
        .loading-dots span:nth-child(1) { animation-delay: -0.32s; }
        .loading-dots span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes loadingDot {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1); }
        }
        .success-animation {
            color: var(--color-text);
        }
        .success-icon {
            font-size: 48px;
            margin-bottom: 16px;
            animation: bounce 2s infinite;
        }
        .success-features {
            margin-top: 16px;
            text-align: left;
        }
        .success-features div {
            margin: 8px 0;
            color: var(--bb-cyber-green);
            font-size: 14px;
        }
    `;
    document.head.appendChild(style);
}

// Page Transitions
function initializePageTransitions() {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        page.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize events
window.addEventListener('resize', debounce(function() {
    closeMobileMenu();
    // Reinitialize particle system on resize
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        initializeParticleSystem();
    }
}, 250));

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// Initialize example links
function initializeExampleLinks() {
    const exampleLinks = document.querySelectorAll('.ai-pattern__link, .example-card__link');
    
    exampleLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.replace(' →', '');
            showNotification(`🚀 Opening ${linkText} with Binary Beacons enhancements...`, 'info');
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeExampleLinks();
});

// Export enhanced functions
window.BinaryBeaconsApp = {
    switchPage: switchPageWithAnimation,
    openModal: openSignupModal,
    closeModal: closeSignupModal,
    showNotification,
    showAIFeatureModal,
    showAIFeatureDemo,
    createParticle
};