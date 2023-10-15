import Conteudo from './Componentes/Conteudo';
import { Analytics } from '@vercel/analytics/react';
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Conteudo />
      <Rodape />
      <Analytics />
    </div>
  );
}

export default App;
