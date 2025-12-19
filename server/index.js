import http from "http";

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  if (req.url === "/browser-info") {
    try {
      const userAgent = req.headers["user-agent"] || "";

      const response = await fetch("https://api.apicagent.com/v1/", {
        headers: {
          "User-Agent": userAgent
        }
      });

      let data = {};
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      const result = {
        browser_family:
          data.browser?.family || parseBrowserFromUA(userAgent),

        version:
          data.browser?.version || parseVersionFromUA(userAgent),

        brand:
          data.device?.brand || parseBrandFromUA(userAgent),

        type:
          data.device?.type || parseDeviceTypeFromUA(userAgent),

        os_family:
          data.os?.family || parseOSFromUA(userAgent)
      };

      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });

      res.end(JSON.stringify(result));
    } catch (error) {
      res.writeHead(500, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });

      res.end(JSON.stringify({ error: "Erro ao acessar CAgent" }));
    }
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});

/* ===========================
   FUNÇÕES AUXILIARES
   =========================== */

function parseBrowserFromUA(ua) {
  if (ua.includes("Edg")) return "Microsoft Edge";
  if (ua.includes("OPR")) return "Opera";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Chrome")) return "Chrome";
  if (ua.includes("Safari")) return "Safari";
  return "Desconhecido";
}

function parseVersionFromUA(ua) {
  if (ua.includes("Edg")) return ua.match(/Edg\/([\d.]+)/)?.[1] || "N/A";
  if (ua.includes("OPR")) return ua.match(/OPR\/([\d.]+)/)?.[1] || "N/A";
  if (ua.includes("Firefox")) return ua.match(/Firefox\/([\d.]+)/)?.[1] || "N/A";
  if (ua.includes("Chrome")) return ua.match(/Chrome\/([\d.]+)/)?.[1] || "N/A";
  if (ua.includes("Safari")) return ua.match(/Version\/([\d.]+)/)?.[1] || "N/A";
  return "N/A";
}

function parseOSFromUA(ua) {
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("Windows")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  return "Desconhecido";
}

function parseDeviceTypeFromUA(ua) {
  if (/iPhone|iPad|iPod|Android/.test(ua)) return "Mobile";
  return "Desktop";
}

function parseBrandFromUA(ua) {
  if (ua.includes("Edg")) return "Microsoft";
  if (ua.includes("OPR")) return "Opera";
  if (ua.includes("Firefox")) return "Mozilla";
  if (ua.includes("Chrome")) return "Google";
  if (ua.includes("Safari")) return "Apple";
  return "N/A";
}
