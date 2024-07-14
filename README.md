# OnePageShop

OnePageShop é um projeto de demonstração desenvolvido com Javascript, React e Firebase. Este projeto serve como uma vitrine empresarial de produtos, oferecendo uma interface intuitiva e fácil de usar para a exibição e gerenciamento de produtos. O site inclui uma página de administração que permite adicionar, editar e remover produtos.

## Funcionalidades

- **Vitrine de Produtos**: Exibição de produtos em uma interface amigável e moderna.
- **Página de Administração**: Adição, edição e remoção de produtos.
- **Autenticação**: Sistema de login para acesso à página de administração.
- **Responsivo**: Layout adaptável a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **Frontend**: React
- **Backend**: Firebase (Firestore, Authentication)
- **Linguagem**: Javascript
- **Estilização**: CSS

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/product-showcase-pro.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd product-showcase-pro
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Configure o Firebase:
    - Crie um novo projeto no Firebase.
    - Adicione as configurações do Firebase no arquivo `.env` (você pode usar o arquivo `.env.example` como base):
        ```env
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```

5. Inicie o servidor de desenvolvimento:
    ```bash
    npm start
    ```

## Uso

1. **Vitrine de Produtos**: Acesse a página principal para ver os produtos disponíveis.
2. **Administração**: Faça login na página de administração para gerenciar os produtos.
3. **Adição de Produtos**: Utilize o formulário na página de administração para adicionar novos produtos.
4. **Edição de Produtos**: Edite as informações dos produtos existentes na página de administração.
5. **Remoção de Produtos**: Remova produtos da vitrine diretamente pela página de administração.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.