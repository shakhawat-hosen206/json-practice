function displayPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => createPost(data))
}

displayPost();


function createPost(posts){
    const postId = document.getElementById('posts-id');
    for(const post of posts){
       const div = document.createElement('div');
       div.innerHTML = `
        <h3 class="title">${post.title}</h3>
        <p class="pra">${post.body}</p>
       `;
       div.classList.add('post');
       
       postId.appendChild(div);
    }
}