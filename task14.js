const posts = [
    {title:'Post one', body:'This is post one' },
    {title:'Post one', body:'This is post one' }
]
function getPosts(){
    setTimeout( () => {
        let output ='';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML =output;
    }, 1000);
} 

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            posts.push(post);

            const error =false;

            if(!error){
                resolve();
            } else{
                reject('Error: Something went wrong');
            }
        },2000);
    })
}

const user ={
    username: "pavan"
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject) => {
        setTimeout( () => {
             user.lastactivitytime = new Date().getTime();
            resolve(user.lastactivitytime);
        },1000);
    })
}



Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime() ]).then(values => console.log(values));