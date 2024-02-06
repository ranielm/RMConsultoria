# Critérios de Aceite

1. Validações do formulário.
    * Retornar mensagem de usuário não encontrado e/ou senha inválida.
    * Usar json-server para inserir e validar logins de usuários.
    https://www.npmjs.com/package/json-server
2. Usar JWT token navegar, autenticar e autorizar os usuários.
    * https://blog.rocketseat.com.br/reactjs-autenticacao/
3. Guardar JWT (estudar) no localStorage.
4. Usar Firebase (estudar).
5. Usar a biblioteca react-toastify.
    * https://www.npmjs.com/package/react-toastify
    Se possível utilizar as mensagens "coladas" na tela.
6. Criar a tela de login.
    * O usuário deve conseguir inserir seu username e password.
7. Criar a tela de envio de projetos.
    * O usuário deve conseguir fazer upload de arquivos .pdf e/ou submeter uma mensagem com o link do github.
    * Validar se esse link é de um repositório válido do github (estudar)
    * Os projetos podem pertencer a um ou mais alunos.
    * https://gohorse.com.br/extreme-go-horse-xgh/
    * Somente usuários com a permissão de alunos podem submeter os projetos.
8. Criar tela de listagem de projetos.
    * Nessa tela os professores serão capazes de analisar os projetos e dar a sua nota. (usar estrelas de 1 a 5)
    * Um ou mais professores poderão darem suas notas a um determinado projeto.
    * Deve haver um campo exibindo a nota final do projeto usando as estrelas.
    * Somente usuários com a permissão de professores podem avaliar os projetos.
    * So irá aparecer os projetos que o professor logado ainda não avaliou.
9. Os alunos poderão acompanhar as suas notas.
    * Determinado professor avalia o projeto e o aluno ve a sua nota parcial.
    * Quando todos os usuários com permissão de professor avaliarem o projeto do aluno, então exibir a nota final.
    * Somente usuários com a permissão de alunos podem verificar suas notas parciais e finais.