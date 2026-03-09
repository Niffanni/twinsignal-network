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