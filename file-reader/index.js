const fs = require("fs");

const file1 = "Сова - лучший друг Винни-Пуха";

// fs.readFile("read.txt")
//     .then(text => console.log(text.toString()))
//     .catch(err => console.log(err.message));

// fs.writeFile("read2.txt", file1)
//     .then(text => console.log(text))
//     .catch(err => console.log(erer.message));

    // fs.appendFile("read.txt", file1)
    // .then(text => console.log(text))
    // .catch(err => console.log(erer.message));
    try {
        fs.unlink("read2.txt");
        console.log("Удаление файла прошло успешно")
    }
    catch(err) {
        console.log(err.message)
    }
    
