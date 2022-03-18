import './styles.scss';
import { FaCheckCircle, FaCopy, FaPlusSquare } from 'react-icons/fa';
import { useRef } from 'react';
import { toast } from 'react-toastify';

export function LinkGenerated({ numberPhone, textMessage, renew }) {

    const numberLink = useRef();

    function handleCopy() {
        numberLink.current.focus();
        numberLink.current.select();
        navigator.clipboard.writeText(numberLink.current.value);
        toast.info('Link Copiado.');
    }

    return (
        <>
            <div className="generated__container">
                <div className="generated__box">
                    <div className="success__message">
                        <FaCheckCircle size={25} />
                        <span>Link Gerado com Sucesso!</span>
                    </div>
                    <input
                        type="text"
                        value={`https://api.whatsapp.com/send?phone=55${numberPhone}&text=${textMessage}`}
                        ref={numberLink}
                    />

                    <div className="btn__container">
                        <button onClick={handleCopy}>
                            Copiar <FaCopy size={15} />
                        </button>

                        <button onClick={renew}>
                            Gerar Novo Link <FaPlusSquare size={15} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}