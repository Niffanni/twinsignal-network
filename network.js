function networkScan(){

print("Scanning signal mesh...")

let nodes = [
"node-alpha",
"node-beta",
"node-gamma"
]

nodes.forEach(node=>{
print("detected: " + node)
})

}

function joinNetwork(){

print("Attempting connection...")

setTimeout(()=>{
print("Connection established.")
print("Welcome to the TwinSignal Network.")
},500)

}