function createMenuSection(headerTitle) {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menu-section-header");

  const menuHeaderTitle = document.createElement("h2");
  menuHeaderTitle.textContent = headerTitle;

  menuHeader.appendChild(menuHeaderTitle);
  menuSection.appendChild(menuHeader);
  return menuSection;
}

function createMenuItem(itemName, itemPrice, itemInfo) {
  const menuItem = document.createElement("li");
  const menuItemHeading = document.createElement("p");
  menuItemHeading.textContent = itemName;

  const menuItemPrice = document.createElement("p");
  menuItemPrice.textContent = itemPrice;

  const menuItemInfo = document.createElement("p");
  menuItemInfo.textContent = itemInfo;

  menuItem.appendChild(menuItemHeading);
  menuItem.appendChild(menuItemPrice);
  menuItem.appendChild(menuItemInfo);
  return menuItem;
}

export default function menuPage() {
  const menuDiv = document.createElement("div");
  menuDiv.setAttribute("id", "menuDiv");

  const banner = document.createElement("h1");
  banner.textContent = "Menu";

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuContainer");

  const gShots = createMenuSection("GOLGAPPA SHOTS");
  const menuListOne = document.createElement("ul");
  const cjp = createMenuItem("CLASSIC JALJEERA & POTATO (EACH)", 4, "vegan");
  const spa = createMenuItem(
    "SPICED TEQUILA & AVOCADO (EACH)",
    6,
    "vegetarian"
  );
  const vpp = createMenuItem(
    "VODKA PAANI & PICKLED BEETS (EACH)",
    6,
    "vegetarian"
  );
  menuListOne.appendChild(cjp);
  menuListOne.appendChild(spa);
  menuListOne.appendChild(vpp);
  gShots.appendChild(menuListOne);

  const sPlates = createMenuSection("SMALL PLATES");
  const menuListTwo = document.createElement("ul");
  const gtc = createMenuItem("GOAT CHEESE & SPINACH SAMOSA", 14, "vegetarian");
  const rsk = createMenuItem("ROCK SHRIMP KOLIWADA", 14, "gluten free");
  const ogr = createMenuItem("OCTOPUS GHEE ROAST", 14, "gluten free");
  menuListTwo.appendChild(gtc);
  menuListTwo.appendChild(rsk);
  menuListTwo.appendChild(ogr);
  sPlates.appendChild(menuListTwo);

  menuContainer.appendChild(banner);
  menuContainer.appendChild(gShots);
  menuContainer.appendChild(sPlates);
  menuDiv.appendChild(menuContainer);

  return menuDiv;
}
