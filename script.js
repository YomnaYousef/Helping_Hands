// Array to store donated items
let items = [];

// Function to add donated items to items array and display them on the page
function donateItem(e) {
  e.preventDefault();

  // Get form values
  let itemName = document.getElementById("item-name").value;
  let itemCategory = document.getElementById("item-category").value;
  let itemDescription = document.getElementById("item-description").value;
  let itemImage = document.getElementById("item-image").value;

  // Create item object
  let item = {
    name: itemName,
    category: itemCategory,
    description: itemDescription,
    image: itemImage,
  };

  // Add item to items array
  items.push(item);

  // Clear form
  document.getElementById("item-name").value = "";
  document.getElementById("item-category").value = "";
  document.getElementById("item-description").value = "";
  document.getElementById("item-image").value = "";

  // Display items on the page
  displayItems();
}

// Function to display donated items on the page
function displayItems() {
  let itemsList = document.getElementById("items");

  // Clear items list
  itemsList.innerHTML = "";

  // Loop through items array and create item elements
  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    let itemElement = document.createElement("li");
    itemElement.classList.add("item");

    let itemNameElement = document.createElement("h3");
    itemNameElement.textContent = item.name;
    itemElement.appendChild(itemNameElement);

    let itemCategoryElement = document.createElement("p");
    itemCategoryElement.innerHTML = "<strong>Category:</strong> " + item.category;
    itemElement.appendChild(itemCategoryElement);

    let itemDescriptionElement = document.createElement("p");
    itemDescriptionElement.innerHTML = "<strong>Description:</strong> " + item.description;
    itemElement.appendChild(itemDescriptionElement);

    if (item.image) {
      let itemImageElement = document.createElement("img");
      itemImageElement.src = item.image;
      itemElement.appendChild(itemImageElement);
    }

    itemsList.appendChild(itemElement);
  }
}

// Function to search for items based on category and display them on the page
function searchItems(e) {
  e.preventDefault();

  let category = document.getElementById("request-category").value;

  let filteredItems = items.filter((item) => item.category === category);

  let itemsList = document.getElementById("items");

  // Clear items list
  itemsList.innerHTML = "";

  if (filteredItems.length === 0) {
    let noItemsElement = document.createElement("p");
    noItemsElement.textContent = "No items found.";
    itemsList.appendChild(noItemsElement);
  } else {
    // Loop through filtered items array and create item elements
    for (let i = 0; i < filteredItems.length; i++) {
      let item = filteredItems[i];

      let itemElement = document.createElement("li");
      itemElement.classList.add("item");

      let itemNameElement = document.createElement("h3");
      itemNameElement.textContent = item.name;
      itemElement.appendChild(itemNameElement);

      let itemCategoryElement = document.createElement("p");
      itemCategoryElement.innerHTML = "<strong>Category:</strong> " + item.category;
      itemElement.appendChild(itemCategoryElement);

      let itemDescriptionElement = document.createElement("p");
      itemDescriptionElement.innerHTML = "<strong>Description:</strong> " + item.description;
      itemElement.appendChild(itemDescriptionElement);

      if (item.image) {
        let itemImageElement = document.createElement("img");
        itemImageElement.src = item.image;
        itemElement.appendChild(itemImageElement);
      }

      itemsList.appendChild(itemElement);
    }
  }
}

// Event listeners
document.getElementById("donate-form").addEventListener("submit", donateItem);
document.getElementById("request-form").addEventListener("submit", searchItems);