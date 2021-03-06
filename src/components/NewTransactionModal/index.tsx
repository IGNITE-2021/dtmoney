import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomImg from '../../assests/income.svg';
import outcomeImg from '../../assests/outcome.svg';
import closeImg from '../../assests/close.svg'; 
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';


interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps ){
    /** Armazenar informação de um evento click, input.. usa-se estado */
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    
    /** Setando o deposit como default */
    const [ type, setType ] = useState('deposit');
    
    function handleCreateNewTransaction( event: FormEvent){
        event.preventDefault();
        
        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions', data);
    }

    return (
        <Modal  
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar Modal"/>
            </button>
            <h2>Cadastrar Transação</h2>
            <Container onSubmit={handleCreateNewTransaction}>
                <input 
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input 
                    type="number"
                    placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomImg} alt="Entrada"/>
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>

                </TransactionTypeContainer> 
                <input 
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>

            </Container>
        </Modal>

    );
}