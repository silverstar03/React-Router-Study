import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link, useRouteMatch, useLocation, useHistory
} from "react-router-dom"
import qs from 'query-string'

const ParamComponent = (props) => {
    const match = useRouteMatch()
    console.log(match.path) // /params/:id
    console.log(match.params) // {id: "1234"}
    return (
        <div>
            {match.params.id}
        </div>
    )
}

const HelloWorld = (props) => {
    // useRouteMatch, useLocation, useHistory 훅을 이용하여 match, location,history 객체 접근 가능

    const match = useRouteMatch()
    const location = useLocation()
    const history = useHistory()

    console.log(match)
    console.log(location)
    const p = qs.parse(location.search);
    console.log(p) // {age: "20", name: "john"}
    console.log(history)

    return (
        <div>
            <button onClick={() => {
                // push 메소드로 다른 주소로 이동 가능
                history.push("/")
            }}>Go</button>
        </div>
    )
}

const PropsPage = ({ title }) => {
    return (
        <h3>{title}</h3>
    );
};

function App() {
    return (
        <Router>
            <Link to="/hello/world?name=john&age=20">HelloWorld</Link><br />
            <Link to="/params/1234">With ID Param (1234)</Link><br />
            <Link to="/params/5678">With ID Param (5678)</Link><br />
            <Route path="/" exact><div>Home</div></Route>
            {/*
                클래스 컴포넌트와는 다르게 component 속성으로 전달하거나 render props를 쓸 필요가 없음
                (즉, 자식으로 포함하게 전달해도 무방함,
                왜냐하면 내부적으로 hook을 이용해서 match, location, history 객체에 접근 가능하기 때문,
                따라서 withRouter 같은 HoC도 사용할 필요 없음)
            */}
            <Route path="/params/:id">
                <ParamComponent />
            </Route>
            <Route path="/hello/world">
                <HelloWorld />
            </Route>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))
