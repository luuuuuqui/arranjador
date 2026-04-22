# Arranjador

## Descrição

Este é um projeto de mockup desenvolvido em Vue.js para a disciplina de Design Web. O objetivo é criar uma "vitrine" digital para um arranjador, permitindo que ele exiba seus arranjos disponíveis, com detalhes sobre cada arranjo e seus respectivos preços. O site oferece uma interface amigável para navegação, visualização de produtos e interação básica.

## Funcionalidades

- **Página Inicial**: Apresentação do arranjador com seção hero e navegação.
- **Lista de Arranjos**: Exibição de todos os arranjos disponíveis em uma lista organizada.
- **Detalhes do Arranjo**: Página dedicada para visualizar informações detalhadas de cada arranjo, incluindo descrição e preço.
- **Favoritos**: Sistema para marcar arranjos como favoritos.
- **Tema**: Alternância entre temas claro e escuro.
- **Responsividade**: Design adaptável para diferentes dispositivos.

## Tecnologias Utilizadas

- **Vue.js**: Framework JavaScript para construção da interface.
- **Vue Router**: Para navegação entre páginas.
- **Composables**: Para lógica reutilizável (favoritos, tema).
- **CSS**: Estilização personalizada.
- **JSON**: Dados mockados para os arranjos.

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/luuuuuqui/arranjador.git
   ```

2. Navegue para o diretório do projeto:
   ```
   cd arranjador
   ```

3. Instale as dependências:
   ```
   npm install
   ```

## Uso

### Desenvolvimento
Para executar o projeto em modo de desenvolvimento com hot-reload:
```
npm run serve
```

O servidor será iniciado em `http://localhost:8080` (ou porta disponível).

### Produção
Para compilar e minificar para produção:
```
npm run build
```

Os arquivos compilados estarão na pasta `dist`.

### Configuração Personalizada
Para personalizar a configuração, consulte a [documentação do Vue CLI](https://cli.vuejs.org/config/).

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── composables/         # Lógica composable
├── data/                # Dados mockados (arrangements.json)
├── layouts/             # Layouts da aplicação
├── router/              # Configuração de rotas
├── views/               # Páginas da aplicação
└── assets/              # Estilos e imagens
```

## Contribuição

Este projeto é um mockup educacional. Para sugestões ou melhorias, abra uma issue no repositório.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
