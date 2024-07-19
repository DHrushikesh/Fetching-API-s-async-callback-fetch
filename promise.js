const button = document.getElementById("clickme");
const divarea = document.getElementsByClassName("divinhtml")[0];

button.addEventListener("click",promisesactive);

function promisesactive(){
    divarea.innerHTML="<p> Loading .... </p>";
    let timerExceeded=false;

    // Creating the setTimeout to check if it exeecded the time of 5 seconds
    setTimeout(() => {
        timerExceeded = true;
        console.log("5 second Timer Complete ");
        
    }, 5000);

    // fetch and put values into the div area

    
    // the setTimeout in the commented section are to check the functionality of operation timedout
// setTimeout(()=>{
    const data = fetch("https://dummyjson.com/posts");
    let maindata = data.then(res=>res.json())
    maindata.then(res=>
    { 
        // If loading the API request takes more  than 5 seconds then I Set the data to be Operation Timedout.
        if(timerExceeded!=true){
        let collection =[];
        res.posts.forEach(index => 
            {
                // has an arrray of p tags Titiles
                collection = collection + `<p>Titles is ${index.title}.</p>`
                
            });
            divarea.innerHTML=collection;}
        
        else{
            divarea.innerHTML = "<p>Operation timed out.</p>";
        }
        
    }
    );

    maindata.catch(error=>divarea.innerHTML=`Promise is rejected. Error - ${error}`);
// },4000)

}