var postRecipeForm = document.querySelector('.post-user');


const postRecipeHandler = async (event) => {
    event.preventDefault();

    
  
    const title = document.querySelector('#title').value.trim();
    const userPost = document.querySelector('#yourpost').value.trim();

  
    if (title && userPost) {
      const response = await fetch('/api/blogpost', {
        method: 'POST',
        body: JSON.stringify({ title, userPost }),
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