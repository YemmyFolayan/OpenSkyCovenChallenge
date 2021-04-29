//session management implemented and check out

//https://demo:demo@opensky-network.org/api/flights/all?begin=1517227200&end=1517230800
//https://cors-anywhere.herokuapp.com/
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


/**
const featuredProductDOM = document.getElementById("featuredProducts");

const featuredProductItemTemplate = (productDetails) => {
  return `
        <div class="product">
            <a class="product-img" href="shop_detail_fullwidth.html?product=${productDetails.id}">
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
                <button class="quickview round-icon-btn">
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
