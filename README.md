# 📱 Aplicação Mobile - Expo & React Native

> **Minha primeira aplicação mobile!** 🎉  
> Este projeto foi desenvolvido para dar os primeiros passos no desenvolvimento de aplicativos móveis utilizando **React Native** e **Expo**.

---

## 🚀 Sobre o Projeto

O objetivo principal deste aplicativo foi explorar a integração entre a biblioteca **React Native** e o hardware do celular usando as APIs do ecossistema **Expo**. 

Com ele, é possível acessar sensores e informações em tempo real do próprio dispositivo, além de interagir com a câmera e a galeria de fotos.

### ✨ Funcionalidades

- **Informações do Dispositivo:** Exibe o nome do celular, modelo, quantidade de memória RAM total e o idioma nativo do sistema via `expo-device` e `expo-localization`.
- **Uso da Câmera:** Permite tirar fotos diretamente pelo app com o `expo-camera`.
- **Alternância de Câmera:** Botão para inverter entre a câmera traseira e a câmera frontal.
- **Acesso à Galeria:** Permite selecionar imagens armazenadas no celular via `expo-image-picker`.
- **Visualização da Foto:** Exibe a imagem capturada/selecionada na tela com a opção de tirar uma nova foto.

---

## 🛠️ Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** — Framework para desenvolvimento mobile multiplataforma.
- **[Expo](https://expo.dev/)** — Plataforma e conjunto de ferramentas para simplificar o desenvolvimento com React Native.
- **`expo-device`** — Obtenção de métricas de hardware do aparelho.
- **`expo-camera`** — Captura de imagens e controle da câmera.
- **`expo-image-picker`** — Seleção de mídias da galeria.
- **`expo-localization`** — Leitura de idioma e região do aparelho.

---

## 🔧 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* App **Expo Go** instalado no seu celular ([Android na Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS na App Store](https://apps.apple.com/app/expo-go/id982107779))

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/nome-do-seu-repositorio.git](https://github.com/seu-usuario/nome-do-seu-repositorio.git)

## 2. Acesse a pasta do projeto:
 
```bash
cd nome-do-seu-repositorio
```
 
## 3. Instale as dependências:
 
```bash
npm install
```
 
## 4. Inicie o servidor de desenvolvimento do Expo:
 
```bash
npx expo start
```
 
## 5. Abra no seu celular:
 
- Abra o app Expo Go no celular.
- Escaneie o QR Code que aparecerá no terminal (ou no navegador).
- Pronto! O aplicativo será carregado no seu aparelho e você poderá ver as alterações em tempo real.
## 👤 Autor
 
Desenvolvido por Eduardo Zanetti 🚀
 
Primeira experiência construindo um app mobile com React Native e Expo!
