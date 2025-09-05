# 🎧 Audible Clone

Um clone do Audible desenvolvido durante o [Minicurso de ReactJS](https://www.youtube.com/watch?v=SspuJnpfVP0&list=PLpdAy0tYrnKz5tdfml_X771VAZsIx3GC-&index=6) da [Hashtag Treinamentos](https://blp.hashtagtreinamentos.com/links-instagram?fonte=biohashp&origemurl=hashtag_yt_org_bio_hashp&utm_source=instagram-org&utm_medium=bio).  

O objetivo é praticar **React** e **conceitos modernos de front-end**, criando uma interface semelhante ao player do Audible.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Ferramentas
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### 📥 Clonar o repositório
```bash
git clone https://github.com/eriick-monteiro/Spotify-Clone.git
cd Spotify-Clone
```

### 📦 Instalar dependências
```bash 
npm install
# ou
yarn install
```

### ▶️ Rodar em ambiente de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

Por padrão o Vite vai rodar em:
<br>
👉 http://localhost:5173

### 📦 Build para produção
```bash
npm run build
npm run preview
```

### 📂 Estrutura do projeto
```
📂 Audible-Clone/
├── 📂 public/
│   └── 🎨 vite.svg
├── 📂 src/
│   ├── 📂 assets/        # Imagens e ícones
│   │   ├── 📂 capitulos/
│   │   │   ├── 🎵 01.mp3
│   │   │   └── 🎵 02.mp3
│   │   ├── 🖼️ bras_cubas.jpeg
│   │   └── ⚛️ react.svg
│   ├── 🎨 App.css
│   ├── ⚛️ App.jsx
│   ├── 🎛️ BotoesControle.jsx
│   ├── 🎵 Capa.jsx
│   ├── 📊 ContainerProgresso.jsx
│   ├── 🎼 GerenciadorFaixa.jsx
│   ├── 🎨 index.css
│   ├── 🚀 main.jsx
│   └── 🎚️ SeletorCapitulos.jsx
├── 🙈 .gitignore
├── 🛠️ eslint.config.js
├── 🖼️ image.png
├── 🌐 index.html
├── 📦 package-lock.json
├── 📦 package.json
├── 📖 README.md
└── :zap: vite.config.js
```

### 📸 Preview
![alt text](image.png)