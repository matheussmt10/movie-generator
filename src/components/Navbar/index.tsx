//import dos icones usados no menu
import homeIcon from "../../assets/home.png";
import rankingIcon from "../../assets/ranking.png";
import lastSeenIcon from "../../assets/wall-clock.png";
import extraIcon from "../../assets/add.png";
import settingsIcon from "../../assets/settings.png";
import helpIcon from "../../assets/question.png";

//import do css
import './style.css';

export function Navbar(){
    
    return (
        <nav>
            <div>
                <button className="Home">
                    <img src={homeIcon} alt="" />
                    <p>Home</p>
                </button>
                <button className="Ranking">
                    <img src={rankingIcon} alt="" />
                    <p>Ranking</p>
                </button>
                <button className="Last Seen">
                    <img src={lastSeenIcon} alt="" />
                    <p>Last Seen</p>
                </button>
                <button className="Extra">
                    <img src={extraIcon} alt="" />
                    <p>Extra</p>
                </button>
            </div>

            <div>
                <button className="Setting">
                    <img src={settingsIcon} alt="" />
                    <p>Setting</p>
                </button>
                <button className="Help">
                    <img src={helpIcon} alt="" />
                    <p>Help</p>
                </button>
            </div>
            

        </nav>

        





    )
}











//#737373