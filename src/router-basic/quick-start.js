import React from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            {/* Link 컴포넌트를 이용하여 "특수한" 앵커 태그(a)를 생성*/}

                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                {/*
                Switch 컴포넌트에 포함된 Route 컴포넌트는 path에 설정된 주소와 현재 주소가
                일치할 경우 내부에 포함된 컴포넌트를 렌더링
                */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

ReactDOM.render(<App />, document.getElementById("root"))