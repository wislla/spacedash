import axios from 'axios'

const nasaApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {
    api_key: import.meta.env.VITE_NASA_API_KEY,
  },
})

nasaApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 429) {
      console.warn(
        '[SPACEDASH] Limite de requisições da NASA API atingido. Aguarde ou troque a chave.',
      )
    }
    return Promise.reject(error)
  },
)

export default nasaApi
