const dateNow = () => {
  const dayContainer = document.querySelector('.date');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const dayDateMonthYear = new Date();
  const day = dayDateMonthYear.getDay();
  const date = dayDateMonthYear.getDate();
  const month = dayDateMonthYear.getMonth();
  const year = dayDateMonthYear.getFullYear();
  dayContainer.innerHTML = `${days[day]}, ${date} ${months[month]} ${year}`;
};

export default dateNow;
