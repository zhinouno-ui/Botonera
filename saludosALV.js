// saludos.js

// 🎯 SALUDOS POR PC
const saludosPC01 = [
`🎰 Hola {usuario}, somos BET300VIP 🎯 ya tenés usuario con nosotros, apretá girar, sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20soy%20{usuarioENC}%20quiero%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🚀 {usuario}, te damos la bienvenida desde BET300VIP 💎 ya podés girar hoy, enviá captura y reclamá.
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎯 Hola {usuario}! BET300VIP te habilitó la ruleta 🎰 tocá el primer botón, girá y reclamá con el otro.
📲 WhatsApp: https://wa.me/5491125553195?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`⚡ {usuario}, somos BET300VIP ✨ girá ahora y no olvides reclamar con captura.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🔥 Bienvenido {usuario}, desde BET300VIP ya podés girar 🎲 apretá el botón, sacá captura y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20env%C3%ADa%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎲 Hola {usuario}, la ruleta de hoy está lista 🚀 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20soy%20{usuarioENC}%20quiero%20mi%20giro
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`💎 {usuario}, BET300VIP ya te tiene listo, probá tu suerte con el spin 🔥
📲 WhatsApp: https://wa.me/5491125553195?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎰 {usuario}, un click y estás en la ruleta 🎯 sacá captura del premio y reclamalo.
📲 WhatsApp: https://wa.me/5491125553195?text=Captura%20de%20{usuarioENC}%20para%20activar%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎯 Vamos {usuario}, desde BET300VIP te decimos que ya podés girar 🚀
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`💥 {usuario}, hoy puede ser tu premio 🎲 girá y reclamá fácil en BET300VIP.
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20env%C3%ADa%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🚀 Hola {usuario}, BET300VIP te espera 🎯 dale spin y reclamá cuando salga tu premio.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20soy%20{usuarioENC}%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎲 Animate {usuario}, BET300VIP tiene lista tu ruleta 💎
📲 WhatsApp: https://wa.me/5491125553195?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🔥 {usuario}, cada giro suma puntos, el tuyo puede premiar hoy mismo 👀
📲 WhatsApp: https://wa.me/5491125553195?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎯 Hola {usuario}, en BET300VIP tenemos activa tu ruleta 🎰 apretá y reclamá.
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`⚡ Spin rápido y premio seguro {usuario} 🚀
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`💎 {usuario}, no dejes pasar tu chance 🎲 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491125553195?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🚀 {usuario}, la suerte está girando 👀 entrá y reclamá en BET300VIP.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20{usuarioENC}%20quiero%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎰 Tu spin puede activar el premio {usuario} ⚡ apretá girar y sacá captura.
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20envía%20captura%20para%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎯 Hola {usuario}, en BET300VIP ya está lista tu ruleta 💎 girá y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491125553195?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🔥 {usuario}, probá suerte con tu giro 🎲 apretá, girá y reclamá con captura.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20soy%20{usuarioENC}%20quiero%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎰 {usuario}, desde BET300VIP te decimos que cada giro cuenta 🎯
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`💎 Aprovechá tu spin {usuario}, reclamalo hoy en BET300VIP ⚡
📲 WhatsApp: https://wa.me/5491125553195?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎲 {usuario}, hoy es un buen día para girar 🚀 sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491125553195?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🚀 Hola {usuario}, en BET300VIP ya activamos tu chance de hoy 🎯
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎯 Dale otro intento {usuario}, hoy puede tocarte premio 💥
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20envía%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🔥 {usuario}, BET300VIP te da la chance de girar 🎰 usala ya.
📲 WhatsApp: https://wa.me/5491125553195?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🎰 {usuario}, entrá y reclamá tu giro 🎯 no te lo pierdas.
📲 WhatsApp: https://wa.me/5491125553195?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`💎 Cada giro suma {usuario}, el tuyo puede ser el ganador 👀
📲 WhatsApp: https://wa.me/5491125553195?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,

`🚀 {usuario}, BET300VIP ya activó tu ruleta 💥 girá ahora mismo.
📲 WhatsApp: https://wa.me/5491125553195?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=1`,
  // ... (agregá aquí todos los que tengan ?pc=1)
];

const saludosPC02 = [
`🎰 Hola {usuario}, somos BET300VIP 🎯 ya tenés usuario con nosotros, apretá girar, sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20soy%20{usuarioENC}%20quiero%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🚀 {usuario}, te damos la bienvenida desde BET300VIP 💎 ya podés girar hoy, enviá captura y reclamá.
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎯 Hola {usuario}! BET300VIP te habilitó la ruleta 🎰 tocá el primer botón, girá y reclamá con el otro.
📲 WhatsApp: https://wa.me/5491171722213?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`⚡ {usuario}, somos BET300VIP ✨ girá ahora y no olvides reclamar con captura.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🔥 Bienvenido {usuario}, desde BET300VIP ya podés girar 🎲 apretá el botón, sacá captura y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20env%C3%ADa%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎲 Hola {usuario}, la ruleta de hoy está lista 🚀 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20soy%20{usuarioENC}%20quiero%20mi%20giro
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`💎 {usuario}, BET300VIP ya te tiene listo, probá tu suerte con el spin 🔥
📲 WhatsApp: https://wa.me/5491171722213?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎰 {usuario}, un click y estás en la ruleta 🎯 sacá captura del premio y reclamalo.
📲 WhatsApp: https://wa.me/5491171722213?text=Captura%20de%20{usuarioENC}%20para%20activar%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎯 Vamos {usuario}, desde BET300VIP te decimos que ya podés girar 🚀
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`💥 {usuario}, hoy puede ser tu premio 🎲 girá y reclamá fácil en BET300VIP.
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20env%C3%ADa%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🚀 Hola {usuario}, BET300VIP te espera 🎯 dale spin y reclamá cuando salga tu premio.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20soy%20{usuarioENC}%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎲 Animate {usuario}, BET300VIP tiene lista tu ruleta 💎
📲 WhatsApp: https://wa.me/5491171722213?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🔥 {usuario}, cada giro suma puntos, el tuyo puede premiar hoy mismo 👀
📲 WhatsApp: https://wa.me/5491171722213?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎯 Hola {usuario}, en BET300VIP tenemos activa tu ruleta 🎰 apretá y reclamá.
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`⚡ Spin rápido y premio seguro {usuario} 🚀
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`💎 {usuario}, no dejes pasar tu chance 🎲 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491171722213?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🚀 {usuario}, la suerte está girando 👀 entrá y reclamá en BET300VIP.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20{usuarioENC}%20quiero%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎰 Tu spin puede activar el premio {usuario} ⚡ apretá girar y sacá captura.
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20envía%20captura%20para%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎯 Hola {usuario}, en BET300VIP ya está lista tu ruleta 💎 girá y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491171722213?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🔥 {usuario}, probá suerte con tu giro 🎲 apretá, girá y reclamá con captura.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20soy%20{usuarioENC}%20quiero%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎰 {usuario}, desde BET300VIP te decimos que cada giro cuenta 🎯
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`💎 Aprovechá tu spin {usuario}, reclamalo hoy en BET300VIP ⚡
📲 WhatsApp: https://wa.me/5491171722213?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎲 {usuario}, hoy es un buen día para girar 🚀 sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491171722213?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🚀 Hola {usuario}, en BET300VIP ya activamos tu chance de hoy 🎯
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎯 Dale otro intento {usuario}, hoy puede tocarte premio 💥
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20envía%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🔥 {usuario}, BET300VIP te da la chance de girar 🎰 usala ya.
📲 WhatsApp: https://wa.me/5491171722213?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🎰 {usuario}, entrá y reclamá tu giro 🎯 no te lo pierdas.
📲 WhatsApp: https://wa.me/5491171722213?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`💎 Cada giro suma {usuario}, el tuyo puede ser el ganador 👀
📲 WhatsApp: https://wa.me/5491171722213?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,

`🚀 {usuario}, BET300VIP ya activó tu ruleta 💥 girá ahora mismo.
📲 WhatsApp: https://wa.me/5491171722213?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=2`,
  // ... (agregá todos los que tengan ?pc=2)
];

const saludosPC03 = [
`🎰 Hola {usuario}, somos BET300VIP 🎯 ya tenés usuario con nosotros, apretá girar, sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20soy%20{usuarioENC}%20quiero%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🚀 {usuario}, te damos la bienvenida desde BET300VIP 💎 ya podés girar hoy, enviá captura y reclamá.
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎯 Hola {usuario}! BET300VIP te habilitó la ruleta 🎰 tocá el primer botón, girá y reclamá con el otro.
📲 WhatsApp: https://wa.me/5491135854862?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`⚡ {usuario}, somos BET300VIP ✨ girá ahora y no olvides reclamar con captura.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🔥 Bienvenido {usuario}, desde BET300VIP ya podés girar 🎲 apretá el botón, sacá captura y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20env%C3%ADa%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎲 Hola {usuario}, la ruleta de hoy está lista 🚀 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20soy%20{usuarioENC}%20quiero%20mi%20giro
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`💎 {usuario}, BET300VIP ya te tiene listo, probá tu suerte con el spin 🔥
📲 WhatsApp: https://wa.me/5491125368306?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎰 {usuario}, un click y estás en la ruleta 🎯 sacá captura del premio y reclamalo.
📲 WhatsApp: https://wa.me/5491125368306?text=Captura%20de%20{usuarioENC}%20para%20activar%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎯 Vamos {usuario}, desde BET300VIP te decimos que ya podés girar 🚀
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`💥 {usuario}, hoy puede ser tu premio 🎲 girá y reclamá fácil en BET300VIP.
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20env%C3%ADa%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🚀 Hola {usuario}, BET300VIP te espera 🎯 dale spin y reclamá cuando salga tu premio.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20soy%20{usuarioENC}%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎲 Animate {usuario}, BET300VIP tiene lista tu ruleta 💎
📲 WhatsApp: https://wa.me/5491125368306?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🔥 {usuario}, cada giro suma puntos, el tuyo puede premiar hoy mismo 👀
📲 WhatsApp: https://wa.me/5491125368306?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎯 Hola {usuario}, en BET300VIP tenemos activa tu ruleta 🎰 apretá y reclamá.
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`⚡ Spin rápido y premio seguro {usuario} 🚀
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`💎 {usuario}, no dejes pasar tu chance 🎲 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491125368306?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🚀 {usuario}, la suerte está girando 👀 entrá y reclamá en BET300VIP.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20{usuarioENC}%20quiero%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎰 Tu spin puede activar el premio {usuario} ⚡ apretá girar y sacá captura.
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20envía%20captura%20para%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎯 Hola {usuario}, en BET300VIP ya está lista tu ruleta 💎 girá y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491125368306?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🔥 {usuario}, probá suerte con tu giro 🎲 apretá, girá y reclamá con captura.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20soy%20{usuarioENC}%20quiero%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎰 {usuario}, desde BET300VIP te decimos que cada giro cuenta 🎯
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`💎 Aprovechá tu spin {usuario}, reclamalo hoy en BET300VIP ⚡
📲 WhatsApp: https://wa.me/5491125368306?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎲 {usuario}, hoy es un buen día para girar 🚀 sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491125368306?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🚀 Hola {usuario}, en BET300VIP ya activamos tu chance de hoy 🎯
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎯 Dale otro intento {usuario}, hoy puede tocarte premio 💥
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20envía%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🔥 {usuario}, BET300VIP te da la chance de girar 🎰 usala ya.
📲 WhatsApp: https://wa.me/5491125368306?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🎰 {usuario}, entrá y reclamá tu giro 🎯 no te lo pierdas.
📲 WhatsApp: https://wa.me/5491125368306?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`💎 Cada giro suma {usuario}, el tuyo puede ser el ganador 👀
📲 WhatsApp: https://wa.me/5491125368306?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,

`🚀 {usuario}, BET300VIP ya activó tu ruleta 💥 girá ahora mismo.
📲 WhatsApp: https://wa.me/5491125368306?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=3`,
  // ... (agregá todos los que tengan ?pc=3)
];

const saludosPC04 = [
`🎰 Hola {usuario}, somos BET300VIP 🎯 ya tenés usuario con nosotros, apretá girar, sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20soy%20{usuarioENC}%20quiero%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🚀 {usuario}, te damos la bienvenida desde BET300VIP 💎 ya podés girar hoy, enviá captura y reclamá.
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎯 Hola {usuario}! BET300VIP te habilitó la ruleta 🎰 tocá el primer botón, girá y reclamá con el otro.
📲 WhatsApp: https://wa.me/5491135854862?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`⚡ {usuario}, somos BET300VIP ✨ girá ahora y no olvides reclamar con captura.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🔥 Bienvenido {usuario}, desde BET300VIP ya podés girar 🎲 apretá el botón, sacá captura y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20env%C3%ADa%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎲 Hola {usuario}, la ruleta de hoy está lista 🚀 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20soy%20{usuarioENC}%20quiero%20mi%20giro
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`💎 {usuario}, BET300VIP ya te tiene listo, probá tu suerte con el spin 🔥
📲 WhatsApp: https://wa.me/5491135854862?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎰 {usuario}, un click y estás en la ruleta 🎯 sacá captura del premio y reclamalo.
📲 WhatsApp: https://wa.me/5491135854862?text=Captura%20de%20{usuarioENC}%20para%20activar%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎯 Vamos {usuario}, desde BET300VIP te decimos que ya podés girar 🚀
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`💥 {usuario}, hoy puede ser tu premio 🎲 girá y reclamá fácil en BET300VIP.
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20env%C3%ADa%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🚀 Hola {usuario}, BET300VIP te espera 🎯 dale spin y reclamá cuando salga tu premio.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20soy%20{usuarioENC}%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎲 Animate {usuario}, BET300VIP tiene lista tu ruleta 💎
📲 WhatsApp: https://wa.me/5491135854862?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🔥 {usuario}, cada giro suma puntos, el tuyo puede premiar hoy mismo 👀
📲 WhatsApp: https://wa.me/5491135854862?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎯 Hola {usuario}, en BET300VIP tenemos activa tu ruleta 🎰 apretá y reclamá.
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`⚡ Spin rápido y premio seguro {usuario} 🚀
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20{usuarioENC}%20necesito%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`💎 {usuario}, no dejes pasar tu chance 🎲 girá y reclamá fácil desde BET300VIP.
📲 WhatsApp: https://wa.me/5491135854862?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🚀 {usuario}, la suerte está girando 👀 entrá y reclamá en BET300VIP.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20{usuarioENC}%20quiero%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎰 Tu spin puede activar el premio {usuario} ⚡ apretá girar y sacá captura.
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20envía%20captura%20para%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎯 Hola {usuario}, en BET300VIP ya está lista tu ruleta 💎 girá y reclamá tu premio.
📲 WhatsApp: https://wa.me/5491135854862?text=Captura%20de%20{usuarioENC}%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🔥 {usuario}, probá suerte con tu giro 🎲 apretá, girá y reclamá con captura.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20soy%20{usuarioENC}%20quiero%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎰 {usuario}, desde BET300VIP te decimos que cada giro cuenta 🎯
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20manda%20captura%20para%20activar%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`💎 Aprovechá tu spin {usuario}, reclamalo hoy en BET300VIP ⚡
📲 WhatsApp: https://wa.me/5491135854862?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎲 {usuario}, hoy es un buen día para girar 🚀 sacá captura y reclamá.
📲 WhatsApp: https://wa.me/5491135854862?text=Captura%20de%20{usuarioENC}%20para%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🚀 Hola {usuario}, en BET300VIP ya activamos tu chance de hoy 🎯
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20spin
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎯 Dale otro intento {usuario}, hoy puede tocarte premio 💥
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20envía%20su%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🔥 {usuario}, BET300VIP te da la chance de girar 🎰 usala ya.
📲 WhatsApp: https://wa.me/5491135854862?text=Soy%20{usuarioENC}%20te%20mando%20mi%20captura
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🎰 {usuario}, entrá y reclamá tu giro 🎯 no te lo pierdas.
📲 WhatsApp: https://wa.me/5491135854862?text=Hola%20{usuarioENC}%20quiero%20activar%20mi%20bono
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`💎 Cada giro suma {usuario}, el tuyo puede ser el ganador 👀
📲 WhatsApp: https://wa.me/5491135854862?text={usuarioENC}%20manda%20captura%20para%20activar
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,

`🚀 {usuario}, BET300VIP ya activó tu ruleta 💥 girá ahora mismo.
📲 WhatsApp: https://wa.me/5491135854862?text=Soy%20{usuarioENC}%20quiero%20activar%20mi%20ruleta
👉 Ruleta: https://bet300-ruleta-luj.vercel.app/?pc=4`,
  // ... (agregá todos los que tengan ?pc=4)
];

// 💾 Exportamos globalmente
window.SALUDOS = {
  PC01: saludosPC01,
  PC02: saludosPC02,
  PC03: saludosPC03,
  PC04: saludosPC04,
};
