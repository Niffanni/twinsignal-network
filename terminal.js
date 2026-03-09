var output = document.getElementById("output");
var cmd = document.getElementById("cmd");

function print(text) {
  output.innerHTML += text + "<br>";
  output.scrollTop = output.scrollHeight;
}

cmd.addEventListener("keydown", function(e) {

  if (e.key === "Enter") {

    var command = cmd.value.trim().toLowerCase();

    print("> " + command);

    runCommand(command);

    cmd.value = "";

  }

});

function runCommand(command) {

  if (command === "help") {
    print("Available commands:");
    print("whoami");
    print("join network");
    print("scan");
    print("map");
    print("summon rabbit");
  }

  else if (command === "whoami") {
    print("You are a TwinSignal node.");
  }

  else if (command === "scan") {
    networkScan();
  }

  else if (command === "join network") {
    joinNetwork();
  }

  else if (command === "map") {
    print("Opening constellation map...");
  }

  else if (command === "summon rabbit") {
    summonRabbit();
  }

  else {
    print("Unknown command");
  }

}