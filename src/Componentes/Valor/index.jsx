import React from 'react'
import style from './valor.module.css'

export default function Valor() {
  return (
    <section className={style.container__valor}>
        <h3>Por Apenas <strong>R$ 97,00</strong></h3>
        <p>Ou Somente <strong>10X R$11,08</strong></p>
    </section>
  )
}
