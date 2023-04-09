import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjExNTFhMzAxM2QwMzhmMTNlZDllNGE1NzUxZWNlNCIsInN1YiI6IjYzZWRkMjlkZjkyNTMyMDA4NTM0ODIzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wJ3WllXw9vGM_cUneE3dRjGdCvfx4hlMiNtW8KPVf7I";
 const headers ={
    Authorization : "bearer "+ TMDB_TOKEN,
};
export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params
        })
        return data;
    }catch(err)
    {
        console.log(err);
        return err;
    }
}