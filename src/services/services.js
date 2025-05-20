const API_BASE_URL = 'http://localhost:8080/api';

// Obtener un usuario por username y password
export async function loginUser(username, password) {
    const response = await fetch(`${API_BASE_URL}/users/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
    if (!response.ok) {
        throw new Error('Usuario no encontrado');
    }
    return response.json();
}


export default API_BASE_URL;