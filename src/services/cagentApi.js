export async function fetchBrowserInfo() {
  try {
    // 🔗 Consome o BACKEND (não a API direto)
    const response = await fetch("http://localhost:3001/browser-info");

    if (!response.ok) {
      throw new Error("Erro ao acessar backend");
    }

    const data = await response.json();

    // ✅ Retorna TODOS os campos obrigatórios
    return {
      browser_family: data.browser_family || "Desconhecido",
      version: data.version || "N/A",
      brand: data.brand || "N/A",
      type: data.type || "Desktop",
      os_family: data.os_family || "Desconhecido"
    };
  } catch (error) {
    console.error("Erro ao buscar dados do navegador:", error);

    // ✅ Fallback seguro
    return {
      browser_family: "Desconhecido",
      version: "N/A",
      brand: "N/A",
      type: "Desktop",
      os_family: "Desconhecido"
    };
  }
}
