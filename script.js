
const projects = {
    ma3an: {
        num: '01 / 04', 
        title: 'Ma3an (معاً) - Tour Management System', 
        img: 'static/imgt.png',
        desc: `
            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">I. Market Research & Problem Identification</h4>
                <p style="font-size:0.8rem; line-height:1.6; color:var(--text-dim)">
                    Tour agencies face a critical gap in organized group trips, especially during Hajj & Umrah. Travelers frequently face fragmented communication and GPS disconnects. Current informal tools like WhatsApp groups fail to provide real-time logistics, leading to delays and safety risks.
                </p>
            </div>

            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">II. Value Proposition & Competitive Advantage</h4>
                <p style="font-size:0.8rem; line-height:1.6; color:var(--text-dim)">
                    Ma3an offers a <b>Unified Selling Proposition (USP)</b>: A single platform connecting travelers and supervisors through live tracking, geofencing, and instant schedule updates. Unlike competitors, it integrates administrative dashboards with real-time field data.
                </p>
            </div>

            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">III. Technical & Financial Feasibility</h4>
                <ul style="padding-left:15px; font-size:0.75rem; color:var(--text-dim); line-height:1.6">
                    <li><b>Scalability:</b> Built on a Django/PostgreSQL architecture capable of handling high-concurrency during peak seasons.</li>
                    <li><b>Revenue Model:</b> Designed for a B2B SaaS model with Tiered Subscriptions (Basic, Pro, and Enterprise) and white-label options for large agencies.</li>
                    <li><b>Cost Efficiency:</b> Minimized operational costs using Leaflet Open-Source maps and optimized API polling.</li>
                </ul>
            </div>

            <div style="margin-bottom:10px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">IV. Risk Management</h4>
                <p style="font-size:0.75rem; color:var(--text-dim)">Addressing GPS accuracy in crowded areas and user privacy through clear consent protocols and data encryption.</p>
            </div>
        `,
        stack: ['Django', 'Geofencing','Python', 'HTML','CSS','JS', 'Mapping APIs', 'SQL', 'Figma ']
    },
    taibah: {
        num: '02 / 04', 
        title: 'Taibah Interactive Navigation', 
        img: 'static/imgl.png',
        desc: `
            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">The Navigation Crisis</h4>
                <p style="font-size:0.8rem; line-height:1.6; color:var(--text-dim)">
                    University campuses are becoming increasingly complex. Standard GPS tools (Google Maps) lack "Floor-Level" detail, causing significant delays for new students and visitors trying to find specific labs or offices.
                </p>
            </div>

            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">Technical Innovation: Indoor Mapping</h4>
                <p style="font-size:0.8rem; line-height:1.6; color:var(--text-dim)">
                    Developed a specialized navigation engine using <b>HTML5 Canvas</b> to render building floor plans. The system uses a coordinate-based routing algorithm to guide users to their exact destination.
                </p>
            </div>

            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">Dynamic Backend Integration</h4>
                <ul style="padding-left:15px; font-size:0.75rem; color:var(--text-dim); line-height:1.6">
                    <li><b>Google Sheets API:</b> Real-time updates for room occupants or schedule changes without code modification.</li>
                    <li><b>Optimization:</b> Lightweight front-end rendering for low-bandwidth campus Wi-Fi.</li>
                </ul>
            </div>
        `,
        stack: ['Visual Studio Code','HTML',' CSS','JS' , 'Google Sheets', 'OpenStreetMap', 'Bootstrap','Mapme','Mppedin','Figma']
    },
    planteer: {
        num: '02 / 03', 
        title: 'Planteer - Botanical Community Platform', 
        img: 'static/planteer.jpg',
        desc: `
            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">Project Ecosystem</h4>
                <p style="font-size:0.8rem; line-height:1.6; color:var(--text-dim)">
                    A full-stack solution designed for plant enthusiasts to document biodiversity. The project focuses on "Crowdsourced Data," allowing users to build a global botanical directory.
                </p>
            </div>

            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">Advanced Functional Requirements</h4>
                <ul style="padding-left:15px; font-size:0.75rem; color:var(--text-dim); line-height:1.8">
                    <li><b>User Authentication:</b> Robust registration system with personalized dashboards for managing contributions.</li>
                    <li><b>Dynamic Content Management:</b> Full CRUD capabilities for adding plants, high-res images, and detailed care instructions.</li>
                    <li><b>Smart Multi-Level Filtering:</b> Users can filter the entire database by plant category, country of origin, and growth climate.</li>
                    <li><b>Community Interaction:</b> Integrated feedback system and botanical classification tags.</li>
                </ul>
            </div>

            <div>
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">UI/UX Strategy</h4>
                <p style="font-size:0.8rem; color:var(--text-dim)">Implementation of a responsive "Card-Based" layout with smooth CSS transitions to enhance the browsing experience of botanical data.</p>
            </div>
        `,
        stack: ['Python', 'Django', 'HTML','CSS','JS', 'SQL', 'Figma']
    },
    
    realestate: {
        num: '04 / 04', 
        title: 'Premium Real Estate Engine', 
        img: 'static/imga.png',
        desc: `
            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">System Objective</h4>
                <p style="font-size:0.8rem; line-height:1.6; color:var(--text-dim)">
                    A sophisticated property management platform designed to handle large-scale real estate listings with a focus on visual performance and speed.
                </p>
            </div>
            <div style="margin-bottom:20px">
                <h4 style="color:var(--gold-dim); margin-bottom:8px; font-size:0.9rem">Technical Implementation</h4>
                <ul style="padding-left:15px; font-size:0.75rem; color:var(--text-dim); line-height:1.6">
                    <li><b>Architecture:</b> Django-driven CRUD system with advanced query filtering for property attributes.</li>
                    <li><b>Design System:</b> High-fidelity UI using CSS Grid and Custom Variables for consistent branding.</li>
                    <li><b>Performance:</b> Image lazy-loading and optimized database indexing for rapid search results.</li>
                </ul>
            </div>
        `,
        stack: ['Django', 'CSS ', 'SQL', 'Figma']
    }
};
/** * 2. وظائف فتح وإغلاق تفاصيل المشاريع (Overlay)
 */
function openProject(id) {
    const project = projects[id];
    const ov = document.getElementById('ov');
    const body = document.getElementById('ovBody');
    
    if (!project) return;

    // بناء المحتوى المطفّي والناعم داخل النافذة
    body.innerHTML = `
        <div class="ov-side-layout">
            <div class="ov-img-container">
                <img src="${project.img}" class="ov-img-side" alt="${project.title}" onerror="this.style.display='none'">
            </div>
            <div class="ov-text-container" style="text-align: left;">
                <div class="meta" style="color:var(--gold-dim); font-size: 0.7rem; margin-bottom:10px">${project.num}</div>
                <h2 class="sec-title" style="font-size:2rem; margin-bottom:20px; color:var(--cream)">${project.title}</h2>
                <div class="ov-description" style="font-size:0.8rem; color:var(--text-dim); line-height:1.8">
                    ${project.desc}
                </div>
                <div class="ov-tags" style="margin-top:30px; display: flex; flex-wrap: wrap; gap: 8px;">
                    ${project.stack.map(s => `<span class="ov-tag" style="font-size:0.55rem; padding:6px 12px; border:1px solid rgba(212,180,101,0.2); color:var(--gold-dim); background: rgba(212,180,101,0.05);">${s}</span>`).join('')}
                </div>
            </div>
        </div>
    `;
    
    ov.classList.add('active');
    document.body.style.overflow = 'hidden'; // منع السكرول عند فتح التفاصيل
}

function closeProject() {
    document.getElementById('ov').classList.remove('active');
    document.body.style.overflow = ''; // إعادة السكرول
}

/** * 3. وظيفة المنيو للجوال (Hamburger to X)
 */
function toggleTheme() {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

    updateThemeIcon();
}
/** * 4. تحريك الماوس المخصص (Custom Cursor)
 */

 function toggleMenu() {
    const menu = document.getElementById("nav-list");
    const burger = document.getElementById("mobile-menu");

    menu.classList.toggle("active");
    burger.classList.toggle("active");
}
const cur = document.getElementById('cur');
const ring = document.getElementById('ring');

if(cur && ring) {
    document.addEventListener('mousemove', e => {
        cur.style.left = e.clientX + 'px'; 
        cur.style.top = e.clientY + 'px';
        ring.style.left = e.clientX + 'px'; 
        ring.style.top = e.clientY + 'px';
    });

    // إضافة تأثير التحويم (Hover) لجميع العناصر التفاعلية
    document.querySelectorAll('a, button, .proj-card, .clink, .skill-chip').forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('hover'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
    });
}

/** * 5. ظهور الأقسام بنعومة عند السكرول (Scroll Reveal)
 */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { 
        if(e.isIntersecting) {
            e.target.classList.add('visible'); 
        }
    });
}, { threshold: 0.1 });


document.querySelectorAll('section').forEach(s => observer.observe(s));


    

const btn = document.getElementById("themeBtn");


/* ───────── THEME TOGGLE (FIXED) ───────── */
function toggleTheme() {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");

    document.getElementById("themeBtn").textContent = isLight ? "🌙" : "☀️";
}

/* ───────── LOAD SAVED THEME ───────── */
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        document.getElementById("themeBtn").textContent = "🌙";
    } else {
        document.getElementById("themeBtn").textContent = "☀️";
    }


    
});
 