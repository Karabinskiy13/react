const path = require('path')
const fs = require('fs')

fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if (err) {
        console.log(err)
    }
})
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), (err) => {
    if (err) {
        console.log(err)
    }

})
let onlineUsers = [
    {
        name: 'Andriy',
        age: 22,
        city: 'Lviv'
    },
    {
        name: 'Kolya',
        age: 40,
        city: 'Poltava'
    },
    {
        name: 'Viktor',
        age: 34,
        city: 'Kharkiv'
    }
]
for (const onlineUser of onlineUsers) {
    fs.writeFile(
        path.join(__dirname, 'main', 'online', 'online.txt'), `Name:${onlineUser.name} Age:${onlineUser.age} City:${onlineUser.city}\n`, {flag: 'a'}, (err) => {
            if (err) {
                console.log(err)
            }
        }
    )
}
let inPersonUsers = [
    {
        name: 'Ihor',
        age: 25,
        city: 'Nikolaev'
    },
    {
        name: 'Sidor',
        age: 20,
        city: 'Kyiv'
    },
    {
        name: 'Olga',
        age: 90,
        city: 'Dnipro'
    }
]
for (const inPersonUser of inPersonUsers) {
    fs.writeFile(
        path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `Name:${inPersonUser.name} Age:${inPersonUser.age} City:${inPersonUser.city}\n`, {flag: 'a'}, (err) => {
            if (err) {
                console.log(err)
            }
        }
    )
}

function changeStatus() {
    fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'), path.join(__dirname, 'main', 'inPerson', 'inPerson1.txt'), (err) => {
        if (err) {
            console.log(err)
        }
        fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), path.join(__dirname, 'main', 'online', 'online.txt'), (err) => {
                if (err) {
                    console.log(err)
                }
                fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson1.txt'), path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        )
    })

}

changeStatus()
