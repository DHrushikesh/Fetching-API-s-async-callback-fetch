const button = document.querySelector("#clickme");
button.addEventListener("click",callbackf)


function callbackf(){
    // To Display after Clicking
    const displayscreen = document.querySelector(".divinhtml");
    displayscreen.innerHTML="Callback executed after 5 seconds ...... ";
    const para1 = document.createElement("p");

    // Just a New Feature to Show hoe much tym is remaining
    setTimeout(()=>{
    para1.innerText="Titles from the API are .....  3secs more "
    displayscreen.appendChild(para1);
    },2000)
    
    setTimeout(()=>
    {
        para1.innerText="Titles from the API are ... "
        // Collects data from Json placeholder
        const data = fetch("https://jsonplaceholder.typicode.com/posts");
        const maindata = data.then(res=>res.json())
        // this fuction is used to Display Detailed Functions of the code.
        maindata.then(res=>{
            let collection="";
            res.forEach(data => 
                {
            collection = collection + `<p>  Title - ${(data.title)} <p>`;
                });
            displayscreen.innerHTML=collection;

        });
        
        // Any Errors Are Show in the Console area
        maindata.catch(res=>console.log(res));
    },5000
     )

}