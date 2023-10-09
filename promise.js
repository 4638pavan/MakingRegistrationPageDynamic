const posts = [
    { title: 'Post One', body: 'This is post one' },
    { title: 'Post Two', body: 'This is post two' },
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const lastActivityTime = new Date().toLocaleTimeString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

// Create a promise to delete the last post
function deletePost() {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.pop();
            resolve();
        }, 2000);
    });
}

Promise.all([createPost({ title: 'Post Three', body: 'This is post three' }), updateLastUserActivityTime()])
    .then(([_, lastActivityTime]) => {
        console.log('Posts:', posts);
        console.log('Last Activity Time:', lastActivityTime);
        return deletePost();
    })
    .then(() => {
        console.log('Posts after deletion:', posts);
    
    })
    .catch((err) => console.log(err));