
import logoImg from '../../assests/logo.svg'
import { Conteiner, Content } from './styles'

interface  HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }:HeaderProps){
  return(
        <Conteiner>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova Transação
                </button>                
            </Content>
        </Conteiner>
    )
}