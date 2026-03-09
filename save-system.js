let fragments=JSON.parse(localStorage.getItem("fragments"))||[]

function saveFragments(){
localStorage.setItem("fragments",JSON.stringify(fragments))
}