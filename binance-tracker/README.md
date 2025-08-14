Binance Tracker
Binance Tracker é uma aplicação React criada por mim, que permite visualizar em tempo real os preços e variações de criptomoedas negociadas na Binance. Com uma interface intuitiva e responsiva, o usuário pode buscar moedas, acompanhar cotações e criar listas personalizadas para monitoramento.

Autor:
Nelson Lucas

Funcionalidades:
🔍 Busca de moedas: Filtre rapidamente pares de criptomoedas com base no nome.

📈 Atualização em tempo real: Os dados são recebidos via WebSocket diretamente da Binance.

🧩 Criação de listas personalizadas: Adicione pares específicos para acompanhar em uma lista separada.

📊 Detalhes completos de cada moeda: Veja variações, volume, preço de abertura, máxima/mínima e muito mais.

⏮️ Paginação: Navegue entre os principais pares de mercado com facilidade.

🛠️ Tecnologias utilizadas
React com TypeScript

React Router DOM para navegação entre páginas

Styled Components para estilização

WebSocket para dados em tempo real

Context API para gerenciamento da lista personalizada

📁 Estrutura de pastas
Code
src/
├── components/         # Componentes reutilizáveis (CryptoList, SymbolSelector)
├── context/            # WatchlistContext para lista personalizada
├── hooks/              # Hook para conexão com WebSocket da Binance
├── pages/              # Páginas principais (Home, CreateList, SymbolDetail)
├── Styles/             # Estilização com styled-components
├── App.tsx             # Componente principal com rotas
└── index.tsx           # Ponto de entrada da aplicação
▶️ Como executar o projeto
Clone o repositório:

bash
git clone https://github.com/seu-usuario/binance-tracker.git
Instale as dependências:

bash
npm install
Inicie o servidor de desenvolvimento:

bash
npm start
Acesse no navegador:

Code
http://localhost:3000
📌 Observações
A aplicação consome dados públicos da API da Binance.

É necessário conexão com a internet para receber os dados em tempo real via WebSocket.