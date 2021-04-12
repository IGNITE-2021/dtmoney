import incomeImg from '../../assests/income.svg'
import outImg from '../../assests/outcome.svg'
import totalImg from '../../assests/total.svg'

import { Container } from "../Summary/styles";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outImg} alt="Entradas"/>
                </header>
                <strong> - R$500,00</strong>
            </div>
            <div className="hightlight-background">
                <header >
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}
