///////////////////////////////////////////////////////////
// Set current year
var yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hrefAtt = link.getAttribute("href");
    if (hrefAtt === "#") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }

    if (hrefAtt != "#" && hrefAtt.startsWith("#")) {
      const sectionEl = document.querySelector(hrefAtt);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
}

checkFlexGap();
