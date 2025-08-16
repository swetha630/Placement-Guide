// CBIT Placement Guide JavaScript

// Sample company data
const companiesData = [
    {
        id: 1,
        name: "Tata Consultancy Services",
        logo: "https://via.placeholder.com/80x80/1f4788/white?text=TCS",
        motto: "Building on Belief",
        type: "Service",
        ctc: "3.5-7 LPA",
        skills: ["DSA", "Java", "SQL", "Web Development"],
        hiringProcess: [
            {
                round: "Online Aptitude Test",
                duration: "90 minutes",
                description: "Quantitative, Logical, and Verbal sections with negative marking"
            },
            {
                round: "Technical MCQ",
                duration: "60 minutes", 
                description: "Programming concepts, DBMS, OS, and basic computer science fundamentals"
            },
            {
                round: "Coding Round",
                duration: "90 minutes",
                description: "2-3 DSA problems on HackerRank platform"
            },
            {
                round: "HR Interview",
                duration: "30 minutes",
                description: "Resume discussion, behavioral questions, and company culture fit"
            }
        ],
        eligibility: [
            "60% minimum in 10th, 12th, B.Tech",
            "No active backlogs",
            "CSE, IT, ECE branches eligible"
        ],
        patterns: [
            "2023: 45 students selected",
            "2022: 38 students selected", 
            "Usually visits in September",
            "Multiple interview rounds"
        ],
        tips: [
            "Focus on aptitude - use IndiaBix, PrepInsta",
            "Practice easy-medium DSA problems",
            "Brush up DBMS, OS concepts",
            "Prepare STAR format answers for HR"
        ]
    },
    {
        id: 2,
        name: "Infosys Limited",
        logo: "https://via.placeholder.com/80x80/0052cc/white?text=INFY",
        motto: "Navigate your next",
        type: "Service",
        ctc: "4-8 LPA",
        skills: ["DSA", "Python", "Cloud", "SQL"],
        hiringProcess: [
            {
                round: "InfyTQ Assessment",
                duration: "120 minutes",
                description: "Programming fundamentals and logical reasoning"
            },
            {
                round: "Technical Interview",
                duration: "45 minutes",
                description: "Coding problems and technical concepts discussion"
            },
            {
                round: "HR Interview", 
                duration: "30 minutes",
                description: "Personal background and motivation assessment"
            }
        ],
        eligibility: [
            "60% throughout academics",
            "No backlogs at the time of interview",
            "All engineering branches"
        ],
        patterns: [
            "2023: 38 students placed",
            "2022: 42 students placed",
            "October recruitment drive"
        ],
        tips: [
            "Complete InfyTQ certification",
            "Focus on Python programming",
            "Practice on HackerRank"
        ]
    },
    {
        id: 3,
        name: "Wipro Technologies",
        logo: "https://via.placeholder.com/80x80/f47920/white?text=WIPRO",
        motto: "Think it. Do it.",
        type: "Service", 
        ctc: "3.2-6 LPA",
        skills: ["Java", "Testing", "SQL", "Cloud"],
        hiringProcess: [
            {
                round: "WILP Test",
                duration: "120 minutes",
                description: "Aptitude and technical knowledge assessment"
            },
            {
                round: "Technical Interview",
                duration: "60 minutes",
                description: "Programming skills and project discussion"
            },
            {
                round: "HR Round",
                duration: "20 minutes",
                description: "Cultural fit and salary negotiation"
            }
        ],
        eligibility: [
            "60% minimum aggregate",
            "No current backlogs",
            "CSE, IT, ECE preferred"
        ],
        patterns: [
            "2023: 32 students selected",
            "Multiple hiring drives per year"
        ],
        tips: [
            "Prepare core Java concepts",
            "Understand software testing basics",
            "Practice coding in preferred language"
        ]
    },
    {
        id: 4,
        name: "Accenture",
        logo: "https://via.placeholder.com/80x80/a100ff/white?text=ACN",
        motto: "Let there be change",
        type: "Service",
        ctc: "4.5-9 LPA",
        skills: ["Consulting", "Analytics", "Cloud", "AI"],
        hiringProcess: [
            {
                round: "Cognitive Assessment", 
                duration: "90 minutes",
                description: "Aptitude, logical reasoning, and technical knowledge"
            },
            {
                round: "Coding Assessment",
                duration: "45 minutes", 
                description: "Programming problems on HackerRank"
            },
            {
                round: "Communication Assessment",
                duration: "20 minutes",
                description: "English communication skills evaluation"
            },
            {
                round: "Interview",
                duration: "45 minutes",
                description: "Technical and HR combined interview"
            }
        ],
        eligibility: [
            "60% throughout academics",
            "Good communication skills",
            "All branches welcome"
        ],
        patterns: [
            "2023: 28 students placed",
            "Focus on diverse skill sets"
        ],
        tips: [
            "Practice communication skills",
            "Learn about consulting basics",
            "Understand business analytics"
        ]
    },
    {
        id: 5,
        name: "Google",
        logo: "https://via.placeholder.com/80x80/4285f4/white?text=GOOG",
        motto: "Do the right thing", 
        type: "Product",
        ctc: "15-35 LPA",
        skills: ["DSA", "System Design", "ML", "Python"],
        hiringProcess: [
            {
                round: "Online Assessment",
                duration: "90 minutes",
                description: "Advanced DSA problems"
            },
            {
                round: "Phone Screen",
                duration: "45 minutes",
                description: "Coding interview with Googler"
            },
            {
                round: "Onsite Interviews",
                duration: "4-5 hours",
                description: "Multiple technical rounds with different interviewers"
            },
            {
                round: "Hiring Committee",
                duration: "N/A",
                description: "Final decision by hiring committee"
            }
        ],
        eligibility: [
            "Exceptional academic record",
            "Strong problem-solving skills",
            "Computer Science background preferred"
        ],
        patterns: [
            "Highly selective process",
            "1-2 students per year from CBIT"
        ],
        tips: [
            "Master advanced DSA topics",
            "Practice system design",
            "Build impressive projects"
        ]
    },
    {
        id: 6,
        name: "Microsoft",
        logo: "https://via.placeholder.com/80x80/00bcf2/white?text=MSFT",
        motto: "Empower every person",
        type: "Product",
        ctc: "18-42 LPA",
        skills: ["DSA", "C#", "Azure", "ML"],
        hiringProcess: [
            {
                round: "Online Coding Test",
                duration: "75 minutes", 
                description: "DSA problems on Microsoft platform"
            },
            {
                round: "Technical Interviews",
                duration: "3-4 rounds",
                description: "Coding, system design, and technical discussions"
            },
            {
                round: "HR Interview",
                duration: "30 minutes",
                description: "Cultural fit and motivation"
            }
        ],
        eligibility: [
            "Strong technical background",
            "Excellent coding skills", 
            "CSE/IT preferred"
        ],
        patterns: [
            "Very competitive selection",
            "Focus on innovation and leadership"
        ],
        tips: [
            "Practice on LeetCode extensively", 
            "Learn Azure fundamentals",
            "Build projects using Microsoft tech stack"
        ]
    }
];

// DOM elements
const companiesGrid = document.getElementById('companiesGrid');
const searchInput = document.getElementById('searchInput');
const filterBtn = document.getElementById('filterBtn');
const filterPanel = document.getElementById('filterPanel');
const companyTypeFilter = document.getElementById('companyTypeFilter');
const packageFilter = document.getElementById('packageFilter');
const skillsFilter = document.getElementById('skillsFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const companyModal = new bootstrap.Modal(document.getElementById('companyModal'));

// State variables
let displayedCompanies = 4;
let filteredCompanies = [...companiesData];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderCompanies();
    initializeCharts();
    bindEventListeners();
    initializeAnimations();
});

// Render companies in grid
function renderCompanies(companies = filteredCompanies.slice(0, displayedCompanies)) {
    companiesGrid.innerHTML = '';
    
    companies.forEach(company => {
        const companyCard = createCompanyCard(company);
        companiesGrid.appendChild(companyCard);
    });
    
    // Show/hide load more button
    loadMoreBtn.style.display = displayedCompanies >= filteredCompanies.length ? 'none' : 'block';
}

// Create company card element
function createCompanyCard(company) {
    const col = document.createElement('div');
    col.className = 'col-lg-3 col-md-6 mb-4';
    
    const skillTags = company.skills.map(skill => 
        `<span class="skill-tag">${skill}</span>`
    ).join('');
    
    col.innerHTML = `
        <div class="card company-card shadow-sm h-100" data-company-id="${company.id}">
            <div class="card-body text-center p-4">
                <img src="${company.logo}" alt="${company.name}" class="company-logo d-block mb-3">
                <h5 class="company-name">${company.name}</h5>
                <p class="company-motto">"${company.motto}"</p>
                <span class="company-type ${company.type.toLowerCase()}">${company.type}</span>
                <div class="company-ctc mt-2">₹${company.ctc}</div>
                <div class="skill-tags mt-3 mb-4">
                    ${skillTags}
                </div>
                <button class="btn btn-primary w-100" onclick="showCompanyDetails(${company.id})">
                    <i class="fas fa-info-circle me-2"></i>View Details
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Show company details in modal
function showCompanyDetails(companyId) {
    const company = companiesData.find(c => c.id === companyId);
    if (!company) return;
    
    const modalTitle = document.getElementById('modalCompanyName');
    const modalContent = document.getElementById('modalContent');
    
    modalTitle.innerHTML = `
        <img src="${company.logo}" alt="${company.name}" width="40" height="40" class="me-3">
        ${company.name}
    `;
    
    const hiringProcessHTML = company.hiringProcess.map((round, index) => `
        <div class="round-item">
            <div class="round-title">Round ${index + 1}: ${round.round} (${round.duration})</div>
            <div class="text-muted">${round.description}</div>
        </div>
    `).join('');
    
    const eligibilityHTML = company.eligibility.map(criteria => `
        <div class="criteria-item">
            <i class="fas fa-check-circle"></i>
            <span>${criteria}</span>
        </div>
    `).join('');
    
    const patternsHTML = company.patterns.map(pattern => `
        <div class="pattern-item">
            <i class="fas fa-chart-line"></i>
            <span>${pattern}</span>
        </div>
    `).join('');
    
    const tipsHTML = company.tips.map(tip => `
        <div class="tip-item">
            <i class="fas fa-lightbulb"></i>
            <span>${tip}</span>
        </div>
    `).join('');
    
    modalContent.innerHTML = `
        <div class="row">
            <div class="col-12">
                <div class="company-basic-info mb-4">
                    <span class="badge badge-custom ${company.type.toLowerCase() === 'product' ? 'bg-success' : 'bg-info'} me-2">${company.type} Company</span>
                    <span class="badge bg-warning text-dark">₹${company.ctc}</span>
                </div>
                
                <h6><i class="fas fa-clipboard-list me-2 text-primary"></i>Hiring Process (${company.hiringProcess.length} Rounds)</h6>
                <div class="hiring-process">
                    ${hiringProcessHTML}
                </div>
                
                <h6><i class="fas fa-check-square me-2 text-success"></i>Eligibility Criteria</h6>
                <div class="eligibility-criteria">
                    ${eligibilityHTML}
                </div>
                
                <h6><i class="fas fa-chart-bar me-2 text-info"></i>Past Recruitment Patterns</h6>
                <div class="recruitment-patterns">
                    ${patternsHTML}
                </div>
                
                <h6><i class="fas fa-star me-2 text-warning"></i>Preparation Tips</h6>
                <div class="preparation-tips">
                    ${tipsHTML}
                </div>
                
                <div class="mt-4 d-flex gap-2">
                    <button class="btn btn-success flex-fill">
                        <i class="fas fa-bookmark me-2"></i>Save Company
                    </button>
                    <button class="btn btn-info flex-fill">
                        <i class="fas fa-share me-2"></i>Share
                    </button>
                </div>
            </div>
        </div>
    `;
    
    companyModal.show();
}

// Search and filter functionality
function filterCompanies() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const typeFilter = companyTypeFilter.value;
    const packageRange = packageFilter.value;
    const skillFilter = skillsFilter.value;
    
    filteredCompanies = companiesData.filter(company => {
        const matchesSearch = !searchTerm || 
            company.name.toLowerCase().includes(searchTerm) ||
            company.skills.some(skill => skill.toLowerCase().includes(searchTerm));
            
        const matchesType = !typeFilter || company.type === typeFilter;
        
        const matchesPackage = !packageRange || checkPackageRange(company.ctc, packageRange);
        
        const matchesSkill = !skillFilter || 
            company.skills.some(skill => skill.toLowerCase().includes(skillFilter.toLowerCase()));
        
        return matchesSearch && matchesType && matchesPackage && matchesSkill;
    });
    
    displayedCompanies = 4;
    renderCompanies();
}

// Check if package falls within range
function checkPackageRange(ctc, range) {
    const packageNum = parseFloat(ctc.split('-')[0]);
    
    switch(range) {
        case '0-5': return packageNum <= 5;
        case '5-10': return packageNum > 5 && packageNum <= 10;
        case '10-20': return packageNum > 10 && packageNum <= 20;
        case '20+': return packageNum > 20;
        default: return true;
    }
}

// Clear all filters
function clearFilters() {
    searchInput.value = '';
    companyTypeFilter.value = '';
    packageFilter.value = '';
    skillsFilter.value = '';
    filteredCompanies = [...companiesData];
    displayedCompanies = 4;
    renderCompanies();
}

// Load more companies
function loadMoreCompanies() {
    displayedCompanies += 4;
    renderCompanies();
}

// Initialize charts
function initializeCharts() {
    // Placement Rate Chart
    const placementCtx = document.getElementById('placementChart');
    if (placementCtx) {
        new Chart(placementCtx, {
            type: 'doughnut',
            data: {
                labels: ['Placed', 'Not Placed'],
                datasets: [{
                    data: [85, 15],
                    backgroundColor: ['#27ae60', '#ecf0f1'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });
    }
    
    // Package Distribution Chart
    const packageCtx = document.getElementById('packageChart');
    if (packageCtx) {
        new Chart(packageCtx, {
            type: 'bar',
            data: {
                labels: ['0-3L', '3-6L', '6-10L', '10-15L', '15L+'],
                datasets: [{
                    label: 'Students',
                    data: [45, 120, 85, 25, 8],
                    backgroundColor: '#3498db'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Bind event listeners
function bindEventListeners() {
    // Search functionality
    searchInput.addEventListener('input', debounce(filterCompanies, 300));
    
    // Filter panel toggle
    filterBtn.addEventListener('click', () => {
        const isVisible = filterPanel.style.display === 'block';
        filterPanel.style.display = isVisible ? 'none' : 'block';
    });
    
    // Filter controls
    companyTypeFilter.addEventListener('change', filterCompanies);
    packageFilter.addEventListener('change', filterCompanies);
    skillsFilter.addEventListener('change', filterCompanies);
    clearFiltersBtn.addEventListener('click', clearFilters);
    
    // Load more button
    loadMoreBtn.addEventListener('click', loadMoreCompanies);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all cards and sections
    document.querySelectorAll('.card, section').forEach(el => {
        observer.observe(el);
    });
}

// Utility function for debouncing
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

// Add loading state management
function showLoading(element) {
    element.innerHTML = '<span class="loading"></span>';
    element.disabled = true;
}

function hideLoading(element, originalText) {
    element.innerHTML = originalText;
    element.disabled = false;
}

// Export functions for global access
window.showCompanyDetails = showCompanyDetails;
