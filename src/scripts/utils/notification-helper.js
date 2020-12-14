const notificationHelper = async () => {
  // meminta ijin memunculkan notification
  const result = await Notification.requestPermission();
  if (result === 'denied') {
    console.log('Fitur Notification tidak diijinkan');
    return;
  }

  if (result === 'default') {
    console.log('Pengguna Menutup kotak dialog permintaan ijin');
    return;
  }

  console.log('Fitur notification diijinkan');
  navigator.serviceWorker.ready.then((registration) => {
    const title = 'Restaurant Catalogue';
    const options = {
      body: 'Get Your Healthy Food',
      icon: '../../images/heros/icons.png',
    };

    registration.showNotification(title, options);
  });
};

export default notificationHelper;
