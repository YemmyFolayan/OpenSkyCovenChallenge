console.log("allFlights");
// export const api = {
//   baseURL: "https://opensky-network.org/api",
//   allFlights: "/flights/all",
//   arrivingFlights: "/flights/arrival",
//   departingFlights: "/flights/departure",
// };

const featuredProductDOM = document.getElementById("AllFLights");

const featuredProductItemTemplate = (flightInfos) => {
  return `
        <div class="product">
         
            <h5 class="product-type">${flightInfo.icao24}</h5>
            <h3 class="product-name">${flightInfo.firstSeen}</h3>
            <h3 class="product-price">${flightInfo.estDepartureAirportHorizDistance}</h3>

            <h3 class="product-name">${flightInfo.estDepartureAirportVertDistance}</h3>
            <h3 class="product-price"> ${flightInfo.estArrivalAirportHorizDistance}</h3>

            <h3 class="product-name">${flightInfo.estArrivalAirportVertDistance}</h3>
            <h3 class="product-price"> ${flightInfo.departureAirportCandidatesCount}</h3>

            <h3 class="product-name">${flightInfo.arrivalAirportCandidatesCount}</h3>
       
  
  
            
        </div>
    `;
};

fetch(
  "https://demo:demo@opensky-network.org/api/flights/all?begin=1517227200&end=1517230800",
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
    console.log({ data });
    data.forEach((flightInfo) => {
      let flightInfos = {
        ICAO: flightInfo.icao24,
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
      featuredProductDOM.appendChild(htmlFragment);
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

/**
const featuredProductDOM = document.getElementById("featuredProducts");

const featuredProductItemTemplate = (productDetails) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullWidth.html?product=${productDetails.id}">
                <img alt="product" src="${productDetails.imageUrl}" height="200" width="250">
            </a>
            <h5 class="product-type">${productDetails.type}</h5>
            <h3 class="product-name">${productDetails.name}</h3>
            <h3 class="product-price">NGN ${productDetails.price}</h3>
            <div class="product-select">
                <button class="add-to-wishlist round-icon-btn">
                    <i class="icon_heart_alt"></i>
                </button>
                <button onclick="addToCart('${productDetails.id}','${productDetails.name}','${productDetails.type}','${productDetails.imageUrl}','${productDetails.price}')" class="add-to-cart round-icon-btn">
                    <i class="fa fa-shopping-cart"></i>
                </button>
                <button class="quickView round-icon-btn">
                    <i class="far fa-eye"></i>
                </button>
            </div>
        </div>
    `;
};

const fetchFoodList = async () => {
  const endpoint = "/food/get?category_type=CEREAL"; // THOUGHTS: There should be an endpoint for featured products...

  const res = await api.request(endpoint); // TODO: handle errors..

  //const featuredProducts = getFirst9(res.payload);
  res.payload.forEach((product) => {
    let productDetails = {
      id: product._id,
      name: product.food_product_name,
      type: product.product_type,
      imageUrl: product.image_link,
      price: product.cost,
      description: product.long_description,
    };

    let htmlString = featuredProductItemTemplate(productDetails);
    let htmlFragment = document.createElement("div");
    htmlFragment.innerHTML = htmlString;
    featuredProductDOM.appendChild(htmlFragment);
  });
};

fetchFoodList();



**/
