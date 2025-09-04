const viewMoreBtn = document.querySelector(".btn-view-more");
const moreContent = document.querySelector(".more-content");

viewMoreBtn.addEventListener("click", function () {
  moreContent.style.display = "flex";
});
