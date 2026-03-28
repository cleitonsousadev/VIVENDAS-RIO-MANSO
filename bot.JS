// =====================================
// IMPORTAÇÕES
// =====================================
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");

// =====================================
// CONFIGURAÇÃO
// =====================================
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

// =====================================
// QR CODE
// =====================================
client.on("qr", (qr) => {
  console.log("📲 Escaneie o QR Code:");
  qrcode.generate(qr, { small: true });
});

// =====================================
// CONECTADO
// =====================================
client.on("ready", () => {
  console.log("✅ Bot Vivendas Rio Manso ONLINE!");
});

// =====================================
// INICIALIZA
// =====================================
client.initialize();

// =====================================
// DELAY
// =====================================
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// =====================================
// BOT PRINCIPAL
// =====================================
client.on("message", async (msg) => {
  try {
    if (!msg.from || msg.from.endsWith("@g.us")) return;

    const chat = await msg.getChat();
    if (chat.isGroup) return;

    const texto = msg.body.toLowerCase().trim();

    const typing = async () => {
      await delay(1500);
      await chat.sendStateTyping();
      await delay(1000);
    };

    // =====================================
    // MENU PRINCIPAL
    // =====================================
    if (/^(oi|olá|ola|menu|start|iniciar|oiii|oii|bom dia|bom dia!|boa tarde|boa noite)$/i.test(texto)) {
      await typing();

      await client.sendMessage(
        msg.from,
        `🏡 *VIVENDAS RIO MANSO*\n\n` +
        `Seja bem-vindo! 👋\n\n` +
        `Imagine ter um terreno de *5.400m²* em meio à natureza, com tranquilidade total...\n\n` +
        `💰 Lotes a partir de *R$ 165.000*\n\n` +
        `🔥 Excelente para morar, lazer ou investimento!\n\n` +
        `Escolha uma opção:\n\n` +
        `1️⃣ - 📍 Sobre o empreendimento\n` +
        `2️⃣ - 💰 Valores\n` +
        `3️⃣ - 📐 Tamanho dos lotes\n` +
        `4️⃣ - 📸 Fotos\n` +
        `5️⃣ - 📅 Agendar visita\n\n` +
        `Digite o número da opção 👇`
      );
    }

    // =====================================
    // SOBRE
    // =====================================
    else if (texto === "1") {
      await typing();

      await client.sendMessage(
        msg.from,
        `🌿 *Sobre o Vivendas Rio Manso*\n\n` +
        `Imagine acordar com o som da natureza, ar puro e total tranquilidade… 🌄\n\n` +
        `Esse é o estilo de vida que o Vivendas Rio Manso oferece.\n\n` +
        `✔️ Espaço amplo para construir\n` +
        `✔️ Contato direto com a natureza\n` +
        `✔️ Paz e descanso longe da correria\n\n` +
        `💰 Ideal tanto para morar quanto investir.\n\n` +
        `Quer ver fotos ou valores? 👇`
      );
    }

    // =====================================
    // VALORES
    // =====================================
    else if (texto === "2") {
      await typing();

      await client.sendMessage(
        msg.from,
        `💰 *Valores dos Lotes*\n\n` +
        `✔️ A partir de *R$ 165.000*\n\n` +
        `💥 Excelente oportunidade de investimento!\n\n` +
        `Quer condições de pagamento?\nDigite *5* para falar com um consultor.`
      );
    }

    // =====================================
    // TAMANHO
    // =====================================
    else if (texto === "3") {
      await typing();

      await client.sendMessage(
        msg.from,
        `📐 *Tamanho dos Lotes*\n\n` +
        `✔️ A partir de *5.400m²*\n\n` +
        `Espaço ideal para:\n` +
        `🌴 Lazer\n🏡 Construção\n🌿 Natureza`
      );
    }

    // =====================================
    // FOTOS (VOCÊ PODE ADICIONAR DEPOIS)
    // =====================================
    else if (texto === "4") {
      await typing();

      await client.sendMessage(
        msg.from,
        `📸 *Fotos do empreendimento*\n\n` +
        `Vou te enviar algumas imagens agora 👇`
      );

      // 👉 Aqui você pode adicionar envio de imagens depois
    }

    // =====================================
    // VISITA / FECHAMENTO
    // =====================================
    else if (texto === "5") {
      await typing();

      await client.sendMessage(
        msg.from,
        `📅 *Agendamento de visita*\n\n` +
        `Perfeito! Vou te direcionar para um consultor agora 👇\n\n` +
        `📲 Clique no link:\n` +
        `https://wa.me/5531999509944`
      );
    }

    // =====================================
    // RESPOSTA PADRÃO (CAPTURA LEAD)
    // =====================================
    else {
      await typing();

      await client.sendMessage(
        msg.from,
        `👋 Não entendi sua mensagem.\n\n` +
        `Digite *menu* para ver as opções disponíveis.\n\n` +
        `Ou fale direto com um consultor:\n` +
        `📲 https://wa.me/5531999509944`
      );
    }

  } catch (error) {
    console.error("Erro:", error);
  }
});

console.log("🚀 Vivendas Rio Manso Bot rodando...");