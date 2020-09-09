import React from 'react';

const original = (
  <g>
    <path fill="#62ba12" d="M0 0h24v24H0z" />
    <path
      d="M4.696 6.329a1.095 1.095 0 01-1.067-1.087c0-.588.479-1.075 1.067-1.088h3.821c2.508 0 4.566 2.063 4.566 4.567v5.467a3.502 3.502 0 003.484 3.445c1.891 0 3.458-1.55 3.479-3.445v-.121c.012-.592.5-1.067 1.087-1.067.588 0 1.075.475 1.088 1.067v.121c0 3.104-2.554 5.658-5.654 5.658-3.104 0-5.659-2.554-5.659-5.659V8.721a2.402 2.402 0 00-2.391-2.392H4.696z"
      fill="#888"
      fillRule="nonzero"
    />
    <path
      d="M10.171 16.333a6.601 6.601 0 001.092 2.017 5.66 5.66 0 01-3.83 1.496c-3.104 0-5.658-2.554-5.658-5.658 0-3.1 2.554-5.655 5.654-5.655h.775c.6 0 1.088.492 1.088 1.088a1.09 1.09 0 01-1.088 1.087h-.775c-1.908 0-3.479 1.571-3.479 3.484a3.496 3.496 0 003.479 3.479 3.473 3.473 0 002.742-1.338zM16.567 4.154c3.104 0 5.658 2.554 5.658 5.659v.12A1.095 1.095 0 0121.137 11a1.095 1.095 0 01-1.087-1.067v-.12a3.498 3.498 0 00-3.483-3.484c-.959 0-1.88.4-2.538 1.104a5.58 5.58 0 00-.958-2.066 5.634 5.634 0 013.496-1.213z"
      fill="#fff"
      fillRule="nonzero"
    />
  </g>
);

const mono = (
  <g>

    <path d="M24,0l-24,0l0,24l24,0l0,-24Zm-19.304,6.329l3.821,0c1.312,0 2.391,1.079 2.391,2.392l0,5.466c0,3.105 2.555,5.659 5.659,5.659c3.1,0 5.654,-2.554 5.654,-5.658l0,-0.121c-0.013,-0.592 -0.5,-1.067 -1.088,-1.067c-0.587,0 -1.075,0.475 -1.087,1.067l0,0.121c-0.021,1.895 -1.588,3.445 -3.479,3.445c-1.896,0 -3.463,-1.55 -3.484,-3.445l0,-5.467c0,-2.504 -2.058,-4.567 -4.566,-4.567l-3.821,0c-0.588,0.013 -1.067,0.5 -1.067,1.088c0,0.587 0.479,1.075 1.067,1.087Zm5.475,10.004c-0.658,0.846 -1.671,1.338 -2.742,1.338c-1.908,-0 -3.479,-1.571 -3.479,-3.479c0,-1.913 1.571,-3.484 3.479,-3.484l0.775,-0c0.6,-0 1.088,-0.491 1.088,-1.087c0,-0.596 -0.488,-1.088 -1.088,-1.088l-0.775,-0c-3.1,-0 -5.654,2.555 -5.654,5.655c0,3.104 2.554,5.658 5.658,5.658c1.417,-0 2.784,-0.534 3.83,-1.496c-0.48,-0.604 -0.846,-1.283 -1.092,-2.017Zm6.396,-12.179c-1.267,-0 -2.5,0.425 -3.496,1.213c0.458,0.616 0.783,1.316 0.958,2.066c0.658,-0.704 1.579,-1.104 2.538,-1.104c1.912,-0 3.483,1.571 3.483,3.484l0,0.12c0.012,0.588 0.5,1.067 1.087,1.067c0.588,-0 1.075,-0.479 1.088,-1.067l0,-0.12c0,-3.105 -2.554,-5.659 -5.658,-5.659Z" fillRule="evenodd" />

  </g>
);

const Acesso = {
  bankName: 'acesso',
  bankId: 332,
  ariaTitle: 'Acesso',
  svg: {
    original,
    mono,
  },
};

export default Acesso;