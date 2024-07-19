const button = document.getElementById("clickme");
const divarea = document.querySelector(".divinhtml");

//added New element to add Loading Section
const para1 = document.createElement("p");
// Added Onclick function
button.addEventListener("click", asyncawait);

// asynchronous fucction
async function asyncawait(){
    try
    {
    para1.innerText="Loading...."
    divarea.appendChild(para1);
    // Fetching data from DummyJSon
    const data = await fetch("https://dummyjson.com/posts");
    const maindata = await data.json();
    // Created a list to store all ELements
    let collection = [];
    maindata.posts.forEach(index => {
        //Made Sure that I Added a p tag for making Multiple lines of Code.
        collection += `<p> userid - ${index.userId} and Title is ${index.title} . </p> `  

    });
    divarea.innerHTML=collection; 
    }
    catch(error){
        // This Area is for us to Display error Code reason.
        divarea.innerHTML=`There is an error occurred the error is ${error}.`
    }
}