const images = document.querySelectorAll(".image");

const callback = (entries, observer) => {
  entries.forEach((element) => {
    if (element.isIntersecting) {
      console.log("all ok");
      console.log(element.target);

      element.target.src = element.target.dataset.src;
      console.log(element.target.dataset.src);
      observer.unobserve(element.target);
    }
  });
};

const option = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver(callback, option);

images.forEach((image) => {
  observer.observe(image);
});
