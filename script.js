let input = document.getElementById("textt");
let add = document.getElementById("addbutton");
let maincontainer = document.getElementsByClassName("maincontainer")[0];
let i=localStorage.length;
let element="";




add.addEventListener('click',function(){

    let inputtext=input.value;
    if(inputtext!=""){
    

    let element = document.createElement('div')
    element.classList.add("output");
    element.innerHTML=` <div></div> <ul><li> ${inputtext}</li> </ul> <button><p>Delete</p></button> `

    input.value=""

    maincontainer.appendChild(element);
   
    
    localStorage.setItem("data",maincontainer.innerHTML);
   


    let checkbox = element.querySelector('div');
    checkbox.addEventListener('click', function() {
        element.firstElementChild.classList.toggle("backcolor");
        element.classList.toggle("op")
        
        localStorage.setItem("data",maincontainer.innerHTML)
     
       
    });

    let Delete_button=element.querySelector('button');
    Delete_button.addEventListener('click',function(){
        let text=element.querySelector("li");
        let textvalue=text.textContent;
        console.log(typeof(textvalue));

        element.remove()
        localStorage.setItem("data",maincontainer.innerHTML)
        
    })

    }
    else{
        alert("please enter a text")
    }




})




    
    
    


function mainn(){
    localStorage.setItem("data",maincontainer.innerHTML)

    
}




        


function localStoragedata(){
    maincontainer.innerHTML=localStorage.getItem("data");

    

    for (let i = 0; i < maincontainer.children.length; i++) {
        let element = maincontainer.children[i];
        console.log(element);


        let checkbox = element.querySelector('div');
    checkbox.addEventListener('click', function() {
        element.firstElementChild.classList.toggle("backcolor");
        element.classList.toggle("op")
        // localStorage.setItem(i,inputtext);
        localStorage.setItem("data",maincontainer.innerHTML)
     
       jhhj
    });

    let Delete_button=element.querySelector('button');
    Delete_button.addEventListener('click',function(){
        let text=element.querySelector("li");
        let textvalue=text.textContent;
        console.log(typeof(textvalue));

        element.remove()
        localStorage.setItem("data",maincontainer.innerHTML)



})


}

    
    }


localStoragedata()
























