// --- Funciones para manejar las botoneras de todas las PCs ---

// 1. Cargar la data completa desde localStorage
function cargarData() {
  let data = {};
  try {
    data = JSON.parse(localStorage.getItem("botonera_admin")) || {};
  } catch(e) { data = {}; }
  // Asegura que existan las PCs
  ["pc1","pc2","pc3"].forEach(pc=>{
    if(!data[pc]) data[pc]={ whatsapp:"", link:"", grupos:[] };
  });
  return data;
}

// 2. Guardar la data completa en localStorage
function guardarData(data) {
  localStorage.setItem("botonera_admin", JSON.stringify(data));
}

// 3. Obtener los grupos y botones de una PC específica
function obtenerGruposPC(pc) {
  const data = cargarData();
  return data[pc]?.grupos || [];
}

// 4. Renderizar la botonera para una PC
function renderBotonera(pc, contenedorId) {
  const grupos = obtenerGruposPC(pc);
  const cont = document.getElementById(contenedorId);
  cont.innerHTML = "";

  grupos.forEach((g, gi) => {
    const grupoDiv = document.createElement("div");
    grupoDiv.className = "grupo";
    grupoDiv.style.borderLeftColor = g.color;

    const grupoTitulo = document.createElement("div");
    grupoTitulo.textContent = g.titulo;
    grupoTitulo.className = "grupo-titulo";
    grupoDiv.appendChild(grupoTitulo);

    // Botones del grupo, con controles de orden
    g.botones.forEach((b, bi) => {
      const botonWrap = document.createElement("div");
      botonWrap.style.display = "flex";
      botonWrap.style.alignItems = "center";

      const boton = document.createElement("button");
      boton.textContent = b.texto;
      boton.onclick = () => navigator.clipboard.writeText(b.mensaje);

      // Botones de orden
      const upBtn = document.createElement("button");
      upBtn.textContent = "▲";
      upBtn.title = "Mover arriba";
      upBtn.onclick = () => moverBoton(pc, gi, bi, -1);

      const downBtn = document.createElement("button");
      downBtn.textContent = "▼";
      downBtn.title = "Mover abajo";
      downBtn.onclick = () => moverBoton(pc, gi, bi, 1);

      botonWrap.appendChild(boton);
      if (bi > 0) botonWrap.appendChild(upBtn);
      if (bi < g.botones.length - 1) botonWrap.appendChild(downBtn);

      grupoDiv.appendChild(botonWrap);
    });

    cont.appendChild(grupoDiv);
  });
}

// 5. Mover un botón dentro de su grupo (cambia el orden y guarda)
function moverBoton(pc, grupoIdx, botonIdx, direccion) {
  const data = cargarData();
  const grupo = data[pc].grupos[grupoIdx];
  const botones = grupo.botones;

  const nuevoIdx = botonIdx + direccion;
  if (nuevoIdx < 0 || nuevoIdx >= botones.length) return;

  // Intercambia posiciones
  [botones[botonIdx], botones[nuevoIdx]] = [botones[nuevoIdx], botones[botonIdx]];

  guardarData(data);
  renderBotonera(pc, "botoneraContenedor");
}

// --- Inicialización ejemplo ---
document.addEventListener("DOMContentLoaded", function() {
  // Cambia "pc1" por la PC que quieras mostrar
  renderBotonera("pc1", "botoneraContenedor");
});
