import './styles.scss';
import logo from '../../img/logo.svg';

export function Header(){
    return (
            <header>
                <img src={logo} alt="logo" />
            </header>
    )
}