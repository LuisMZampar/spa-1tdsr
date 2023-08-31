import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";
import Lista from "./components/Lista";

export default function App(){

  let altViteLogo = "Logo Vite";

  return(
    <>
      <div className="container">
    
    {/* Criar um cabeçalho com um header, um h1 e uma lista ul + 3 elementos li. */}
      <Lista/>
    {/* Criar um elemento de conteudo com um section, uma div, dois parágrafos, cada um com 3 linhas de lorem e uma imagem. */}
      <Conteudo imagemLogoProps={viteLogo} imagemAltProps={altViteLogo}/>
    {/* Criar um rodapé com uma div, uma lista ul e 3 elementos li com itens de link para redes sociais e um parágrafos com o seguinte texto : "Todos os meus direitos reservados - 2023", não esqueça de colocar o código do símbolo de copyright. */}
      <Rodape/>
      
      </div>
    </>
  )
}