import React from 'react'
import style from './resultadosalunos.module.css'

export default function ResultadosAlunos() {
  return (
    <main className={style.resultados__alunos}>
        <h2 className={style.titulo__depoimentos}>Veja os Resultados dos Nossos Alunos:</h2>
        <p className={style.textos__depoimentos}>Os depoimentos são dos nossos grupos exclusivos para alunos!</p>
        <section className={style.depoimentos}>
            <ul className={style.lista__depoimentos}>
                <li className={style.imagens}>
                    <img className={style.imagem__depoimento} src="https://cdn.greatpages.com.br/www.metodofanart.com.br/1696945200/imagens/desktop/317771_1_169541704455782068.png" alt='desenho'/>
                </li>
                <li className={style.imagens}>
                    <img className={style.imagem__depoimento} src="https://cdn.greatpages.com.br/www.metodofanart.com.br/1696945200/imagens/desktop/317771_1_169541685881650976.png" alt="Desenho" />
                </li>
                <li className={style.imagens}>
                    <img className={style.imagem__depoimento} src="https://cdn.greatpages.com.br/www.metodofanart.com.br/1696945200/imagens/desktop/317771_1_169541835246359086.png" alt="Desenho" />
                </li>
                <li className={style.imagens}>
                    <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br/1696945200/imagens/desktop/317771_1_169541689871290865.png" alt="Desenho" />
                </li>
            </ul>
        </section>
    </main>
  )
}
