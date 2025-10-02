document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const themeSwitch = document.querySelector('.theme-switch');
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  const blogCards = document.querySelectorAll('.blog-card');
  const blogOverlay = document.getElementById('blog-overlay');
  const blogContent = document.getElementById('blog-content');
  const blogClose = document.querySelector('.blog-close');
  
  const blogPosts = {
    'lexus-22': {
      title: 'LineageOS 22.2 Unofficial for OnePlus Nord 5 ("lexus")',
      date: 'September 18, 2025',
      category: 'LineageOS Guide',
      maintainer: 'grepfox (@grepfox)',
      downloadLink: 'https://www.dropbox.com/scl/fo/zlejdh2whm84xmhdxd31g/ALDwu285CyH0tTBZSSBpdWU?rlkey=xirddgornddrhzwpi3hj1e14p&st=9nrn8jkq&dl=0',
      changelogLink: 'https://github.com/derpbygrep/ota/blob/main/changelog.md',
      deviceSpecs: {
        'SoC': 'Snapdragon 8s Gen 3 (SM8635)',
        'Display': '6.83 Swift AMOLED 144Hz',
        'RAM': '8GB/12GB LPDDR5X',
        'Storage': '256GB/512GB UFS 3.1',
        'Battery': '5200 (EU) / 6800mAh (Rest of the world)',
        'Camera': '50MP main + 8MP ultrawide',
        'Launch': 'July 2025',
        'Android': 'LineageOS 22.2 (Android 15)'
      },
      warning: 'I am not responsible for bricked devices, lost data , lost jobs, dead integrity or wars. Proceed entirely at your own risk.',
      installationSteps: [
        {
          title: 'Prerequisites & Backup',
          content: `Backup everything: Photos, contacts, apps , important files and everything else
Battery: Ensure device is charged to at least 70%
OxygenOS: It is recommended to use .501 (or august patch build)

⚠️ Warning: Installation will completely wipe all device data!`
        },
        {
          title: 'Enable Developer Options',
          content: `1. Go to Settings → About phone
2. Tap "Build number" seven times rapidly
3. Enter your PIN/password when prompted
4. Navigate to Settings → System → Developer options
5. Enable "USB debugging"
6. Enable "OEM unlocking"`
        },
        {
          title: 'Unlock Bootloader',
          content: `1. Connect device to computer via USB
2. Open command prompt/terminal
3. Boot to fastboot mode: adb reboot bootloader
4. Verify device is detected: fastboot devices
5. Unlock bootloader (this wipes data): fastboot flashing unlock
6. Confirm bootloader unlock on device using volume/power buttons
7. Device will automatically reboot and wipe data`
        },
        {
          title: 'Download All Files from the folder link',
          content: `Run commands:
fastboot flash init_boot init_boot.img
fastboot flash boot boot.img
fastboot flash vendor_boot vendor_boot.img
fastboot flash recovery recovery.img
fastboot -w
fastboot reboot recovery`
        },
        {
          title: 'Flash Rom',
          content: `After booting to recovery:
1. Factory Reset
2. Apply update → Apply from ADB
3. Sideload LineageOS ROM: adb sideload lineage-22.2-*.zip

If it says error 7
Reboot to fastboot and run
fastboot wipe-super super_empty.img and reboot to recovery and sideload.`
        },
        {
          title: 'Installation Complete',
          content: `1. Reboot System: Select "Reboot system now" in recovery
2. Updates: Check Settings → System → Updater for future updates

You're now running LineageOS 22.2 on your OnePlus Nord 5!

Pro Tips:
- Enable 144Hz in Settings → Display → Peak refresh rate`
        }
      ],
      support: '@grepfox_chat'
    },
    'faq': {
      title: 'Frequently Asked Questions (FAQ)',
      intro: 'Welcome to the official Grepfox FAQ! We\'ve compiled answers to your most common questions. Whether you\'re troubleshooting, downloading builds, or just starting — this guide will help you out.',
      questions: [
        {
          emoji: '📁',
          q: 'Where are the download files?',
          a: 'You can find all available builds on the Downloads page. Everything is organized by device. Just navigate like a file explorer.'
        },
        {
          emoji: '🛠️',
          q: 'Can I download older builds?',
          a: 'Yes! Older builds can be found inside the archive link under each build directory.'
        },
        {
          emoji: '🛠️',
          q: 'Can I flash rom?',
          a: `Install recovery
Flash rom
Flash firmware (any miui 14.0.x)
Format data
Boom! Reboot to system`
        },
        {
          emoji: '🔒',
          q: 'Are the builds signed?',
          a: 'All public releases are signed by me through my private keys :D'
        },
        {
          emoji: '📬',
          q: 'How can I contact Grepfox?',
          a: 'You reach out on Telegram group chat: @grepfox or via email: grepfox@tutamail.com.'
        },
        {
          emoji: '📅',
          q: 'How often are updates released?',
          a: 'Stable releases are typically published monthly. However, dev builds or patches might appear more frequently in the archive folders.'
        },
        {
          emoji: '🚀',
          q: 'How can I contribute?',
          a: 'We\'re open to community contributions! If you\'re a developer or tester, reach out via Telegram or email. You can also help by reporting bugs and giving feedback on test builds or throught donation while devs can help with improvements by shooting a PR to github repos.'
        },
        {
          emoji: '💡',
          q: 'Can\'t find what you\'re looking for?',
          a: 'No problem! Let us know in Telegram group and we will assist you.'
        }
      ],
      ending: 'Thanks for reading. Wishing you a good day!'
    },
    'yaap-poco': {
      title: 'YAAP For Poco X3 Pro',
      description: 'Click here to see info about YAAP for vayu.',
      redirectUrl: 'https://yaaprom.org/device?codename=vayu'
    }
  };
  
  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem('grepfox-theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }
  
  function updateThemeIcon(theme) {
    const icon = themeSwitch.querySelector('i');
    icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('grepfox-theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Subtle animation feedback
    themeSwitch.style.transform = 'scale(0.9)';
    setTimeout(() => {
      themeSwitch.style.transform = '';
    }, 150);
  }
  
  // Smooth Navigation
  function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = element.offsetTop - headerHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }
  
  function updateActiveNavLink() {
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }
  
  // Mobile Menu
  function toggleMobileMenu() {
    navList.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.className = navList.classList.contains('active') ? 
                    'fa-solid fa-times' : 'fa-solid fa-bars';
  }
  
  function closeMobileMenu() {
    navList.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.className = 'fa-solid fa-bars';
  }
  
  // Blog Functionality
  function generateLineageOSContent(post) {
    const specsHTML = Object.entries(post.deviceSpecs)
      .map(([key, value]) => `<div>${key}:</div><div>${value}</div>`)
      .join('');
    
    return `
      <div class="blog-meta">
        <span>📅 ${post.date}</span>
        <span>👤 ${post.maintainer}</span>
        <span>📱 ${post.category}</span>
      </div>
      
      <h1>${post.title}</h1>
      
      <div class="download-links">
        <a href="${post.downloadLink}" target="_blank" class="download-btn">
          <i class="fa-solid fa-download"></i>
          Download ROM
        </a>
        <a href="${post.changelogLink}" target="_blank" class="download-btn">
          <i class="fa-solid fa-list"></i>
          Changelog
        </a>
      </div>
      
      <div class="warning-box">
        <strong>⚠️ Warning:</strong> ${post.warning}
      </div>
      
      <div class="device-specs">
        <h3>📱 Device Specifications</h3>
        <div class="specs-grid">
          ${specsHTML}
        </div>
      </div>
      
      <h2>📋 Installation Guide</h2>
      <p>Follow these steps carefully to install LineageOS 22.2 on your OnePlus Nord 5.</p>
      
      <div class="installation-stepper">
        <div class="stepper-nav">
          ${post.installationSteps.map((step, index) => `
            <button class="step-btn ${index === 0 ? 'active' : ''}" data-step="${index}">
              ${index + 1}. ${step.title}
            </button>
          `).join('')}
        </div>
        
        <div class="step-content" id="step-content">
          <h4>${post.installationSteps[0].title}</h4>
          <div>${post.installationSteps[0].content.split('\\n').map(line => {
            if (line.includes('fastboot') || line.includes('adb')) {
              return `<pre>${line}</pre>`;
            }
            return `<p>${line}</p>`;
          }).join('')}</div>
        </div>
      </div>
      
      <h2>💬 Support</h2>
      <p>For support and questions, join our Telegram group: <a href="https://t.me/grepfox_chat" target="_blank">${post.support}</a></p>
    `;
  }
  
  function generateFAQContent(post) {
    const questionsHTML = post.questions.map(item => `
      <div class="faq-item">
        <div class="faq-question">
          <span class="faq-emoji">${item.emoji}</span>
          <strong>${item.q}</strong>
        </div>
        <div class="faq-answer">
          ${item.a.split('\\n').map(line => `<p>${line}</p>`).join('')}
        </div>
      </div>
    `).join('');
    
    return `
      <h1>${post.title}</h1>
      <p>${post.intro}</p>
      
      ${questionsHTML}
      
      <div style="text-align: center; margin-top: 3rem; padding: 2rem; background: var(--glass-bg); border-radius: 15px; backdrop-filter: blur(10px);">
        <p><strong>${post.ending}</strong></p>
      </div>
    `;
  }
  
  function generateYAAPContent(post) {
    return `
      <h1>${post.title}</h1>
      <p>${post.description}</p>
      
      <div style="text-align: center; margin: 3rem 0;">
        <a href="${post.redirectUrl}" target="_blank" class="download-btn">
          <i class="fa-solid fa-external-link"></i>
          Visit YAAP for Poco X3 Pro
        </a>
      </div>
      
      <p>You will be redirected to the official YAAP page for the Poco X3 Pro (codename: vayu).</p>
    `;
  }
  
  function openBlogPost(postId) {
    const post = blogPosts[postId];
    if (!post) return;
    
    let content = '';
    
    switch(postId) {
      case 'lexus-22':
        content = generateLineageOSContent(post);
        break;
      case 'faq':
        content = generateFAQContent(post);
        break;
      case 'yaap-poco':
        // For YAAP, redirect directly
        window.open(post.redirectUrl, '_blank');
        return;
      default:
        content = '<h1>Post not found</h1>';
    }
    
    blogContent.innerHTML = content;
    blogOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Initialize stepper functionality for LineageOS post
    if (postId === 'lexus-22') {
      initInstallationStepper(post);
    }
    
    // Initialize FAQ functionality
    if (postId === 'faq') {
      initFAQFunctionality();
    }
  }
  
  function closeBlogPost() {
    blogOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
  
  function initInstallationStepper(post) {
    const stepBtns = blogContent.querySelectorAll('.step-btn');
    const stepContent = blogContent.querySelector('#step-content');
    
    stepBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        // Update active button
        stepBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update content
        const step = post.installationSteps[index];
        const contentHTML = step.content.split('\\n').map(line => {
          if (line.includes('fastboot') || line.includes('adb') || line.includes('wipe-super')) {
            return `<pre>${line}</pre>`;
          }
          return line ? `<p>${line}</p>` : '';
        }).join('');
        
        stepContent.innerHTML = `
          <h4>${step.title}</h4>
          <div>${contentHTML}</div>
        `;
      });
    });
  }
  
  function initFAQFunctionality() {
    const faqItems = blogContent.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      // Initially hide answers
      answer.style.display = 'none';
      
      question.addEventListener('click', () => {
        const isVisible = answer.style.display !== 'none';
        answer.style.display = isVisible ? 'none' : 'block';
        
        // Add visual feedback
        question.style.background = isVisible ? '' : 'rgba(22, 82, 240, 0.1)';
      });
    });
  }
  
  // Scroll Animations
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    // Add fade-in class and observe elements
    const animateElements = document.querySelectorAll('.blog-card, .section');
    animateElements.forEach((el, index) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(el);
    });
  }
  
  // Card Effects
  function initCardEffects() {
    blogCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
    });
  }
  
  // Button Effects
  function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
      });
      
      btn.addEventListener('mouseleave', function() {
        this.style.transform = '';
      });
      
      btn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0) scale(0.98)';
      });
      
      btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
      });
    });
  }
  
  // Navigation Handler
  function handleNavClick(e) {
    const href = e.target.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      smoothScrollTo(href);
      closeMobileMenu();
      
      // Update active state
      navLinks.forEach(link => link.classList.remove('active'));
      e.target.classList.add('active');
    }
  }
  
  // Keyboard Support
  function initKeyboardSupport() {
    document.addEventListener('keydown', function(e) {
      // Escape key closes blog overlay
      if (e.key === 'Escape' && !blogOverlay.classList.contains('hidden')) {
        closeBlogPost();
      }
      
      // Escape key closes mobile menu
      if (e.key === 'Escape' && navList.classList.contains('active')) {
        closeMobileMenu();
      }
      
      // Enter key for theme toggle when focused
      if (e.key === 'Enter' && document.activeElement === themeSwitch) {
        toggleTheme();
      }
    });
  }
  
  // Initialize everything
  function init() {
    initTheme();
    initScrollAnimations();
    initCardEffects();
    initButtonEffects();
    initKeyboardSupport();
    
    // Event listeners
    themeSwitch.addEventListener('click', toggleTheme);
    menuToggle.addEventListener('click', toggleMobileMenu);
    
    // Fix the close button issue with proper event handling
    if (blogClose) {
      blogClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeBlogPost();
      });
    }
    
    // Blog card click handlers
    blogCards.forEach(card => {
      card.addEventListener('click', () => {
        const postId = card.getAttribute('data-post');
        openBlogPost(postId);
      });
      
      // Also handle read more button clicks
      const readMoreBtn = card.querySelector('.card-read-more');
      if (readMoreBtn) {
        readMoreBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const postId = card.getAttribute('data-post');
          openBlogPost(postId);
        });
      }
    });
    
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
    
    // Scroll events
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.navbar') && navList.classList.contains('active')) {
        closeMobileMenu();
      }
    });
    
    // Close blog overlay when clicking outside the content
    blogOverlay.addEventListener('click', function(e) {
      if (e.target === blogOverlay) {
        closeBlogPost();
      }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }
  
  // Start the application
  init();
  
  // Smooth page load animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  window.addEventListener('load', function() {
    document.body.style.opacity = '1';
  });
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
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

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(function() {
  // Additional scroll-based effects can be added here
}, 16)); // ~60fps