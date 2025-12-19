import React, { useEffect, useState } from "react";
import { fetchBrowserInfo } from "../services/cagentApi";
import InfoCard from "../components/InfoCard";

export default function BrowserInfoPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBrowserInfo()
      .then(setData)
      .catch(() => setError("Erro ao carregar dados do navegador"));
  }, []);

  if (error) {
    return <p style={{ textAlign: "center" }}>{error}</p>;
  }

  if (!data) {
    return <p style={{ textAlign: "center" }}>Carregando...</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <InfoCard title="Informações do Navegador">
        <p><strong>Browser:</strong> {data.browser_family}</p>
        <p><strong>Versão:</strong> {data.version}</p>
        <p><strong>Marca:</strong> {data.brand}</p>
        <p><strong>Tipo:</strong> {data.type}</p>
        <p><strong>Sistema Operacional:</strong> {data.os_family}</p>
      </InfoCard>
    </div>
  );
}
