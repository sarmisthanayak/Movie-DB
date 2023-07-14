const API_KEY = '394982de5a976a0c82d69b9f895cbdcd';

export const fetchNewReleases = async() =>{
    try{
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        return data.results;
    } catch(error){
        console.error('Error fetching new releases:',error);
        return[];
    }
};

export const fetchWhatsHot=async()=>{
    try{
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        return data.results;
    } catch(error){
        console.error('Error fetching what\'s hot:',error);
        return[];
    }
};