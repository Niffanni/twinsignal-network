const output=document.getElementById("output")
const cmd=document.getElementById("cmd")

function print(t){

output.innerHTML+=t+"\n"
output.scrollTop=output.scrollHeight

}

cmd.addEventListener("keydown",function(e){

if(e.key==="Enter"){

let command=this.value.toLowerCase()

print("> "+command)

runCommand(command)

this.value=""

}

})