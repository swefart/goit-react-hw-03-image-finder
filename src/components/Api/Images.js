import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api'

const API_KEY = "38438326-5993e9264f26acf07f478aa3d";


export const getImagesBySearch = async (query, page) => {
    const { data } = await axios(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return data;
}