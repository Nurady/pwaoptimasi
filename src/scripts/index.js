import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.min.css';
import '../styles/responsive.min.css';
import '../styles/loadingbar.css';
import '../styles/timedate.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import requestPermission from './utils/notification-helper';
import dateNow from './utils/date-now';
import timeNow from './utils/time-now';

// Kode Menu Hamburger di mobile
const app = new App({
  header: document.querySelector('.header'),
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#drawer'),
  timedate: document.querySelector('.time-date-container'),
  hero: document.querySelector('.hero'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  requestPermission();
  dateNow();
  timeNow();
});
