const categorysList = document.querySelector('#categories');
const categorysItem = categorysList.querySelectorAll('.item');

console.log('Number of categories:', categorysItem.length);
categorysItem.forEach(item => {
  console.log('Category:', item.children[0].textContent);
  console.log('Elements:', item.children[1].children.length);
});
