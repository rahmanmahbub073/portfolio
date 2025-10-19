/**
 * Projects.js - Handles the functionality for the projects page
 * - Project details data
 * - Modal functionality
 * - Search and filtering
 */

// Project details data
const projectsData = {
    "multimodal-rumor-detection": {
        title: "Multimodal Rumor Detection",
        category: "Deep Learning",
        date: "2024 - 2025",
        description: "The rise of multimodal content on social platforms has led to the rapid spread of complex and persuasive false narratives, combining of text and images. Traditional rumor detection models attempt to identify such content by relying on textual cues or employing shallow multimodal fusion techniques. However, these methods often assume a simplistic one-to-one alignment between modalities, overlooking the richer hierarchical relationships across modalities, failing to capture the layered structure of meaning. In this paper, we present RumorCone, a novel method that employs hyperbolic geometry in order to preserve hierarchical, non-linear relationships, rather than representing them at a flat semantic level. First, RumorCone decomposes image and text content into three levels: base, mid, and high-level abstractions, and embeds them in hyperbolic space to model their tree-like semantic structure. Second, a dynamic hyperbolic multimodal attention mechanism aligns features across modalities and levels, and a flexible fusion strategy adjusts the contribution of each modality based on alignment quality. Our experiments indicate the importance of hierarchical semantic modeling for robust and interpretable multimodal rumor detection.",
        mainImage: "images/projects/multimodal-rumor-details-2.PNG",
        gallery: [
            "images/projects/multimodal-rumor-details-1.PNG",
            "images/projects/multimodal-rumor-details-4.PNG",
            "images/projects/multimodal-rumor-details-3.PNG"
        ],
        technologies: ["Python", "Deep Learning", "PyTorch", "NLP", "Computer Vision", "Multimodal Learning"],
        features: [
            "Cross-modal semantic consistency analysis",
            "Hierarchical reasoning framework",
            "Attention-based feature fusion",
            "Multi-level semantic processing"
        ],
        challenges: [
            {
                title: "Misalignment between modalities",
                solution: "Developed a novel alignment mechanism that maps features from different modalities into a shared semantic space."
            },
            {
                title: "Limited multimodal datasets",
                solution: "Created augmented data by generating abstraction image-text pairs to simulate rumor content."
            }
        ],
        results: "The RumorCone approach achieved an improvement in detection accuracy compared to state-of-the-art multimodal rumor detection methods, with particularly strong performance on subtle inconsistencies that are challenging for existing systems.",
        githubLink: "https://github.com/rahmanmahbub073",
        demoLink: "",
        paperLink: "https://www.researchgate.net/publication/396462166_Semantic_Discrepancy_and_Hierarchical_Reasoning_for_Multimodal_Rumor_Detection"
    },
    "academic-search": {
        title: "Academic Search Engine Module",
        category: "Web Development, Machine Learning",
        date: "2024 - 2025",
        description: "An Intelligent Search Engine Module designed specifically for academic networks and institutions. The system indexes academic content including research papers, theses, course materials, and institutional documents to provide efficient and relevant search results for researchers, faculty, and students.",
        mainImage: "images/projects/academic-search-engine.jpg",
        gallery: [
            "images/projects/academic-search-details-1.jpg",
            "images/projects/academic-search-details-2.jpg"
        ],
        technologies: ["Python", "Flask", "TF-IDF", "Elasticsearch", "NLP", "JavaScript"],
        features: [
            "Advanced academic content indexing",
            "Personalized search results based on user roles",
            "Citation and reference tracking",
            "Multi-format document support"
        ],
        challenges: [
            {
                title: "Handling diverse document formats",
                solution: "Implemented custom parsers for PDF, Word, LaTeX, and HTML documents to extract structured information."
            },
            {
                title: "Relevance ranking for academic context",
                solution: "Developed a domain-specific ranking algorithm that considers academic factors like publication date, citation count, and author reputation."
            }
        ],
        results: "The system reduced search time by 40% compared to general-purpose search solutions and significantly improved the relevance of search results for academic queries.",
        githubLink: "https://github.com/rahmanmahbub073/Search-Engine",
        demoLink: "",
        paperLink: ""
    },
    "tiny-object-detection": {
        title: "Tiny Object Detection Study",
        category: "Deep Learning",
        date: "2023 - 2024",
        description: "A comprehensive study on tiny and small object detection using deep learning approaches. The project focuses on enhancing detection accuracy for small objects in complex scenes through multi-scale feature fusion and attention mechanisms, with applications in satellite imagery, surveillance, and medical imaging.",
        mainImage: "images/projects/tiny-object-detection.jpg",
        gallery: [
            "images/projects/tiny-object-details-1.jpg",
            "images/projects/tiny-object-details-2.jpg"
        ],
        technologies: ["YOLOv5", "YOLOv8", "PyTorch", "OpenCV", "Computer Vision", "Deep Learning"],
        features: [
            "Multi-scale feature fusion architecture",
            "Context-aware attention mechanisms",
            "Scale-specific anchors and priors",
            "Comparative analysis of detection frameworks"
        ],
        challenges: [
            {
                title: "Feature representation for tiny objects",
                solution: "Designed a hierarchical feature pyramid with bidirectional information flow to preserve fine-grained details."
            },
            {
                title: "Class imbalance in training data",
                solution: "Implemented a weighted loss function and balanced sampling strategy to address the underrepresentation of small objects."
            }
        ],
        results: "The proposed approach achieved a 15% improvement in mean Average Precision (mAP) for small objects on the MS COCO dataset and a 22% improvement on a custom aerial imagery dataset.",
        githubLink: "https://github.com/rahmanmahbub073/TrainingTesting-Yolov5AndYolov8",
        demoLink: "",
        paperLink: ""
    },
    "network-anomaly": {
        title: "Network Anomaly Classification",
        category: "Machine Learning",
        date: "2023",
        description: "A network security project focused on detecting and classifying anomalous patterns in network traffic. The system employs machine learning and statistical techniques to identify potential security threats, unusual traffic patterns, and network intrusions with high accuracy and low false positive rates.",
        mainImage: "images/projects/network-anomaly.jpg",
        gallery: [
            "images/projects/network-anomaly-details-1.jpg",
            "images/projects/network-anomaly-details-2.jpg"
        ],
        technologies: ["Python", "Machine Learning", "Scikit-learn", "Statistical Analysis", "Feature Engineering"],
        features: [
            "Real-time anomaly detection",
            "Multi-class classification of attack types",
            "Time-series analysis of network patterns",
            "Low false positive rate algorithms"
        ],
        challenges: [
            {
                title: "High-dimensional feature space",
                solution: "Applied dimensionality reduction techniques and feature selection methods to identify the most discriminative network attributes."
            },
            {
                title: "Handling evolving attack patterns",
                solution: "Implemented an adaptive learning approach that periodically updates the model with new patterns and emerging threats."
            }
        ],
        results: "The system achieved 94% detection accuracy with a false positive rate of only 2.3%, outperforming traditional signature-based detection systems, especially for zero-day attacks.",
        githubLink: "https://github.com/rahmanmahbub073/Anomaly-Classification",
        demoLink: "",
        paperLink: ""
    },
    "house-rent": {
        title: "House Rent Price Prediction",
        category: "Machine Learning",
        date: "2022",
        description: "A regression-based machine learning project that predicts housing rental prices in Dhaka, Bangladesh. The system analyzes various factors affecting rent prices including location, property size, amenities, and surrounding facilities to provide accurate price estimates for property owners and tenants.",
        mainImage: "images/projects/house-rent-prediction.jpg",
        gallery: [
            "images/projects/house-rent-details-1.jpg",
            "images/projects/house-rent-details-2.jpg"
        ],
        technologies: ["Python", "Pandas", "scikit-learn", "Data Visualization", "Regression Models"],
        features: [
            "Multivariate regression analysis",
            "Feature importance ranking",
            "Interactive price prediction interface",
            "Geographical price distribution mapping"
        ],
        challenges: [
            {
                title: "Data collection and cleaning",
                solution: "Implemented web scraping and manual survey methods to collect diverse housing data, followed by rigorous cleaning procedures to handle missing values and outliers."
            },
            {
                title: "Feature selection for optimal prediction",
                solution: "Applied correlation analysis and recursive feature elimination to identify the most significant factors affecting rent prices."
            }
        ],
        results: "The final model achieved a prediction accuracy of 87% with RMSE (Root Mean Square Error) of ±2,500 BDT, providing reliable price estimates for both landlords and prospective tenants.",
        githubLink: "",
        demoLink: "",
        paperLink: ""
    },
    "image-review": {
        title: "Image Content Review System",
        category: "Deep Learning",
        date: "2021",
        description: "An automated content moderation system that uses deep learning object detection to identify and flag potentially inappropriate or unwanted images in real-time video streams. The system is designed to assist content moderators in efficiently reviewing large volumes of visual content.",
        mainImage: "images/projects/image-content-review.jpg",
        gallery: [
            "images/projects/image-review-details-1.jpg",
            "images/projects/image-review-details-2.jpg"
        ],
        technologies: ["Python", "TensorFlow", "YOLO", "OpenCV", "Deep Learning"],
        features: [
            "Real-time object recognition",
            "Customizable content filtering rules",
            "Video stream processing",
            "Alert and flagging system"
        ],
        challenges: [
            {
                title: "Processing speed for real-time applications",
                solution: "Optimized the model through quantization and architecture refinements to achieve 30+ FPS on standard hardware."
            },
            {
                title: "Reducing false positives",
                solution: "Implemented a two-stage verification process with context awareness to minimize incorrect content flagging."
            }
        ],
        results: "The system successfully processes video streams at 30 FPS with 92% accuracy in identifying predefined unwanted content categories, significantly reducing manual review workload.",
        githubLink: "https://github.com/rahmanmahbub073/PythonBased/tree/main/UnwantedImageDetection_server",
        demoLink: "",
        paperLink: "https://drive.google.com/file/d/1QTyHnraJ_pxPDuIbNAY64PXE2fMIuiiF/view?usp=sharing"
    },
    "fraud-detection": {
        title: "Credit Card Fraud Detection",
        category: "Machine Learning",
        date: "2020",
        description: "A machine learning system that identifies potentially fraudulent credit card transactions by analyzing transaction patterns and user behavior. The system employs advanced classification algorithms and anomaly detection techniques to distinguish legitimate transactions from fraudulent ones.",
        mainImage: "images/projects/credit-card-fraud.jpg",
        gallery: [
            "images/projects/fraud-detection-details-1.jpg",
            "images/projects/fraud-detection-details-2.jpg"
        ],
        technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Imbalanced-learn"],
        features: [
            "Real-time transaction scoring",
            "Handling of highly imbalanced data",
            "Feature engineering for fraud indicators",
            "Ensemble learning approach"
        ],
        challenges: [
            {
                title: "Highly imbalanced dataset",
                solution: "Applied SMOTE (Synthetic Minority Over-sampling Technique) and ensemble methods to address the severe class imbalance in fraud detection data."
            },
            {
                title: "Model interpretability",
                solution: "Developed a feature importance visualization system to explain model decisions, critical for compliance and auditing requirements."
            }
        ],
        results: "The system achieved 99.6% accuracy with a recall of 0.91 for fraudulent transactions, significantly reducing false declines while maintaining high fraud detection rates.",
        githubLink: "https://github.com/rahmanmahbub073/PythonBased/tree/main/credit_card_fraud_detection",
        demoLink: "",
        paperLink: "https://drive.google.com/file/d/1FaIDI-M7Sh6dywzJ8JIb-JpOo0cUjytX/view?usp=sharing"
    },
    "enterprise-web": {
        title: "Enterprise Web Applications",
        category: "Web Development",
        date: "2019 - 2020",
        description: "A suite of enterprise-level web applications built using Java Spring framework, including SpringBoot and Spring MVC. These applications demonstrate best practices in enterprise software development, including secure authentication, role-based access control, database integration, and RESTful API design.",
        mainImage: "images/projects/enterprise-web-apps.jpg",
        gallery: [
            "images/projects/enterprise-web-details-1.jpg",
            "images/projects/enterprise-web-details-2.jpg"
        ],
        technologies: ["Java", "Spring Framework", "Spring Boot", "Hibernate", "MySQL", "Thymeleaf", "REST API"],
        features: [
            "Secure user authentication and authorization",
            "Responsive UI with Bootstrap",
            "Database integration with Hibernate ORM",
            "RESTful API endpoints"
        ],
        challenges: [
            {
                title: "Implementing complex business rules",
                solution: "Designed a modular rule engine that separates business logic from application flow, allowing for easier maintenance and updates."
            },
            {
                title: "Ensuring application security",
                solution: "Implemented comprehensive security measures including CSRF protection, input validation, and role-based access control using Spring Security."
            }
        ],
        results: "Delivered a suite of robust enterprise applications that demonstrate effective implementation of Spring ecosystem technologies while maintaining high security standards and performance benchmarks.",
        githubLink: "",
        demoLink: "",
        paperLink: "https://drive.google.com/file/d/1QTyHnraJ_pxPDuIbNAY64PXE2fMIuiiF/view"
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Set up modal functionality
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    
    // Close modal when clicking X
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling again
        });
    }
    
    // Close modal when clicking outside the content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling again
        }
    });
    
    // Featured project details button
    const featuredDetailsBtn = document.querySelector('.details-btn');
    if (featuredDetailsBtn) {
        featuredDetailsBtn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    }
    
    // Project card detail buttons
    const detailButtons = document.querySelectorAll('.view-details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    const detailLinks = document.querySelectorAll('.project-details-link');
    detailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });
    
    // Search and filtering functionality
    const searchBtn = document.getElementById('search-btn');
    const projectSearch = document.getElementById('project-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const sortBtns = document.querySelectorAll('.sort-btn');
    const resetBtn = document.getElementById('reset-filters');
    
    // Search functionality
    if (searchBtn && projectSearch) {
        searchBtn.addEventListener('click', function() {
            filterProjects();
        });
        
        projectSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                filterProjects();
            }
        });
    }
    
    // Category filtering
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                filterProjects();
            });
        });
    }
    
    // Sorting functionality
    if (sortBtns) {
        sortBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                sortBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                sortProjects();
                filterProjects(); // Apply current filters after sorting
            });
        });
    }
    
    // Reset filters
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            if (projectSearch) projectSearch.value = '';
            
            // Reset category filter
            filterBtns.forEach(btn => {
                if (btn.getAttribute('data-filter') === 'all') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            // Reset sort
            sortBtns.forEach(btn => {
                if (btn.getAttribute('data-sort') === 'newest') {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            filterProjects();
        });
    }
});

// Open project modal with details
function openProjectModal(projectId) {
    const modal = document.getElementById('project-modal');
    if (!modal || !projectsData[projectId]) return;
    
    const project = projectsData[projectId];
    
    // Fill modal content
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-date').textContent = project.date;
    document.getElementById('modal-category').textContent = project.category;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-results').textContent = project.results;
    
    // Set main image
    document.getElementById('modal-main-image').src = project.mainImage;
    document.getElementById('modal-main-image').alt = project.title;
    
    // Technologies
    const techContainer = document.getElementById('modal-technologies');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
        const techSpan = document.createElement('span');
        techSpan.textContent = tech;
        techContainer.appendChild(techSpan);
    });
    
    // Features
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Challenges
    const challengesContainer = document.getElementById('modal-challenges');
    challengesContainer.innerHTML = '';
    project.challenges.forEach(challenge => {
        const challengeItem = document.createElement('div');
        challengeItem.className = 'challenge-item';
        
        const title = document.createElement('div');
        title.className = 'challenge-title';
        title.textContent = challenge.title;
        
        const solution = document.createElement('div');
        solution.className = 'challenge-solution';
        solution.textContent = challenge.solution;
        
        challengeItem.appendChild(title);
        challengeItem.appendChild(solution);
        challengesContainer.appendChild(challengeItem);
    });
    
    // Gallery thumbnails
    const galleryContainer = document.getElementById('modal-gallery');
    galleryContainer.innerHTML = '';
    
    // Add main image as first thumbnail
    const mainThumb = document.createElement('div');
    mainThumb.className = 'gallery-thumb active';
    mainThumb.innerHTML = `<img src="${project.mainImage}" alt="Main Image">`;
    galleryContainer.appendChild(mainThumb);
    
    // Add gallery images as thumbnails
    if (project.gallery && project.gallery.length > 0) {
        project.gallery.forEach(img => {
            const thumb = document.createElement('div');
            thumb.className = 'gallery-thumb';
            thumb.innerHTML = `<img src="${img}" alt="Gallery Image">`;
            galleryContainer.appendChild(thumb);
            
            // Add click handler for thumbnails
            thumb.addEventListener('click', function() {
                document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                document.getElementById('modal-main-image').src = img;
            });
        });
    }
    
    // First thumbnail (main image) click handler
    mainThumb.addEventListener('click', function() {
        document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        document.getElementById('modal-main-image').src = project.mainImage;
    });
    
    // Action buttons
    const githubLink = document.getElementById('modal-github-link');
    const demoLink = document.getElementById('modal-demo-link');
    const paperLink = document.getElementById('modal-paper-link');
    
    // GitHub link
    if (project.githubLink) {
        githubLink.href = project.githubLink;
        githubLink.style.display = 'inline-flex';
    } else {
        githubLink.style.display = 'none';
    }
    
    // Demo link
    if (project.demoLink) {
        demoLink.href = project.demoLink;
        demoLink.style.display = 'inline-flex';
    } else {
        demoLink.style.display = 'none';
    }
    
    // Paper link
    if (project.paperLink) {
        paperLink.href = project.paperLink;
        paperLink.style.display = 'inline-flex';
    } else {
        paperLink.style.display = 'none';
    }
    
    // Display the modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Filter projects based on search and category
function filterProjects() {
    const searchQuery = document.getElementById('project-search').value.toLowerCase();
    const categoryFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    
    projectCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const cardCategory = card.getAttribute('data-category');
        
        const matchesSearch = searchQuery === '' || cardText.includes(searchQuery);
        const matchesCategory = categoryFilter === 'all' || cardCategory.includes(categoryFilter);
        
        if (matchesSearch && matchesCategory) {
            card.style.display = 'block';
            visibleCount++;
            
            // Reset animation to trigger it again
            card.style.animation = 'none';
            card.offsetHeight; // Trigger reflow
            card.style.animation = null;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no results message
    const noResults = document.querySelector('.no-results');
    if (noResults) {
        if (visibleCount === 0) {
            noResults.style.display = 'block';
        } else {
            noResults.style.display = 'none';
        }
    }
}

// Sort projects by date or name
function sortProjects() {
    const sortType = document.querySelector('.sort-btn.active').getAttribute('data-sort');
    const projectsGrid = document.querySelector('.projects-grid');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    
    switch (sortType) {
        case 'newest':
            projectCards.sort((a, b) => {
                const dateA = a.querySelector('.project-date').textContent.split(' - ')[0];
                const dateB = b.querySelector('.project-date').textContent.split(' - ')[0];
                return parseInt(dateB) - parseInt(dateA);
            });
            break;
            
        case 'oldest':
            projectCards.sort((a, b) => {
                const dateA = a.querySelector('.project-date').textContent.split(' - ')[0];
                const dateB = b.querySelector('.project-date').textContent.split(' - ')[0];
                return parseInt(dateA) - parseInt(dateB);
            });
            break;
            
        case 'name':
            projectCards.sort((a, b) => {
                const nameA = a.querySelector('h3').textContent.toLowerCase();
                const nameB = b.querySelector('h3').textContent.toLowerCase();
                return nameA.localeCompare(nameB);
            });
            break;
    }
    
    // Remove existing cards and add sorted ones
    projectCards.forEach(card => card.remove());
    projectCards.forEach(card => projectsGrid.appendChild(card));
}
