function networkScan() {
  print("Scanning signal mesh...");

  const nodes = [
    "node-alpha",
    "node-beta",
    "node-gamma"
  ];

  nodes.forEach(function(node) {
    print("detected: " + node);
  });
}

function joinNetwork() {
  print("Attempting connection...");

  setTimeout(function() {
    print("Connection established.");
    print("Welcome to the TwinSignal Network.");
  }, 500);
}