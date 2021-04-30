console.log("Arrival Flights");
// export const api = {
//   baseURL: "https://opensky-network.org/api",
//   allFlights: "/flights/all",
//   arrivingFlights: "/flights/arrival",
//   departingFlights: "/flights/departure",
// };

const featuredArrivalDOM = document.getElementById("arrivingFlight");

const featuredProductItemTemplate = (flightInfos) => {
  return `
        <div class="product">
         
            <h5 class="product-name">ICAO No: ${flightInfos.icao24}</h5>
            <h3 class="product-name">FirstSeen: ${flightInfos.firstSeen}</h3>
            <h3 class="product-name">DepHorizDistance: ${flightInfos.estDepartureAirportHorizDistance}</h3>

            <h3 class="product-name">DepVertDistance: ${flightInfos.estDepartureAirportVertDistance}</h3>
            <h3 class="product-name">ArrHorizDistance: ${flightInfos.estArrivalAirportHorizDistance}</h3>

            <h3 class="product-name">ArrVertDistance: ${flightInfos.estArrivalAirportVertDistance}</h3>
            <h3 class="product-name">DepCandidateCount: ${flightInfos.departureAirportCandidatesCount}</h3>

            <h3 class="product-name">ArrCandidateCount: ${flightInfos.arrivalAirportCandidatesCount}</h3>
       
  
  
            
        </div>
    `;
};

fetch(
  "https://opensky-network.org/api/flights/arrival?airport=EDDF&begin=1517227200&end=1517230800",
  {
    method: "GET",
    // body: JSON.stringify({
    //   USERNAME: demo,
    //   PASSWORD: demo,
    // }),
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log({ data });
    data.forEach((flightInfo) => {
      let flightInfos = {
        icao24: flightInfo.icao24,
        firstSeen: flightInfo.firstSeen,
        estDepartureAirportHorizDistance:
          flightInfo.estDepartureAirportHorizDistance,
        estDepartureAirportVertDistance:
          flightInfo.estDepartureAirportVertDistance,
        pestArrivalAirportHorizDistance:
          flightInfo.estArrivalAirportHorizDistance,
        estArrivalAirportHorizDistance:
          flightInfo.estArrivalAirportHorizDistance,
        estArrivalAirportVertDistance: flightInfo.estArrivalAirportVertDistance,
        departureAirportCandidatesCount:
          flightInfo.departureAirportCandidatesCount,
        arrivalAirportCandidatesCount: flightInfo.arrivalAirportCandidatesCount,
      };

      let htmlString = featuredProductItemTemplate(flightInfos);
      let htmlFragment = document.createElement("div");
      htmlFragment.innerHTML = htmlString;
      featuredArrivalDOM.appendChild(htmlFragment);
    });

    // var ICAO = data.icao24;
    // var firstSeen = data.firstSeen;
    // var estDepartureAirportHorizDistance =
    //   data.estDepartureAirportHorizDistance;
    // var estDepartureAirportVertDistance = data.estDepartureAirportVertDistance;
    // var estArrivalAirportHorizDistance = data.estArrivalAirportHorizDistance;
    // var estArrivalAirportVertDistance = data.estArrivalAirportVertDistance;
    // var departureAirportCandidatesCount = data.departureAirportCandidatesCount;
    // var arrivalAirportCandidatesCount = data.arrivalAirportCandidatesCount;

    console.log(icao24);
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
