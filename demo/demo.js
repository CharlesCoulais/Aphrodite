import { Aphrodite } from "../src/Aphrodite.js";


const styleSheet = Aphrodite.createStyleSheet({
  'html, .myClass': {
    fontFamily: 'arial, sans-serif',
    height: '100%',
    ['font-size']: '24px',
    margin: 0,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  'body::before': {
    content: '"No CSS file, no @import: the style is generated in JS. This text is not even in the DOM."',
    color: '#55a',
    display: 'inline-block',
    width: '620px',
    textAlign: 'center',
  },
}, 'demo');


styleSheet['.myClass-2'] = {
  backgroundColor: '#fee',
};

styleSheet['.myClass-2:hover'] = {
  backgroundColor: '#fdd',
  cursor: 'pointer',
};

const classStore = styleSheet.classStore;

document.body.classList.add(classStore.myClass, classStore['myClass-2']);


Aphrodite(`.${classStore['myClass-2']}`).style = {
  border: '10px solid #55a',
  ['border-radius']: '10px',
};