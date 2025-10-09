// saludos.js
const saludosRuleta = [
  `🎲 Hola {usuario}, somos BET300VIP, tu casino oficial 🎰
📲 WhatsApp: https://wa.me/5491131583516?text=Soy%20{usuarioENC}%20quiero%20girar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

  `💎 Hola {usuario}, somos BET300VIP 💫 ya tenés tu usuario activo.
Tocá el primer botón para girar y enviá captura cuando te aparezca el premio 👇
📲 WhatsApp: https://wa.me/5491131583516?text=Hola%20soy%20{usuarioENC}%20envío%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

  `🚀 Hola {usuario}, somos BET300VIP, tu plataforma de casino 🎯
Presioná el primer botón para girar y reclamá con el botón de premio 📸
📲 WhatsApp: https://wa.me/5491131583516?text=Captura%20de%20{usuarioENC}%20para%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,
];

// ⚡️ en el futuro podés sumar más categorías:
const saludosBox = [
  `🥊 Hola {usuario}, somos BET300VIP, tu zona de BOX 🎮
Apretá el primer botón para iniciar el reto y mandá captura de tu resultado.`,
];

// 🔄 Exportamos todo en un objeto global:
window.SALUDOS = {
  ruleta: saludosRuleta,
  box: saludosBox,
};
🔹 window.SALUDOS hace que los arrays estén disponibles globalmente en el DOM (sin necesidad de import/export moderno), ideal si no usás bundler.
