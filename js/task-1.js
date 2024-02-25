const categoriesEl = document.getElementById('categories').children.length; 
console.log(`Number of categories: ${categoriesEl}`); 
 
const arrayTitlesCategoriesRef = document.querySelectorAll('h2'); 
arrayTitlesCategoriesRef.forEach((h2) => { 
  console.log('Category:', h2.textContent); 
  console.log('Elements:', h2.nextElementSibling.children.length); 
});