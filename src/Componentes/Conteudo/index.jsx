import React from 'react'
import style from './conteudo.module.css'
import Video from '../Video'
import Botao from '../Botao'
import ResultadosAlunos from '../ResultadosAlunos'
import MetodoFanart from '../MetodoFanart'
import BeneficiosOnline from '../BeneficiosOnline'
import ConteudosAulas from '../ConteudosAulas'
import Depoimentos from '../Depoimentos'

export default function Conteudo() {
    return (
        <main className={style.conteudo}>
            <section className={style.secao__textos}>
                <h1 className={style.titulo}>CHEGOU A HORA DE SENTIR A EMOÇÃO DE FAZER O DESENHO PERFEITO NO PAPEL!</h1>
                <p className={style.texto}>Conheça um método fácil que foi testado e aprovado por mais  de <strong>120 mil alunos</strong> em <strong>7 países</strong></p>
            </section>
            <section className={style.secao__video}>
                <Video />
                <p className={style.texto}>Adultos e <strong>Crianças a partir de 7 anos</strong> estão realizando o Sonho de Desenhar!</p>
                <Botao />
            </section>
            <ResultadosAlunos />
            <MetodoFanart />
            <BeneficiosOnline />
            <ConteudosAulas />
            <Depoimentos />
        </main>
    )
}
