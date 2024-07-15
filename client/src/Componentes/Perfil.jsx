/* eslint-disable react/react-in-jsx-scope */ // Desativa o aviso do ESLint para importações desnecessárias do React
import PersonIcon from "@mui/icons-material/Person"; // Importa o ícone de pessoa da biblioteca Material-UI
import {
  SignedIn, // Componente que renderiza seu conteúdo apenas se o usuário estiver autenticado
  SignedOut, // Componente que renderiza seu conteúdo apenas se o usuário não estiver autenticado
  SignInButton, // Componente de botão para iniciar o processo de login
  UserButton, // Componente de botão para exibir informações do usuário autenticado
} from "@clerk/clerk-react"; // Importações relacionadas à autenticação usando Clerk

const StyledDiv = { // Estilização em linha para um contêiner div
  background: `linear-gradient(45deg, rgba(0, 151, 178), rgba(126, 217, 87))`, // Fundo com gradiente linear
  borderRadius: "8px", // Borda arredondada
  display: "flex", // Exibe seus filhos em um fluxo flexível
  alignItems: "center", // Alinha itens verticalmente no centro
  padding: "8px", // Preenchimento interno de 8 pixels
  margin: "10px", // Margem externa de 10 pixels
};

function Perfil() { // Componente funcional principal chamado Perfil
  return (
    <> {/* Fragmento React vazio para retornar múltiplos elementos */}
      <SignedOut> {/* Renderiza seu conteúdo se o usuário estiver desconectado */}
        <div style={StyledDiv}> {/* Div com estilos definidos por StyledDiv */}
          <PersonIcon sx={{ color: "white" }} /> {/* Ícone de pessoa com cor branca */}
          <SignInButton // Botão de login
            style={{ // Estilos em linha para o botão
              border: "none", // Sem borda
              background: `none`, // Sem fundo
              color: "white", // Texto branco
              cursor: "pointer", // Cursor de ponteiro ao passar por cima
            }}
          />
        </div>
      </SignedOut>
      <SignedIn> {/* Renderiza seu conteúdo se o usuário estiver conectado */}
        <UserButton /> {/* Botão para exibir informações do usuário conectado */}
      </SignedIn>
    </>
  );
}
export default Perfil; // Exporta o componente Perfil como padrão para ser usado em outros arquivos
