import React from 'react'
import logoImg from '../../assests/logo.svg'
import { Conteiner, Content } from './styles'

export function Header(){
    return(
        <Conteiner>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button">
                    Nova Transação
                </button>
            </Content>
        </Conteiner>
    )
}