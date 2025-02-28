export const observeElements = (selector: string, className: string) => {
  const elements = document.querySelectorAll(selector);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.8 }
  );

  elements.forEach((element) => observer.observe(element));
}; 