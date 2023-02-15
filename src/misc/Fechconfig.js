const API_BASE = "https://api.tvmaze.com";

// * api fetch method 🦾🧠

async function apiGet(queryString) {
  const response = await fetch(`${API_BASE}${queryString} `).then((response) =>
    response.json()
  );
  return response;
}
 export default apiGet;