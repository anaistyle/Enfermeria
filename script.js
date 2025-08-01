const ramos = [
  // 1° AÑO - SEMESTRE I
  { nombre: "Biología Celular Básica Enfermería", anio: 1, semestre: 1, creditos: 3, prerrequisitos: [] },
  { nombre: "Psicología General y Evolutiva", anio: 1, semestre: 1, creditos: 4, prerrequisitos: [] },
  { nombre: "Sociantropología I", anio: 1, semestre: 1, creditos: 2, prerrequisitos: [] },
  { nombre: "Fundamentos de Enfermería", anio: 1, semestre: 1, creditos: 4, prerrequisitos: [] },
  { nombre: "Promoción de la Salud", anio: 1, semestre: 1, creditos: 3, prerrequisitos: [] },
  { nombre: "Inglés Comunicativo I Nivel Principiante", anio: 1, semestre: 1, creditos: 2, prerrequisitos: [] },

  // 1° AÑO - SEMESTRE II
  { nombre: "Histología Humana-Enfermería", anio: 1, semestre: 2, creditos: 3, prerrequisitos: [] },
  { nombre: "Química General y Orgánica Básica", anio: 1, semestre: 2, creditos: 3, prerrequisitos: [] },
  { nombre: "Sociantropología II", anio: 1, semestre: 2, creditos: 2, prerrequisitos: ["Sociantropología I"] },
  { nombre: "Prevención en Salud", anio: 1, semestre: 2, creditos: 3, prerrequisitos: [] },
  { nombre: "Anatomía Descriptiva Enfermería", anio: 1, semestre: 2, creditos: 3, prerrequisitos: [] },
  { nombre: "Inglés Comunicativo II Nivel Elemental", anio: 1, semestre: 2, creditos: 2, prerrequisitos: ["Inglés Comunicativo I Nivel Principiante"] },

  // 2° AÑO - SEMESTRE III
  { nombre: "Fisiología Enfermería", anio: 2, semestre: 3, creditos: 3, prerrequisitos: [] },
  { nombre: "Bioquímica Enfermería", anio: 2, semestre: 3, creditos: 3, prerrequisitos: ["Química General y Orgánica Básica"] },
  { nombre: "Enfermería en Salud Familiar y Comunitaria I", anio: 2, semestre: 3, creditos: 4, prerrequisitos: ["Fundamentos de Enfermería"] },
  { nombre: "Fundamentos de la Gestión del Cuidado de Enfermería", anio: 2, semestre: 3, creditos: 3, prerrequisitos: [] },
  { nombre: "Fundamentos de Ética en Enfermería", anio: 2, semestre: 3, creditos: 2, prerrequisitos: [] },
  { nombre: "Complementario", anio: 2, semestre: 3, creditos: 2, prerrequisitos: [] },

  // 2° AÑO - SEMESTRE IV
  { nombre: "Fisiopatología Enfermería", anio: 2, semestre: 4, creditos: 3, prerrequisitos: ["Fisiología Enfermería"] },
  { nombre: "Farmacología Enfermería", anio: 2, semestre: 4, creditos: 3, prerrequisitos: ["Bioquímica Enfermería"] },
  { nombre: "Gestión del Cuidado de Enfermería en el Adulto I", anio: 2, semestre: 4, creditos: 4, prerrequisitos: ["Fundamentos de Enfermería"] },
  { nombre: "Metodología de la Investigación Cuantitativa", anio: 2, semestre: 4, creditos: 3, prerrequisitos: [] },
  { nombre: "Enfermería en el Adulto", anio: 2, semestre: 4, creditos: 3, prerrequisitos: [] },
  { nombre: "Microbiología Enfermería Obstetricia", anio: 2, semestre: 4, creditos: 3, prerrequisitos: [] },
  { nombre: "Interacción Humana", anio: 2, semestre: 4, creditos: 2, prerrequisitos: [] },
  { nombre: "Complementario", anio: 2, semestre: 4, creditos: 2, prerrequisitos: [] },

  // 3° AÑO - SEMESTRE V
  { nombre: "Gerencia en Salud y Enfermería", anio: 3, semestre: 5, creditos: 3, prerrequisitos: [] },
  { nombre: "Gestión del Cuidado de Enfermería en el Adulto II", anio: 3, semestre: 5, creditos: 4, prerrequisitos: ["Gestión del Cuidado de Enfermería en el Adulto I"] },
  { nombre: "Metodología de la Investigación Cualitativa", anio: 3, semestre: 5, creditos: 3, prerrequisitos: ["Metodología de la Investigación Cuantitativa"] },
  { nombre: "Comunicación y Liderazgo", anio: 3, semestre: 5, creditos: 2, prerrequisitos: [] },

  // 3° AÑO - SEMESTRE VI
  { nombre: "Gestión de Proyecto", anio: 3, semestre: 6, creditos: 3, prerrequisitos: [] },
  { nombre: "Enfermería y Gestión del Cuidado en el Adulto Mayor", anio: 3, semestre: 6, creditos: 4, prerrequisitos: [] },
  { nombre: "Enfermería y Gestión del Cuidado en el Niño y Adolescente I", anio: 3, semestre: 6, creditos: 4, prerrequisitos: [] },
  { nombre: "Enfermería en Salud Mental", anio: 3, semestre: 6, creditos: 3, prerrequisitos: [] },
  { nombre: "Bioética y Enfermería", anio: 3, semestre: 6, creditos: 2, prerrequisitos: [] },

  // 4° AÑO - SEMESTRE VII
  { nombre: "Enfermería en Urgencias y Desastres", anio: 4, semestre: 7, creditos: 4, prerrequisitos: [] },
  { nombre: "Enfermería Basada en la Evidencia", anio: 4, semestre: 7, creditos: 3, prerrequisitos: [] },
  { nombre: "Enfermería en Salud Familiar y Comunitaria II", anio: 4, semestre: 7, creditos: 4, prerrequisitos: ["Enfermería en Salud Familiar y Comunitaria I"] },
  { nombre: "Enfermería y Gestión del Cuidado en el Niño y Adolescente II", anio: 4, semestre: 7, creditos: 4, prerrequisitos: ["Enfermería y Gestión del Cuidado en el Niño y Adolescente I"] },
  { nombre: "Gestión del Cuidado de Enfermería en Salud Mental", anio: 4, semestre: 7, creditos: 3, prerrequisitos: ["Enfermería en Salud Mental"] },

  // 4° AÑO - SEMESTRE VIII
  { nombre: "Gestión del Cuidado de Enfermería en Urgencias y Desastres", anio: 4, semestre: 8, creditos: 4, prerrequisitos: ["Enfermería en Urgencias y Desastres"] },
  { nombre: "Calidad y Seguridad en Salud", anio: 4, semestre: 8, creditos: 3, prerrequisitos: [] },
  { nombre: "Gestión del Cuidado Enfermería en Salud Familiar y Comunitaria", anio: 4, semestre: 8, creditos: 4, prerrequisitos: ["Enfermería en Salud Familiar y Comunitaria II"] },

  // 5° AÑO
  { nombre: "Internado Extramural", anio: 5, semestre: 9, creditos: 15, prerrequisitos: [] },
  { nombre: "Internado Intramural", anio: 5, semestre: 10, creditos: 15, prerrequisitos: [] }
];

const grid = document.querySelector('.grid');

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo';
  div.dataset.nombre = ramo.nombre;
  div.dataset.creditos = ramo.creditos;
  div.dataset.aprobado = 'false';
  div.innerHTML = `${ramo.nombre}<div class="creditos">${ramo.creditos} créditos</div>`;

  div.addEventListener('click', () => {
    const aprobados = ramo.prerrequisitos.every(pr => document.querySelector(`[data-nombre='${pr}']`)?.classList.contains('aprobado'));
    if (aprobados) {
      div.classList.toggle('aprobado');
      actualizarProgreso();
    } else {
      alert("Debes aprobar los prerrequisitos primero");
    }
  });

  const col = (ramo.semestre + (ramo.anio - 1) * 2);
  div.style.gridColumn = col;

  grid.appendChild(div);
}

function actualizarProgreso() {
  const total = ramos.length;
  const aprobados = document.querySelectorAll('.ramo.aprobado').length;
  document.getElementById('progreso').value = (aprobados / total) * 100;
}

ramos.forEach(crearRamo);
