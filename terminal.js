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
function runCommand(command){

if(command==="help"){
print("Available commands:")
print("whoami — identify this node")
print("join network — connect to TwinSignal mesh")
print("scan — search for nearby nodes")
print("map — view constellation network")
print("summon rabbit — trigger anomaly")
}

else if(command==="whoami"){
print("You are a TwinSignal node.")
}

else if(command==="join network"){
print("Node accepted into the signal mesh.")
}

else if(command==="scan"){
print("Scanning nearby nodes...")
print("1 signal detected.")
}

else if(command==="map"){
print("Opening constellation network map...")
}

else if(command==="summon rabbit"){
print("Glitch rabbit anomaly detected 🐇")
}

else{
print("Unknown command")
}

}
function runCommand(command){

if(command==="help"){
print("Available commands:")
print("whoami")
print("join network")
print("scan")
print("map")
print("summon rabbit")
}

else if(command==="whoami"){
print("You are a TwinSignal node.")
}

else if(command==="join network"){
print("Node accepted into the signal mesh.")
}

else if(command==="scan"){
print("Scanning nearby nodes...")
print("1 signal detected.")
}

else if(command==="map"){
print("Opening constellation network map...")
}

else if(command==="summon rabbit"){
print("Glitch rabbit anomaly detected 🐇")
}

else{
print("Unknown command")
}

}
function runCommand(command){

if(command==="help"){
print("Available commands:")
print("whoami")
print("join network")
print("scan")
print("map")
print("summon rabbit")
}

else if(command==="whoami"){
print("You are a TwinSignal node.")
}

else if(command==="join network"){
print("Node accepted into the signal mesh.")
}

else if(command==="scan"){
print("Scanning nearby nodes...")
print("1 signal detected.")
}

else if(command==="map"){
print("Opening constellation network map...")
}

else if(command==="summon rabbit"){
print("Glitch rabbit anomaly detected 🐇")
}

else{
print("Unknown command")
}

}