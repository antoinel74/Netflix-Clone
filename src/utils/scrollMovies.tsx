export const scrollMovies = (containerId: string, scrollAmount: number) => {
  const container = document.getElementById(containerId);
  if (container) {
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  }
};
