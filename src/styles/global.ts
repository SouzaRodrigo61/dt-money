import { createGlobalStyle } from "styled-components";

// Inicialização das variaveis do CSS in JS

// Motivação: Reseta os atributos globais do css do browser para as definições a escolha da aplicação
export const GlobalStyle = createGlobalStyle`
  
  	:root {
	  	--red: #e52e4d;
	  	--blue: #5429cc;
        --green: #33c695;
	  
	  	--blue-light: #6933ff;
	  	
	  	--text-title: #363f5f;
	  	--text-body: #969cb3;

      	--background: #f0f2f5;
	  	--shape: #ffffff;
    }
    
  	* {
	  	margin: 0;
	  	padding: 0;
	  	box-sizing: border-box;
	}
    
    // font-size: 16px (Desktop)
    // Unidade de medida sera o 'rem' 
    // 1 rem = 16px
    html {
      	@media(max-width: 1080px) {
	      	font-size: 93.75%; // 15px 
        }
      
		@media(max-width: 720px) {
			font-size: 87.5%; // 14px 
		}
    }
	
	body {
	  	background: var(--background);
	  	-webkit-font-smoothing: antialiased;
	}
    
    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
	
	button {
      	cursor: pointer;
	}
	
	[disabled] {
	  	opacity: 0.6;
	  	cursor: not-allowed;
	}
`;
