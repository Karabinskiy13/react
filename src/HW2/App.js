// декілька ендпоінтів зробити
//
// 1. /login, поля які треба відрендерити в файлі hbs: firstName, lastName, email(унікальне поле), password, age, city
// просто зробити темплейт з цим усім і вводити свої дані які будуть пушитися в масив і редірект робити на сторінку з усіма юзерами /users і перевірка чи такий імейл не існує, якщо існує то редірект на еррор пейдж
// 2. /users просто сторінка з усіма юзерами, але можна по квері параметрам їх фільтрувати по age і city
// 3. /user/:id сторінка з інфою про одного юзера
//
// 4. зробити якщо не відпрацюють ендпоінти то на сторінку notFound редірект

// Необхідно розширити ваше ДЗ:
//     - додайте ендпоінт signIn який буде приймати email і password і якщо все вірно то редірект на сторінку цього
//
// * хто хоче складніше реалізуйте видалення користувача. Кнопка повинна знаходитись на сторінці з інфою про одного юзера. Після видалення редірект на "/users"


const express = require('express')
const {engine} = require('express-handlebars')
const path = require('path')
const {query} = require("express");

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs')
app.engine('hbs', engine({defaultLayout: false}))
app.set('views', path.join(__dirname, 'static'))

const users = []
let error = ''

app.get('/signIn', (req, res)=>{
    res.render('signIn')
})
app.post('/signIn',(req, res)=>{
    const validation=users.find(user=>user.email===req.body.email && user.password===req.body.password)
    if (!validation){
        error='Email or password incorrect'
        res.redirect('/error')
        return
    }
    res.redirect(`users/${validation.id}`)
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', ({body}, res) => {
    const userExist = users.some(user => user.email ===body.email)
    if (userExist) {
        error = `User with this email${body.email} already exist`
        res.redirect('/error')
        return
    }
    users.push({...body, id: users.length ? users[users.length - 1].id + 1 : 1 })
    res.redirect('/users')
    console.log(body)
})

app.get('/users', (req, res) => {
    if (Object.keys(req.query).length){
        let usersArray=[...users]
        if (req.query.city){
            usersArray=usersArray.filter(user=>user.city===req.query.city)
        }
        if (req.query.age){
            usersArray=usersArray.filter(user=>user.age===req.query.age)
        }
        res.render('users', {users: usersArray})
        return
    }
    res.render('users', {users})
})
app.get('/error', (req, res) => {
    res.render('error', {error})
})
app.get('/users/:userId', (req, res) => {
    const {userId}=req.params
    const user = users.find(user => user.id === +userId);
    if (!user) {
        error = `User with ID: ${userId} exist!`;
        res.redirect('/error');
        return;
    }
    res.render('userInfo', { user });
});
app.use((req, res) => {
    res.render('noFound')
})

app.listen(5200, () => {
    console.log('Server has started on PORT 5200 ')
})
