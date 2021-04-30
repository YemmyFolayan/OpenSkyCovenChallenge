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
    var ICAO = data.icao24;
    var firstSeen = data.firstSeen;
    var estDepartureAirportHorizDistance =
      data.estDepartureAirportHorizDistance;
    var estDepartureAirportVertDistance = data.estDepartureAirportVertDistance;
    var estArrivalAirportHorizDistance = data.estArrivalAirportHorizDistance;
    var estArrivalAirportVertDistance = data.estArrivalAirportVertDistance;
    var departureAirportCandidatesCount = data.departureAirportCandidatesCount;
    var arrivalAirportCandidatesCount = data.arrivalAirportCandidatesCount;

    console.log(ICAO);
    console.log(firstSeen);
    console.log(estDepartureAirportHorizDistance);
    console.log(estDepartureAirportVertDistance);
    console.log(estArrivalAirportHorizDistance);
    console.log(estArrivalAirportVertDistance);
    console.log(epartureAirportCandidatesCount);
    console.log(departureAirportCandidatesCount);
    console.log(arrivalAirportCandidatesCount);

    //AT this block, i want to compare the id with the one in user also use the id for cart logic
  });
