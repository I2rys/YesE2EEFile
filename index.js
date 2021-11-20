//Dependencies
const Yes2EE = require("./utils/yese2ee")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

//Main
if(!Self_Args.length){
    console.log("node index.js <file> <encrypt/decrypt> <key1> <key2>")
    process.exit()
}

if(!Self_Args[1]){
    console.log("Invalid encrypt/decrypt option.")
    process.exit()
}

if(!Self_Args[2]){
    console.log("Invalid key1.")
    process.exit()
}

if(!Self_Args[3]){
    console.log("Invalid key2.")
    process.exit()
}

var file_data = Fs.readFileSync(Self_Args[0], "utf8")

switch(Self_Args[1]){
    case "encrypt":
        file_data = Yes2EE.encrypt(file_data, Self_Args[2], Self_Args[3])
        Fs.writeFileSync(Self_Args[0], file_data, "utf8")
        console.log("File successfully encrypted.")
        break
    case "decrypt":
        file_data = Yes2EE.decrypt(file_data, Self_Args[2], Self_Args[3])
        Fs.writeFileSync(Self_Args[0], file_data, "utf8")
        console.log("File successfully decrypted.")
        break
    default:
        console.log("Invalid encrypt/decrypt option.")
        process.exit()
        break
}
