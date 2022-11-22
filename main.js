document.addEventListener('DOMContentLoaded', () => {
  frames['editor'].document.head.innerHTML = `
    <style>
      *{
        position: relative;
        box-sizing: border-box;
        margin: 0;
        padding: 10px;
      }
      body {
        color: white;
        word-break: break-all;
        padding: 1rem;
      }

      :where(div, p, h1,h2,h3,h4,h5,h6, span, a, ul, ol, li, header, footer, article, section, img, input, textarea, label, nav, main, aside) {
        margin-bottom: 10px;
      }
      :where(div, p, h1,h2,h3,h4,h5,h6, span, a, ul, ol, li, header, footer, article, section, img, input, textarea, label, nav, main, aside)::before {
        content: "";
        position: absolute;
        font-weight: 900;
        top: -12px;
        right: 1rem;
      }

      p {border: 1px solid red;}
      span {border: 1px solid gray;}
      h1,h2,h3,h4,h5,h6 {border: 1px solid peru;}
      a {border: 1px solid brown;}
      ul {border: 1px solid green;}
      ol {border: 1px solid purple;}
      li {border: 1px solid yellow;}
      header {border: 1px solid olivedrab;}
      aside {border: 1px solid blue;}
      footer {border: 1px solid mediumseagreen;}
      article {border: 1px solid salmon;}
      section {border: 1px solid cyan;}
      img {border: 1px solid beige;}
      input, textarea {
        border: 1px solid rosybrown;
        background-color: transparent;
        color: white;
      }
      textarea {border: 1px solid darkgreen;}
      label {border: 1px solid olive;}
      nav {border: 1px solid palegoldenrod;}
      main {border: 1px solid teal;}
      
      div {
        display: grid;
        gap: 10px;
        border: 1px solid white;
      }

      div::before {content: "DIV";}
      p::before{content: "P";}
      h1::before{content: "H1";}
      h2::before{content: "H2";}
      h3::before{content: "H3";}
      h4::before{content: "H4";}
      h5::before{content: "H5";}
      h6::before{content: "H6";}
      span::before{content: "SPAN";}
      a::before{content: "A";}

      ul::before{content: "UL";}
      ol::before{content: "OL";}
      li::before{content: "LI";}
      header::before{content: "HEADER";}
      aside::before{content: "ASIDE";}
      footer::before{content: "FOOTER";}
      article::before{content: "ARTICLE";}
      section::before{content: SECTION";}
      main::before{content: "MAIN";}
      img::before{content: "IMG";}
      input::before{content: "INPUT";}
      textarea::before{content: "TEXTAREA";}
      label::before{content: "LABEL";}
      nav::before{content: "NAV";}
    </style>
  `;
});

const handleKeyDown = (e) => {
  const input = document.getElementById('input-editor');

  if (e.key == 'Tab') {
    e.preventDefault();
    var start = input.selectionStart;
    var end = input.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    input.value = input.value.substring(0, start) +
      "\t" + input.value.substring(end);

    // put caret at right position again
    input.selectionStart = input.selectionEnd = start + 1;
  }
}

const handleEditor = () => {
  const input = document.getElementById('input-editor');
  frames['editor'].document.body.innerHTML = input.value;
}