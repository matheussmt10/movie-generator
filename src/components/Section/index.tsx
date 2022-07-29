import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faClock, faStar } from '@fortawesome/free-solid-svg-icons'




export function ContainerGenerator() {

    const urlImagePoster = 'lPsD10PP4rgUGiGR4CCXA6iY0QQ'
    const imagePoster = `https://image.tmdb.org/t/p/original/${urlImagePoster}.jpg`

    const urlimageBackground = 's5qlyYVINBOPgHfHW2OCcBa2DdX'
    const imageBackground = `https://image.tmdb.org/t/p/original/${urlimageBackground}.jpg`
    
    return (
        <div className='containerGenerator' style={{
            backgroundImage:`linear-gradient(90.18deg, rgba(13, 22, 46, 0.93) 23.21%, rgba(13, 22, 46, 0.7) 96.69%), url('${imageBackground}')`
            }}>
            
            <div className='ContainerinfoMovie'>
                <div className='infoMovie'>
                    <h1 className='infoMovieTitle'>Titulo do Filme</h1>
                    <div className='infoMovieDetails'>
                        <div>
                            <FontAwesomeIcon icon={faStar} className=""/>
                            <p>Nota:</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClock} className=""/>
                            <p>Duração:</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCalendar} className=" "/>
                            <p>Ano:</p>
                        </div>
                        
                        
                        
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis illo aliquam quis blanditiis iste. Saepe voluptatem neque dolore quasi sint vel ea quisquam pariatur. Obcaecati voluptatem reiciendis incidunt aliquid autem. Saepe voluptatem neque dolore quasi sint vel ea quisquam pariatur. Obcaecati voluptatem reiciendis incidunt aliquid autem. Saepe voluptatem neque dolore quasi sint vel ea quisquam pariatur. Obcaecati voluptatem reiciendis incidunt aliquid autem.</p>
                    <button className='buttonContainerGenerator buttonLetsWatch'>Vamos assistir</button>
                    <button className='buttonContainerGenerator'>Assistir outro dia</button>
                    
                </div>
                
            </div>
                <div  className='bannerMovie'>
                    <img src={imagePoster} alt="" />
                </div>
        </div>
                
    )
}










//https://image.tmdb.org/t/p/original/'qdcmmjqUPEUfCXqGHNTTprvGTFE.jpg'