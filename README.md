# TDE3-API
# Projeto: Consumidor de API com JavaScript

Este projeto é uma aplicação web simples criada para demonstrar como fazer requisições HTTP (GET e POST) usando a API Fetch do JavaScript moderno, com `async/await`.

## 1. API Utilizada

A API pública utilizada foi a **JSONPlaceholder** (https://jsonplaceholder.typicode.com/).

Esta é uma API REST gratuita, ideal para testes e prototipagem. Ela permite requisições GET, POST, PUT, DELETE, etc., sem necessidade de autenticação.

**Endpoints utilizados:**
* `GET /posts`: Utilizado para buscar uma lista de posts existentes.
* `POST /posts`: Utilizado para simular a criação de um novo post.

## 2. Métodos Implementados

O `script.js` contém duas funções assíncronas principais:

### `fetchPosts()` (Requisição GET)

* **Objetivo:** Buscar e exibir dados da API.
* **Trigger:** Disparada pelo clique no botão "Buscar Posts (GET)".
* **Fluxo:**
    1.  Define o status como "Carregando...".
    2.  Utiliza `await fetch(API_URL)` para fazer a requisição GET.
    3.  **Tratamento de Erro:** Verifica se `response.ok` é `true`. Se não for (ex: erro 500), um erro é lançado (`throw new Error`).
    4.  Converte a resposta para JSON com `await response.json()`.
    5.  Chama a função `displayPosts()` para exibir os 5 primeiros resultados.
    6.  Se qualquer erro ocorrer (rede, status HTTP, etc.), ele é capturado pelo bloco `catch` e exibido na tela.

### `createPost()` (Requisição POST)

* **Objetivo:** Enviar dados (criar um novo recurso) para a API.
* **Trigger:** Disparada pelo clique no botão "Criar Post (POST)".
* **Fluxo:**
    1.  Cria um objeto (`newPostData`) com os dados a serem enviados.
    2.  Chama `await fetch(API_URL, options)` onde `options` é um objeto que define:
        * `method: 'POST'`
        * `headers: { 'Content-Type': 'application/json' }` (essencial para a API saber que está recebendo JSON)
        * `body: JSON.stringify(newPostData)` (converte o objeto JS em texto JSON).
    3.  **Tratamento de Erro:** Também verifica `response.ok`. Para POST, um sucesso é geralmente o status 201 (Created).
    4.  Converte a resposta (que contém o post criado com um novo ID) para JSON.
    5.  Exibe o post recém-criado na tela.
    6.  Erros são capturados pelo `catch` e exibidos.
