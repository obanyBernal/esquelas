const API_URL = 'http://localhost:3001/api';

export async function obtenerFondos() {
  const res = await fetch(`${API_URL}/fondos`);
  return await res.json();
}

export async function obtenerPensamientos() {
  const res = await fetch(`${API_URL}/pensamientos`);
  return await res.json();
}
