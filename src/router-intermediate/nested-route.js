import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom"
import ReactDOM from "react-dom"

function NestingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/topics"><Topics /></Route>
                </Switch>
            </div>
        </Router>
    );
}

function NestingExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/topics">Topics</Link></li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/topics"><Topics /></Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch()
    console.log(path, url)

    return (
        <div>
            <h2>Topics</h2>
            {/*
                url 값을 사용하는 것에 주목
                topics/rendering
                topics/components
                topics/props-v-state
            */}
            <ul>
                <li><Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li><Link to={`${url}/components`}>Components</Link></li>
                <li><Link to={`${url}/props-v-state`}>Props v. State</Link></li>
            </ul>

            <Switch>
                {/*
                    여기서는 url이 아닌 path 값을 사용하는 것에 주목
                    (왜냐하면 만약 :id와 같은 파라미터 전달 형식의 문자열이 들어가 있다면 그대로 전달해줘야 하므로...)
                */}
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams()

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}

ReactDOM.render(<NestingExample />, document.getElementById("root"))