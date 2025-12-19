export async function fetchChuckJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");

  if (!response.ok) {
    throw new Error("Erro ao buscar piada");
  }

  const data = await response.json();

  if (!data.icon_url || !data.value) {
    throw new Error("Resposta inválida da API");
  }

  return {
    icon_url: data.icon_url,
    value: data.value,
  };
}
