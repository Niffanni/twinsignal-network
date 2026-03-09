const output = document.getElementById("output")
const cmd = document.getElementById("cmd")

function print(text){
output.innerHTML += text + "<br>"
output.scrollTop = output.scrollHeight
}

cmd.addEventListener("keydown", function(e){

if(e.key === "Enter"){

let command = this.value.trim().toLowerCase()

print("> " + command)

runCommand(command)

this.value = ""

}

})

function runCommand(command){

if(command === "help"){
print("Available commands:")
print("whoami")
print("join network")
print("scan")
print("map")
print("summon rabbit")
return
}

if(command === "whoami"){
print("You are a TwinSignal node.")
return
}

if(command === "join network"){
print("Node accepted into the signal mesh.")
return
}

if(command === "scan"){
print("Scanning nearby nodes...")
print("1 signal detected.")
return
}

if(command === "map"){
print("Opening constellation map...")
return
}

if(command === "summon rabbit"){
print("Glitch rabbit anomaly detected 🐇")
return
}

print("Unknown command")

}
function runCommand(command){

if(command === "help"){
print("Available commands:")
print("whoami")
print("join network")
print("scan")
print("map")
print("summon rabbit")
return
}

if(command === "whoami"){
print("You are a TwinSignal node.")
return
}

if(command === "join network"){
print("Node accepted into the signal mesh.")
return
}

if(command === "scan"){
print("Scanning nearby nodes...")
print("1 signal detected.")
return
}

if(command === "map"){
print("Opening constellation map...")
return
}

if(command === "summon rabbit"){
print("Glitch rabbit anomaly detected 🐇")
return
}

print("Unknown command")

}