import { FormGenerator } from '../../Components/FormGenerator';
import Lottie from 'react-lottie';
import './styles.scss';
import wppanimate from '../../animations/whatsappanimate.json'

export function Main(){
    return (
        <>
        <div className="main__container">
            <FormGenerator />
            <Lottie options={{
                animationData:wppanimate,
                autoplay:true,
                loop:true,
            }}
            />
        </div>
        </>
    )
}