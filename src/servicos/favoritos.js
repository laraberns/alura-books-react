import axios from "axios";

const livrosFavoritosAPI = axios.create({ baseURL: "http://localhost:8000/favoritos" })

async function getLivrosFavoritos() {
    const response = await livrosFavoritosAPI.get('/')

    return response.data
}

async function postLivrosFavoritos(id) {
    await livrosFavoritosAPI.post(`/${id}`)
}

async function deleteLivrosFavoritos(id) {
    await livrosFavoritosAPI.delete(`/${id}`)
}

export {
    getLivrosFavoritos,
    postLivrosFavoritos,
    deleteLivrosFavoritos
}