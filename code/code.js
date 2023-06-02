const sortList = document.querySelector ("#sort")
const input = document.querySelector("#input")
const addTodo = document.querySelector("#add")
const showTodo = document.querySelector("#show")
const displayList = document.querySelector ("#displayList")
let list = []

addTodo.addEventListener ("click", (event) => {
    event.preventDefault()
    if (input.value){
    list.push(input.value)
    input.value = ""
    }
    else{
        
        alert("You have not put in any information, please enter what is on your to do list")
    }
    list.forEach((item)=>{
        document.getElementById ("displayList").innerHTML += `
            <li type>${item}</li>
            `
    }) 
    
localStorage.setItem("toDoList", JSON.stringify(list))
});



// displayList.innerHTML = "";
// showTodo.addEventListener ("click", (e)=>{
//     e.preventDefault()
//     list.forEach((item)=>{
//         document.getElementById ("displayList").innerHTML += `
//             <li>${item}</li>`
//     })
//         localStorage.setItem("toDoList", JSON.stringify(list))



//sorting

sortList.addEventListener ("click", (e)=>{
    e.preventDefault ()
    list.forEach((item)=>{
    document.getElementById ("displayList").innerHTML += `
    <li>${list.sort()}</li>`
    })
    localStorage.setItem("toDoList", JSON.stringify(list))

})
