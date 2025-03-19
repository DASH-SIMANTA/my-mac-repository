function loadPosts(){
    // console.log('load post')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

/* 
1.get the element where you want to add the new elements
2.create child element
3. set innerText or innerHTML
4.appendChild
*/

function displayPosts(posts){
    const postsContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
         <h4>user-${post.userId}<h/4>
         <h5>post: ${post.title}</h5>
         <p>Post Description${post.body}</p>
        `;
        postsContainer.appendChild(postDiv);
       
    }

}
loadPosts();



