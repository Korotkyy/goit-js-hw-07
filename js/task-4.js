const loginForm = document.querySelector('.login-form'); 
 
loginForm.addEventListener('submit', handleFormSubmit); 
 
function handleFormSubmit(event) { 
  event.preventDefault(); 
  // console.log(loginForm.elements); 
  const email = loginForm.elements.email.value; 
  const password = loginForm.elements.password.value; 
 
  if (!email.trim() || !password.trim()) { 
    return alert('Please fill in all the fields!'); 
  } else { 
    const formData = { 
      email, 
      password, 
    }; 
    console.log(formData); 
    loginForm.reset(); 
  } 
}
