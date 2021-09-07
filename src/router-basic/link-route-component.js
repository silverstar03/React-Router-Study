import React from "react"
import ReactDOM from 'react-dom'
import {
// Router 별칭 부여
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

function App() {
    return (
        <Router>
            {/* to 속성값으로 이동할 주소를 전달 */}
            <Link to="/">/</Link><br />
            <Link to="/abc">abc</Link><br />
            <Link to="/abcdef">abcdef</Link><br />
            <Link to="/abc/def">abc/def</Link><br />
            <Link to="/abcdefghi">abcdefghi</Link><br />
            <Link to="/abc/def/ghi">abc/def/ghi</Link><br />
            {/* a 태그를 사용하면 페이지 이동 발생 */}
            <a href="/abc/def/ghi">(a tag) abc/def/ghi</a><br />

            <Route path="/" exact>
                <div>path=/</div>
            </Route>
            <Route path="/abc" exact={false}>
                <div>path=/abc</div>
            </Route>
            <Route path="/abcdef">
                <div>path=/abcdef</div>
            </Route>
            <Route path="/abc/def" exact={false}>
                <div>path=/abc/def</div>
            </Route>
            <Route path="/abcdefghi">
                <div>path=/abcdefghi</div>
            </Route>
            <Route path="/abc/def/ghi">
                <div>path=/abc/def/ghi</div>
            </Route>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("root"))
