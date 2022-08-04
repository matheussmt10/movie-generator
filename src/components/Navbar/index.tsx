//import dos icones usados no menu
import homeIcon from "../../assets/home.png";
import rankingIcon from "../../assets/ranking.png";
import lastSeenIcon from "../../assets/wall-clock.png";
import extraIcon from "../../assets/add.png";
import settingsIcon from "../../assets/settings.png";
import helpIcon from "../../assets/question.png";

//import do css
import './style.css';

//import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faCoffee, faGear, faHome, faInfo, faInfoCircle, faPlus, faRankingStar, faUsersGear } from '@fortawesome/free-solid-svg-icons'



export function Navbar(): JSX.Element{

    
    
    return (
        <nav>
            <div>
                <button className="home active buttonNavBar">
                    <FontAwesomeIcon icon={faHome} className="icons activeIcon"/>
                    <p>Home</p>
                </button>
                <button className="ranking buttonNavBar">
                    <FontAwesomeIcon icon={faRankingStar} className="icons"/>
                    <p>Ranking</p>
                </button>
                <button className="lastSeen buttonNavBar">
                    <FontAwesomeIcon icon={faClock} className="icons"/>
                    <p>Last Seen</p>
                </button>
                <button className="extra buttonNavBar">
                    <FontAwesomeIcon icon={faPlus} className="icons"/>
                    <p>Extra</p>
                </button>
            </div>

            <div>
                <button className="setting buttonNavBar">
                    <FontAwesomeIcon icon={faGear} className="icons"/>
                    <p>Setting</p>
                </button>
                <button className="help buttonNavBar">
                    <FontAwesomeIcon icon={faInfoCircle} className="icons"/>
                    <p>Help</p>
                </button>
            </div>
            

        </nav>

        





    )
}











//#737373