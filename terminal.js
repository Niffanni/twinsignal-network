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

  switch(command){

    case "help":
      print("Available commands:")
      print("whoami")
      print("join network")
      print("scan")
      print("map")
      print("summon rabbit")
      break

    case "whoami":
      print("You are a TwinSignal node.")
      break

    case "scan":
      networkScan()
      break

    case "join network":
      joinNetwork()
      break

    case "map":
      print("Opening constellation map...")
      break

    case "summon rabbit":
      summonRabbit()
      break

    default:
      print("Unknown command")

  }

}