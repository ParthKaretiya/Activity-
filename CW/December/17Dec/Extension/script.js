// --- State ---
let habits = [];
let activeHabitId = null;
let currentDate = new Date();
let selectedDateKey = null;
let reminderTimeout; 

// --- DOM Elements ---
const habitListEl = document.getElementById('habitList');
const monthDisplay = document.getElementById('monthDisplay');
const calendarGrid = document.getElementById('calendarGrid');
const habitTitle = document.getElementById('habitTitle');
const streakCount = document.getElementById('streakCount');

// Badge Elements
const badge3 = document.getElementById('badge3');
const badge7 = document.getElementById('badge7');
const badge30 = document.getElementById('badge30');

// Modal Elements
const noteModal = document.getElementById('noteModal');
const modalDateTitle = document.getElementById('modalDateTitle');
const modalCompleted = document.getElementById('modalCompleted');
const modalNote = document.getElementById('modalNote');

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    if (habits.length === 0) createHabit("Drink Water", "#3498db");
    else activeHabitId = habits[0].id;
    
    renderApp();
    setupListeners();
});

// --- HELPER: Consistent Date Formatting ---
// This ensures "2025-12-05" and "2025-12-5" never conflict.
function getDateKey(year, month, day) {
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// --- Data Management ---
function loadData() {
    const data = localStorage.getItem('multiHabitBadgesData');
    if (data) habits = JSON.parse(data);
}

function saveData() {
    localStorage.setItem('multiHabitBadgesData', JSON.stringify(habits));
}

function createHabit(name, color) {
    const newHabit = {
        id: Date.now(),
        name: name,
        color: color || getRandomColor(),
        history: {} 
    };
    habits.push(newHabit);
    activeHabitId = newHabit.id;
    saveData();
    renderApp();
}

function deleteActiveHabit() {
    if (!confirm("Delete this habit?")) return;
    habits = habits.filter(h => h.id !== activeHabitId);
    activeHabitId = habits.length > 0 ? habits[0].id : null;
    saveData();
    renderApp();
}

function getRandomColor() {
    return ['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f', '#1abc9c'][Math.floor(Math.random() * 6)];
}

// --- Render Logic ---
function renderApp() {
    renderSidebar();
    renderCalendar();
    updateStreak();
}

function renderSidebar() {
    habitListEl.innerHTML = '';
    habits.forEach(habit => {
        const li = document.createElement('li');
        li.className = `habit-item ${habit.id === activeHabitId ? 'active' : ''}`;
        li.textContent = habit.name;
        li.style.borderLeftColor = habit.color;
        li.onclick = () => { activeHabitId = habit.id; renderApp(); };
        habitListEl.appendChild(li);
    });
}

function renderCalendar() {
    if (!activeHabitId) { calendarGrid.innerHTML = ''; return; }
    const activeHabit = habits.find(h => h.id === activeHabitId);
    habitTitle.textContent = activeHabit.name;
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-indexed (0 = Jan)
    monthDisplay.textContent = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    
    calendarGrid.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Empty days
    for (let i = 0; i < firstDay; i++) {
        calendarGrid.appendChild(Object.assign(document.createElement('div'), { className: 'day empty' }));
    }

    // Days with Data
    for (let i = 1; i <= daysInMonth; i++) {
        const div = document.createElement('div');
        div.className = 'day';
        div.textContent = i;
        
        // Use Helper to generate Key (Month + 1 for standard 1-12 format)
        const dateStr = getDateKey(year, month + 1, i);
        const record = activeHabit.history[dateStr];
        
        if (record && record.completed) {
            div.classList.add('completed');
            div.style.backgroundColor = activeHabit.color;
        }
        if (record && record.note && record.note.trim() !== "") {
            div.classList.add('has-note');
            div.title = record.note;
        }
        div.onclick = () => openModal(dateStr);
        calendarGrid.appendChild(div);
    }
}

// --- Streak & Badges ---
function updateStreak() {
    if (!activeHabitId) return;
    const activeHabit = habits.find(h => h.id === activeHabitId);
    let streak = 0;
    
    // Start from Today
    const today = new Date();
    today.setHours(0,0,0,0);

    for (let i = 0; i < 365; i++) {
        const d = new Date(today);
        d.setDate(d.getDate() - i); // Go back 'i' days
        
        // Use SAME Helper as Calendar
        const key = getDateKey(d.getFullYear(), d.getMonth() + 1, d.getDate());
        
        // Check History
        if (activeHabit.history[key] && activeHabit.history[key].completed) {
            streak++;
        } else if (i === 0) {
            // If today (0) is missing, just ignore it (Grace period).
            // Do NOT break the streak yet.
            continue;
        } else {
            // Gap found! Stop counting.
            break;
        }
    }
    
    streakCount.textContent = streak;

    // Badge Logic
    if (streak >= 3) badge3.classList.add('unlocked'); else badge3.classList.remove('unlocked');
    if (streak >= 7) badge7.classList.add('unlocked'); else badge7.classList.remove('unlocked');
    if (streak >= 30) badge30.classList.add('unlocked'); else badge30.classList.remove('unlocked');
}

// --- Modal Logic ---
function openModal(dateStr) {
    selectedDateKey = dateStr;
    const activeHabit = habits.find(h => h.id === activeHabitId);
    const record = activeHabit.history[dateStr] || {};
    modalDateTitle.textContent = dateStr;
    modalCompleted.checked = record.completed || false;
    modalNote.value = record.note || "";
    noteModal.classList.remove('hidden');
}

// Function to save without closing (Instant Update)
function autoSave() {
    const activeHabit = habits.find(h => h.id === activeHabitId);
    const isCompleted = modalCompleted.checked;
    const noteText = modalNote.value;

    if (!isCompleted && (!noteText || noteText.trim() === "")) {
        delete activeHabit.history[selectedDateKey];
    } else {
        activeHabit.history[selectedDateKey] = { completed: isCompleted, note: noteText };
    }
    saveData();
    renderApp();
}

function saveAndClose() {
    autoSave();
    noteModal.classList.add('hidden');
}

// --- Export / Import ---
function exportData() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(habits));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "habit_tracker_backup.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedHabits = JSON.parse(e.target.result);
            if (Array.isArray(importedHabits)) {
                habits = importedHabits;
                saveData();
                activeHabitId = habits.length > 0 ? habits[0].id : null;
                renderApp();
                alert("Habits imported successfully!");
            } else {
                alert("Invalid JSON file format.");
            }
        } catch (error) {
            alert("Error reading file: " + error);
        }
    };
    reader.readAsText(file);
}

// --- Reminder ---
function toggleReminder(e) {
    const banner = document.getElementById('reminderBanner');
    if (e.target.checked) {
        reminderTimeout = setTimeout(() => {
            banner.classList.remove('hidden');
        }, 5000); 
    } else {
        clearTimeout(reminderTimeout);
        banner.classList.add('hidden');
    }
}

// --- Listeners ---
function setupListeners() {
    document.getElementById('addHabitBtn').onclick = () => { const name = prompt("Habit Name:"); if (name) createHabit(name); };
    document.getElementById('deleteHabitBtn').onclick = deleteActiveHabit;
    
    // Navigation
    document.getElementById('prevBtn').onclick = () => { currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(); };
    document.getElementById('nextBtn').onclick = () => { currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(); };
    
    // Modal
    document.getElementById('closeModal').onclick = () => noteModal.classList.add('hidden');
    
    // INSTANT SAVE TRIGGERS
    document.getElementById('modalCompleted').onchange = autoSave; 
    document.getElementById('modalNote').onchange = autoSave; 
    
    // Save & Close Button
    document.getElementById('saveNoteBtn').onclick = saveAndClose;
    
    // Outside Click
    noteModal.onclick = (e) => { if(e.target === noteModal) noteModal.classList.add('hidden'); };

    // Extras
    document.getElementById('exportBtn').onclick = exportData;
    document.getElementById('importFile').onchange = importData;
    document.getElementById('reminderCheck').onchange = toggleReminder;
    document.getElementById('closeBanner').onclick = () => { document.getElementById('reminderBanner').classList.add('hidden'); };
}