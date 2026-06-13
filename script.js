const manuals = [
    {
        id: "daily-use",
        code: "Instrukcja",
        title: "Codzienne pranie",
        cause: "Jak prawidłowo uruchomić cykl prania.",
        steps: [
            { text: "Posortuj pranie, rozdzielając je według kolorów i rodzaju materiału. Sprawdź, czy kieszenie są puste.", img: "img/laundry_load.png" },
            { text: "Wyciągnij szufladę i dodaj odpowiednią ilość detergentu oraz płynu do płukania, po czym zamknij ją.", img: "img/detergent_drawer.png" },
            { text: "Wybierz program na głównym panelu obracając pokrętło. Dostosuj temperaturę i wirowanie na ekranie dotykowym, następnie wciśnij Start.", img: "img/control_panel.png" }
        ]
    },
    {
        id: "clean-filter",
        code: "Konserwacja",
        title: "Czyszczenie filtra pompy",
        cause: "Regularne czyszczenie zapobiega awariom odpływu.",
        steps: [
            { text: "Wyłącz pralkę i odłącz ją od prądu. Otwórz dolną klapkę serwisową.", img: "img/pump_filter.png" },
            { text: "Podstaw płaski pojemnik pod rurkę spustową, aby spuścić resztkę wody." },
            { text: "Odkręć filtr w kierunku przeciwnym do ruchu wskazówek zegara i wyczyść go pod bieżącą wodą.", img: "img/pump_filter.png" },
            { text: "Mocno wkręć filtr z powrotem i zamknij klapkę." }
        ]
    },
    {
        id: "clean-drawer",
        code: "Konserwacja",
        title: "Czyszczenie szuflady na detergent",
        cause: "Zapobiega gromadzeniu się resztek proszku i brzydkich zapachów.",
        steps: [
            { text: "Wyciągnij szufladę do momentu oporu.", img: "img/detergent_drawer.png" },
            { text: "Wciśnij zwalniacz blokujący (zapadkę) i wyjmij szufladę całkowicie." },
            { text: "Umyj szufladę dokładnie pod ciepłą, bieżącą wodą, aż znikną resztki proszku." },
            { text: "Wsuń szufladę z powrotem na miejsce.", img: "img/detergent_drawer.png" }
        ]
    }
];

const errorCodes = [
    {
        id: "clrfltr",
        code: "CLrFLtr",
        title: "Błąd odpływu wody",
        cause: "W ciągu 6 minut woda nie została całkowicie spuszczona z pralki.",
        steps: [
            "Wyłącz pralkę i odłącz od zasilania.",
            "Podstaw płaski pojemnik pod klapkę serwisową na dole pralki, aby zebrać wodę.",
            "Odkręć i wyczyść filtr pompy z zanieczyszczeń.",
            "Sprawdź instalację węża odprowadzającego wodę pod kątem zagięć lub zatorów.",
            "Dokładnie zamocuj filtr i zamknij klapkę."
        ]
    },
    {
        id: "e2",
        code: "E2",
        title: "Błąd blokady drzwi",
        cause: "Drzwi pralki nie są prawidłowo zamknięte.",
        steps: [
            "Sprawdź, czy pranie nie blokuje drzwiczek.",
            "Zamknij mocno drzwi, aż usłyszysz wyraźne kliknięcie.",
            "Upewnij się, że zamek drzwi nie jest uszkodzony lub zanieczyszczony."
        ]
    },
    {
        id: "e4",
        code: "E4",
        title: "Błąd pobierania wody",
        cause: "Po 12 minutach nie osiągnięto odpowiedniego poziomu wody, lub wąż samoczynnie odprowadza wodę (efekt syfonu).",
        steps: [
            "Upewnij się, że kran zasilający w wodę jest w pełni odkręcony.",
            "Sprawdź, czy ciśnienie wody w kranie jest w normie (powyżej 0,03 MPa).",
            "Odkręć wąż dopływowy od strony kranu i sprawdź/wyczyść filtr z sitkiem.",
            "Sprawdź prawidłowość instalacji węża odpływowego (nie może być zbyt nisko, a końcówka nie może być zanurzona w wodzie)."
        ]
    },
    {
        id: "e8",
        code: "E8",
        title: "Błąd poziomu ochrony przed wodą",
        cause: "Zadziałał system zabezpieczenia przed zalaniem (wykryto wyciek lub nadmiar wody).",
        steps: [
            "Natychmiast wyłącz pralkę i odłącz ją od gniazdka.",
            "Zakręć kran doprowadzający wodę.",
            "Ten błąd wymaga interwencji specjalisty. Skontaktuj się z autoryzowanym serwisem Haier."
        ]
    },
    {
        id: "f3",
        code: "F3",
        title: "Błąd czujnika temperatury",
        cause: "Awaria czujnika temperatury wody.",
        steps: [
            "Wyłącz i włącz pralkę ponownie, by sprawdzić czy błąd jest chwilowy.",
            "Jeśli błąd powraca, uszkodzony jest czujnik NTC. Skontaktuj się z serwisem posprzedażowym."
        ]
    },
    {
        id: "f4",
        code: "F4",
        title: "Błąd podgrzewania",
        cause: "Grzałka lub obwód podgrzewania uległ awarii.",
        steps: [
            "Woda w bębnie nie jest podgrzewana. Problem wymaga diagnozy elektronicznej.",
            "Skontaktuj się z autoryzowanym serwisem Haier w celu wymiany grzałki."
        ]
    },
    {
        id: "f7",
        code: "F7",
        title: "Błąd silnika",
        cause: "Wykryto problem z silnikiem głównym pralki (np. zablokowany bęben, błąd inwertera).",
        steps: [
            "Odłącz pralkę od zasilania i poczekaj kilka minut.",
            "Spróbuj ręcznie obrócić bęben, aby sprawdzić, czy nie jest zablokowany mechanicznie.",
            "Jeśli problem się utrzymuje, skontaktuj się z serwisem posprzedażowym."
        ]
    },
    {
        id: "fa",
        code: "FA",
        title: "Błąd czujnika poziomu wody",
        cause: "Hydrostat (czujnik poziomu wody) przesyła nieprawidłowe dane do płyty głównej.",
        steps: [
            "Wyłącz pralkę, odłącz od zasilania na kilkanaście minut.",
            "Sprawdź wizualnie wtyczkę pralki, włącz pralkę ponownie.",
            "Jeśli błąd nie ustępuje, skontaktuj się z serwisem posprzedażowym."
        ]
    },
    {
        id: "fc",
        code: "FC0 / FC1 / FC2",
        title: "Błąd komunikacji",
        cause: "Niezwyczajny błąd komunikacji między modułem wyświetlacza a płytą główną.",
        steps: [
            "Odłącz pralkę od zasilania na minimum 15 minut (reset elektroniki).",
            "Podłącz zasilanie i uruchom dowolny program.",
            "Jeśli błąd powraca, skontaktuj się z serwisem posprzedażowym."
        ]
    },
    {
        id: "unb",
        code: "Unb",
        title: "Błąd nierównomiernego załadowania",
        cause: "Pranie jest nierównomiernie rozłożone w bębnie i wibracje podczas wirowania są zbyt duże.",
        steps: [
            "Pralka zatrzyma cykl. Otwórz drzwi (gdy zniknie symbol blokady).",
            "Ręcznie rozłóż i wyrównaj pranie w bębnie pralki.",
            "Jeśli masz w środku jedną dużą rzecz (np. koc, duży ręcznik), dodaj 2-3 mniejsze rzeczy dla balansu, lub wyciągnij nadmiar.",
            "Zmniejsz ładunek, jeśli bęben jest przeładowany.",
            "Uruchom ponownie program wirowania (Spin)."
        ]
    }
];

const commonIssues = [
    {
        id: "no-start",
        code: "Problem",
        title: "Pralka nie działa",
        cause: "Pralka nie reaguje, wyświetlacz jest ciemny lub program nie startuje.",
        steps: [
            "Sprawdź, czy program został poprawnie uruchomiony przyciskiem Start/Pause.",
            "Sprawdź, czy drzwi są dobrze zamknięte (usłysz kliknięcie).",
            "Upewnij się, że pralka została włączona (przycisk zasilania).",
            "Sprawdź gniazdko zasilania oraz bezpieczniki w domu.",
            "Upewnij się, że funkcja Blokady Dziecięcej (Kłódka) jest wyłączona."
        ]
    },
    {
        id: "no-water",
        code: "Problem",
        title: "Pralka nie napełnia się wodą",
        cause: "Woda nie leci do bębna po uruchomieniu cyklu.",
        steps: [
            "Sprawdź, czy kran doprowadzający wodę jest całkowicie odkręcony.",
            "Sprawdź, czy wąż doprowadzający wodę nie jest zagięty lub przygnieciony.",
            "Odkręć wąż i oczyść sitko/filtr znajdujący się w jego wnętrzu.",
            "Sprawdź ciśnienie wody w instalacji domowej.",
            "Upewnij się, że drzwi są dobrze zamknięte."
        ]
    },
    {
        id: "drain-fill",
        code: "Problem",
        title: "Pralka spuszcza wodę podczas napełniania",
        cause: "Powstaje efekt syfonu - woda od razu wypływa z bębna.",
        steps: [
            "Sprawdź instalację węża odprowadzającego wodę. Wąż musi być zamocowany na wysokości między 80 a 100 cm.",
            "Upewnij się, że końcówka węża odpływowego nie jest zanurzona w wodzie w syfonie/odpływie."
        ]
    },
    {
        id: "no-drain",
        code: "Problem",
        title: "Awaria odpływu wody",
        cause: "Woda pozostaje w bębnie po zakończeniu prania.",
        steps: [
            "Upewnij się, że wąż odprowadzający wodę nie jest zablokowany ani zagięty.",
            "Odłącz pralkę, podstaw płaskie naczynie i wyczyść filtr pompy na dole urządzenia.",
            "Sprawdź, czy końcówka węża nie znajduje się wyżej niż 100 cm nad poziomem podłogi."
        ]
    },
    {
        id: "vibrations",
        code: "Problem",
        title: "Silne wibracje podczas wirowania",
        cause: "Pralka podskakuje lub bardzo głośno pracuje przy wirowaniu.",
        steps: [
            "Upewnij się, że WSZYSTKIE 4 śruby transportowe z tyłu obudowy zostały usunięte!",
            "Sprawdź, czy urządzenie stoi stabilnie. Wypoziomuj je, regulując gwintowane nóżki.",
            "Skontroluj, czy pranie jest równomiernie ułożone w bębnie pralki i nie ma jednej bardzo ciężkiej bryły."
        ]
    },
    {
        id: "foam",
        code: "Problem",
        title: "Nadmiar piany wypływa z szuflady",
        cause: "Zastosowano nieodpowiedni środek piorący lub użyto go w zbyt dużej ilości.",
        steps: [
            "Zawsze używaj detergentu przeznaczonego specjalnie do pralek automatycznych.",
            "Zmniejsz dozowanie detergentu przy następnym praniu (szczególnie w miękkiej wodzie).",
            "W przypadku silnego zapienienia, uruchom program płukania, aby usunąć pianę z systemu."
        ]
    },
    {
        id: "residue",
        code: "Problem",
        title: "Pozostałości proszku na praniu",
        cause: "Nierozpuszczone cząsteczki proszku pozostały na ubraniach.",
        steps: [
            "Uruchom program Dodatkowego Płukania (Extra Rinse).",
            "Po wysuszeniu spróbuj wyszczotkować osad szczotką do ubrań.",
            "Przy kolejnych praniach rozważ przejście na płyn do prania, lub używaj mniejszej ilości proszku."
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('listContainer');
    const searchInput = document.getElementById('searchInput');
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    const welcomeState = document.getElementById('welcomeState');
    const solutionState = document.getElementById('solutionState');
    
    let currentTab = 'errors'; // 'errors' or 'issues'
    let currentList = errorCodes;
    let selectedIssue = null;
    let completedSteps = 0;

    // Render list based on current tab and search query
    function renderList(query = '') {
        listContainer.innerHTML = '';
        
        let sourceData = errorCodes;
        if (currentTab === 'issues') sourceData = commonIssues;
        if (currentTab === 'manuals') sourceData = manuals;
        
        const filteredData = sourceData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) || 
            item.code.toLowerCase().includes(query.toLowerCase()) ||
            item.cause.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredData.length === 0) {
            listContainer.innerHTML = '<div style="text-align: center; color: var(--text-secondary); padding: 2rem;">Brak wyników.</div>';
            return;
        }

        filteredData.forEach(item => {
            const el = document.createElement('div');
            el.className = `list-item ${selectedIssue && selectedIssue.id === item.id ? 'selected' : ''}`;
            el.innerHTML = `
                <span class="item-code">${item.code}</span>
                <h4 class="item-title">${item.title}</h4>
            `;
            el.addEventListener('click', () => selectIssue(item));
            listContainer.appendChild(el);
        });
    }

    // Select an issue and show diagnostic steps
    function selectIssue(item) {
        selectedIssue = item;
        renderList(searchInput.value); // Re-render to update selected state
        
        // Update Content Area
        welcomeState.classList.add('hidden');
        solutionState.classList.remove('hidden');
        document.getElementById('completionMessage').classList.add('hidden');
        
        document.getElementById('issueBadge').textContent = item.code;
        document.getElementById('issueTitle').textContent = item.title;
        document.getElementById('issueCause').textContent = item.cause;
        
        completedSteps = 0;
        renderSteps();

        // Scroll to content on mobile devices
        if (window.innerWidth <= 900) {
            const contentArea = document.getElementById('contentArea');
            contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Render step-by-step diagnostic
    function renderSteps() {
        const stepsList = document.getElementById('stepsList');
        stepsList.innerHTML = '';
        updateProgressBar();

        selectedIssue.steps.forEach((step, index) => {
            const isCompleted = index < completedSteps;
            const isActive = index === completedSteps;
            
            const stepText = typeof step === 'string' ? step : step.text;
            const stepImg = (typeof step === 'object' && step.img) ? `<img src="${step.img}" class="step-image" alt="Ilustracja kroku" loading="lazy">` : '';

            const li = document.createElement('li');
            li.className = `step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            
            li.innerHTML = `
                <div class="step-number">
                    ${isCompleted ? '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>' : index + 1}
                </div>
                <div class="step-content">
                    <p class="step-text">${stepText}</p>
                    ${stepImg}
                    ${isActive ? '<button class="step-action-btn">Zrobione, dalej</button>' : ''}
                </div>
            `;
            
            if (isActive) {
                const btn = li.querySelector('.step-action-btn');
                btn.addEventListener('click', () => {
                    completedSteps++;
                    renderSteps();
                });
            }
            
            stepsList.appendChild(li);
        });

        // Check completion
        if (completedSteps === selectedIssue.steps.length) {
            document.getElementById('completionMessage').classList.remove('hidden');
        }
    }

    // Update progress bar
    function updateProgressBar() {
        const progressBar = document.getElementById('progressBar');
        const percentage = selectedIssue ? (completedSteps / selectedIssue.steps.length) * 100 : 0;
        progressBar.style.width = `${percentage}%`;
    }

    // Event Listeners
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentTab = e.target.dataset.target;
            renderList(searchInput.value);
        });
    });

    searchInput.addEventListener('input', (e) => {
        renderList(e.target.value);
    });

    // Initialize
    renderList();
});
