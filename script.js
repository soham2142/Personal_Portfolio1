// =======================
// BUTTON REFERENCES
// =======================
const projectsBtn = document.getElementById("projects-btn");
const experienceBtn = document.getElementById("experience-btn");
const educationBtn = document.getElementById("education-btn");

const projectsModal = document.getElementById("projects-modal");
const experienceModal = document.getElementById("experience-modal");
const educationModal = document.getElementById("education-modal");

const closeBtns = document.querySelectorAll(".close");

// =======================
// MODAL FUNCTIONS
// =======================
function openModal(modal) {
    if (!modal) return;

    modal.style.display = "flex";
    document.body.classList.add("modal-open");
    document.body.style.overflow = "hidden";
}

function closeModal(modal) {
    if (!modal) return;

    modal.style.display = "none";
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
}

// =======================
// OPEN MODALS
// =======================
projectsBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(projectsModal);
});

experienceBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(experienceModal);
});

educationBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    openModal(educationModal);
});

// =======================
// CLOSE MODALS (X button)
// =======================
closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        closeModal(btn.closest(".modal"));
    });
});

// =======================
// CLOSE ON OVERLAY CLICK
// =======================
window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        closeModal(e.target);
    }
});

// =======================
// CLOSE ON ESC KEY (PRO UX)
// =======================
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal").forEach((modal) => {
            if (modal.style.display === "flex") {
                closeModal(modal);
            }
        });
    }
});
