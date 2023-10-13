import React from 'react'
import style from './conteudo.module.css'
import Video from '../Video'
import Botao from '../Botao'

export default function Conteudo() {
    return (
        <main className={style.conteudo}>
            <section className={style.secao__textos}>
                <h1 className={style.titulo}>CHEGOU A HORA DE SENTIR A EMOÇÃO DE FAZER O DESENHO PERFEITO NO PAPEL!</h1>
                <p className={style.texto}>Conheça um método fácil que foi testado e aprovado por mais  de <strong>120 mil alunos</strong> em <strong>7 países</strong></p>
            </section>
            <Video />
            <Botao />
        </main>
    )
}
