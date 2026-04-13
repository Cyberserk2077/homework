export const sizes = () => {
  const sizesList = document.querySelector('[data-js-size-list]');
  const sizesButtons = document.querySelectorAll('[data-js-size-button]');

  const handleSizeClick = (event) => {
    const target = event.target;

    if (!target?.classList.contains("product__size-button")) return;

    sizesButtons.forEach((button) =>
      button.classList.remove("product__size-button--active")
    );
    target.classList.add("product__size-button--active");
  };

  sizesList.addEventListener("click", handleSizeClick);
};
