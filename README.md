# FLOW — Apresentação de App

## Publicação no GitHub Pages

A raiz contém `index.html` autónomo, pronto para GitHub Pages sem build nem dependências. Em Settings → Pages, a origem é **Deploy from a branch**, branch **main**, pasta **/ (root)**. O endereço previsto é https://andrecosta99.github.io/codex/. A disponibilidade só fica confirmada após a ativação e publicação no GitHub.

`index.source.html` preserva o HTML modular para edição em conjunto com `app.js` e `style.css`.

## Versão simples para apresentar e partilhar

`FLOW.html` é um ficheiro autónomo: inclui CSS, JavaScript, GSAP e fontes. Abra-o com um duplo clique no Chrome, Edge ou Firefox. Não requer servidor, npm ou Internet. Para apresentar, clique em **ECRÃ INTEIRO**. Para partilhar, envie apenas esse ficheiro.

As instruções abaixo destinam-se à edição dos ficheiros de origem.

Motion graphic em HTML/CSS e GSAP, com composição nativa de **1920 × 1080** e duração exata de **30 segundos**. Interface e conteúdo em português. Sem imagens remotas, APIs ou credenciais: fontes e GSAP são servidos localmente.

## Executar

Requer Node.js 24 e npm. Na pasta `/workspace/codex`:

```sh
npm ci --cache /workspace/.npm-cache --no-audit --no-fund
npm start
```

O servidor usa a porta 3000 (configurável com `PORT`). A página reproduz automaticamente em loop. Os controlos permitem pausar, reiniciar, navegar na timeline, desligar a repetição e entrar em ecrã inteiro. Espaço alterna pausa; setas avançam ou recuam um segundo.

## Cenas

| Tempo | Cena |
| --- | --- |
| 0–3 s | Quatro segmentos formam o símbolo FLOW |
| 3–7 s | Menos confusão: cartões, mensagens e notificações com echo trail |
| 7–11 s | Mais clareza: dashboard com projetos, tarefas e progresso |
| 11–16 s | A equipa alinhada: quadro Kanban e colaboradores |
| 16–21 s | Projetos em movimento: calendário semanal e indicadores |
| 21–26 s | Tudo num só lugar: composição desktop e mobile |
| 26–30 s | Regresso ao símbolo, nome e tagline |

## Validação

```sh
npm run check
npm test
node validate.mjs --realtime
```

O teste funcional usa o Chromium instalado em `/usr/bin/chromium`, verifica as sete cenas, duração, autoplay, controlos, ausência de erros JS/HTTP e overflow em mobile. Guarda capturas em `artifacts/` (ignorado pelo Git). `--realtime` verifica adicionalmente uma reprodução completa sem saltos na timeline. Não é necessário compilar.

## Ficheiros

- `index.html`: estrutura do player e das cenas.
- `style.css`: identidade visual, interfaces e escala da composição.
- `app.js`: dados fictícios e timeline GSAP única; `window.flowTimeline` permite inspecionar a animação.
- `server.mjs`: servidor estático local.

A entrega é uma animação HTML, sem áudio; não inclui exportação para vídeo.
