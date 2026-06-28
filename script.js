// ===============================
// FECHA PRINCIPAL
// ===============================

const startDate = new Date("2026-03-30T00:00:00");

// ===============================
// MENSAJES DIARIOS
// ===============================
// Cuando se acaban los mensajes, vuelve al primero automáticamente.

const dailyMessages = [
  "Porque contigo hasta los días normales se sienten especiales.",
  "Porque desde que llegaste, hay fechas que empezaron a significar más.",
  "Porque me gusta la tranquilidad que siento cuando estoy contigo.",
  "Porque verte sonreír puede mejorarme el día completo.",
  "Porque estos tres meses contigo han sido un recuerdo que recién empieza.",
  "Porque hay miradas tuyas que se me quedan guardadas sin pedir permiso.",
  "Porque no necesito grandes planes para sentir que contigo estoy bien.",
  "Porque eres mi parte favorita de muchos días.",
  "Porque contigo aprendí que lo simple también puede sentirse enorme.",
  "Porque si pudiera guardar un momento bonito del día, muchas veces serías tú."
];

// ===============================
// CONTADOR
// ===============================

function updateCounter() {
  const now = new Date();
  const difference = now - startDate;

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  document.getElementById("daysTogether").textContent = days;
  document.getElementById("counterDays").textContent = days;
  document.getElementById("counterHours").textContent = hours;
  document.getElementById("counterMinutes").textContent = minutes;
  document.getElementById("counterSeconds").textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

// ===============================
// DAILY MESSAGE + FECHA
// ===============================

function showDailyMessage() {
  const now = new Date();

  const formattedDate = new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(now);

  document.getElementById("todayDate").textContent = formattedDate;

  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const messageIndex = dayOfYear % dailyMessages.length;
  const message = dailyMessages[messageIndex];

  document.getElementById("dailyMessage").textContent = `"${message}"`;
}

showDailyMessage();

// ===============================
// CARRUSEL
// ===============================

let currentSlide = 0;

const slides = document.querySelectorAll(".memory-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index < 0) {
    currentSlide = slides.length - 1;
  } else if (index >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function goToSlide(index) {
  showSlide(index);
}

// ===============================
// DESBLOQUEO DE RECUERDOS
// ===============================

function unlockMemory(event, memoryNumber) {
  event.stopPropagation();

  const memory = document.getElementById(`memoryImage${memoryNumber}`);

  if (!memory) return;

  memory.classList.remove("locked");
  memory.classList.add("unlocked");
}

function openImageIfUnlocked(memoryNumber, src, caption) {
  const memory = document.getElementById(`memoryImage${memoryNumber}`);

  if (!memory) return;

  if (memory.classList.contains("locked")) {
    return;
  }

  openImage(src, caption);
}

// ===============================
// CARTA
// ===============================

function openLetter() {
  document.getElementById("letterModal").classList.add("active");
}

function closeLetter() {
  document.getElementById("letterModal").classList.remove("active");
}

// ===============================
// IMÁGENES
// ===============================

function openImage(src, caption) {
  document.getElementById("modalImage").src = src;
  document.getElementById("modalCaption").textContent = caption;
  document.getElementById("imageModal").classList.add("active");
}

function closeImage() {
  document.getElementById("imageModal").classList.remove("active");
}

// ===============================
// CERRAR MODALES CON ESC
// ===============================

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeLetter();
    closeImage();
  }
});