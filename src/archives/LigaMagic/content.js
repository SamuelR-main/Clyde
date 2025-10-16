console.log("[LigaMagic Downloader] content.js carregado (ajustado para main-card).");

function getCardImages() {
  const urls = new Set();

  // Pega todas as imagens com a classe .main-card
  document.querySelectorAll("img.main-card").forEach(img => {
    let src = img.getAttribute("src") || img.getAttribute("data-src");
    if (!src) return;

    // Corrige URLs sem protocolo
    if (src.startsWith("//")) {
      src = "https:" + src;
    }

    // Filtra apenas imagens do repositório
    if (src.includes("repositorio.sbrauble.com")) {
      urls.add(src);
    }
  });

  console.log(`[LigaMagic Downloader] ${urls.size} imagens encontradas.`);
  return Array.from(urls);
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getImages") {
    console.log("[LigaMagic Downloader] Pedido de imagens recebido.");
    const urls = getCardImages();
    sendResponse({ urls });
  }
});