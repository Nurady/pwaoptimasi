function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
}

function startTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  hours = hours || 12; // the hour '0' should be '12' // add a zero in front of numbers<10
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);
  document.querySelector('.time').innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(startTime, 1000);
const timeNow = startTime;

export default timeNow;
