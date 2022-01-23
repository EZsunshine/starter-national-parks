// Get a list of all `<h3>` elements
const descriptions = document.querySelectorAll(".description-display");

// Iterate over the list and print each one

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }

    desc.innerHTML = content;
}

  const ratings = document.querySelectorAll(".rating-display .value");

  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
      }
  }

  const parks = document.querySelectorAll(".park-display");
  const numberParks = parks.length;
  const newElement = document.createElement("div");
  newElement.innerText = `${numberParks} exciting parks to visit`;
  newElement.classList.add("header-statement");

  const header = document.querySelector("header");
  header.appendChild(newElement);



  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
    //for (let btn of allBtns) {   也可以
  btn.addEventListener("click", (event) => {
    const park = event.target.parentNode;
    park.style.backgroundColor = "#c8e6c9";
  });
});

// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };
  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);


// Function for sorting by rating
const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(
      parkA.querySelector(".rating-display > .value").innerText
    );
    const parkBRating = parseFloat(
      parkB.querySelector(".rating-display > .value").innerText
    );
    return parkBRating - parkARating;
};

// function for handling the nameSorter click  
const ratingSorterClickHandler = (event) => {
    event.preventDefault();

    // 1. Get the main element
    const main = document.querySelector("main");

    // 2. Get the list of ratings
    const parksList = main.querySelectorAll(".park-display");

    // 3. Empty the main element
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. Sort the array
    parksArray.sort(sortByRating);

    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
        main.appendChild(park);
    });
};

// Select the ratingSorter link
const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
ratingSorter.addEventListener("click", ratingSorterClickHandler);
