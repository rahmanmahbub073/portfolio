$(document).ready(function(){
    // Wait for the DOM to be fully loaded
    
    // Handle navbar toggle functionality directly
    $(document).on('click', '.menu-btn', function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Handle scroll behavior
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // Enable the typing animation if it exists
    // if($('.typing').length) {
    //     var typed = new Typed(".typing", {
    //         strings: ["Developer", "Designer", "Researcher", "Computer Vision Specialist", "Deep Learning Researcher"],
    //         typeSpeed: 100,
    //         backSpeed: 60,
    //         loop: true
    //     });
    // }

    // if($('.typing-2').length) {
    //     var typed = new Typed(".typing-2", {
    //         strings: ["Developer", "Designer", "Researcher", "Computer Vision Specialist", "Deep Learning Researcher"],
    //         typeSpeed: 100,
    //         backSpeed: 60,
    //         loop: true
    //     });
    // }

    // Initialize carousel if it exists
    if($('.carousel').length) {
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0:{
                    items: 1,
                    nav: false
                },
                600:{
                    items: 2,
                    nav: false
                },
                1000:{
                    items: 3,
                    nav: false
                }
            }
        });
    }

    // Project filters
    $('.filter-btn').click(function(){
        const filter = $(this).data('filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filter === 'all'){
            $('.project-item').show(300);
        } else {
            $('.project-item').hide(300);
            $('.project-item[data-category*="' + filter + '"]').show(300);
        }
    });

    // Publication filters
    $('.publication-filter-btn').click(function(){
        const filter = $(this).data('filter');
        
        $('.publication-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filter === 'all'){
            $('.publication-item').show(300);
        } else {
            $('.publication-item').hide(300);
            $('.publication-item[data-category="' + filter + '"]').show(300);
        }
    });

    // Fixed Toggle abstract display functionality for both click and touch devices
    const toggleAbstract = function(e) {
        e.preventDefault();
        e.stopPropagation();

        const abstractContainer = $(this).closest('.publication-content').find('.full-abstract');
        abstractContainer.slideToggle(300);

        const icon = $(this).find('i');
        if (icon.hasClass('fa-chevron-down')) {
            icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            $(this).html('<i class="fas fa-chevron-up"></i> Hide Abstract');
        } else {
            icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $(this).html('<i class="fas fa-chevron-down"></i> Abstract');
        }
    };

    // Attach both click and touchend events to the abstract toggle button
    $('.abstract-toggle').on('click touchend', toggleAbstract);

    // Specifically target and initialize abstract toggles in the index.html's Publications section
    $('#publications .publication-content .abstract-toggle').on('click touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const abstractContainer = $(this).closest('.publication-content').find('.full-abstract');
        abstractContainer.slideToggle(300);
        
        const icon = $(this).find('i');
        if (icon.hasClass('fa-chevron-down')) {
            icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            $(this).html('<i class="fas fa-chevron-up"></i> Hide Abstract');
        } else {
            icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $(this).html('<i class="fas fa-chevron-down"></i> Abstract');
        }
    });

    // Leadership tabs
    $('.tab-btn').click(function(){
        const tab = $(this).data('tab');
        
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        
        $('.tab-content').removeClass('active');
        $('#' + tab + '-tab').addClass('active');
    });

    // Skills filter
    $('.skill-filter-btn').click(function(){
        const filter = $(this).data('filter');
        
        $('.skill-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filter === 'all'){
            $('.skill-card').show(300);
        } else {
            $('.skill-card').hide(300);
            $('.skill-card[data-category="' + filter + '"]').show(300);
        }
    });

    // Awards filter
    $('.award-filter-btn').click(function(){
        const filter = $(this).data('filter');
        
        $('.award-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filter === 'all'){
            $('.award-item').show(300);
        } else {
            $('.award-item').hide(300);
            $('.award-item[data-category="' + filter + '"]').show(300);
        }
    });

    // Highlight active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'education.html') {
        $('.navbar .menu li a[href="education.html"]').addClass('active');
    } else if (currentPage === 'blog.html') {
        $('.navbar .menu li a[href="blog.html"]').addClass('active');
    } else if (currentPage === 'teaching.html') {
        $('.navbar .menu li a[href="teaching.html"]').addClass('active');
    } else {
        // We're on index.html or the root page, so handle section highlighting
        // This is handled by existing scroll event listeners
    }

    // Enhanced typing animation with more fields
    var typed = new Typed(".typing", {
        strings: ["Deep Learning", "Artificial Intelligence", "Computer Vision", "Multimodal Intelligence", "Machine Learning", "Big Data Analysis"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
        smartBackspace: true
    });

/*    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });*/

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
    
    // Project filtering functionality
    $('.filter-btn').click(function(){
        const filterValue = $(this).attr('data-filter');
        
        // Update active button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filterValue === 'all') {
            $('.project-item').show(300);
        } else {
            $('.project-item').hide(300);
            $('.project-item').each(function(){
                if($(this).attr('data-category').includes(filterValue)) {
                    $(this).show(300);
                }
            });
        }
    });
    
    // Skills filtering functionality
    $('.skill-filter-btn').click(function(){
        const filterValue = $(this).attr('data-filter');
        
        // Update active button
        $('.skill-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filterValue === 'all') {
            $('.skill-card').fadeIn(300);
        } else {
            $('.skill-card').hide();
            $('.skill-card[data-category="' + filterValue + '"]').fadeIn(300);
        }
    });
    
    // Awards filtering functionality
    $('.award-filter-btn').click(function(){
        const filterValue = $(this).attr('data-filter');
        
        // Update active button
        $('.award-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filterValue === 'all') {
            $('.award-item').fadeIn(300);
        } else {
            $('.award-item').hide();
            $('.award-item[data-category="' + filterValue + '"]').fadeIn(300);
        }
    });
    
    // Load more projects functionality
    const projectItems = $('.project-item');
    const itemsToShow = 4; // Initial number of projects to show
    let itemsVisible = itemsToShow;
    
    // Hide projects beyond initial count
    projectItems.slice(itemsToShow).hide();
    
    // Show/hide load more button based on visible items
    if(projectItems.length <= itemsToShow) {
        $('#load-more').hide();
    }
    
    // Load more button click handler
    $('#load-more').click(function(){
        itemsVisible += itemsToShow;
        projectItems.slice(0, itemsVisible).show(300);
        
        if(itemsVisible >= projectItems.length) {
            $(this).hide();
        }
    });
    
    // Theme toggle functionality
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme based on saved preference or system preference
    if (currentTheme === 'light') {
        document.body.classList.add('light-theme');
        $('#theme-toggle-btn i').removeClass('fa-moon').addClass('fa-sun');
    } else if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        $('#theme-toggle-btn i').removeClass('fa-sun').addClass('fa-moon');
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.add('light-theme');
        $('#theme-toggle-btn i').removeClass('fa-moon').addClass('fa-sun');
    }
    
    // Theme toggle button click handler
    $('#theme-toggle-btn').click(function() {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
            $('#theme-toggle-btn i').removeClass('fa-sun').addClass('fa-moon');
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
            $('#theme-toggle-btn i').removeClass('fa-moon').addClass('fa-sun');
        }
    });
    
    // Enhanced scroll animations with IntersectionObserver
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.project-item, .skills-content, .about-content').forEach(el => {
        el.classList.add('fade-in-element');
        observer.observe(el);
    });
    
    // Lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.setAttribute('loading', 'lazy');
        });
    } else {
        // Fallback for browsers that don't support native lazy loading
        // You could add a lazy loading library here
    }
    
    // Mobile touch improvements
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Animate skill bars on scroll
    const animateSkills = () => {
        $('.skill-progress').each(function() {
            const width = $(this).css('width', 0).data('width');
            $(this).animate({
                width: width
            }, 1000);
        });
    };
    
    // Use Intersection Observer for skill animations
    const skillsSection = document.querySelector('.skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            animateSkills();
            skillsObserver.unobserve(skillsSection);
        }
    });
    
    if(skillsSection) {
        skillsObserver.observe(skillsSection);
    }
    
    // Add tooltip functionality for skill cards
    $('.skill-card').hover(
        function() {
            const skillName = $(this).find('h3').text();
            const skillLevel = $(this).find('.skill-percent').text();
            
            const tooltip = $('<div class="skill-tooltip">')
                .text(`${skillName}: ${skillLevel}`)
                .appendTo('body');
            
            const position = $(this).offset();
            const width = $(this).outerWidth();
            
            tooltip.css({
                top: position.top - 40,
                left: position.left + width/2 - tooltip.outerWidth()/2
            });
        },
        function() {
            $('.skill-tooltip').remove();
        }
    );

    // About section animations
    const aboutSection = document.querySelector('.about');
    const aboutObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            // Animate profile container
            $('.profile-container').addClass('animate');
            
            // Animate academic items with staggered delay
            $('.academic-item').each(function(index) {
                setTimeout(() => {
                    $(this).addClass('animate');
                }, 300 * (index + 1));
            });
            
            // Animate paragraphs with staggered delay
            $('.about-text p').each(function(index) {
                setTimeout(() => {
                    $(this).addClass('animate');
                }, 400 * (index + 1));
            });
            
            // Animate research interests items
            setTimeout(() => {
                $('.research-interests').addClass('animate');
                
                $('.interests-list li').each(function(index) {
                    setTimeout(() => {
                        $(this).addClass('animate');
                    }, 150 * (index + 1));
                });
            }, 800);
            
            aboutObserver.unobserve(aboutSection);
        }
    });
    
    aboutObserver.observe(aboutSection);

    // Read More button functionality
    $('.read-more-btn').click(function() {
        const truncatedText = $('.truncated-text');
        truncatedText.toggleClass('expanded');
        
        if (truncatedText.hasClass('expanded')) {
            $(this).text('Read Less');
        } else {
            $(this).text('Read More');
        }
    });

    // Publications section functionality
    // Filter publications
    $('.publication-filter-btn').click(function(){
        const filterValue = $(this).attr('data-filter');
        
        // Update active button
        $('.publication-filter-btn').removeClass('active');
        $(this).addClass('active');
        
        if(filterValue === 'all') {
            $('.publication-item').fadeIn(300);
        } else {
            $('.publication-item').hide();
            $('.publication-item[data-category="' + filterValue + '"]').fadeIn(300);
        }
    });
    
    // Toggle publication abstracts
    $('.abstract-toggle').click(function(){
        const abstract = $(this).closest('.publication-content').find('.full-abstract');
        abstract.slideToggle(300);
        
        const icon = $(this).find('i');
        if(icon.hasClass('fa-chevron-down')) {
            icon.removeClass('fa-chevron-down').addClass('fa-chevron-up');
            $(this).html('<i class="fas fa-chevron-up"></i> Hide Abstract');
        } else {
            icon.removeClass('fa-chevron-up').addClass('fa-chevron-down');
            $(this).html('<i class="fas fa-chevron-down"></i> Abstract');
        }
    });
    
    // Leadership section tab functionality
    $('.tab-btn').click(function(){
        const tabId = $(this).attr('data-tab');
        
        // Update active button
        $('.tab-btn').removeClass('active');
        $(this).addClass('active');
        
        // Show selected tab content
        $('.tab-content').removeClass('active');
        $('#' + tabId + '-tab').addClass('active');
    });

    // Animate elements when they come into view
    const pubObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe publication items
    document.querySelectorAll('.publication-item').forEach(item => {
        item.classList.add('fade-in-element');
        pubObserver.observe(item);
    });
    
    // Create observer for leadership section
    const leadershipObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered animation to experience items
                const items = entry.target.querySelectorAll('.experience-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, 200 * index);
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe leadership timelines
    document.querySelectorAll('.leadership-timeline').forEach(timeline => {
        leadershipObserver.observe(timeline);
    });

    // Add parallax effect to particles
    $(window).mousemove(function(e) {
        const moveX = (e.pageX * -1) / 50;
        const moveY = (e.pageY * -1) / 50;
        
        $('.particle-1').css({
            'transform': 'translate(' + moveX + 'px, ' + moveY + 'px)'
        });
        
        $('.particle-2').css({
            'transform': 'translate(' + moveX/2 + 'px, ' + moveY/2 + 'px)'
        });
        
        $('.particle-3').css({
            'transform': 'translate(' + moveX/3 + 'px, ' + moveY/3 + 'px)'
        });
    });
    
    // Animate profile image on scroll
    $(window).scroll(function() {
        const scrolled = $(window).scrollTop();
        
        if (scrolled < 600) {
            const scale = 1 + (scrolled * 0.0002);
            const translateY = scrolled * 0.2;
            
            $('.profile-image').css({
                'transform': 'translateY(' + translateY + 'px) scale(' + scale + ')'
            });
            
            $('.profile-pattern').css({
                'transform': 'translateY(' + translateY/2 + 'px)'
            });
        }
    });
    
    // Add click event to scroll indicator
    $('.scroll-indicator').click(function() {
        $('html, body').animate({
            scrollTop: $('#about').offset().top
        }, 800);
    });
    
    // Animate stats counters
    const animateStats = () => {
        $('.stat-number').each(function() {
            const $this = $(this);
            const countTo = parseInt($this.text());
            
            $this.text('0');
            
            $({ Counter: 0 }).animate({
                Counter: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.Counter) + '+');
                },
                complete: function() {
                    $this.text(countTo + '+');
                }
            });
        });
    };
    
    // Observe home section for animations
    const homeSection = document.querySelector('.home');
    const homeObserver = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            setTimeout(() => {
                animateStats();
            }, 500);
            homeObserver.unobserve(homeSection);
        }
    });
    
    if(homeSection) {
        homeObserver.observe(homeSection);
    }

    // Teaching page tab functionality
    $('.teaching-tab-btn').click(function(){
        const tabId = $(this).attr('data-tab');
        
        // Update active button
        $('.teaching-tab-btn').removeClass('active');
        $(this).addClass('active');
        
        // Show selected tab content
        $('.teaching-tab-content').hide();
        $('#' + tabId + '-tab').fadeIn(300);
    });
    
    // Initialize teaching tabs if they exist
    if($('.teaching-tab-content').length) {
        $('.teaching-tab-content').hide();
        $('#courses-tab').show();
    }
});

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add CSS for animation classes
const style = document.createElement('style');
style.textContent = `
    .fade-in-element {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    .fade-in-element.animate {
        opacity: 1;
        transform: translateY(0);
    }
    .filter-btn {
        background: #1a1d3b;
        color: #fff;
        border: none;
        padding: 8px 16px;
        margin: 0 5px 20px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .filter-btn:hover, .filter-btn.active {
        background: #ff3c6a;
    }
    .project-filters {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .projects-load-more {
        text-align: center;
        margin-top: 30px;
    }
    .load-more-btn {
        background: #0c1445;
        color: #fff;
        border: 2px solid #ff3c6a;
        padding: 10px 25px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    .load-more-btn:hover {
        background: #ff3c6a;
    }
    .theme-toggle {
        margin-bottom: 15px;
    }
    #theme-toggle-btn {
        background: #1a1d3b;
        color: #fff;
        border: none;
        padding: 8px 15px;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 auto;
        transition: all 0.3s ease;
    }
    #theme-toggle-btn:hover {
        background: #3b42d9;
    }
    .light-theme {
        background-color: #f5f5f5;
        color: #222222;
    }
    .light-theme .navbar.sticky {
        background: #fff;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    .light-theme .navbar.sticky .menu li a {
        color: #0c1445;
    }
    @media (max-width: 768px) {
        .project-filters {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 10px;
        }
        .filter-btn {
            flex: 0 0 auto;
        }
    }
`;
document.head.appendChild(style);

// Add CSS for skill tooltips
const skillTooltipStyle = document.createElement('style');
skillTooltipStyle.textContent = `
    .skill-tooltip {
        position: absolute;
        background: #0c1445;
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        z-index: 1000;
        pointer-events: none;
        opacity: 0.9;
    }
    .skill-tooltip::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        border-width: 5px;
        border-style: solid;
        border-color: #0c1445 transparent transparent transparent;
        transform: translateX(-50%);
    }
`;
document.head.appendChild(skillTooltipStyle);

// Add CSS for about section animations
const aboutAnimationsStyle = document.createElement('style');
aboutAnimationsStyle.textContent = `
    .profile-container {
        opacity: 0;
        transform: translateX(-30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .profile-container.animate {
        opacity: 1;
        transform: translateX(0);
    }
    
    .academic-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .academic-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .about-text p {
        opacity: 0;
        transform: translateY(15px);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
    
    .about-text p.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .research-interests {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    }
    
    .research-interests.animate {
        opacity: 1;
        transform: translateY(0);
    }
    
    .interests-list li {
        opacity: 0;
        transform: translateX(15px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    }
    
    .interests-list li.animate {
        opacity: 1;
        transform: translateX(0);
    }
`;
document.head.appendChild(aboutAnimationsStyle);

// Add CSS for new animations
const newAnimationsStyle = document.createElement('style');
newAnimationsStyle.textContent = `
    .publication-item, .experience-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .publication-item.animate, .experience-item.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(newAnimationsStyle);

// SEO improvements - Add JSON-LD structured data dynamically
document.addEventListener('DOMContentLoaded', function() {
    // Create a section for skills as structured data
    const skillsData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": []
    };

    // Get all skill cards and add them to the structured data
    document.querySelectorAll('.skill-card').forEach((skill, index) => {
        const skillName = skill.querySelector('h3').textContent;
        skillsData.itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            "name": skillName
        });
    });

    // Add the skills structured data to the page
    const skillsScript = document.createElement('script');
    skillsScript.type = 'application/ld+json';
    skillsScript.textContent = JSON.stringify(skillsData);
    document.head.appendChild(skillsScript);

    // Add project structured data
    const projectsData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": []
    };

    // Get all projects and add them to structured data
    document.querySelectorAll('.project-item').forEach((project, index) => {
        const projectTitle = project.querySelector('h3').textContent;
        const projectDescription = project.querySelector('.project-description').textContent;
        
        projectsData.itemListElement.push({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork",
                "name": projectTitle,
                "description": projectDescription,
                "creator": {
                    "@type": "Person",
                    "name": "Md Mahbubur Rahman"
                }
            }
        });
    });

    // Add the projects structured data to the page
    const projectsScript = document.createElement('script');
    projectsScript.type = 'application/ld+json';
    projectsScript.textContent = JSON.stringify(projectsData);
    document.head.appendChild(projectsScript);

    // Improve image SEO by adding alt text to any images missing it
    document.querySelectorAll('img:not([alt])').forEach(img => {
        // Derive alt text from parent headings or nearby text
        let altText = '';
        const nearbyHeading = img.closest('div').querySelector('h1, h2, h3, h4, h5, h6');
        
        if (nearbyHeading) {
            altText = nearbyHeading.textContent;
        } else {
            altText = "Portfolio image of Md Mahbubur Rahman's work";
        }
        
        img.setAttribute('alt', altText);
    });
});

// Override the default jQuery behavior for the abstract-toggle buttons on touch devices
if ('ontouchstart' in window) {
    $(document).on('touchend', '.abstract-toggle', function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
}
