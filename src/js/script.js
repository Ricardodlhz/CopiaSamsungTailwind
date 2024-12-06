//Variables
let explore=document.getElementById("explore")
let explore_img=document.getElementById("explore_img")
//Funciones
const cambiarBG=(event)=>{
        if(event.target==explore.children[0].children[0] || event.target==explore.children[0].children[1]){
            console.log(event.target.textContent)
            explore_img.src="./assets/images/bg_explore1.webp"
        }
        if(event.target==explore.children[1].children[0] || event.target==explore.children[1].children[1]){
            console.log(event.target.textContent)
            explore_img.src="./assets/images/bg_explore2.webp"
        }
        if(event.target==explore.children[2].children[0] || event.target==explore.children[2].children[1]){
            console.log(event.target.textContent)
            explore_img.src="./assets/images/bg_explore3.webp"
        }
        if(event.target==explore.children[3].children[0] || event.target==explore.children[3].children[1]){
            console.log(event.target.textContent)
            explore_img.src="./assets/images/bg_explore4.webp"
        }
}

//Listener
explore.addEventListener("mouseover",cambiarBG)