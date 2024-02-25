const inputRef = document.querySelector('#name-input'); 
const nameRef = document.querySelector('#name-output'); 
 
 
const getInputValue = (event) => { 
    console.log(event.currentTarget.value);
  if (event.currentTarget.value.trim() !== '') { 
    nameRef.textContent = event.currentTarget.value.trim(); 
  } else { 
    nameRef.textContent = 'Anonymous'; 
  } 
};

inputRef.addEventListener('input', getInputValue);
