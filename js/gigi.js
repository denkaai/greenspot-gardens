const GIGI_CONFIG = {
    name: "Gigi",
    role: "GreenSpot Assistant",
    avatar: "🌿",
    systemPrompt: "You are Gigi, the friendly Garden Concierge at GreenSpot Gardens. You help with bookings, menu details, event info, and general inquiries.",
    facilities: [
        { id: 'lounge', name: 'Garden Lounge', description: 'Experience our serene outdoor lounge.' },
        { id: 'dining', name: 'Signature Dining', description: 'Enjoy our master-chef grilled delicacies.' },
        { id: 'events', name: 'Private Event', description: 'Host your special moments in our gardens.' },
        { id: 'drinks', name: 'Mixology Bar', description: 'Curated cocktails and premium sips.' }
    ],
    whatsappNumber: "254110057300"
};

// --- DATA FROM CHATBOT.JS ---
const LANGUAGES = {
    en: { name: 'English', flag: '🇬🇧' },
    sw: { name: 'Kiswahili', flag: '🇰🇪' },
    ki: { name: 'Gĩkũyũ', flag: '🏔️' },
    ka: { name: 'Kĩkamba', flag: '🌄' },
    lu: { name: 'Dholuo', flag: '🐟' },
    lh: { name: 'Luhya', flag: '🌾' }
};

const TRANSLATIONS = {
    welcome: {
        en: "Hello! 👋 Welcome to GreenSpot Gardens! I'm Gigi. I can help you book a table, check the menu, or answer any questions. How can I help?",
        sw: "Habari! 👋 Karibu GreenSpot Gardens! Mimi ni Gigi. Naweza kukusaidia kubook meza, kukuonyesha menu, au kujibu maswali. Nikusaidie aje?",
        ki: "Wĩ mwega! 👋 Karibu GreenSpot Gardens! Nĩ ngũteithia na bookings, menu, na ũhoro ũngĩ. Ũrenda kũmenya atĩa?",
        ka: "Wĩ mweu! 👋 Karibu GreenSpot Gardens! Nĩ ngũteithia na bookings, menu, na ũhoro ũngĩ. Wendaa kumanya kĩĩ?",
        lu: "Ber ahinya! 👋 Karibu GreenSpot Gardens! An Gigi. Anyalo konyi booko mesa, neno menu, kata dwoko penjo. Ikare nade?",
        lh: "Mulembe! 👋 Karibu GreenSpot Gardens! Ndi Gigi. Nanyala okhukhasaidia okhukhola booking, menu, nende ebindi. Owenyanga okumania ki?"
    },
    booking_intro: {
        en: "I'd love to help you with a reservation! What would you like to book?",
        sw: "Ningependa kukusaidia na booking! Ungependa kubook nini?",
        ki: "Nĩ ngwenda gũkũteithia na booking! Ũrenda kũbook kĩĩ?",
        ka: "Nĩkwenda gũkũteithia na booking! Wendaa kubook kyaũ?",
        lu: "Daher konyi gi booking! Idwaro booko ang'o?",
        lh: "Nyenyanga okhukhasaidia na booking! Owenyanga okhubookina china?"
    },
    booking_date: {
        en: "Perfect. What date would you like to visit us?",
        sw: "Sawa kabisa. Unataka kuja lini?",
        ki: "Nĩ wega. Ũkũũka rĩ?",
        ka: "Nĩ sawa. Ũkũũka ĩndĩ?",
        lu: "Ber. Idwaro biro liny?",
        lh: "Sawa. Okhwitsa lina?"
    },
    booking_time: {
        en: "Great! And what time should we expect you?",
        sw: "Vizuri! Tutakuona saa ngapi?",
        ki: "Wega! Tũkũrĩhĩrĩria thaa cigana?",
        ka: "Nzeo! Tũkũtazamicĩa saa siana?",
        lu: "Maber! Wabed ni ipo seche adi?",
        lh: "Obulayi! Okhwitsa masaa kaki?"
    },
    booking_people: {
        en: "Excellent. How many guests will be in your party?",
        sw: "Safi. Utakuja na watu wangapi?",
        ki: "Wega mũno. Mũrĩ ageni aigana?",
        ka: "Nzeo mũno. Mũĩ ageni aiana?",
        lu: "Maber ahinya. Ubiro gi welo adi?",
        lh: "Sawa. Muli abenyayi banga?"
    },
    booking_contact: {
        en: "Lastly, may I have your name and phone number to finalize the request?",
        sw: "Mwisho, naomba jina na namba ya simu kukamilisha?",
        ki: "Rĩu, he rĩtwa na namba ya thĩmũ?",
        ka: "Ĩu, mbũa ĩsyĩtwa na namba ya simu?",
        lu: "Gikone, amia nying mari gi namba simu?",
        lh: "Malila, mbele liira na namba ya simu?"
    },
    booking_confirm: {
        en: "Fantastic! I've noted your request. Click below to finalize on WhatsApp!",
        sw: "Safi sana! Nimepata maombi yako. Bofya hapa chini kumalizia WhatsApp!",
        ki: "Nĩ wega! Nĩ ndaandika. Hata gũkũ thĩ kũrĩkĩrĩria WhatsApp!",
        ka: "Nzeo! Nĩ ndaandĩka. Bofya vaa ĩtheo kũmĩĩsya WhatsApp!",
        lu: "Ber! Aseiko kwayo mari. Dii mwalo kae mondo itiek gi WhatsApp!",
        lh: "Obulayi! Ndi na maombi kako. Bofya hano hasi okhumalila WhatsApp!"
    },
    fallback: {
        en: "I'm not sure about that, but I'd love to help! 😊\n\nYou can:\n• Ask about our menu, hours, or events\n• Type 'Book' to make a reservation\n• Or chat with us directly on WhatsApp.",
        sw: "Sijui sana kuhusu hilo, lakini ningependa kusaidia! 😊\n\nUnaweza:\n• Uliza kuhusu menu, masaa, au events\n• Andika 'Book' kufanya booking\n• Au ongea nasi WhatsApp.",
        ki: "Ndiui mũno ũhoro ũcio, no ningĩenda gũteithia! 😊\n\nŨngĩhota:\n• Ũria ũhoro wa menu, mathaa, kana events\n• Andĩka 'Book' gũthondeka booking\n• Kana arie natwĩ WhatsApp.",
        ka: "Ndĩsĩ mũno ũhoro ũsu, lakini ndĩkwenda kũteithia! 😊\n\nŨngĩhota:\n• Ũĩa ũhoro wa menu, masaa, kana events\n• Andĩka 'Book' kwĩka booking\n• Kana aĩe natwĩ WhatsApp.",
        lu: "Ok ang'eyo maber wachno, to daher konyi! 😊\n\nInyalo:\n• Penjo kuom menu, seche, kata events\n• Ndiko 'Book' mondo ibook\n• Kata wuoyo kodwa e WhatsApp.",
        lh: "Sindimanyile sana ebyo, naye nyenyanga okhukhasaidia! 😊\n\nOnyala:\n• Olalumiala kuhusu menu, masaa, ama events\n• Andika 'Book' okhukhola booking\n• Ama okhulomela nasi e WhatsApp."
    },
    hours: {
        en: "🕐 We're open:\n• Mon-Thu: 10AM - 10PM\n• Fri-Sat: 10AM - 2AM\n• Sun: 10AM - 10PM",
        sw: "🕐 Tunafungua:\n• Mon-Thu: 10AM - 10PM\n• Fri-Sat: 10AM - 2AM\n• Sun: 10AM - 10PM",
        ki: "🕐 Tũhingũraga:\n• Mon-Thu: 10AM - 10PM\n• Fri-Sat: 10AM - 2AM\n• Sun: 10AM - 10PM",
        ka: "🕐 Twĩhingũlaga:\n• Mon-Thu: 10AM - 10PM\n• Fri-Sat: 10AM - 2AM\n• Sun: 10AM - 10PM",
        lu: "🕐 Wanyalo:\n• Mon-Thu: 10AM - 10PM\n• Fri-Sat: 10AM - 2AM\n• Sun: 10AM - 10PM",
        lh: "🕐 Khufungula:\n• Mon-Thu: 10AM - 10PM\n• Fri-Sat: 10AM - 2AM\n• Sun: 10AM - 10PM"
    },
    location: {
        en: "📍 We are in Kamakis, Ruiru along the Eastern Bypass. Look for the green signage!",
        sw: "📍 Tuko Kamakis, Ruiru kando ya Eastern Bypass. Tafuta alama ya kijani!",
        ki: "📍 Tũrĩ Kamakis, Ruiru hakuhĩ na Eastern Bypass. Caria sign ya green!",
        ka: "📍 Twĩ Kamakis, Ruiru hakuhĩ na Eastern Bypass. Syia sign ya green!",
        lu: "📍 Wan Kamakis, Ruiru but Eastern Bypass. Rang' sign makwar!",
        lh: "📍 Khuli Kamakis, Ruiru but Eastern Bypass. Loola sign ya green!"
    },
    menu: {
        en: "🍖 We serve:\n• Signature Nyama Choma\n• Traditional Dishes\n• Cocktails & Beers\nCheck our Menu page!",
        sw: "🍖 Tunauza:\n• Nyama Choma\n• Vyakula vya kiasili\n• Cocktails & Bia\nAngalia Menu page!",
        ki: "🍖 Tũrĩ na:\n• Nyama Choma\n• Irio cia gĩthaka\n• Cocktails & Bia\nRora Menu page!",
        ka: "🍖 Twĩna:\n• Nyama Choma\n• Maakũla ma kĩthakani\n• Cocktails & Bia\nEnga Menu page!",
        lu: "🍖 Wan gi:\n• Nyama Choma\n• Chiemo mag Kenya\n• Cocktails & Bia\nNe Menu page!",
        lh: "🍖 Khuli ne:\n• Nyama Choma\n• Byakulya bya Kenya\n• Cocktails & Bia\nLola Menu page!"
    },
    events: {
        en: "🎵 Weekly Vibes:\n• Fri: Jazz Night 🎷\n• Sat: Live Band 🎸\n• Sun: Love & Chill 💕",
        sw: "🎵 Kila Wiki:\n• Ijumaa: Jazz Night 🎷\n• Jumamosi: Live Band 🎸\n• Jumapili: Love & Chill 💕",
        ki: "🎵 Kĩumĩa:\n• Thũrũ: Jazz Night 🎷\n• Kĩamemwe: Live Band 🎸\n• Kĩumĩa: Love & Chill 💕",
        ka: "🎵 Kĩumĩa:\n• Friday: Jazz Night 🎷\n• Saturday: Live Band 🎸\n• Sunday: Love & Chill 💕",
        lu: "🎵 Juma:\n• Tich Abich: Jazz Night 🎷\n• Ngeso: Live Band 🎸\n• Jumapil: Love & Chill 💕",
        lh: "🎵 Juma:\n• Ijumaa: Jazz Night 🎷\n• Jumamosi: Live Band 🎸\n• Jumapili: Love & Chill 💕"
    },
    quickReplies: {
        en: [
            { text: "📅 Book Now", query: "book" },
            { text: "🕐 Hours", query: "hours" },
            { text: "📍 Location", query: "location" },
            { text: "🍖 Menu", query: "menu" }
        ],
        sw: [
            { text: "📅 Book Sasa", query: "book" },
            { text: "🕐 Masaa", query: "hours" },
            { text: "📍 Mahali", query: "location" },
            { text: "🍖 Menu", query: "menu" }
        ],
        ki: [
            { text: "📅 Thondeka", query: "book" },
            { text: "🕐 Mathaa", query: "hours" },
            { text: "📍 Gũkũ", query: "location" },
            { text: "🍖 Irio", query: "menu" }
        ],
        ka: [
            { text: "📅 Thondeka", query: "book" },
            { text: "🕐 Masaa", query: "hours" },
            { text: "📍 Haha", query: "location" },
            { text: "🍖 Ilyaũ", query: "menu" }
        ],
        lu: [
            { text: "📅 Book Koro", query: "book" },
            { text: "🕐 Seche", query: "hours" },
            { text: "📍 Kama", query: "location" },
            { text: "🍖 Chiemo", query: "menu" }
        ],
        lh: [
            { text: "📅 Book Buno", query: "book" },
            { text: "🕐 Masaa", query: "hours" },
            { text: "📍 Mahali", query: "location" },
            { text: "🍖 Ebyakulya", query: "menu" }
        ]
    }
};

const KEYWORDS = {
    hours: ['hours', 'open', 'close', 'time', 'when', 'opening', 'closing', 'masaa', 'saa', 'mathaa', 'seche'],
    location: ['where', 'location', 'address', 'direction', 'find', 'map', 'place', 'kamakis', 'wapi', 'mahali', 'kũ', 'kanye', 'hena'],
    menu: ['menu', 'food', 'eat', 'choma', 'nyama', 'drink', 'price', 'cost', 'irio', 'chiemo', 'ebyakulya', 'maakũla'],
    events: ['event', 'music', 'jazz', 'band', 'live', 'friday', 'saturday', 'sunday', 'entertainment', 'sherehe'],
    booking: ['book', 'reserve', 'reservation', 'table', 'seat', 'booking', 'meza', 'thondeka']
};

class GigiAssistant {
    constructor() {
        this.isOpen = false;
        this.state = 'GREETING'; // GREETING -> FACILITY -> DATE -> TIME -> PEOPLE -> CONTACT -> CONFIRM
        this.currentLang = 'en';
        this.bookingData = {
            facility: null,
            date: null,
            time: null,
            people: null,
            contact: null
        };
        this.messages = [];
        this.init();
    }

    init() {
        if (document.getElementById('gigi-chat-widget')) return;
        this.renderChatWidget();
        // Initial Greeting
        setTimeout(() => this.addBotMessage(this.t('welcome')), 500);
    }

    t(key) {
        return TRANSLATIONS[key][this.currentLang] || TRANSLATIONS[key]['en'];
    }

    renderChatWidget() {
        const widget = document.createElement('div');
        widget.id = 'gigi-chat-widget';
        widget.innerHTML = `
            <div id="gigi-bubble" class="gigi-bubble">
                <div class="gigi-avatar">${GIGI_CONFIG.avatar}</div>
                <span class="gigi-status">Talk to Gigi</span>
            </div>
            <div id="gigi-window" class="gigi-window">
                <div class="gigi-header">
                    <div class="gigi-info">
                        <div class="avatar">${GIGI_CONFIG.avatar}</div>
                        <div>
                            <h4>${GIGI_CONFIG.name}</h4>
                            <small id="gigi-role">${GIGI_CONFIG.role}</small>
                        </div>
                    </div>
                    <div class="gigi-actions" style="display: flex; gap: 8px; align-items: center;">
                        <select id="gigi-lang-select" title="Language" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 4px; border-radius: 4px; cursor: pointer;">
                            ${Object.entries(LANGUAGES).map(([code, lang]) =>
            `<option value="${code}" ${code === this.currentLang ? 'selected' : ''} style="color: black;">${lang.flag}</option>`
        ).join('')}
                        </select>
                        <button id="close-gigi" title="Close" style="background: none; border: none; color: white; font-size: 1.5rem; cursor: pointer;">&times;</button>
                    </div>
                </div>
                <div id="gigi-messages" class="gigi-messages"></div>
                <div class="quick-replies" id="gigi-quick-replies" style="padding: 0 20px; display: flex; flex-wrap: wrap; gap: 8px;"></div>
                <div class="gigi-input-area">
                    <input type="text" id="gigi-input" placeholder="Type here..." autocomplete="off">
                    <button id="send-gigi"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        `;
        document.body.appendChild(widget);
        this.setupEventListeners();
        this.updateQuickReplies();
    }

    setupEventListeners() {
        document.getElementById('gigi-bubble').onclick = () => this.toggleWindow();
        document.getElementById('close-gigi').onclick = () => this.toggleWindow();
        const sendBtn = document.getElementById('send-gigi');
        const input = document.getElementById('gigi-input');
        const langSelect = document.getElementById('gigi-lang-select');

        sendBtn.onclick = () => this.handleUserInput();
        
        input.onkeypress = (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        };

        langSelect.onchange = (e) => {
            this.currentLang = e.target.value;
            this.updateQuickReplies();
            this.addBotMessage(this.t('welcome'));
        };
    }

    updateQuickReplies() {
        const container = document.getElementById('gigi-quick-replies');
        if (!container) return;
        container.innerHTML = '';
        const replies = TRANSLATIONS.quickReplies[this.currentLang] || TRANSLATIONS.quickReplies['en'];
        
        replies.forEach(qr => {
            const btn = document.createElement('button');
            btn.className = 'quick-reply-btn';
            btn.style.cssText = 'background: transparent; border: 1px solid var(--primary-green); color: var(--primary-green); padding: 5px 10px; border-radius: 15px; font-size: 0.8rem; cursor: pointer;';
            btn.textContent = qr.text;
            btn.onclick = () => {
                this.handleUserMessageExternal(qr.query);
            };
            container.appendChild(btn);
        });
    }

    toggleWindow() {
        const win = document.getElementById('gigi-window');
        win.classList.toggle('active');
        if (win.classList.contains('active')) {
            document.getElementById('gigi-input').focus();
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

    addBotMessage(text) {
        this.addMessage(text, 'bot');
    }

    addUserMessage(text) {
        this.addMessage(text, 'user');
    }

    addMessage(text, side) {
        const container = document.getElementById('gigi-messages');
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${side}`;
        msgDiv.innerHTML = text; // Allow HTML for line breaks
        container.appendChild(msgDiv);
        container.scrollTop = container.scrollHeight;
        this.messages.push({ text, side });
    }

    handleUserInput() {
        const input = document.getElementById('gigi-input');
        const text = input.value.trim();
        if (!text) return;

        this.addUserMessage(text);
        input.value = '';

        setTimeout(() => this.processResponse(text), 600);
    }
    
    handleUserMessageExternal(text) {
         this.addUserMessage(text);
         setTimeout(() => this.processResponse(text), 600);
    }

    processResponse(text) {
        const lower = text.toLowerCase();

        // 1. Check if we are in a booking flow
        if (this.state !== 'GREETING') {
            this.handleBookingFlow(text);
            return;
        }

        // 2. Check for keywords (FAQ)
        let matched = false;
        
        // Ensure "book" keyword triggers booking flow
        if (this.matchesKeyword(lower, 'booking')) {
            this.startBooking();
            return;
        }

        // Check other keywords
        for (const [key, words] of Object.entries(KEYWORDS)) {
            if (words.some(w => lower.includes(w))) {
                if (TRANSLATIONS[key]) {
                    this.addBotMessage(this.t(key).replace(/\n/g, '<br>'));
                    matched = true;
                    break;
                }
            }
        }

        if (!matched) {
            this.addBotMessage(this.t('fallback').replace(/\n/g, '<br>'));
        }
    }

    matchesKeyword(text, category) {
        return KEYWORDS[category].some(w => text.includes(w));
    }

    startBooking(intent = null) {
        this.state = 'FACILITY';
        if (intent && intent !== 'booking') {
            // If specific facility requested (e.g. from a button)
            const facility = GIGI_CONFIG.facilities.find(f => f.id === intent);
            this.bookingData.facility = facility ? facility.name : intent;
            this.state = 'DATE';
            this.addBotMessage(`${this.t('booking_date')}`);
        } else {
            // Ask for facility
            const facilities = GIGI_CONFIG.facilities.map(f => `• ${f.name}`).join('<br>');
            this.addBotMessage(`${this.t('booking_intro')}<br><br>${facilities}`);
        }
        
        // Clear quick replies during booking to avoid distraction
        document.getElementById('gigi-quick-replies').innerHTML = '';
    }

    handleBookingFlow(text) {
        switch (this.state) {
            case 'FACILITY':
                this.bookingData.facility = text;
                this.state = 'DATE';
                this.addBotMessage(this.t('booking_date'));
                break;
            case 'DATE':
                this.bookingData.date = text;
                this.state = 'TIME';
                this.addBotMessage(this.t('booking_time'));
                break;
            case 'TIME':
                this.bookingData.time = text;
                this.state = 'PEOPLE';
                this.addBotMessage(this.t('booking_people'));
                break;
            case 'PEOPLE':
                this.bookingData.people = text;
                this.state = 'CONTACT';
                this.addBotMessage(this.t('booking_contact'));
                break;
            case 'CONTACT':
                this.bookingData.contact = text;
                this.state = 'CONFIRM';
                this.finalizeBooking();
                break;
        }
    }

    finalizeBooking() {
        const summary = `
            <b>Booking Summary:</b><br>
            📍 ${this.bookingData.facility}<br>
            📅 ${this.bookingData.date}<br>
            ⏰ ${this.bookingData.time}<br>
            👥 ${this.bookingData.people}<br><br>
            ${this.t('booking_confirm')}
        `;
        this.addBotMessage(summary);

        const container = document.getElementById('gigi-messages');
        const btn = document.createElement('a');
        btn.className = 'whatsapp-handoff';
        
        const msg = `Hi GreenSpot, I'd like to book:\nSpace: ${this.bookingData.facility}\nDate: ${this.bookingData.date}\nTime: ${this.bookingData.time}\nGuests: ${this.bookingData.people}\nName/Contact: ${this.bookingData.contact}\n(Ref: Gigi Assistant ${this.currentLang})`;
        
        btn.href = `https://wa.me/${GIGI_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
        btn.target = "_blank";
        btn.innerHTML = `<i class="fab fa-whatsapp"></i> WhatsApp`;
        
        container.appendChild(btn);
        container.scrollTop = container.scrollHeight;

        // Reset state after a while
        this.state = 'GREETING';
        setTimeout(() => this.updateQuickReplies(), 3000);
    }
}

// Global accessor
function openGigi(intent) {
    if (!window.gigiAssistant) {
        window.gigiAssistant = new GigiAssistant();
    }
    
    const assistant = window.gigiAssistant;
    
    // Ensure window is open
    if (!document.getElementById('gigi-window').classList.contains('active')) {
        assistant.toggleWindow();
    }

    if (intent) {
        assistant.startBooking(intent);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Check if instance already exists
    if (!window.gigiAssistant) {
         window.gigiAssistant = new GigiAssistant();
    }
});
