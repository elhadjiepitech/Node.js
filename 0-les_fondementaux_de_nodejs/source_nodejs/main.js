const fileSytem = require("./src/libraries/fileSystem");
const randomWord = require('random-word');

const content = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
`

// fileSytem.createDirectory("views")
// fileSytem.createFile("views/index.html", content)
// fileSytem.createFile("views/contact.html", content)
// fileSytem.createFile("views/products.html", content)
// fileSytem.createFile("views/abouts.html", content)

const words = []
for (let index = 0; index < 20; index++) {
    const word = randomWord()
    words.push({
        index,
        word
    })
}
console.log(words);