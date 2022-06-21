import './header.css';
import mylogo from '../assets/logo.jpg'
export default function Header (){


    return(
        <>
        <img className='logo' src={mylogo}></img>
        </>
    )
}