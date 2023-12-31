import axios from 'axios'


export const getNews = async (kategori)=>{
    try {
        const {data} = await axios.get(`https://api-berita-indonesia.vercel.app/cnn/${kategori}`)
       return data 
    } catch (error) {
        console.log({error})
    }
}