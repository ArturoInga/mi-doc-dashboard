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
  "Porque si pudiera guardar un momento bonito del día, muchas veces serías tú.",
  "Porque tu sonrisa tiene una forma bonita de quedarse conmigo.",
  "Porque pensar en ti me hace sentir cerca aunque estés lejos.",
  "Porque contigo aprendí que amar también es cuidar los detalles.",
  "Porque me haces sentir afortunado sin tener que decir mucho.",
  "Porque hay canciones que ahora me recuerdan a ti.",
  "Porque tu abrazo se siente como un lugar al que siempre quiero volver.",
  "Porque cuando estoy contigo, el mundo parece ir más despacio.",
  "Porque me encanta la forma en que apareces en mis pensamientos.",
  "Porque contigo descubrí que el amor también puede ser paz.",
  "Porque me haces querer ser mejor sin dejar de ser yo.",
  "Porque cada momento contigo se vuelve un recuerdo bonito.",
  "Porque tus ojos tienen algo que me calma y me enamora.",
  "Porque extraño tu presencia incluso después de haberte visto.",
  "Porque me gusta cómo haces especial cualquier instante.",
  "Porque contigo todo se siente más sincero.",
  "Porque me encanta coincidir contigo en esta vida.",
  "Porque hay días que se arreglan con solo saber de ti.",
  "Porque tu manera de ser hace que te quiera más.",
  "Porque me haces sonreír incluso cuando no estás aquí.",
  "Porque contigo hasta el silencio se siente bonito.",
  "Porque tu amor me enseña a mirar la vida con más ternura.",
  "Porque me gusta imaginar todo lo que aún nos falta vivir.",
  "Porque tienes una luz que hace más bonitos mis días.",
  "Porque estar contigo me hace sentir en casa.",
  "Porque cada día encuentro una razón nueva para quererte.",
  "Porque te pienso de una forma que no se puede explicar fácil.",
  "Porque contigo aprendí que el amor se construye todos los días.",
  "Porque eres ese pensamiento bonito que aparece sin avisar.",
  "Porque tu risa es de esas cosas que quisiera escuchar siempre.",
  "Porque me haces sentir que amar vale la pena.",
  "Porque cuando te veo, todo dentro de mí sonríe.",
  "Porque contigo los pequeños momentos se vuelven enormes.",
  "Porque me gusta la paz que me das con solo estar.",
  "Porque eres una de las casualidades más bonitas de mi vida.",
  "Porque tu existencia hace que mis días tengan otro color.",
  "Porque contigo entendí que alguien puede convertirse en refugio.",
  "Porque me encanta la forma en que me haces sentir querido.",
  "Porque te extraño en los días en que no puedo abrazarte.",
  "Porque contigo no necesito aparentar nada.",
  "Porque cada mensaje tuyo puede cambiarme el ánimo.",
  "Porque en ti encontré ternura, calma y alegría.",
  "Porque me gusta cómo tu nombre suena en mi corazón.",
  "Porque contigo aprendí que el amor también se siente en los detalles.",
  "Porque tu presencia hace más livianos mis días.",
  "Porque eres mi pensamiento favorito al despertar.",
  "Porque eres mi sonrisa inesperada durante el día.",
  "Porque me encanta saber que existes en mi vida.",
  "Porque contigo he vivido cosas que nunca voy a olvidar.",
  "Porque me gusta cuidarte incluso en las cosas pequeñas.",
  "Porque tu forma de mirarme me hace sentir especial.",
  "Porque contigo cada día tiene algo de poesía.",
  "Porque eres ese lugar bonito al que siempre quiero volver.",
  "Porque me encanta que seas tú y no nadie más.",
  "Porque contigo aprendí a querer con más paciencia.",
  "Porque tu cariño me hace sentir muy afortunado.",
  "Porque cuando estoy lejos de ti, mi corazón te busca.",
  "Porque me gusta la historia que estamos escribiendo.",
  "Porque cada abrazo tuyo se queda un ratito más en mi alma.",
  "Porque contigo mi corazón aprendió un idioma nuevo.",
  "Porque hay momentos contigo que parecen hechos para recordarse.",
  "Porque tu amor llegó a mi vida como una luz tranquila.",
  "Porque me haces feliz de una manera muy tuya.",
  "Porque me gusta cómo conviertes lo cotidiano en algo especial.",
  "Porque contigo aprendí que amar también es agradecer.",
  "Porque tu voz tiene el poder de calmar mis pensamientos.",
  "Porque me haces sentir que no estoy solo.",
  "Porque eres mi bonita coincidencia en medio de tantos días.",
  "Porque cada vez que te pienso, te quiero un poquito más.",
  "Porque contigo descubrí emociones que no sabía que existían.",
  "Porque me gusta soñar cosas bonitas contigo.",
  "Porque tu cariño se siente como un abrazo al corazón.",
  "Porque contigo hasta caminar sin rumbo tiene sentido.",
  "Porque me encanta que podamos construir algo real.",
  "Porque eres la persona que volvió más dulce mi rutina.",
  "Porque tu forma de existir me enamora cada día.",
  "Porque contigo aprendí que el amor también es compañía.",
  "Porque hay días en los que solo quiero verte y abrazarte.",
  "Porque me gusta sentir que estamos creciendo juntos.",
  "Porque tu sonrisa es una de mis formas favoritas de felicidad.",
  "Porque eres mi calma en días de ruido.",
  "Porque contigo las horas pasan rápido y los recuerdos se quedan.",
  "Porque me encanta descubrirte poquito a poquito.",
  "Porque tu presencia hace que todo se sienta mejor.",
  "Porque contigo puedo ser más sincero con lo que siento.",
  "Porque tu amor me motiva a cuidar más lo que somos.",
  "Porque eres esa persona que alegra mis pensamientos.",
  "Porque me gusta que seas parte de mis días.",
  "Porque contigo la vida se siente más bonita.",
  "Porque te extraño de una forma tierna cuando no estás.",
  "Porque tus abrazos tienen algo que no encuentro en ningún lugar.",
  "Porque contigo cada fecha se vuelve importante.",
  "Porque me haces valorar más cada instante compartido.",
  "Porque tu ternura tiene una forma especial de tocar mi corazón.",
  "Porque me gusta imaginar tu sonrisa cuando leo tu nombre.",
  "Porque contigo he aprendido a amar sin prisa.",
  "Porque eres mi motivo bonito para seguir mejorando.",
  "Porque me haces sentir orgulloso de lo que estamos construyendo.",
  "Porque tu mirada tiene memoria en mi corazón.",
  "Porque contigo todo parece tener más sentido.",
  "Porque me gusta pensar que aún nos quedan muchos capítulos.",
  "Porque me haces sentir amado de una forma muy bonita.",
  "Porque tu amor es de esas cosas que quiero cuidar siempre.",
  "Porque contigo cada día puede guardar una sorpresa hermosa.",
  "Porque te has vuelto parte de mis mejores pensamientos.",
  "Porque me encanta la forma en que llegas a mi mente.",
  "Porque contigo no solo sonrío, también aprendo.",
  "Porque tu compañía es un regalo que agradezco cada día.",
  "Porque me gusta cómo mi corazón te elige sin dudar.",
  "Porque eres mi pedacito favorito de tranquilidad.",
  "Porque contigo aprendí que amar también es acompañar.",
  "Porque cada vez que te abrazo, entiendo lo mucho que te quiero.",
  "Porque tu forma de querer me hace bien.",
  "Porque me encanta sentir que somos un equipo.",
  "Porque contigo los días difíciles pesan menos.",
  "Porque tu amor me hace mirar el futuro con ilusión.",
  "Porque me gusta tenerte en mi vida y en mis planes.",
  "Porque eres más bonita que cualquier palabra que intente describirte.",
  "Porque contigo mi corazón se siente más tranquilo.",
  "Porque hay momentos contigo que quisiera repetir mil veces.",
  "Porque me gusta la manera en que me haces sentir importante.",
  "Porque tu cariño llega incluso en los detalles más simples.",
  "Porque contigo he encontrado alegría en cosas pequeñas.",
  "Porque te amo más en cada día que pasa.",
  "Porque extrañarte también me recuerda lo mucho que te quiero.",
  "Porque eres la razón de muchas sonrisas que nadie entiende.",
  "Porque contigo todo lo bonito se siente más bonito.",
  "Porque me gusta sentir que tu amor me acompaña.",
  "Porque tu nombre se ha vuelto una palabra especial para mí.",
  "Porque contigo aprendí que el amor también se cuida con respeto.",
  "Porque me encanta que nuestra historia siga creciendo.",
  "Porque tu presencia me hace sentir paz.",
  "Porque eres mi persona favorita para compartir momentos simples.",
  "Porque contigo hasta esperar se siente diferente.",
  "Porque me gusta pensar en tus sueños como si también fueran parte de los míos.",
  "Porque quiero verte feliz en cada etapa de tu vida.",
  "Porque tu felicidad también se ha vuelto importante para mí.",
  "Porque me encanta apoyarte en lo que te hace ilusión.",
  "Porque contigo aprendí que amar también es admirar.",
  "Porque te admiro más de lo que a veces sé decir.",
  "Porque tienes una forma hermosa de hacerme sentir cerca.",
  "Porque tu corazón es una de las cosas que más valoro.",
  "Porque estar contigo me enseña a amar mejor.",
  "Porque me gusta cuidar lo nuestro como algo valioso.",
  "Porque contigo cada recuerdo tiene un brillo especial.",
  "Porque tu sonrisa me parece una de las cosas más lindas del mundo.",
  "Porque me haces sentir que cada día puede ser mejor.",
  "Porque me gusta la forma en que te quedas en mi mente.",
  "Porque contigo aprendí a agradecer más.",
  "Porque eres mi pensamiento bonito antes de dormir.",
  "Porque eres mi deseo bonito al comenzar el día.",
  "Porque te quiero en mis días buenos y también en los difíciles.",
  "Porque contigo no solo quiero momentos, quiero historia.",
  "Porque me haces sentir que el amor también puede ser seguro.",
  "Porque cada conversación contigo me deja algo bonito.",
  "Porque me encanta escucharte hablar de lo que amas.",
  "Porque tu voz tiene un lugar especial en mi memoria.",
  "Porque contigo las despedidas siempre se sienten cortas.",
  "Porque te extraño incluso cuando apenas nos despedimos.",
  "Porque tus abrazos parecen decir lo que las palabras no alcanzan.",
  "Porque me gusta cómo haces que mi corazón se sienta acompañado.",
  "Porque contigo he aprendido a valorar la paciencia.",
  "Porque tu amor me invita a ser más tierno.",
  "Porque me haces mirar el mundo con más cariño.",
  "Porque eres mi casualidad favorita convertida en amor.",
  "Porque contigo los planes pequeños se sienten grandes.",
  "Porque me encanta compartir mi tiempo contigo.",
  "Porque tu presencia le da calma a mis pensamientos.",
  "Porque contigo hasta un mensaje sencillo puede emocionarme.",
  "Porque me gusta la forma en que me haces esperar el mañana.",
  "Porque eres mi motivo para creer en cosas bonitas.",
  "Porque contigo aprendí que amar también es escuchar.",
  "Porque me encanta cuando podemos reírnos de cualquier cosa.",
  "Porque tu risa tiene un sonido que se queda conmigo.",
  "Porque me haces sentir feliz por cosas sencillas.",
  "Porque contigo el corazón se me pone contento.",
  "Porque me gusta tener a alguien como tú en mi vida.",
  "Porque eres más especial de lo que imaginas.",
  "Porque tu forma de querer me hace sentir cuidado.",
  "Porque contigo aprendí que los detalles pequeños también enamoran.",
  "Porque me encanta cómo una mirada tuya puede decir tanto.",
  "Porque en tus ojos encuentro algo que no sé explicar.",
  "Porque tu cariño me da fuerzas en días cansados.",
  "Porque contigo me siento acompañado incluso en silencio.",
  "Porque me gusta la confianza que vamos construyendo.",
  "Porque eres parte de las cosas que más quiero cuidar.",
  "Porque contigo el tiempo se vuelve recuerdo.",
  "Porque cada momento tuyo conmigo vale muchísimo.",
  "Porque tu presencia es mi pausa favorita.",
  "Porque me gusta cómo haces que todo se sienta menos complicado.",
  "Porque contigo aprendí que amar también es aprender.",
  "Porque me enseñas sin darte cuenta.",
  "Porque tu forma de ser me inspira a mejorar.",
  "Porque me haces querer crecer contigo.",
  "Porque quiero acompañarte en cada sueño que tengas.",
  "Porque me alegra imaginarte logrando todo lo que deseas.",
  "Porque contigo los sueños se sienten más posibles.",
  "Porque me gusta pensar en un futuro donde sigas estando tú.",
  "Porque eres mi razón bonita para cuidar el presente.",
  "Porque te amo en las cosas grandes y en las pequeñas.",
  "Porque contigo cada día tiene una oportunidad de ser especial.",
  "Porque tu amor hace que mi mundo sea más cálido.",
  "Porque me gusta saber que puedo contar contigo.",
  "Porque espero que siempre sientas que puedes contar conmigo.",
  "Porque quiero ser calma cuando tus días sean difíciles.",
  "Porque quiero ser alegría cuando necesites sonreír.",
  "Porque quiero ser abrazo cuando necesites refugio.",
  "Porque contigo aprendí que amar también es estar.",
  "Porque estar para ti es algo que me nace del corazón.",
  "Porque me importa cómo te sientes.",
  "Porque me importa verte bien.",
  "Porque me importa verte brillar.",
  "Porque tu bienestar también vive en mi corazón.",
  "Porque me gusta cuidar tu sonrisa.",
  "Porque tu sonrisa merece aparecer todos los días.",
  "Porque me encanta verte feliz.",
  "Porque tu felicidad me contagia.",
  "Porque cuando sonríes, algo en mí también se ilumina.",
  "Porque contigo he aprendido a mirar más allá de mí.",
  "Porque amar contigo también me ha hecho más consciente.",
  "Porque me haces querer ser mejor hijo.",
  "Porque me haces querer ser mejor hermano.",
  "Porque me haces querer ser mejor persona.",
  "Porque tu llegada trajo cambios bonitos a mi vida.",
  "Porque contigo he crecido de formas que no imaginaba.",
  "Porque me gusta la versión de mí que aparece cuando estoy contigo.",
  "Porque me enseñas a amar con más calma.",
  "Porque me enseñas a cuidar con más ternura.",
  "Porque me enseñas a valorar con más profundidad.",
  "Porque contigo lo bonito no se fuerza, simplemente nace.",
  "Porque tu amor se siente sincero.",
  "Porque lo nuestro se siente real.",
  "Porque me gusta construir algo verdadero contigo.",
  "Porque contigo aprendí que el amor no necesita gritar para sentirse fuerte.",
  "Porque tu presencia habla bonito en mi vida.",
  "Porque me gusta la forma en que te has vuelto importante para mí.",
  "Porque llegaste y muchas cosas empezaron a tener más sentido.",
  "Porque hay fechas que ahora tienen tu nombre en mi memoria.",
  "Porque cada mes contigo se siente como un logro del corazón.",
  "Porque estos tres meses son solo el inicio de algo hermoso.",
  "Porque me emociona pensar en nuestros próximos meses.",
  "Porque quiero seguir sumando recuerdos contigo.",
  "Porque quiero seguir aprendiendo a tu lado.",
  "Porque quiero seguir descubriendo formas de amarte.",
  "Porque quiero seguir eligiéndote en lo simple y en lo importante.",
  "Porque amarte se ha vuelto una de mis partes favoritas del día.",
  "Porque me gusta que seas mi enamorada.",
  "Porque decir que eres mi enamorada me hace sonreír.",
  "Porque me siento afortunado de poder quererte así.",
  "Porque no todos los días se encuentra a alguien como tú.",
  "Porque tú haces que el amor se sienta bonito.",
  "Porque tú haces que la espera valga la pena.",
  "Porque tú haces que los días tengan un detalle especial.",
  "Porque tú haces que extrañar también tenga ternura.",
  "Porque tú haces que una simple conversación se vuelva recuerdo.",
  "Porque tú haces que mi corazón se sienta más vivo.",
  "Porque me gusta escribirte aunque a veces no sepa cómo explicar todo.",
  "Porque hay cosas que siento por ti que no caben en una frase.",
  "Porque aun así intento decirte cada día lo mucho que te amo.",
  "Porque mereces saber lo especial que eres para mí.",
  "Porque mereces amor bonito, cuidado y sincero.",
  "Porque quiero darte un amor que te dé paz.",
  "Porque quiero darte un amor que te haga sentir segura.",
  "Porque quiero darte un amor que te acompañe de verdad.",
  "Porque quiero que nunca dudes de lo importante que eres.",
  "Porque eres importante para mí de muchas maneras.",
  "Porque te has ganado un espacio enorme en mi corazón.",
  "Porque cada día ocupas un lugar más bonito en mi vida.",
  "Porque me gusta sentir que lo nuestro va creciendo.",
  "Porque cada paso contigo cuenta.",
  "Porque cada detalle contigo vale.",
  "Porque cada recuerdo contigo se queda.",
  "Porque cada abrazo contigo me enseña algo del amor.",
  "Porque cada mirada tuya me recuerda por qué me encantas.",
  "Porque cada sonrisa tuya me hace querer cuidarte más.",
  "Porque cada conversación contigo me acerca más a ti.",
  "Porque cada día a tu lado me deja algo que agradecer.",
  "Porque contigo aprendí que el amor también se celebra en silencio.",
  "Porque a veces basta pensarte para sentirme mejor.",
  "Porque a veces basta imaginarte para sonreír.",
  "Porque a veces basta recordar un momento contigo para alegrarme.",
  "Porque tus recuerdos conmigo tienen un lugar bonito en mi día.",
  "Porque me gusta cuando el día termina y aún estás en mi mente.",
  "Porque me gusta cuando el día empieza y pienso en ti.",
  "Porque me gusta que seas parte de mi rutina.",
  "Porque me gusta que seas parte de mis sueños.",
  "Porque me gusta que seas parte de mis planes.",
  "Porque me gusta que seas parte de mi corazón.",
  "Porque contigo las palabras amor y hogar se parecen un poco.",
  "Porque tu cariño tiene una forma de abrazarme desde lejos.",
  "Porque aunque no estemos juntos, te siento cerca.",
  "Porque aunque pase el día ocupado, siempre hay un espacio para ti.",
  "Porque aunque no siempre lo diga perfecto, te amo de verdad.",
  "Porque aunque a veces me falten palabras, me sobran sentimientos.",
  "Porque aunque el tiempo pase, sigo eligiendo quererte.",
  "Porque aunque haya días complicados, quiero seguir a tu lado.",
  "Porque contigo quiero aprender incluso de los momentos difíciles.",
  "Porque lo nuestro merece paciencia, cariño y cuidado.",
  "Porque desde el primer mes te miré con ternura.",
  "Porque desde el primer mes quise seguir conociéndote.",
  "Porque desde el primer mes aprendí que amar también es descubrir.",
  "Porque desde el primer mes cada día contigo sumó algo bonito.",
  "Porque desde el primer mes me diste razones para sonreír.",
  "Porque desde el primer mes tu presencia me hizo bien.",
  "Porque desde el primer mes sentí que lo nuestro merecía cuidarse.",
  "Porque hoy, después de tres meses, te amo más que antes.",
  "Porque hoy sigo eligiendo esta historia contigo.",
  "Porque hoy te quiero con más calma y más certeza.",
  "Porque hoy me siento feliz de llamarte mi enamorada.",
  "Porque hoy agradezco cada paso que nos trajo hasta aquí.",
  "Porque hoy me emociona todo lo que falta vivir.",
  "Porque hoy mi corazón te dice que te quedes cerquita.",
  "Porque hoy quisiera abrazarte un poquito más.",
  "Porque hoy quisiera recordarte que eres mi niña hermosa.",
  "Porque hoy quisiera que sepas que te pienso mucho.",
  "Porque hoy también te extraño si no estás conmigo.",
  "Porque hoy también te amo más que ayer.",
  "Porque mañana seguramente te amaré un poquito más.",
  "Porque cada día mi cariño por ti crece en silencio.",
  "Porque cada día descubro algo nuevo que me encanta de ti.",
  "Porque cada día confirmo que eres alguien muy especial.",
  "Porque cada día quiero cuidar mejor lo que tenemos.",
  "Porque cada día me siento más agradecido por ti.",
  "Porque cada día me das motivos para creer en lo bonito.",
  "Porque cada día contigo tiene un detalle que recordar.",
  "Porque cada día sin ti me recuerda cuánto me haces falta.",
  "Porque cada día a tu lado me enseña una forma nueva de felicidad.",
  "Porque cada día te vuelves más importante en mi vida.",
  "Porque cada día siento que lo nuestro vale mucho.",
  "Porque cada día quiero darte una versión más bonita de mí.",
  "Porque cada día quiero demostrarte lo que siento.",
  "Porque cada día quiero que te sientas querida.",
  "Porque cada día quiero que te sientas cuidada.",
  "Porque cada día quiero que te sientas acompañada.",
  "Porque cada día quiero que sepas que no estás sola.",
  "Porque cada día quiero que mi amor te dé tranquilidad.",
  "Porque cada día quiero abrazarte con más ternura.",
  "Porque cada día quiero escucharte con más atención.",
  "Porque cada día quiero apoyarte con más fuerza.",
  "Porque cada día quiero admirarte más.",
  "Porque cada día quiero celebrar que existes.",
  "Porque cada día quiero aprender a amarte mejor.",
  "Porque cada día quiero seguir siendo parte de tu vida.",
  "Porque cada día quiero que esta historia siga creciendo.",
  "Porque cada día quiero que lo nuestro tenga más recuerdos.",
  "Porque cada día quiero tener una razón nueva para escribirte.",
  "Porque cada día quiero que sonrías al leer esto.",
  "Porque cada día quiero que sientas que eres mi amor bonito.",
  "Porque cada día quiero que recuerdes que eres inigualable.",
  "Porque cada día quiero que sepas que no hay nadie como tú para mí.",
  "Porque cada día quiero que mi corazón te encuentre en cada detalle.",
  "Porque cada día quiero que tu nombre siga sonando bonito en mi vida.",
  "Porque cada día quiero agradecerle a la vida por ti."
];

// ===============================
// NAVEGACIÓN TIPO APP
// ===============================

function navigateTo(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const targetScreen = document.getElementById(screenId);

  if (targetScreen) {
    targetScreen.classList.add("active");
  }

  closeLetter();
  closeImage();
}

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
  const letterModal = document.getElementById("letterModal");

  if (letterModal) {
    letterModal.classList.remove("active");
  }
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
  const imageModal = document.getElementById("imageModal");

  if (imageModal) {
    imageModal.classList.remove("active");
  }
}

// ===============================
// TECLADO
// ===============================

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeLetter();
    closeImage();
  }

  if (event.key === "ArrowRight") {
    nextSlide();
  }

  if (event.key === "ArrowLeft") {
    prevSlide();
  }
});