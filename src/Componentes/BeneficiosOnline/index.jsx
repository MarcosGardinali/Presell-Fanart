import React from 'react'
import style from './beneficiosonline.module.css'

export default function BeneficiosOnline() {
    return (
        <main className={style.beneficios__online}>
            <h4 className={style.beneficios__titulo}>O CURSO ONLINE É MELHOR DO QUE O PRESENCIAL?</h4>
            <article className={style.container__beneficios}>
                <section className={style.beneficios}>
                    <h4 className={style.beneficios__online__titulo}>SIM, o Curso Online:</h4>
                    <p><strong className={style.beneficios__texto__destaque}>Paga uma única vez:</strong> Mais Economia pro Seu Bolso</p>
                    <p><strong className={style.beneficios__texto__destaque}>Professores 24 hrs:</strong> Acompanhamento Todos os Dias</p>
                    <p><strong className={style.beneficios__texto__destaque}>Exercícios Científicos:</strong> Resultados Bem Mais Rápidos</p>
                    <p><strong className={style.beneficios__texto__destaque}>Aulas Bem Planejadas:</strong> Sem enrolação nas Aulas</p>
                    <p><strong className={style.beneficios__texto__destaque}>20 Minutos por Dia:</strong> Pode Estudar a Hora que Quiser</p>
                    <p><strong className={style.beneficios__texto__destaque}>Método fácil:</strong> Todas as idades de 7 a 60 anos</p>
                </section>
                <section className={style.beneficios}>
                    <h4 className={style.beneficios__titulo__risco}>No Curso Presencial...</h4>
                    <p>Gasta <strong className={style.desvantagens__texto__destaque}>350 reais por mês...</strong> que dá R$ 4.200 por ano...</p>
                    <p>Para Fazer Só <strong className={style.desvantagens__texto__destaque}>Uma Aula por semana...</strong> </p>
                    <p>E Uma Aula que <strong className={style.desvantagens__texto__destaque}>dura apenas 1 hora...</strong> </p>
                    <p>Você passa a <strong className={style.desvantagens__texto__destaque}>semana sem tirar dúvida</strong>  com professor...</p>
                    <p>Os Resultados vão levar <strong className={style.desvantagens__texto__destaque}>2-3 anos</strong>  para aparecer...</p>
                    <p>Sem um método passo a passo <strong className={style.desvantagens__texto__destaque}>vai evoluir lentamente...</strong> </p>
                </section>  
            </article>
        </main>
    )
}
