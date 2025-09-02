# 🚀 Spacedash

Spacedash é uma aplicação web interativa que consome dados da [API oficial da NASA](https://api.nasa.gov/), oferecendo uma experiência visual e educativa sobre o espaço. O projeto foi desenvolvido com foco em desempenho, escalabilidade e boas práticas modernas de frontend.

---

# ✨ Objetivo

Este projeto foi desenvolvido como parte do meu portfólio de frontend, com o objetivo de explorar:

- APIs públicas reais
- Design responsivo e intuitivo
- Práticas modernas com Vue + Tailwind + Vitest
- Ambientes com Docker para fácil compartilhamento

---

## 🛰️ Funcionalidades

- Consulta de imagens astronômicas do dia (APOD)
- Listagem de fotos da Mars Rover
- Busca de dados astronômicos por data
- Interface responsiva e moderna
- Totalmente dockerizada para facilitar testes e deploy

---

## 🛠️ Tecnologias Utilizadas

- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) para estilização
- [Vite](https://vitejs.dev/) como bundler
- [Vitest](https://vitest.dev/) para testes unitários
- [Docker + Docker Compose](https://www.docker.com/) para ambiente isolado
- [NASA Open APIs](https://api.nasa.gov/) como fonte de dados

---

## 📦 Instalação

### Pré-requisitos

- Node.js `>=20.19` ou use Docker
- Docker e Docker Compose instalados (opcional, mas recomendado)

### Clonando o projeto

```bash
git clone https://github.com/seu-usuario/spacedash.git
cd spacedash
```
### Usando Docker (recomendado)

```bash
docker compose up -d --build
docker compose up -d
```
Acesse a aplicação em: http://localhost:5199

### Ambiente local (sem Docker)

```bash
npm install
npm run dev
```
Acesse a aplicação em: http://localhost:5173

---

# 🔬 Executar testes

```bash
npm run test
```

Ou com coverage:

```bash
npm run test -- --coverage
```

---

# 🔑 Variáveis de Ambiente

Crie um arquivo .env com sua chave da API da NASA:

```bash
VITE_NASA_API_KEY=your_api_key_here
```
Você pode obter uma chave gratuita em: [API-NASA](https://api.nasa.gov/)

---

# 📁 Estrutura do Projeto

```bash
src/
├── components/
├── views/
├── assets/
├── api/           # chamadas à API da NASA
├── composables/   # funções reativas reutilizáveis
├── tests/

```

---

# 🔧 Comandos Úteis

| Comando                             | Descrição                                                   |
|-------------------------------------|-------------------------------------------------------------|
| `docker compose up -d`              | Sobe o projeto em background usando Docker                  |
| `docker compose down`              | Encerra os containers e remove a rede criada                |
| `docker compose stop`              | Pausa os containers (mantém a rede e volumes)               |
| `docker compose start`             | Reinicia os containers que estavam parados                  |
| `docker compose exec app sh`       | Acessa o shell do container `app`                           |
| `npm run dev`                      | Roda o projeto localmente com Vite                          |
| `npm run build`                    | Gera a versão de produção da aplicação                      |
| `npm run test`                     | Executa os testes com Vitest                                |
| `npm run test -- --coverage`      | Executa os testes e gera relatório de cobertura             |
| `npx tailwindcss init`             | Gera o arquivo `tailwind.config.js`                         |
| `npx vite preview`                 | Visualiza a build de produção localmente                    |


---

Desenvolvido com 💙 por [Wislla Nuânska](https://www.linkedin.com/in/wislla-vasconcelos-b124371a4/)
