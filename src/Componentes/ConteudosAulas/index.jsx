import React from 'react'
import style from './conteudosaulas.module.css'
import Botao from '../Botao'

export default function ConteudosAulas() {
  return (
    <main className={style.conteudo__aulas}>
      <h2 className={style.conteudo__aulas__titulo}>Como são os Conteúdos das Aulas?</h2>
      <section className={style.cards__conteudos}>
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d191043487227194.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d191ded841210372.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1920bb059629055.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1923a0854739233.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1933a5385234800.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d193de9205978789.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d194111619595418.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1943fa651634664.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1946db544480364.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1949a5962098864.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d195999460434856.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1964e9570071519.png" alt="Card" />
        <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1985bd659603864.png" alt="Card" />
      </section>
      <section className={style.conteudo__bonus}>
        <h3 className={style.conteudo__aulas__titulo}>Além do Curso Completo, vou disponibilizar <strong>mais 3 BÔNUS!</strong></h3>
        <p className={style.conteudo__bonus__titulo__texto}>Dá uma olhada nos bônus <strong>se você garantir sua vaga hoje</strong> no Método Fanart 3.0</p>
        <section className={style.container__conteudo__bonus}>
          <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d19ac1c678931591.png" alt="Imagem Bonus" />
          <section className={style.conteudo__bonus__textos}>
            <h4 className={style.conteudo__bonus__textos__titulo}><strong>BÔNUS #1</strong> APLICANDO TODAS AS AULAS DO CURSO</h4>
            <p>Em uma Sessão Exclusiva de Aproximadamente 2 horas, a Professora Mayara vai demonstrar como aplicar cada módulo e aula ensinados no Método Fanart 3.0!</p>
            <p>Tudo em tempo real!!</p>
            <p>Isso não é apenas uma lição, É uma Jornada Prática para mostrar que você pode criar desenhos perfeitos, passo a passo, do início ao fim</p>
            <p><strong> (Conteúdo exclusivo para Alunos do Método Fanart)</strong></p>
          </section>
        </section>

        <section className={style.container__conteudo__bonus}>
          <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d19b600099112331.png" alt="Imagem Bonus" />
          <section className={style.conteudo__bonus__textos}>
            <h4 className={style.conteudo__bonus__textos__titulo}><strong>BÔNUS #2</strong> O SEGREDO PARA DESENHAR OLHOS</h4>
            <p>O mistério por trás do traço perfeito de olhos, revelado, para dar vida aos olhos e expressar emoções como nunca antes.</p>
            <p>Exercícios práticos e eficazes que irão acelerar dramaticamente o seu aprendizado no desenho de olhos.</p>
            <p>Prepare-se para desvendar os segredos da criação de olhos surpreendentemente realistas e cativantes.</p>
            <p><strong>Prepare-se para desvendar os segredos da criação de olhos surpreendentemente realistas e cativantes.</strong></p>
          </section>
        </section>

        <section className={style.container__conteudo__bonus}>
          <img src="https://cdn.greatpages.com.br/www.metodofanart.com.br-vsl-fanart-2-af/1696686393/imagens/desktop/329991_1_1696532433651f07d1a17aa379739455.png" alt="Imagem Bonus" />
          <section className={style.conteudo__bonus__textos}>
            <h4 className={style.conteudo__bonus__textos__titulo}><strong>BÔNUS #3</strong> WORKSHOP: DOMINANDO TRAÇOS</h4>
            <p>Prepare-se para uma aula Extraordinária, projetada para Impulsionar seus desenhos.</p>
            <p>Os Segredos para Aprimorar em Minutos seus Traços</p>
            <p>Os Principais Erros cometidos por Iniciantes e como Evita-los</p>
            <p>Como avaliar seu Progresso e Garantir que você esteja Aperfeiçoando seu Traço!</p>
            <p><strong> (Conteúdo exclusivo para Alunos do Método Fanart)</strong></p>
          </section>
        </section>
      </section>
      <Botao />
    </main>
  )
}
