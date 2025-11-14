
document.addEventListener('DOMContentLoaded', () => {
  
    document.getElementById('btn-get').addEventListener('click', fetchPosts);
    document.getElementById('btn-post').addEventListener('click', createPost);
});

const API_URL = 'https://jsonplaceholder.typicode.com/posts';


const statusDiv = document.getElementById('status');
const resultsDiv = document.getElementById('results');


async function fetchPosts() {
    statusDiv.innerHTML = 'Carregando posts...';
    resultsDiv.innerHTML = ''; 

    try {
       
        const response = await fetch(API_URL);


        if (!response.ok) {
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

      
        const posts = await response.json();

      
        statusDiv.innerHTML = 'Posts carregados com sucesso!';
        displayPosts(posts.slice(0, 5));

    } catch (error) {
        
        console.error('Erro ao buscar posts:', error);
        statusDiv.innerHTML = `Erro ao buscar posts: ${error.message}`;
    }
}


async function createPost() {
    statusDiv.innerHTML = 'Enviando novo post...';

   
    const newPostData = {
        title: 'Meu Post Incrível',
        body: 'Este é o conteúdo do post criado via fetch/async/await.',
        userId: 1, 
    };

    try {
      
        const response = await fetch(API_URL, {
            method: 'POST', 
            headers: {
                
                'Content-Type': 'application/json; charset=UTF-8',
            },
  
            body: JSON.stringify(newPostData),
        });


        if (!response.ok) {
           
            throw new Error(`Erro HTTP! Status: ${response.status}`);
        }

        
        const createdPost = await response.json();

     
        statusDiv.innerHTML = `Post criado com sucesso! (ID: ${createdPost.id})`;
        
       
        resultsDiv.innerHTML = '';
        displayPosts([createdPost]); 

    } catch (error) {
       
        console.error('Erro ao criar post:', error);
        statusDiv.innerHTML = `Erro ao criar post: ${error.message}`;
    }
}


function displayPosts(posts) {
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <small>User ID: ${post.userId} | Post ID: ${post.id || '(novo)'}</small>
        `;
        resultsDiv.appendChild(postElement);
    });
}