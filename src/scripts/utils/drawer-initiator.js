const DrawerInitiator = {
  init({
    header, button, drawer, timedate, hero, content,
  }) {
    header.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    timedate.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
