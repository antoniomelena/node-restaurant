function createHtmlElement(type, content) {
  const element = document.createElement(type);
  if (content) {
    element.innerText = content;
    element.setAttribute("id", content);
  }
  return element;
}

export function makeNavBar() {
  const header = document.createElement("HEADER");
  const nav = document.createElement("nav");
  const navItems = ["home", "menu", "contact"];
  const unorderedList = document.createElement("ul");

  navItems.forEach((item) => {
    const listTags = document.createElement("li");
    listTags.setAttribute("id", `#${item}ListItem`);
    listTags.setAttribute("class", "tab");
    const element = createHtmlElement("a", item);
    listTags.appendChild(element);
    unorderedList.appendChild(listTags);
  });
  nav.appendChild(unorderedList);
  header.appendChild(nav);

  return header;
}

export function pageLoad() {
  const homeDiv = document.createElement("div");
  homeDiv.setAttribute("id", "homeDiv");

  const homeImg = document.createElement("div");
  homeImg.setAttribute("id", "homeImg");
  const homeContainer = document.createElement("div");
  homeContainer.setAttribute("id", 'homeContainer');
  const banner = document.createElement("h1");
  banner.textContent = "La Panaderia Bro";
  const restaurantReview = document.createElement("p");
  const moreAbout = document.createElement("p");
  restaurantReview.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque. Lorem ipsum dolor sit amet consectetur adipisicing elit Evnirepudiandae totam enim dicta vitae animi asperiores? Aut voluptatum cum   dicta officiis, eligendi consectetur mollitia, natus eaque ad nemo eiuneque.";
  moreAbout.textContent =
    "Driving down High Street it's a bit odd to come upon a vintage relic of a building in a funky little neighborhood. For almost 100 years High Street Market and Deli has been serving the city of San Luis Obispo. Built in 1927, High Street Market and Deli carried everything from milk, butter, chewing tobacco and fishing gear. The area was known as the railroad district and housed many of the workers and their families. When High Street was still a dirt road, those workers would stop in to get a pint of milk, cigarettes and a deli sandwich on the way to and from the railroad station. Throughout a century High Street Market and Deli has been a lot of people's corner store but in the recent years, it's become San Luis Obispo's original sandwich joint.";
//   const frontImage = document.createElement("img");
//   frontImage.src = "./images/churros.jpg";
//   frontImage.alt = "Churros";

  homeContainer.appendChild(banner);
  homeContainer.appendChild(restaurantReview);
  homeContainer.appendChild(moreAbout);
//   homeDiv.appendChild(frontImage);
  homeDiv.appendChild(homeImg)
  homeDiv.appendChild(homeContainer);

  return homeDiv;
}
