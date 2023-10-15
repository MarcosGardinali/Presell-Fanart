import React from 'react'
import style from './rodape.module.css'

export default function Rodape() {
  return (
    <footer className={style.rodape}>
        <p>Todos os Direitos Reservados - Método Fanart</p>
        <p>7 MARKETING DIGITAL LTDA - 26.352.946/0001-00</p>
        <p>Whatsapp de Atendimento, tire suas dúvidas aqui: <a href="https://api.whatsapp.com/send?phone=5514991878823&text=Ol%C3%A1,%20eu%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20curso!">(14) 99182-8823</a> </p>
    </footer>
  )
}
