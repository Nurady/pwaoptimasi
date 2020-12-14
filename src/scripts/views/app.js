/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    header, button, drawer, timedate, hero, content,
  }) {
    // eslint-disable-next-line no-underscore-dangle
    this._header = header;
    this._button = button;
    this._drawer = drawer;
    this._timedate = timedate;
    this._hero = hero;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      header: this._header,
      button: this._button,
      drawer: this._drawer,
      timedate: this._timedate,
      hero: this._hero,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
