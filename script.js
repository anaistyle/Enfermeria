// script.js

const ramos = [
  // Año 1 - Semestre 1
  { nombre: "Biología Celular Básica Enfermería", semestre: 1, creditos: 3, requisitos: [], id: "bio-cel" },
  { nombre: "Psicología General Y Evolutiva", semestre: 1, creditos: 4, requisitos: [], id: "psico-gen" },
  { nombre: "Socioantropologia I", semestre: 1, creditos: 2, requisitos: [], id: "socio1" },
  { nombre: "Fundamentos De Enfermería", semestre: 1, creditos: 2, requisitos: [], id: "funda-enf" },
  { nombre: "Promoción de la Salud", semestre: 1, creditos: 3, requisitos: [], id: "promo-salud" },
  { nombre: "Inglés Comunicativo I", semestre: 1, creditos: 3, requisitos: [], id: "ingles1" },

  // Año 1 - Semestre 2
  { nombre: "Histología Humana - Enfermeria", semestre: 2, creditos: 3, requisitos: ["bio-cel"], id: "histo" },
  { nombre: "Anatomía Descriptiva - Enfermería", semestre: 2, creditos: 4, requisitos: ["bio-cel"], id: "anato" },
  { nombre: "Prevención En Salud", semestre: 2, creditos: 3, requisitos: ["promo-salud", "funda-enf"], id: "prev-salud" },
  { nombre: "Socioantropología II", semestre: 2, creditos: 2, requisitos: ["socio1"], id: "socio2" },
  { nombre: "Química General Y Básica", semestre: 2, creditos: 6, requisitos: [], id: "quimica" },
  { nombre: "Inglés Comunicativo II", semestre: 2, creditos: 3, requisitos: ["ingles1"], id: "ingles2" },

  // Año 2 - Semestre 3
  { nombre: "Fisiología Enfermería", semestre: 3, creditos: 4, requisitos: ["histo", "anato", "quimica"], id: "fisio" },
  { nombre: "Bioquímica - Enfermería", semestre: 3, creditos: 3, requisitos: ["quimica"], id: "bioq" },
  { nombre: "Enfermería En Salud Familiar Y Comunitaria", semestre: 3, creditos: 4, requisitos: ["prev-salud", "socio2"], id: "fam1" },
  { nombre: "Fundamentos De La Gestión Del Cuidado De Enfermería", semestre: 3, creditos: 4, requisitos: ["histo", "anato", "prev-salud"], id: "fundagestion" },
  { nombre: "Fundamentos De Ética En Enfermería", semestre: 3, creditos: 2, requisitos: [], id: "etica" },
  { nombre: "Complementaria I", semestre: 3, creditos: 2, requisitos: [], id: "comp1" },

  // Año 2 - Semestre 4
  { nombre: "Fisiopatología Enfermería", semestre: 4, creditos: 4, requisitos: ["fisio", "bioq"], id: "fisio-pato" },
  { nombre: "Farmacologia - Enfermeria", semestre: 4, creditos: 3, requisitos: ["fisio", "bioq"], id: "farmaco" },
  { nombre: "Gestión Del Cuidado De Enfermería En El Adulto I", semestre: 4, creditos: 4, requisitos: ["fisio", "bioq", "fam1", "fundagestion", "etica"], id: "adulto1" },
  { nombre: "Enfermería En El Adulto", semestre: 4, creditos: 5, requisitos: ["fisio", "fundagestion"], id: "enf-adulto" },
  { nombre: "Interacción Humana", semestre: 4, creditos: 2, requisitos: ["etica"], id: "interaccion" },
  { nombre: "Microbiología Enfermería Obstetricia", semestre: 4, creditos: 4, requisitos: ["fisio", "bioq"], id: "micro" },

  // Año 3 - Semestre 5
  { nombre: "Gerencia En Salud Y Enfermería", semestre: 5, creditos: 3, requisitos: ["adulto1", "enf-adulto"], id: "gerencia" },
  { nombre: "Gestión Del Cuidado De Enfermería En El Adulto II", semestre: 5, creditos: 6, requisitos: ["adulto1", "enf-adulto", "fisio-pato", "farmaco", "micro", "interaccion"], id: "adulto2" },
  { nombre: "Metodología De La Investigación Cuantitativa", semestre: 5, creditos: 3, requisitos: [], id: "cuanti" },
  { nombre: "Comunicación Y Liderazgo", semestre: 5, creditos: 2, requisitos: ["interaccion"], id: "liderazgo" },
  { nombre: "Complementaria 2", semestre: 5, creditos: 2, requisitos: [], id: "comp2" },

  // Año 3 - Semestre 6
  { nombre: "Gestión De Proyectos", semestre: 6, creditos: 3, requisitos: ["cuanti", "gerencia", "adulto2"], id: "proyectos" },
  { nombre: "Enfermería Y Gestión Del Cuidado En El Adulto Mayor", semestre: 6, creditos: 5, requisitos: ["gerencia", "adulto2"], id: "adulto-mayor" },
  { nombre: "Metodología De La Investigación Cualitativa", semestre: 6, creditos: 3, requisitos: [], id: "cuali" },
  { nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente I", semestre: 6, creditos: 5, requisitos: ["adulto2"], id: "nino1" },
  { nombre: "Bioética Y Enfermería", semestre: 6, creditos: 2, requisitos: [], id: "bioetica" },
  { nombre: "Enfermería En Salud Mental", semestre: 6, creditos: 4, requisitos: ["liderazgo"], id: "salud-mental" },

  // Año 4 - Semestre 7
  { nombre: "Enfermería En Urgencias Y Desastres", semestre: 7, creditos: 3, requisitos: ["adulto-mayor", "nino1", "salud-mental"], id: "urgencias" },
  { nombre: "Enfermería Basada En La Evidencia", semestre: 7, creditos: 3, requisitos: ["cuali"], id: "ebe" },
  { nombre: "Enfermería En Salud Familiar Y Comunitaria II", semestre: 7, creditos: 4, requisitos: ["adulto-mayor", "nino1"], id: "fam2" },
  { nombre: "Enfermería Y Gestión Del Cuidado En El Niño Y Adolescente II", semestre: 7, creditos: 6, requisitos: ["nino1"], id: "nino2" },
  { nombre: "Gestión Del Cuidado De Enfermería En Salud Mental", semestre: 7, creditos: 3, requisitos: ["salud-mental"], id: "gestion-mental" },

  // Año 4 - Semestre 8
  { nombre: "Gestión Del Cuidado De Enfermería En Urgencias Y Desastres", semestre: 8, creditos: 6, requisitos: ["urgencias", "nino2", "gestion-mental"], id: "gestion-urg" },
  { nombre: "Calidad Y Seguridad En Salud", semestre: 8, creditos: 3, requisitos: ["ebe"], id: "calidad" },
  { nombre: "Gestión Del Cuidado De Enfermería En Salud Familiar Y Comunitaria", semestre: 8, creditos: 6, requisitos: ["fam2", "nino2", "gestion-mental"], id: "gestion-fam" },

  // Año 5 - Semestre 9
  { nombre: "Internado Extramural", semestre: 9, creditos: 20, requisitos: [], id: "internado-ext" },

  // Año 5 - Semestre 10
  { nombre: "Internado Intramural", semestre: 10, creditos: 20, requisitos: [], id: "internado-int" },
  { nombre: "Examen De Titulación", semestre: 10, creditos: 0, requisitos: [], id: "titulacion" },
];

const totalCreditos = 305;
let creditosCompletados = 0;

const estadoRamos = {};
ramos.forEach(r => estadoRamos[r.id] = false);

function crearMalla() {
  const malla = document.getElementById("malla");
  const semestres = [...new Set(ramos.map(r => r.semestre))];

  semestres.forEach(sem => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${sem}`;
    columna.appendChild(titulo);

    ramos.filter(r => r.semestre === sem).forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo bloqueado";
      div.id = ramo.id;
      div.innerHTML = `
        <div>${ramo.nombre}</div>
        <div class="creditos">${ramo.creditos} créditos</div>
      `;

      div.addEventListener("click", () => aprobarRamo(ramo));

      columna.appendChild(div);
    });

    malla.appendChild(columna);
  });
  actualizarEstado();
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.id);
  if (!div.classList.contains("bloqueado")) {
    const aprobado = div.classList.toggle("aprobado");
    estadoRamos[ramo.id] = aprobado;
    creditosCompletados += aprobado ? ramo.creditos : -ramo.creditos;
    actualizarEstado();
  }
}

function actualizarEstado() {
  ramos.forEach(r => {
    const div = document.getElementById(r.id);
    const requisitosCumplidos = r.requisitos.every(req => estadoRamos[req]);
    if (requisitosCumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
      div.classList.remove("aprobado");
      estadoRamos[r.id] = false;
    }
  });
  const porcentaje = (creditosCompletados / totalCreditos) * 100;
  document.getElementById("progreso-barra").style.width = `${porcentaje}%`;
  document.getElementById("progreso-texto").textContent = `Progreso: ${creditosCompletados} créditos / ${totalCreditos}`;
}

window.onload = crearMalla;
