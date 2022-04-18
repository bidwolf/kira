# where_my_map

Aplicação criada para testar e aprender conhecimentos de git e gitflow enquanto tentamos esconder um mapa responsivamente com a API do Google Maps e com o framework Bootstrap

## Tecnologias utilizadas

- Github flow
- Bootstrap
- HTML
- CSS
- Javascript
- PHP

## Links úteis

- [Google Maps API](https://developers.google.com/maps/apis-by-platform)

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.1)

- [GitFlow Tutorial](https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow)

- [MDN - Mozilla Developer](https://developer.mozilla.org/pt-BR/)

- [W3C Schools](https://www.w3schools.com/)

## Clonando o projeto

Para começar a codificar suas novas funcionalidades para este repositório, primeiramente, você deve clonar o repositório a partir do comando: `git clone https://github.com/bidwolf/where_my_map.git`.

Uma vez que o repositório encontra-se localmente na sua máquina é hora de utilizar os comandos provenientes da extensão **gitFLow** para gerar o fluxo de trabalho que é o objetivo deste repositório.

No repositório local, digite o comando `git flow log` para ver o histórico de ramificações, releases e features adicionadas ao projeto.
Caso o projeto não tenha sido iniciado com `git flow init`, a seguinte mensagem aparecerá :
> Fatal: Not a gitflow-enabled repo yet. Please run 'git flow init' first.

Para solucionar basta executar o comando recomendado.

## Iniciando um fluxo de trabalho com GitFlow

Ao executar o comando `git flow init`, será executado um script com uma série de parâmetros a serem configurados. Os parâmetros são:

- ***main*** : Nome da branch principal, ou ambiente de produção, onde fica o código que se pressupõe que está estável para utilização.

- ***develop***: Nome da branch de desenvolvimento, onde são criadas novas features e resolvidos alguns bugs do projeto.

- ***feature*** : Nome da branch que lida com as novas funcionalidades do seu projeto (esta branch se comunica unicamente com a branch de desenvolvimento).

- ***bugfix*** : Nome da branch criada para solucionar algum bug existente no projeto.

- ***release*** : Nome da branch que gera uma nova atualização do seu projeto (esta branch é responsável por subir o código desenvolvido na branch de desenvolvimento para a branch principal).

- ***hotfix*** : Nome da branch que lida com alterações diretas do ambiente de produção, que não tem a ver com bugs ou novas atualizações (única branch que se comunica diretamente e exclusivamente com a branch main)

- ***support*** : Nome da branch criada para dar suporte a versões antigas do projeto(aplicar hotfix em versões anteriores é uma prática útil em projetos que mantém sistemas legado).

- ***version tag prefix*** : é o prefixo de cada tag das versões do projeto(exemplo, ao utilizar o prefixo v: suas tags de versão ficam como v1.2.3.456).

## Criando uma nova funcionalidade ( Feature )

Como citado acima, a branch feature lida com as novas funcionalidades do seu projeto. Entretanto ela é uma branch temporária, que ao ser finalizada, deve ser enviada para a branch de desenvolvimento, e então, ser excluída da work three.

### Como adicionar uma feature

As features são adicionadas através do comando `git flow feature start feature_name`, e esse comando irá fazer o seguinte procedimento:

1. Executa o comando `git checkout develop`

2. cria uma branch com o nome : "feature/" + nome da feature designado e então faz o Head apontar para essa branch( `git checkout -b feature/feature_name` ).

### Adicionando código a uma Feature

Tudo parece muito novo quando lidamos com GitFlow, mas o que o GitFlow faz é uma abstração de comandos git para facilitar a compreensão do fluxo de trabalho na abordagem flow.

Claramente nem tudo nele seria novo, e adicionar código a uma feature se resume a usar `git add` em suas alterações e `git commit` para salvar essas alterações na branch `feature` anteriormente criada.

### Feature finalizada, e agora?

Agora é hora de tornar essa nova funcionalidade parte da branch de desenvolvimento ***MAS LEMBRE-SE DE EFETUAR O PULL ANTES***. Para isso é necessário executar o comando : `git flow feature finish feature_name`, que vai efetuar as seguintes ações :

1. Mudar o Head para a branch de desenvolvimento ( `git checkout develop`)

2. Efetuar o merge da branch da nova funcionalidade para a branch de desenvolvimento ( `git merge feature/feature_name`).

3. Excluir a branch da funcionalidade criada ( `git branch -D feature/feature_name`)

## Adicionando novas atualizações (Releases) ao projeto

Ao serem adicionadas novas funcionalidades e/ou dado um tempo especificado (como no league of legends que se atualiza a cada 2 semanas) um código desenvolvido deve ser testado, analisado e revisado para que possa ser atualizado, e o código em questão passará então a ser parte do ambiente de produção.

### O que são as versões do código

Você já deve ter visto em algum lugar tags com versões de programas, como 1.0.0, e o que cada número significa foge do contexto desse repositório, entretanto, você pode ler este [excelente artigo](https://semver.org/) sobre versionamento semântico.

### Como adicionar uma Release

Parecido com as features, as releases são adicionadas através do comando `git flow release start release_tag`, e esse comando irá fazer o seguinte procedimento:

1. Executa o comando `git checkout develop`

2. cria uma branch com o nome : "release/" + nome da release designada, e então faz o Head apontar para essa branch( `git checkout -b release/release_tag` ).

### O que adicionar na branch Release

Essa nova atualização irá adicionar todas as funcionalidades atuais que foram adicionadas à branch de desenvolvimento, portanto nenhum novo recurso pode ser adicionado depois deste ponto — apenas atualizações de segurança, geração de documentação e outras tarefas relacionadas ao lançamento da nova versão devem ser feitas nesta ramificação.

### Release finalizada, e agora?

Agora é hora de tornar essa nova versão parte do ambiente de produção. Entretanto vale ressaltar que a branch de desenvolvimento também deve ser atualizada, pois, novos recursos importantes podem ter sido adicionados na branch de desenvolvimento atual de forma que as novas funcionalidades que estão sendo desenvolvidas devem conter esses recursos.

 Para isso é necessário executar o comando : `git flow release finish release_tag`, que vai efetuar as seguintes ações :

1. Mudar o Head para a branch de produção ( `git checkout main`)

2. Efetuar o merge da branch da nova atualização para a branch de produção ( `git merge release/release_tag`).

3. Mudar o Head para a branch de desenvolvimento( `git checkout develop`).

4. Efetuar o merge da branch da nova atualização para a branch de desenvolvimento ( `git merge release/release_tag`).

5. Atualizar a tag do projeto ( `git tag -a prefix_tag1.4` )

6. Excluir a branch da Release criada ( `git branch -D release/release_tag`).

Feito isso o código estará disponível para poder ser analisado pelos administradores do repositório. Recomenda-se fortemente que nesse ponto seja feito um pull request.
