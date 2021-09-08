import React from "react"
import ReactDOM from 'react-dom'
import {
    // Router 별칭 부여
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <p>{JSON.stringify(props)}</p>
        </div>
    )
}

function App() {
    const user = { name: "John", age: 20 }

    return (
        <Router>
            {/* to 속성값으로 이동할 주소를 전달 */}
            <Link to="/">home</Link><br />

            {/* Route의 자식으로 컴포넌트 추가 */}
            <Route path="/">
                <Home user={user} />
            </Route>

            {/* Route의 자식으로 컴포넌트 추가 */}
            <Route path="/" component={Home} />

            {/* render 속성값으로 컴포넌트 반환 함수 전달 */}
            <Route path="/" render={
                (props) => {
                // 함수로 전달받은 props에는 Route에서 전달한 history, location, match 정보가 포함됨
                    return <Home {...props} user={user} />
                }
            } />

            <Route path="/" render={
            // history, location, match 정보가 필요하지 않다면 props 전달 생략가능
                () => {
                    return <Home user={user} />
                }
            } />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))