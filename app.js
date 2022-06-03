/* function displayPost(){
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
} */

function displayComment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(data => findComment(data));
}

displayComment();


function findComment(comments){
    const commentId = document.getElementById('comment-id');
    for(const comment of comments){
        const div = document.createElement('div');
        div.innerHTML = `<h1>name:${comment.name}</h1>
        <h3>Email:${comment.email}</h3>
        <p>Details:${comment.body}</p>
        `;
        commentId.appendChild(div);
    }
}