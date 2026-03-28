# 🧠 Task Manager - Frontend

🔗 **Acesse a aplicação:**
https://anotato-frontend.vercel.app/
---

Este projeto é um **gerenciador de tarefas (To-Do List)** desenvolvido com foco em **aprendizado prático de React e integração com APIs**.

A aplicação permite criar, visualizar e gerenciar tarefas, consumindo uma API backend própria.

---

## 🚀 Sobre o projeto

Este projeto foi desenvolvido para **uso pessoal e aprendizado**, com o objetivo de praticar:

* Componentização em React
* Gerenciamento de estado
* Integração com API REST
* Arquitetura de frontend
* Boas práticas de desenvolvimento

---

## 🖥️ Funcionalidades

* ✅ Criar tarefas
* ✅ Listar tarefas pendentes
* ✅ Marcar tarefas como concluídas
* ✅ Visualizar tarefas concluídas em modal
* ✅ Feedback visual com notificações (toast)

---

## 🧱 Arquitetura

O projeto segue uma estrutura baseada em separação de responsabilidades:

```id="p2292w"
src/
  components/
    TaskBox/
      TaskBox.jsx
      TaskList.jsx
      TaskItem.jsx
      TaskInput.jsx
      TaskCompletedModal.jsx

  services/
    api.js
    taskService.js

  pages/
    Dashboard.jsx
```

---

## 🧠 Conceitos aplicados

* Lifting State Up
* Componentização
* Props e comunicação entre componentes
* Separação entre UI e lógica
* Consumo de API com Axios
* Interceptors para autenticação

---

## 🔗 Integração com backend

O frontend consome uma API REST para gerenciamento das tarefas.

Exemplo de endpoints utilizados:

* `GET /tasks`
* `POST /tasks`
* `PUT /tasks/finish/:id`

---

## ⚙️ Tecnologias utilizadas

* React
* JavaScript (ES6+)
* Axios
* CSS

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash id="7fvd86"
git clone https://github.com/seu-usuario/seu-repo.git
```

### 2. Instalar dependências

```bash id="64j6nc"
npm install
```

### 3. Rodar o projeto

```bash id="d2ojip"
npm run dev
```

---

## 🌐 Deploy

O projeto está hospedado na Vercel:
https://anotato-frontend.vercel.app/

---

## 📌 Melhorias futuras

* [ ] Filtro de tarefas (todas / pendentes / concluídas)
* [ ] Busca por tarefas
* [ ] Manipulação do perfil de usuário

---

## 📚 Aprendizados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes como:

* Organização de código em React
* Fluxo de dados entre componentes
* Consumo e manipulação de dados vindos do backend
* Boas práticas de frontend moderno

---

## 👨‍💻 Autor
[Yagho Petini](https://github.com/YaghoJP)
---
