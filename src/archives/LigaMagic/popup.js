async function fetchImageAsBlob(url) {
    const response = await fetch(url);
    return await response.blob();
}

document.getElementById("download").addEventListener("click", async () => {
    const status = document.getElementById("status");
    const progressBar = document.getElementById("progress-bar");

    status.textContent = "Coletando imagens...";
    progressBar.style.width = "0%";

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

    chrome.tabs.sendMessage(tab.id, { action: "getImages" }, async (response) => {
        const urls = response?.urls || [];
        if (!urls.length) {
            status.textContext = "Nenhuma imagem encontrada.";
            return;
        }

        const total = urls.length;
        let count = 0;
        const zip = new JSZip();

        status.textContext = `Baixando ${urls.length} imagens...`;

        for (const [index, url] of urls.entries()) {
            try {
                const blob = await fetchImageAsBlob(url);
                zip.file(`card_${index + 1}.jpg`, blob);
                count++;
                const percent = Math.round((count / total) * 100);
                progressBar.style.width = `${percent}%`;
                status.textContent = `Baixando ${count}/${total} (${percent}%)`;
            } catch (e) {
                console.error("Erro ao baixar:", url, e);
            }
        }

        status.textContent = "Compactando ZIP...";
        progressBar.style.width()
        const zipBlob = await zip.generateAsync({ type: "blob" });

        const zipUrl = URL.createObjectURL(zipBlob);
        const link = document.createElement("a");
        link.href = zipUrl;
        link.download = "ligamagic_cards.zip";
        link.click();

        status.textContent = "Download Concluído ✅";
    });
});