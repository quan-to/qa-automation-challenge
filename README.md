# QA Automation Challenge - QUANTO

## Desenvolvido por Victor Battestin
## Descrição:

Como requisitado, foi desenvolvido um script utilizando cypress tanto para front-end quanto para backend validando 3 logradouros, ou seja, utilizando 3 CEPs na pesquisa.

Abaixo irei falar mais sobre a estrutura do teste, como buildar e como executar os testes

## Dependências

- cypress: O teste foi escrito em Cypress por ser um framework com uma vasta comunidade e atender tanto back quanto front-end
- cypress-cucumber-preprocessor: Como requisitado, foi utilizado o Cucumber para descrição dos cenários de teste
- mochawesome, mochawesome-merge e mochawesome-report-generator: Também foi incluído um relatorio final de execução em html para acompanhar os resultados e gerar artefatos e evidências;
- move-file-cli e rimraf: As duas dependências foram necessárias devido a um problema no MARGE para gerenciar os diretórios e abrir corretamente o relatório final de execução

## Scripts
- "cy:clean": Limpa os resultados antigos que ainda existem no diretorio de resultados
- "cy:run": Executa os testes e gera os jsons separadamente por feature
- "report:merge": Mergeia os relatórios gerados em json em um único relatório
- "report:generate": Gera um relatório único em HTML
- "report:format": Move o relatório para o diretório correto, permitindo a visualzação do mesmo
- "report:clean": Apaga o diretório antigo para evitar acumulo de diretórios inúteis no projeto
- "project:run": Como o próprio nome do script sugere, roda todos os scripts anterios em um só garantindo uma execução simples e limpa 


## Como executar
*1) Instale o node e o git na sua maquina*

*2) Clone/Baixe o projeto*

*3) Na pasta raiz, via linha de comando, execute o build do projeto: npm install*

*4) Com todas as dependências instaladas, execute os testes com: npm run project:run*

*5) Confira o relatório com os resultados em ./cypress/results/merged-report.html*

*obs: O projeto está pronto para receber novas features e gerar o relatorio de execução de todas as features executadas. A estrutura de pastas usada foi a mais comum seguindo o padrão page-object e a geração automática do cypress.*


### Obrigado, aguardo um feedback :)