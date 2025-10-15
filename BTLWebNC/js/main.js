document.addEventListener('DOMContentLoaded', () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartCount();

  document.querySelectorAll('.add_to_cart').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id');
      const card = button.closest('.card');
      const product = {
        id,
        name: card.querySelector('.tenlaptop').textContent,
        price: card.querySelector('.text_price').textContent,
        image: card.querySelector('.anh_nd').src
      };
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert('Đã thêm vào giỏ hàng!');
    });
  });

  function updateCartCount() {
    const cartCount = document.querySelector('.sl_cart');
    cartCount.textContent = cart.length;
  }
});
