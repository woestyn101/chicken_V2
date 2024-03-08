var postRecipeForm = document.querySelector('.recipe-user');


const postRecipeHandler = async (event) => {
    event.preventDefault();
    
    const title = document.querySelector('#title').value.trim();
    const userIngredients = document.querySelector('#youringredients').value.trim();
    const userInstructions = document.querySelector('#yourinstructions').value.trim();
    console.log(userIngredients);
    console.log(userInstructions);

  

    if (title && userIngredients && userInstructions) {

      const response = await fetch('/api/recipes', {
        method: 'POST',
        body: JSON.stringify({ title, userIngredients, userInstructions }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
      document.location.replace('/');
     console.log("ok");
      } else {
        alert(response.statusText);
        console.log("error");
      }
    }
  };

  postRecipeForm.addEventListener('submit', postRecipeHandler);


  // delete function

  const delButtonHandler = async (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log(event.target.hasAttribute('data-id'));
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete project');
      }
    }
  };