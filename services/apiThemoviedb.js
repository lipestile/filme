import axios from "axios";

const apiThemoviedb = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers:{
        Authorization:"Bearer"
    }
})

export default apiThemoviedb