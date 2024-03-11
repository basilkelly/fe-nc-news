import axios from 'axios'
const api = axios.create({
    baseURL: 'https://nc-news-28fh.onrender.com/api'
})

const getAllArticles = () => {
    return api.get('/articles').then(({data}) =>{
        return data
    })
}

export {getAllArticles}