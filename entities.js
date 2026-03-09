setInterval(function(){

if(Math.random()<0.3){

const m=document.createElement("div")

m.innerText="(•.•)"

m.style.position="fixed"

m.style.left=Math.random()*window.innerWidth+"px"

m.style.top=Math.random()*window.innerHeight+"px"

document.body.appendChild(m)

}

},15000)