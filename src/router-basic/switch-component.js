import React from "react"
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useRouteMatch
} from "react-router-dom"

const Blog = () => {
    const match = useRouteMatch()
    return <div>Blog {match.params.blogId}</div>
}

function App() {
    return (
        <Router>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/blogs/1">Blog (Post #1)</Link><br />
            <Link to="/blogs/2">Blog (Post #2)</Link><br />
            <Link to="/blogs">Blogs</Link><br />

            {/*
            * Switch 컴포넌트를 이용할 경우 가장 첫 번째로 매치되는 Route 컴포넌트를 사용하게 됨 (switch - case 구문과 유사)
            * Switch 컴포넌트를 사용하지 않을 경우 모든 Route 컴포넌트를 확인하며 매치되는 Route 컴포넌트를 사용
            */}
            <Switch>
                <Route exact path="/"><h1>Home</h1></Route>
                <Route path="/about"><h1>About</h1></Route>
                {/*
                    Route 컴포넌트 배치 순서에 주의!

                    <Route path="/blogs"><h1>Blogs</h1></Route>
                    <Route path="/blogs/:blogId"><Blog /></Route>

                    Switch 컴포넌트로 감싸고 있는데 "blogs/1"로 주소가 변경되어도,
                    path가 "/blogs"로 설정된 컴포넌트가 먼저 렌더링되어 그 이후에는
                    렌더링이 이루어지지 않음을 유의 (혹은 다음과 같이 exact 속성을 추가)

                    <Route path="/blogs" exact><h1>Blogs</h1></Route>
                */}
                <Route path="/blogs/:blogId"><Blog /></Route>
                <Route path="/blogs"><h1>Blogs</h1></Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))
