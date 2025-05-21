export const API_BASE_URL = 'http://35.238.210.66:8090/api';

// Obtener un usuario por username y password
export async function loginUser(username, password) {
    const response = await fetch(`${API_BASE_URL}/users/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
    if (!response.ok) {
        throw new Error('Usuario no encontrado');
    }
    return response.json();
}


// Obtener todos los íconos
export async function getIcons() {
    const response = await fetch(`${API_BASE_URL}/iconos`);
    if (!response.ok) {
        throw new Error('Error al obtener los íconos');
    }
    return response.json();
}

// Obtener un ícono por ID
export default API_BASE_URL;