//session management implemented and check out

//baseURL: "https://opensky-network.org/api",
//https://demo:demo@opensky-network.org/api/flights/all?begin=1517227200&end=1517230800
//https://cors-anywhere.herokuapp.com/
fetch(
  "https://demo:demo@opensky-network.org/api/flights/departure?begin=1517227200&end=1517230800",
  {
    method: "GET",
    body: JSON.stringify({
      USERNAME: demo,
      PASSWORD: demo,
    }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var msg = data.message;

    //this is user id;

    const AdminId = data.payload.id;

    const adminToken = data.payload.token;

    //SAVE this ID to session storage to re-use it in cart
    localStorage.setItem("AdminId", AdminId);

    const name = data.payload.fullname;
    console.log("this is : ", name, AdminId);

    localStorage.setItem("name", name);

    localStorage.setItem("adminToken", adminToken);

    const role = data.payload.role;

    //AT this block, i want to compare the id with the one in user also use the id for cart logic
  });
