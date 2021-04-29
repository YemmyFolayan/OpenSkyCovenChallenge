//////////////////
//CREATE AUTHORIZATION MODEL => REDIRECT PAGE\

//Michael wake Up

var Form = document.getElementById("form");
const userNameDOM = document.getElementById("user");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  console.log(email);
  console.log(password);

  //AT this block, i want to compare the id with the one in user also use the id for user logic

  if (email == "demo" && password == "demo") {
    const container = document.getElementById("containerr");
    const loader = document.createElement("div");
    loader.className = "progress";

    const loadingBar = document.createElement("div");
    loadingBar.className = "indeterminate";
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(function () {
      const loaderDiv = document.querySelector("div.progress");
      const panel = document.createElement("div");
      panel.className = "card-panel green";
      const text = document.createElement("span");
      text.className = "white-text";
      text.appendChild(
        document.createTextNode(`Log in Successfully !, welcome to Open Sky `)
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);

    setTimeout(function () {
      window.location.assign("admindashboard/dashboard.html");
    }, 2200);
  } else if (email == "michael.folayan@comserves.com" && password == "12345") {
    const container = document.getElementById("containerr");
    const loader = document.createElement("div");
    loader.className = "progress";

    const loadingBar = document.createElement("div");
    loadingBar.className = "indeterminate";
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(function () {
      const loaderDiv = document.querySelector("div.progress");
      const panel = document.createElement("div");
      panel.className = "card-panel green";
      const text = document.createElement("span");
      text.className = "white-text";
      text.appendChild(
        document.createTextNode(`Log in Successfully !, welcome to Open Sky`)
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);

    setTimeout(function () {
      window.location.assign("admindashboard/dashboard.html");
    }, 2200);
  } else if (email == "foyemc@gmail.com" && password == "12345") {
    const container = document.getElementById("containerr");
    const loader = document.createElement("div");
    loader.className = "progress";

    const loadingBar = document.createElement("div");
    loadingBar.className = "indeterminate";
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(function () {
      const loaderDiv = document.querySelector("div.progress");
      const panel = document.createElement("div");
      panel.className = "card-panel green";
      const text = document.createElement("span");
      text.className = "white-text";
      text.appendChild(
        document.createTextNode(`Log in Successfully !, welcome to Open Sky`)
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);

    setTimeout(function () {
      window.location.assign("admindashboard/dashboard.html");
    }, 2200);
  } else {
    const container = document.getElementById("containerr");
    const loader = document.createElement("div");
    loader.className = "progress";
    const loadingBar = document.createElement("div");
    loadingBar.className = "indeterminate";
    loader.appendChild(loadingBar);
    container.appendChild(loader);
    setTimeout(function () {
      const loaderDiv = document.querySelector("div.progress");
      const panel = document.createElement("div");
      panel.className = "card-panel green";
      const text = document.createElement("span");
      text.className = "white-text";
      text.appendChild(
        document.createTextNode(`User Not found or Incorrect Password!`)
      );
      panel.appendChild(text);
      container.replaceChild(panel, loaderDiv);
    }, 1000);

    console.log("User Not found or Incorrect Password!");
    alert("User Not found or Incorrect Password!");
  }
});

console.log("hi");
