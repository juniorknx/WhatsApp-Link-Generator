import { useEffect, useState, useRef } from 'react';
import { FaCopy } from 'react-icons/fa';
import './styles.scss';

export function LinkGenerator() {

    const [number, setNumber] = useState('');
    const [text, setText] = useState('')
    const [ativo, setAtivo] = useState(false);
    const numberRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        setAtivo(!ativo);  
    }

    function handleInputChange(e) {
        setNumber(e.target.value)
    }

    function handleTextInput(e) {
        setText(e.target.value)
    }

    function handleClear(e) {
        e.preventDefault();
        setAtivo(!ativo)
        setNumber('');
        setText('');
    }

    function handleCopyNumber() {
        navigator.clipboard.writeText(numberRef.current.value);
    }

    console.log(numberRef.current);

    function Result({ numberPhone, messageText }) {
        return (
            <div className='result'>
                <div>
                    <a
                        target="__blank"
                        href={`https://api.whatsapp.com/send?phone=+55${number}&text=${text}`}>
                        {`https://api.whatsapp.com/send?phone=+55${number}&text=${text}`}
                    </a>

                    <input 
                    type="text" 
                    ref={numberRef}
                    value={`https://api.whatsapp.com/send?phone=+55${number}&text=${text}`}
                    />
                    <button>
                        Copiar
                        <FaCopy size={15} onClick={handleCopyNumber} />
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="formcontainer">
                <form >
                    <label>Número de Telefone</label>
                    <input
                        type="text"
                        placeholder="Número do Celular"
                        value={number}
                        onChange={handleInputChange}
                    />

                    <label>Mensagem</label>
                    <input
                        type="text"
                        placeholder='Escreva o texto'
                        value={text}
                        onChange={handleTextInput}
                    />

                    <button type="submit" onClick={handleSubmit}>
                        Gerar Link
                    </button>

                    <button type="submit" onClick={handleClear}>
                        Limpar
                    </button>
                </form>

            </div>
            {ativo && <Result numberPhone={number} messageText={text} />}
        </>
    )
}