// 슬라이드 요소와 dot 요소 가져오기
const reviews = document.querySelectorAll(".review");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// 슬라이드 표시 함수
function showReview(index) {
  reviews.forEach(r => r.classList.remove("active"));
  dots.forEach(d => d.classList.remove("active"));

  reviews[index].classList.add("active");
  dots[index].classList.add("active");
}

// 좌/우 버튼 이벤트
document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex);
});

// dot 클릭 이벤트
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.dataset.index);
    showReview(currentIndex);
  });
});

// 초기 표시
showReview(currentIndex);
