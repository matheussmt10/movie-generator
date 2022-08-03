import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faFilm, faStar } from '@fortawesome/free-solid-svg-icons'
import { imageBackground, imagePoster, UpdateMovieGenre, UpdateMovieOverview, UpdateMovieRating, UpdateMovieRelease, UpdateMovieRuntime, UpdateMovieTitle } from './api'



export function ContainerGenerator() {

    const urlImagePoster = 'lPsD10PP4rgUGiGR4CCXA6iY0QQ'
    const poster = `https://image.tmdb.org/t/p/original${imagePoster()}`

     const urlimageBackground = 's5qlyYVINBOPgHfHW2OCcBa2DdX'
    const background = `https://image.tmdb.org/t/p/original${imageBackground()}`
    
    return (
        <div className='containerGenerator' style={{
            backgroundImage:`linear-gradient(90.18deg, rgba(13, 22, 46, 0.93) 23.21%, rgba(13, 22, 46, 0.7) 96.69%), url('${background}')`
            }}>
            
            <div className='ContainerinfoMovie'>
                <div className='infoMovie'>
                    <h1 className='infoMovieTitle'><UpdateMovieTitle/></h1>
                    <div className='infoMovieDetails'>
                        <div>
                            <FontAwesomeIcon icon={faStar} className=""/>
                            <p><UpdateMovieRating/></p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClock} className=""/>
                            <p><UpdateMovieRuntime/></p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faFilm} className=""/>
                            <p><UpdateMovieGenre/></p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCalendar} className=" "/>
                            <p><UpdateMovieRelease/></p>
                        </div>
                        
                        
                        
                    </div>
                    <p><UpdateMovieOverview/></p>
                    <button className='buttonContainerGenerator buttonLetsWatch'>Vamos assistir</button>
                    <button className='buttonContainerGenerator'>Assistir outro dia</button>
                    
                </div>
                
            </div>
                <div  className='bannerMovie'>
                    <img src={poster} alt="" />
                </div>
        </div>
                
    )
}










//https://image.tmdb.org/t/p/original/'qdcmmjqUPEUfCXqGHNTTprvGTFE.jpg'