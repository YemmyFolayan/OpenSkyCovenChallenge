var Form = document.getElementById("form");

Form.addEventListener("submit", function (e) {
  e.preventDefault();

  var fullname = document.getElementById("fullname").value;

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var phonenumber = document.getElementById("phonenumber").value;
  var gender = document.getElementById("gender").value;

  console.log(fullname);
  console.log(password);
  const name = email;
  console.log(email);
  console.log(phonenumber);
  console.log(gender);

  const container = document.getElementById("containerr");
  const loader = document.createElement("div");
  loader.className = "progress";
  const loadingBar = document.createElement("div");
  loadingBar.className = "indeterminate";
  loader.appendChild(loadingBar);
  container.appendChild(loader);
  const loaderDiv = document.querySelector("div.progress");
  const panel = document.createElement("div");
  panel.setAttribute("id", "boxe");
  panel.className = "card-panel green";
  const text = document.createElement("span");

  //https://cors-anywhere.herokuapp.com/

  fetch("http://intriobasket.pexceptos.com/api/admin/create", {
    method: "POST",
    body: JSON.stringify({
      fullname: fullname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      gender: gender,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var msg = data.message;

      if (msg == "Admin Created Sucessfully") {
        const name = data.payload.fullname;
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(
              `Admin Account Created Successfully !, welcome to IntrioBasket ${name}, Proceed to Sign In`
            )
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);

        setTimeout(function () {
          window.location.assign("/loginadmin.html");
        }, 2200);

        console.log("Admin Created Successfully");
      } else if (msg == "Email already exists") {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(document.createTextNode(`Email already exists !`));
          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);
        // setTimeout(function () {
        //   // Removes an element from the document
        //   $(".card-panel green").remove();
        // }, 1009);

        console.log("Email already exists");
      } else if (msg == "Please input all fields") {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(document.createTextNode(`Please input all fields!`));

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);
        // setTimeout(function () {
        //  //Removes an element from the document
        //   $(".card-panel green").remove();
        // }, 1009);

        console.log("Please input all fields");
      } else {
        setTimeout(function () {
          text.className = "white-text";
          text.appendChild(
            document.createTextNode(`An error occurred, Try Again!`)
          );

          panel.appendChild(text);
          container.replaceChild(panel, loaderDiv);
          $(".card-panel green").remove();
        }, 1000);
        // setTimeout(function () {
        //   // Removes an element from the document
        //   $(".card-panel green").remove();
        // }, 1009);

        console.log("An error occurred, Try Again!");
      }
    });
});
