import React from 'react'
import style from './depoimentos.module.css'

export default function Depoimentos() {
  return (
    <main className={style.depoimentos__conteudo}>
        <h2 className={style.depoimentos__titulo}>ASSISTA MAIS DEPOIMENTOS DOS NOSSOS ALUNOS:</h2>
        <section className={style.videos__depoimentos}>
        <iframe className={style.depoimento__video} title='Video Depoimento' src="https://player.vimeo.com/video/867750348?h=b309aa0fbe" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe className={style.depoimento__video} title='Video Depoimento' src="https://player.vimeo.com/video/862517999?h=35bd7e1af1" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe className={style.depoimento__video} title='Video Depoimento' src="https://player.vimeo.com/video/862518045?h=31f265f6f0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe className={style.depoimento__video} title='Video Depoimento' src="https://player.vimeo.com/video/862518074?h=4bc4c0ea91" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe className={style.depoimento__video} title='Video Depoimento' src="https://player.vimeo.com/video/867752015?h=5802ad8e10" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <iframe className={style.depoimento__video} title='Video Depoimento' src="https://player.vimeo.com/video/862518251?h=c40b8bd044" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        </section>
    </main>
  )
}
