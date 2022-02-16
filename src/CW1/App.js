const path = require('path')
const fs = require('fs')
// // Завдання на практику
// //
// // 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу, дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий callback hell, пізніше я вам покажу
// // як можна це обійти, але поки зробіть так
// fs.writeFile(path.join(__dirname, 'file.txt'), 'Lorem123123', (err => {
//     if (err){
//         console.log(err)
//     }
//     fs.readFile(path.join(__dirname, 'file.txt'), ((err, data)=>{
//         if (err){
//             console.log(err)
//         }
//         fs.writeFile(path.join(__dirname, 'memoryFile.txt'), `${data}`, (err =>{
//             if (err){
//                 console.log(err)
//             }
//         } ))
//     }))
// }))
//
// //
// // 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// // Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову папку та файл в ній, старий файл видаліть після того як все завершиться. Також вийде callback hell
//
// fs.writeFile(path.join(__dirname, 'info.txt'), 'info1234567info', (err => {
//     if (err){
//         console.log(err)
//     }
//     fs.readFile(path.join(__dirname, 'info.txt'), ((err, data)=>{
//         if (err){
//             console.log(err)
//         }
//         fs.copyFile(path.join(__dirname, 'info.txt'), path.join(__dirname, 'infoCopy.txt'),(err=>{
//             if (err){
//                 console.log(err)
//             }
//             fs.rename(path.join(__dirname, 'infoCopy.txt'), path.join(__dirname, 'copyInfo', 'infoCopy'), (err=>{
//                 if (err){
//                     console.log(err)
//                 }
//                 fs.unlink(path.join(__dirname, 'info.txt'), (err=>{
//                     if (err){
//                         console.log(err)
//                     }
//                 }))
//             }))
//         }))
//     }))
// }))
//
// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані які в ній лежать - це файли тоді вам потрібно їх очистити, але не видаляти, якщо дані - це папки, вам потрібно їх перейменувати і додати до назви префікс _new

fs.mkdir(path.join(__dirname, 'html', 'css', 'javascript'), {recursive: true}, (err => {
    if (err) {
        console.log(err)
    }
    fs.writeFile(path.join(__dirname, 'html', 'css', 'javascript', 'javascript.txt'), 'JAVASCRIPT123', (err => {
        if (err) {
            console.log(err)
        }
        fs.writeFile(path.join(__dirname, 'html', 'css', 'CSS.txt'), 'CSS12345', (err => {
            if (err) {
                console.log(err)
            }
        }))
    }))
}))
 const wayTo= path.join(__dirname, 'html', 'css')
function check(wayTo) {
    fs.readdir(wayTo, ((err, files) => {
        if (err) {
            console.log(err)
        }
        for (const file of files) {
            if (path.extname(file)) {
                fs.truncate(path.join(wayTo, file), err => {
                    if (err) {
                        console.log(err)
                    }
                })
            } else {
                fs.rename(path.join(wayTo, file), path.join(wayTo, `new${file}`), (err => {
                    if (err) {
                        console.log(err)
                    }
                }))
            }
        }
    }))
}
check(wayTo)