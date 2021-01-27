let inputName = '';
let inputDate = '';
const shaun = "url('https://media1.giphy.com/media/l41m6xDXyuUq9FP0I/giphy.gif')";
const sadness = "url('https://media1.tenor.com/images/614be36a0a1c3cc9e1970129f837ffdf/tenor.gif?itemid=16907102')";
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
  inputDate = new Date(birthdate.value);
};

birthdate.addEventListener('change', getDate);

//compare input date and today's date


//display relevant message

const checkInfo = () => {

const todayMonth = today.getMonth();
const todayDay = today.getDate();

const birthdayMonth = inputDate.getMonth();
const birthdayDay = inputDate.getDate();

const numOfCandles = today.getFullYear() - inputDate.getFullYear();

  if (todayMonth == birthdayMonth && todayDay == birthdayDay) {
    
    document.querySelector('h1').innerText = `Congratulations, ${inputName}! You are ${numOfCandles} years old!`;
    document.getElementById('namein').style.display = 'none';
    document.getElementById('datein').style.display = 'none';
    document.querySelector('body').style.backgroundImage = shaun;
  } else {
    document.querySelector('h1').innerText = `Commiserations, ${inputName}.  It's not your birthday.`;
    document.querySelector('body').style.backgroundImage = sadness;
    document.getElementById('namein').style.display = 'none';
    document.getElementById('datein').style.display = 'none';
    document.querySelector('h1').style.fontFamily = "'Potta One', cursive";
  };
};

//process info from user
const keepInfo = document.getElementById('birthbtn');
keepInfo.addEventListener('click', saveInfo);

function saveInfo() {
  if (inputName && inputDate) {
    checkInfo();
};
};
