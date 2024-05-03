// todo
export async function getHavainnot() {
    const url = import.meta.env.VITE_HAVAINNOT_API_URL
    const response = await fetch(url);
    const body = (await response.json()) as unknown;
    return body;
}