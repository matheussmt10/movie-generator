
//
const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0b5b2c29f1f87439a3aaddd3631de86d&language=pt-BR&page=1'
const response = await fetch(url)
const datas = await response.json()
const numberPicker = Math.floor(Math.random() * 20)
//
const urlDetails = `https://api.themoviedb.org/3/movie/${datas.results[numberPicker].id}?api_key=0b5b2c29f1f87439a3aaddd3631de86d&language=pt-BR`
const responseDetails = await fetch(urlDetails)
const dataDetails = await responseDetails.json()



export function imageBackground(){
    const image = dataDetails.backdrop_path

    return image
}

export function imagePoster(){
    const image = dataDetails.poster_path

    return image
}

//
export function UpdateMovieTitle(){
   const title = datas.results[numberPicker].title

    return (
        title
    )

}

export function UpdateMovieRating(){
    const rating = datas.results[numberPicker].vote_average
 
     return (
        rating
     )
 
 }



export function UpdateMovieRuntime(){
    const runtime = dataDetails.runtime
    return  `${runtime}MIN`


}

export function UpdateMovieRelease(){
    const release = datas.results[numberPicker].release_date
    const releaseData = release.split('-')[0]

    return (
        releaseData
    )

}

export function UpdateMovieOverview(){
    const overview = datas.results[numberPicker].overview

    return (
        overview
    )

}

export function UpdateMovieGenre(){
    const genre = dataDetails.genres[0].name

    return (
        genre
     )
        
}






















// import axios from 'axios'



// const api = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=0b5b2c29f1f87439a3aaddd3631de86d&language=pt-BR&page=1',

// })


// export default api
// export async function MovieDatas(){

//     const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=0b5b2c29f1f87439a3aaddd3631de86d&language=pt-BR&page=1'
    
//     const datas = fetch(url).then((res)=> res.json()).then((data)=>{const datas = data})

//         const numberPicker = Math.floor(Math.random() * 20)

//         const movieUnique = datas.results[numberPicker]
//         const movieTitle = data.results[numberPicker].title
//         const movieRating = data.results[numberPicker].vote_average
//         const movieRelease = data.results[numberPicker].release_date
//         const movieOverview = data.results[numberPicker].overview
//         const imageBackground = data.results[numberPicker].backdrop_path
//         const imagePoster = data.results[numberPicker].poster_path

//         console.log(movieUnique)
//         console.log(movieTitle)
//         console.log(movieOverview)
//         console.log(imageBackground)
//         console.log(data)
   

    
// }



