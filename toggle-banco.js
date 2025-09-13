const bancoToggle = document.getElementById('banco-toggle');
const bancoPanel = document.getElementById('banco-panel');

function cerrarBancoPanel() {
  bancoPanel.classList.remove('open');
  bancoToggle.classList.remove('open');
}

bancoToggle.onclick = function(e) {
  e.stopPropagation();
  if (bancoPanel.classList.contains('open')) {
    cerrarBancoPanel();
  } else {
    bancoPanel.classList.add('open');
    bancoToggle.classList.add('open');
  }
};

document.addEventListener('click', function(e) {
  if (
    bancoPanel.classList.contains('open') &&
    !bancoPanel.contains(e.target) &&
    !bancoToggle.contains(e.target)
  ) {
    cerrarBancoPanel();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === "Escape") cerrarBancoPanel();
});
