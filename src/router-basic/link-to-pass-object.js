import React from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useLocation
} from "react-router-dom"

const Courses = (props) => {
// location 객체를 통해서 Link의 to prop을 통해 전달한 객체 접근 가능
    const location = useLocation()
    return (
        <div>
            <p>{location.pathname}</p>
            <p>{location.search}</p>
            <p>{location.hash}</p>
            {/* 추가 정보 접근 가능 */}
            <p>{location.state.fromDashboard.toString()}</p>
        </div>
    )
}

function App() {
    return (
        <Router>
            <Link to="/">Home</Link><br />
            <Link to={{
                pathname: "/courses", // 주소(pathname) 전달
                search: "?sort=name", // 필요한 경우 query string 전달
                hash: "#the-hash", // 필요한 경우 fragment 전달
// 필요한 경우 추가 정보를 객체 형태로 전달 가능
                state: {
                    fromDashboard: true
                }
            }}>Courses</Link><br />
            <Route path="/" exact>
                <div>Home</div>
            </Route>
            <Route path="/courses" component={Courses} />
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))