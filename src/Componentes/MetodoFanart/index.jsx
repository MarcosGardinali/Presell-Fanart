import React from 'react'
import style from './metodofanart.module.css'
import Botao from '../Botao'


export default function MetodoFanart() {
  return (
    <main className={style.metodo}>
        <h3 className={style.metodo__titulo}>MÉTODO FANART 3.0</h3>
        <img className={style.metodo__imagem} src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d18b0cf731385702.png" alt='Capa curso' />
        <section className={style.metodo__info}>
            <article className={style.metodo__contaiter__info}> 
                <h4 className={style.info__titulo}>CURSO COMPLETO</h4>
                <p className={style.info__texto}>Assista de qualquer dispositivo: computador, celular ou tablet!</p>
            </article>
            <article className={style.metodo__contaiter__info}> 
                <h4 className={style.info__titulo}>ACESSO VITALÍCIO</h4>
                <p className={style.info__texto}>Você paga uma única vez, e pode acessar o curso para sempre!</p>
            </article>
            <article className={style.metodo__contaiter__info}> 
                <h4 className={style.info__titulo}>COMPUTADOR, CELULAR E TABLET</h4>
                <p className={style.info__texto}>Assista quando quiser, a qualquer hora!</p>
            </article>
            <article className={style.metodo__contaiter__info}> 
                <h4 className={style.info__titulo}>COMUNIDADE FANART</h4>
                <p className={style.info__texto}>Acompanhamento com os Instrutores todos os dias dentro do grupo de alunos!</p>
            </article>
        </section>
        <Botao />
    </main>
  )
}
