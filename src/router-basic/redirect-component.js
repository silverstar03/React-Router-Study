import React from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useLocation, useHistory, Redirect
} from "react-router-dom"

const RedirectComponent = (props) => {
    // 컴포넌트 내부에서도 조건에 따라 Redirect 하도록 할 수 있음
    // (ex: 특정 페이지를 보호하여 로그인이 안되어있는 경우에는 접근 못하게 하고 Login 페이지로 이동하게 함)
    if(props.redirectPath) {
        return <Redirect to={props.redirectPath} />
    } else {
        return <div>no redirection</div>
    }
}

function App() {
    return (
        <Router>
            <Link to="/">Home</Link><br />
            <Link to="/exist">존재하는 주소</Link><br />
            <Link to="/redirect1">Redirect to /</Link><br />
            <Link to="/redirect2">Redirect to /exist</Link><br />
            <Link to="/redirect_component">RedirectComponent</Link><br />

            <Switch>
                <Route path="/" exact>
                    <div>Home</div>
                </Route>
                <Route path="/exist">
                    <div>Exist</div>
                </Route>
                <Route path="/redirect1">
                    {/*
                        Redirect 컴포넌트를 이용하여 특정 주소로 redirect 가능
                        (여기서는 "/redirect1" 주소로 접근하면 "/" 주소로 redirect하도록 설정)
                    */}
                    <Redirect to="/" />
                </Route>
                <Route path="/redirect2">
                    <Redirect to="/exist" />
                </Route>
                <Route path="/redirect_component">
                    {/* <RedirectComponent /> */}
                    <RedirectComponent redirectPath="/exist" />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))