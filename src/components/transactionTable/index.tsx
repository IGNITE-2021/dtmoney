import { useEffect } from "react";
import { Container } from "../transactionTable/styles";

export function TransactionTable(){
    useEffect(()=>{
        fetch('http://localhost:3000/api/transactions')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>DEV</td>
                        <td>28/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrawal">R$ - 1.100,00</td>
                        <td>CASA</td>
                        <td>05/03/2021</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    )
}