"use strict";
///////DATA///////////
const account1 = {
  owner: "Suraj Katyayan",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  transactionsDates: [
    "2020-11-18T21:31:17.178Z",
    "2020-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-05-08T14:11:59.604Z",
    "2021-05-27T17:01:17.194Z",
    "2021-07-11T23:36:17.929Z",
    "2021-07-12T10:51:36.790Z",
  ],
  pin: 1114,
};

const account2 = {
  owner: "Asad Adnan Khan",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  transactionsDates: [
    "2010-11-01T13:15:33.035Z",
    "2010-11-30T09:48:16.867Z",
    "2010-12-25T06:04:23.907Z",
    "2021-01-25T14:18:46.235Z",
    "2021-02-05T16:33:06.386Z",
    "2021-04-10T14:43:26.374Z",
    "2021-06-25T18:49:59.371Z",
    "2021-07-26T12:01:20.894Z",
  ],
  pin: 2222,
};

const account3 = {
  owner: "Abhishek Jain",
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  transactionsDates: [
    "2010-11-18T21:31:17.178Z",
    "2010-12-23T07:42:02.383Z",
    "2021-01-28T09:15:04.904Z",
    "2021-04-01T10:17:24.185Z",
    "2021-02-05T16:33:06.386Z",
    "2021-04-10T14:43:26.374Z",
    "2021-06-25T18:49:59.371Z",
    "2021-07-26T12:01:20.894Z",
  ],
  pin: 3333,
};

const account4 = {
  owner: "Ayushi Sachan",
  transactions: [430, 1000, 700, 50, 90, 400, -460],
  transactionsDates: [
    "2010-11-01T13:15:33.035Z",
    "2010-11-30T09:48:16.867Z",
    "2010-12-25T06:04:23.907Z",
    "2021-05-08T14:11:59.604Z",
    "2021-05-27T17:01:17.194Z",
    "2021-09-03T23:36:17.929Z",
    "2021-09-03T10:51:36.790Z",
  ],
  pin: 1114,
};

//////Accounts/////////////

const accounts = [account1, account2, account3, account4];

////////Currencies////////////

////////ELEMENTS//////////
const login_btn = document.querySelector(".login");
const ownerName = document.querySelector(".hello");
const allTransactions = document.querySelector(".m-left");
const currBalance = document.querySelector(".currbal");
const login_id = document.querySelector("#uid");
const login_pass = document.querySelector("#pass");
const afterLogin = document.querySelector(".aftr-login");
const beforeLogin = document.querySelector(".bfr-login");
const nameandsett = document.querySelector(".n-right");
const logout = document.querySelector(".logout");
const transfer = document.querySelector(".tranbtn");
const trans_amt = document.querySelector("#tamt");
const inp_reciever = document.querySelector("#whom");
const login_error = document.querySelector("#login_error");
const trans_error = document.querySelector("#trans_error");
const with_error = document.querySelector("#with_error");
const depo_error = document.querySelector("#depo_error");
const withdraw = document.querySelector(".withbtn");
const with_amt = document.querySelector("#wamt");
const deposite = document.querySelector(".depobtn");
const depo_amt = document.querySelector("#damt");
const pass_info_btn = document.querySelector("#credential");
const pass_info = document.querySelector(".pinfo");
const body_space = document.querySelector("body");
const dnt = document.querySelector("#dateandtime");

/////FUNCTIONS/////////

const displayName = function (name) {
  ownerName.textContent = `Hi, ${name}!`;
};

const formatDateAndTime = function (date) {
  let dateMessage;
  let timeMessage;

  const calcDateDiff = (date1, date2) =>
    Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDateDiff(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) dateMessage = "Today";
  else if (daysPassed === 1) dateMessage = "Yesterday";
  else if (daysPassed <= 7) dateMessage = `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = `${date.getFullYear()}`;
    dateMessage = `${day}/${month}/${year}`;
  }

  const hour = `${date.getHours()}`.padStart(2, 0);
  const minute = `${date.getMinutes()}`.padStart(2, 0);
  timeMessage = `${hour}:${minute}`;

  return `${dateMessage}  at   ${timeMessage}  hrs.`;
};

const dispClock = function () {
  setInterval(() => {
    dnt.innerHTML = "";
    const now = new Date();
    const months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = `${now.getDate()}`;
    const month = months[now.getMonth()];
    const year = `${now.getFullYear()}`;
    const hour = `${now.getHours()}`.padStart(2, 0);
    const minute = `${now.getMinutes()}`.padStart(2, 0);
    const second = `${now.getSeconds()}`.padStart(2, 0);
    const daylast = +day.toString().split("").pop();

    let type;
    if (daylast === 1) {
      type = "st";
    } else if (daylast === 2) {
      type = "nd";
    } else if (daylast === 3) {
      type = "rd";
    } else {
      type = "th";
    }
    const html = `
    <h4>Date and Time:  ${day}<sup>${type}</sup>  ${month},  ${year}  |   ${hour}:${minute}:${second}   hrs.</h4>
    `;
    dnt.insertAdjacentHTML("afterbegin", html);
  }, 1000);
};

const clearFields = function () {
  login_pass.value = login_id.value = "";
  login_error.textContent = "";
  login_pass.value = login_id.value = "";
  with_amt.value = depo_amt.value = inp_reciever.value = trans_amt.value = "";
  inp_reciever.value = trans_amt.value = "";
  trans_error.textContent = "";
  depo_amt.value = "";
  depo_error.textContent = "";
  with_amt.value = "";
  with_error.textContent = "";
};

const displayTransactions = function (acc) {
  allTransactions.innerHTML = "";
  acc.transactions.forEach(function (mov, i) {
    const type = mov > 0 ? "credit" : "debit";

    const date = new Date(acc.transactionsDates[i]);
    const dispDateAndTime = formatDateAndTime(date);
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${type}</div>
        <div class="movements__date">${dispDateAndTime}</div>
        <div class="movements__value">${Math.abs(mov)} ₹</div>
      </div>
    `;
    allTransactions.insertAdjacentHTML("afterbegin", html);
  });
};

const createUserName = function (accs) {
  accs.forEach(function (cacc) {
    cacc.username = cacc.owner
      .toLowerCase()
      .split(" ")
      .map((i) => i[0])
      .join("");
  });
};

const calcBalance = function (acc) {
  const balance = acc.transactions.reduce((acc, t) => acc + t, 0);
  acc.balance = balance;
  currBalance.textContent = `Current Balance: ${balance} ₹`;
};

////CALLBACK////
const callbacks = function () {
  displayName(currAccount.owner);
  displayTransactions(currAccount);
  calcBalance(currAccount);
};

dispClock();
createUserName(accounts);

///////EVENTS//////////

pass_info_btn.addEventListener("mouseover", function (e) {
  e.preventDefault();
  pass_info.classList.remove("hidekaro");
});

body_space.addEventListener("click", function (e) {
  e.preventDefault();
  pass_info.classList.add("hidekaro");
});

let currAccount;

login_btn.addEventListener("click", function (e) {
  e.preventDefault();
  currAccount = accounts.find(
    (acc) => acc.username === login_id.value.toLowerCase()
  );

  if (currAccount) {
    if (currAccount.pin === Number(login_pass.value)) {
      afterLogin.classList.remove("hidekaro");
      beforeLogin.classList.add("hidekaro");
      nameandsett.classList.remove("hidekaro");
      clearFields();
      callbacks();
    } else {
      login_error.textContent = "Invalid Credentials!";
    }
  } else {
    login_error.textContent = "Invalid Credentials!";
  }
});

logout.addEventListener("click", function (e) {
  e.preventDefault();
  beforeLogin.classList.remove("hidekaro");
  afterLogin.classList.add("hidekaro");
  nameandsett.classList.add("hidekaro");
  clearFields();
});

transfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(trans_amt.value);
  const reciever = accounts.find((acc) => acc.username === inp_reciever.value);

  if (
    amount > 0 &&
    amount <= currAccount.balance &&
    reciever &&
    reciever?.username !== currAccount.username
  ) {
    clearFields();
    currAccount.transactions.push(-amount);
    reciever.transactions.push(amount);
    currAccount.transactionsDates.push(new Date().toISOString());
    reciever.transactionsDates.push(new Date().toISOString());

    callbacks();
  } else if (amount <= 0) {
    trans_error.textContent = "Invalid Amount!";
  } else if (reciever?.username === currAccount.username) {
    trans_error.textContent = "Cannot transfer to self!";
  } else if (amount > currAccount.balance) {
    trans_error.textContent = "Not enough balance!";
  } else {
    trans_error.textContent = "Invalid Reciever ID!";
  }
});

withdraw.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(with_amt.value);
  if (amount > 0 && amount <= currAccount.balance) {
    currAccount.transactionsDates.push(new Date().toISOString());
    clearFields();
    currAccount.transactions.push(-amount);
    callbacks();
  } else if (amount > currAccount.balance) {
    with_error.textContent = "Not enough balance!";
  } else {
    with_error.textContent = "Invalid Amount!";
  }
});

deposite.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(depo_amt.value);
  if (amount > 0) {
    currAccount.transactionsDates.push(new Date().toISOString());
    clearFields();
    currAccount.transactions.push(amount);
    callbacks();
  } else {
    depo_error.textContent = "Invalid Amount!";
  }
});
