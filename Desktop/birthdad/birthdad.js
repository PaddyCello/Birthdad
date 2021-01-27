let inputName = '';
let inputDate = '';
// get today's date
const today = new Date();

// get name from user
const person = document.getElementById('person');

function getName() {
  inputName = person.value;
};

person.addEventListener('change', getName);

//get date from user
const birthdate = document.getElementById('birthdate');

function getDate() {
  inputDate = birthdate.value;
};

birthdate.addEventListener('change', getDate);

//compare input date and today's date

const todayMonth = today.getMonth();
const todayDay = today.getDay();

const birthdayMonth = parseInt(inputDate.slice(5,7));
const birthdayDay = parseInt(inputDate.slice(8));

const numOfCandles = today.getFullYear() - parseInt(inputDate.slice(0,4));

//display relevant message

const checkInfo = () => {

  if (todayMonth == birthdayMonth && todayDay == birthdayDay) {
    document.querySelector('h1').innerText = `Congratulations, ${inputName}! You are ${numOfCandles} years old!`;
    document.querySelectorAll('div').hidden = true;
    document.querySelector('body').style.backgroundImage = url('https://media1.giphy.com/media/l41m6xDXyuUq9FP0I/giphy.gif');
  } else {
    document.querySelector('h1').innerText = `Commiserations, ${inputName}.  It's not your birthday.`;
    document.querySelector('h1').style.fontFamily = 'Blackletter';
  };
};

//process info from user
const keepInfo = document.getElementById('birthbtn');
keepInfo.addEventListener('click', saveInfo);

function saveInfo() {
  console.log(inputName, inputDate);
  person.value = '';
  birthdate.value = '';
  if (inputName && inputDate) {
    checkInfo();
};
};
