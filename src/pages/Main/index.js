import { LinkGenerator } from '../../Components/Generator';
import { Title } from '../../Components/Title';
import './styles.scss';

export function Main(){
    return (
        <>
        <div className="container">
            <Title titulo="Gerador de Link para WhatsApp" />
            <LinkGenerator />
        </div>
        </>
    )
}