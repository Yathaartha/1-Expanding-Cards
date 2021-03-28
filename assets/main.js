const list = document.querySelectorAll("li");

list.forEach((listItem) => {
  const expandBtn = listItem.querySelector(".expand");
  const moreInfo = listItem.querySelector("p");
  expandBtn.addEventListener("click", () => {
    moreInfo.classList.remove("invisible");
    // moreInfo.classList.add("visible");
    expandBtn.classList.add("invisible");
  });
  moreInfo.addEventListener("click", () => {
    moreInfo.classList.add("invisible");
    expandBtn.classList.remove("invisible");
  });
});
