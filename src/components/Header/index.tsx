
import './style.css';

export function Header(): JSX.Element {
    return (
        <header>        
            <h1>MOVIE G</h1>
            <input type="text" placeholder="Search here"/>
            <div className='iconProfile'></div>
        </header>


    )
}