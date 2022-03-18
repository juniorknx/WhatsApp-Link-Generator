import './styles.scss';
import logo from '../../img/logo.svg';

export function Header(){
    return (
            <header>
                <img src={logo} alt="logo" />
                <span>Link Generator</span>
            </header>
    )
}