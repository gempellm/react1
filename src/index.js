import React from 'react'
import {render} from 'react-dom'
import './index.css'

function App() {
    return (
        <div>
            <Header />
            <Main />
            <CreatePost />
        </div>
    )
}

function Header() {
    return (
        <div className="header">
            <ul>
                <a href="#"><li>Главная</li></a>
                <a href="#"><li>О проекте</li></a>
                <a href="#"><li>Регистрация</li></a>
                <a href="#"><li>Вход</li></a>
            </ul>
        </div>
    )
}

function Main() {
    return (
        <div className="main" id="main">
            <p>main</p>
        </div>
    )
}

function CreatePost() {
    return (
        <div className="createPost">
            <form>
                <label for="topic">topic</label>
                <input type="text" id="topic" name="topic" size="40"></input><br />
                <label for="essence">essence</label>
                <textarea id="essence" name="essence" rows="40" cols="40"></textarea><br />
                <button>Отправить</button>
            </form>
        </div>
    )
}

render(<App />, document.getElementById("root"))