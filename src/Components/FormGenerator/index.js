import { useState } from 'react';
import './styles.scss';
import { FaMobileAlt, FaCommentAlt, FaRegArrowAltCircleDown } from 'react-icons/fa';
import { LinkGenerated } from '../LinkGenerated';
import { toast } from 'react-toastify';

export function FormGenerator() {

    const [number, setNumber] = useState('');
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);

   async function handleFormData(e) {
        e.preventDefault();
        if(number === ''){
            toast.error('Digite seu número!');
        }else{
            setVisible(true);
            toast.success('Link gerado com sucesso!');
        }
    }

    function handleRenewLink() {
        setVisible('');
        setNumber('');
        setText('');
    }

    return (
        <>
            <form onSubmit={handleFormData}>
                <div className='form-group'>
                    <FaMobileAlt size={17} />
                    <input
                        placeholder="(DD)0000-0000"
                        type="text"
                        maxLength="11"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>

                <div className='form-group'>
                    <FaCommentAlt size={17} />
                    <input
                        placeholder="Mensagem"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>

                <div className="generate__container">
                    <button>
                        Gerar Link
                        <FaRegArrowAltCircleDown size={17} />
                    </button>
                </div>
            </form>

            {visible && <LinkGenerated numberPhone={number} textMessage={text} renew={handleRenewLink} />}
        </>
    )
}