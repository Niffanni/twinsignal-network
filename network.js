function runCommand(c){

switch(c){

case "help":

print("whoami")
print("join network")
print("map")
print("scan")
print("status")
print("projects")
print("archive")
print("summon rabbit")

break

case "whoami":

print("VISITOR NODE "+Math.floor(Math.random()*9000))

break

case "join network":

print("NODE REGISTERED")
print("WELCOME TO TWIN SIGNAL")

break

case "scan":

print("SCANNING NETWORK")

if(Math.random()>0.6){

print("FRAGMENT DISCOVERED")
print("two signals share one channel")

}

break

case "map":

openMap()

break

case "summon rabbit":

print("(\\_/)")
print("( •_•)")
print("/ >📡")

break

default:

aiRespond(c)

}

}