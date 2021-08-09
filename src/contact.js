export default function contactPage() {
  const contactDiv = document.createElement("div");
  contactDiv.setAttribute("id", "contactDiv");

  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "containerDiv");

  const imageContainer = document.createElement("div");
  imageContainer.setAttribute("id", "imageDiv");

  const banner = document.createElement("h1");
  banner.textContent = "Contact Us";

  const streetAddress = document.createElement("p");
  streetAddress.textContent = "2049 Fillmore St San Francisco, CA 94115";

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "(222)-888 5555";

  const frontImage = document.createElement("img");
  frontImage.src = "../src/images/churros.jpg";
  frontImage.alt = "Churros";

  contactContainer.appendChild(banner);
  contactContainer.appendChild(streetAddress);
  contactContainer.appendChild(phoneNumber);
  imageContainer.appendChild(frontImage);
  contactDiv.appendChild(contactContainer);
  contactDiv.appendChild(imageContainer);

  return contactDiv;
}
