const contentData = {
    whoami: {
        title: "KİMLİK",
        content: "<b>KEMAL BALCI</b><br>Boğaziçi Üni. Fizik & Makine Müh. (Trans.)<br><br><b>Mevcut Rol:</b> CEO Office Analyst @ Massive Bio<br><b>Lokasyon:</b> İstanbul / Remote<br><b>Odak:</b> AI Stratejileri, Finansal Modelleme, Veri Analitiği"
    },
    exp_logs: {
        title: "KARİYER_LOGLARI",
        content: "<b>MASSIVE BIO (2024-...)</b><br>Lead Acquisition maliyetlerini %50 düşüren AI dönüşümünü yönetti. Yatırımcı sunumları ve finansal modelleme.<br><br><b>VALUE GENE (2022-2024)</b><br>İngiltere merkezli PE firması için 25 yıllık değerleme projeksiyonu ve operasyonel verimlilik.<br><br><b>MAVEN PARTNERS</b><br>Python ile Rota Optimizasyonu (CVRPTW) modeli geliştirdi."
    },
    projects: {
        title: "TECH_LABS",
        content: "1. <b>Algoritmik Trading (QNB):</b> BIST verileriyle çalışan, Pandas/Numba tabanlı backtest motoru.<br><br>2. <b>MRI Segmentasyon:</b> VAVLab bünyesinde medikal görüntü işleme projesi.<br><br>3. <b>BoğaziçiAI:</b> Türkiye'nin ilk üniversite AI kulübü kurucu üyeliği."
    },
    skills: {
        title: "YETENEK_SETİ",
        content: "<b>Diller & Scripting:</b><br>Python, R, SQL, VBA/VBScript<br><br><b>Analiz & Araçlar:</b><br>Financial Modeling, Market Intelligence, Tableau, MS Office (Advanced)<br><br><b>Dil:</b><br>İngilizce (Fluent), Türkçe (Native)"
    },
    contact: {
        title: "İLETİŞİM",
        content: "E-Posta: kemallbalci@gmail.com<br>Tel: +90 545 367 27 70<br><br><i>Sinyal göndermek için mail atabilirsiniz.</i>"
    }
};

let isExpanded = false;
const nodes = document.querySelectorAll('.node');
const svg = document.getElementById('connections');
const btn = document.getElementById('toggleBtn');
const statusLabel = document.getElementById('statusLabel');

const modal = document.getElementById('contentModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModalBtn = document.getElementById('closeModalBtn');

// Pencere boyutu değişince sistemi kapat (Hizalama bozulmasın diye)
window.addEventListener('resize', () => {
    if (isExpanded) closeSystem();
});

// --- SISTEM AÇ/KAPA FONKSİYONLARI ---
function toggleSystem() {
    if (!isExpanded) {
        openSystem();
    } else {
        closeSystem();
    }
}

function openSystem() {
    isExpanded = true;
    document.body.classList.add('system-active');

    // Buton ve Metin Güncelleme
    btn.innerHTML = "ABORT<br>SYSTEM";
    btn.setAttribute('data-text', 'ABORT SYSTEM'); // Glitch metni
    btn.style.borderColor = "var(--accent-color)";
    statusLabel.innerText = "SYSTEM: ONLINE";
    statusLabel.style.color = "var(--accent-color)";
    statusLabel.style.borderColor = "var(--accent-color)";

    // Node Pozisyonlama
    const radius = window.innerWidth < 600 ? 140 : 250; // Mobilde daha dar yarıçap
    const total = nodes.length;
    const angleStep = (2 * Math.PI) / total;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    svg.innerHTML = ''; // Eski çizgileri temizle

    nodes.forEach((node, index) => {
        const angle = index * angleStep - (Math.PI / 2); // -90 derece ile tepeden başla
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Node'u merkezden dışarı taşı
        node.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(1)`;

        // Çizgiyi Çiz
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', centerX);
        line.setAttribute('y1', centerY);
        line.setAttribute('x2', centerX + x);
        line.setAttribute('y2', centerY + y);
        svg.appendChild(line);
    });
}

function closeSystem() {
    isExpanded = false;
    document.body.classList.remove('system-active');

    // Butonu Eski Haline Getir
    btn.innerHTML = "INITIALIZE<br>CORE";
    btn.setAttribute('data-text', 'INITIALIZE');
    btn.style.borderColor = "var(--text-color)";
    statusLabel.innerText = "SYSTEM: STANDBY";
    statusLabel.style.color = "var(--text-color)";
    statusLabel.style.borderColor = "#333";

    const contentData = {
        whoami: {
            title: "KİMLİK",
            content: "<b>KEMAL BALCI</b><br>Boğaziçi Üni. Fizik & Makine Müh. (Trans.)<br><br><b>Mevcut Rol:</b> CEO Office Analyst @ Massive Bio<br><b>Lokasyon:</b> İstanbul / Remote<br><b>Odak:</b> AI Stratejileri, Finansal Modelleme, Veri Analitiği"
        },
        exp_logs: {
            title: "KARİYER_LOGLARI",
            content: "<b>MASSIVE BIO (2024-...)</b><br>Lead Acquisition maliyetlerini %50 düşüren AI dönüşümünü yönetti. Yatırımcı sunumları ve finansal modelleme.<br><br><b>VALUE GENE (2022-2024)</b><br>İngiltere merkezli PE firması için 25 yıllık değerleme projeksiyonu ve operasyonel verimlilik.<br><br><b>MAVEN PARTNERS</b><br>Python ile Rota Optimizasyonu (CVRPTW) modeli geliştirdi."
        },
        projects: {
            title: "TECH_LABS",
            content: "1. <b>Algoritmik Trading (QNB):</b> BIST verileriyle çalışan, Pandas/Numba tabanlı backtest motoru.<br><br>2. <b>MRI Segmentasyon:</b> VAVLab bünyesinde medikal görüntü işleme projesi.<br><br>3. <b>BoğaziçiAI:</b> Türkiye'nin ilk üniversite AI kulübü kurucu üyeliği."
        },
        skills: {
            title: "YETENEK_SETİ",
            content: "<b>Diller & Scripting:</b><br>Python, R, SQL, VBA/VBScript<br><br><b>Analiz & Araçlar:</b><br>Financial Modeling, Market Intelligence, Tableau, MS Office (Advanced)<br><br><b>Dil:</b><br>İngilizce (Fluent), Türkçe (Native)"
        },
        contact: {
            title: "İLETİŞİM",
            content: "E-Posta: kemallbalci@gmail.com<br>Tel: +90 545 367 27 70<br><br><i>Sinyal göndermek için mail atabilirsiniz.</i>"
        }
    };

    let isExpanded = false;
    const nodes = document.querySelectorAll('.node');
    const svg = document.getElementById('connections');
    const btn = document.getElementById('toggleBtn');
    const statusLabel = document.getElementById('statusLabel');

    const modal = document.getElementById('contentModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Pencere boyutu değişince sistemi kapat (Hizalama bozulmasın diye)
    window.addEventListener('resize', () => {
        if (isExpanded) closeSystem();
    });

    // --- SISTEM AÇ/KAPA FONKSİYONLARI ---
    function toggleSystem() {
        if (!isExpanded) {
            openSystem();
        } else {
            closeSystem();
        }
    }

    function openSystem() {
        isExpanded = true;
        document.body.classList.add('system-active');

        // Buton ve Metin Güncelleme
        btn.innerHTML = "ABORT<br>SYSTEM";
        btn.setAttribute('data-text', 'ABORT SYSTEM'); // Glitch metni
        btn.style.borderColor = "var(--accent-color)";
        statusLabel.innerText = "SYSTEM: ONLINE";
        statusLabel.style.color = "var(--accent-color)";
        statusLabel.style.borderColor = "var(--accent-color)";

        // Node Pozisyonlama
        const radius = window.innerWidth < 600 ? 140 : 250; // Mobilde daha dar yarıçap
        const total = nodes.length;
        const angleStep = (2 * Math.PI) / total;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        svg.innerHTML = ''; // Eski çizgileri temizle

        nodes.forEach((node, index) => {
            const angle = index * angleStep - (Math.PI / 2); // -90 derece ile tepeden başla
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            // Node'u merkezden dışarı taşı
            node.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%)) scale(1)`;

            // Çizgiyi Çiz
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', centerX);
            line.setAttribute('y1', centerY);
            line.setAttribute('x2', centerX + x);
            line.setAttribute('y2', centerY + y);
            svg.appendChild(line);
        });
    }

    function closeSystem() {
        isExpanded = false;
        document.body.classList.remove('system-active');

        // Butonu Eski Haline Getir
        btn.innerHTML = "INITIALIZE<br>CORE";
        btn.setAttribute('data-text', 'INITIALIZE');
        btn.style.borderColor = "var(--text-color)";
        statusLabel.innerText = "SYSTEM: STANDBY";
        statusLabel.style.color = "var(--text-color)";
        statusLabel.style.borderColor = "#333";

        // Node'ları merkeze çek
        nodes.forEach(node => {
            node.style.transform = `translate(-50%, -50%) scale(0.5)`;
        });
    }

    // --- MODAL FONKSİYONLARI ---
    function openModal(title, content) {
        modalTitle.innerText = "ACCESSING: " + title;
        modalContent.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        document.body.classList.add('modal-active');
    }

    function closeModal() {
        document.body.classList.remove('modal-active');
    }

    // Event Listeners
    if (btn) btn.addEventListener('click', toggleSystem);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const type = node.getAttribute('data-type');
            if (type === 'modal') {
                const key = node.getAttribute('data-key');
                const data = contentData[key];
                if (data) {
                    openModal(data.title, data.content);
                }
            } else if (type === 'link') {
                const url = node.getAttribute('data-url');
                window.open(url, '_blank');
            }
        });
    });

    // Dışarı tıklayınca kapat
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // ESC tuşu ile kapat
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") closeModal();
    });