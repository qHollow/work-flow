import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/assets/fonts/SFProDisplay-Regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: url('/assets/fonts/SFProDisplay-Medium.woff2') format('woff2')
  }

  @font-face {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/assets/fonts/SFProDisplay-Semibold.woff2') format('woff2')
  }

  /* Указываем box sizing */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'SF Pro Display', sans-serif;
  }

  /* Убираем внутренние отступы и стилизацию */
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  /* Убираем внешние отступы */
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Выставляем основные настройки по-умолчанию для body */
  body {
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }


  /* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Упрощаем работу с изображениями */
  img {
    max-width: 100%;
    display: block;
  }

  /* Указываем понятную периодичность в потоке данных у article*/
  article > * + * {
    margin-top: 1em;
  }

  /* Наследуем шрифты для инпутов и кнопок */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  
`;

export default GlobalStyle;
