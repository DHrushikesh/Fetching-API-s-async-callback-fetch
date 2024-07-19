const button = document.getElementById("clickme");
const divarea = document.querySelector(".divinhtml");

const para1 = document.createElement("p");

button.addEventListener("click", asyncawait);

async function asyncawait(){
    try
    {
    para1.innerText="Loading...."
    divarea.appendChild(para1);
    const data = await fetch("https://dummyjson.com/posts");
    const maindata = await data.json();
    let collection = [];
    maindata.posts.forEach(index => {
        
        collection += `<p> userid - ${index.userId} and Title is ${index.title} . </p> `  
        
    });
    divarea.innerHTML=collection; 
    }
    catch(error){
        divarea.innerHTML=`There is an error occurred the error is ${error}.`
    }
}