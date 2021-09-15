import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom"
import qs from 'query-string'

class ParamComponent extends Component {
    constructor(props) {
        console.log("from constructor");
        super(props)

        // "/params/:id"
        console.log(this.props.match.path)
        // :id가 아닌, "/params/1234"와 같이 실제 주소를 출력함을 유의
        // (즉, path는 주소에 담긴 "파라미터 관련 내용"을 그대로 전달받기 위해서 사용함)
        console.log(this.props.match.url)
        // { id: "1234" }
        console.log(this.props.match.params)
    }
    /*
        With ID Param (1234) 링크 클릭하여 ParamComponent가 mount된 상황에서
        With ID Param (5678) 링크를 클릭하여 파라미터 값이 바뀌었다고 해서 remount를
        하지는 않으므로 componentWillReceiveProps 메소드 재정의하여 새로운 match 객체에 접근해야 함

        https://stackoverflow.com/questions/32261441/component-does-not-remountwhen-route-parameters-change
    */

    componentWillReceiveProps(nextProps) {
        console.log("from componentWillReceiveProps");
        console.log(nextProps.match.params.id)
        // ... 새로운 파라미터 값을 가지고 해야할 작업 진행
    }
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}


class HelloWorld extends Component {
    constructor(props) {
        super(props)

        // props 통해서 match, location, history 객체 접근 가능
        // (해당 값은 부모 컴포넌트인 라우터 컴포넌트에서 전달)
        const match = this.props.match
        const location = this.props.location
        const history = this.props.history

        /* 주소와 관련된 정보와 매칭 여부 정보를 제공하는 match 객체 */
        console.log(match)
        // 여기서는 path, url의 결과값 차이가 없어보이지만, 콜론을 이용하여 주소를 통해 파라미터 값을 전달할 수 있도록 Route의 path 속성값을 설정할 경우 다른 결과가 나옴을 유의
        console.log(match.path) // "/hello/world"
        console.log(match.url) // "/hello/world"
        // 주소가 완전히 정확하게 일치하는 경우 true 반환
        console.log(match.isExact)

        /* 현재 주소와 관련된 정보를 제공하는 location 객체 */
        console.log(location)
        console.log(location.search) // "name=john&age=20"
        console.log(location.pathname) // "/hello/world"
        // 외부 라이브러리(ex: query-string) 이용해서 쿼리 스트링을 객체로 변환 가능
        const p = qs.parse(location.search)
        // {age: "20", name: "john"}
        console.log(p)

        /* 지금까지 이동한 링크에 대한 내역 및 주소 이동 관련 메소드를 제공하는 history 객체 */
        console.log(history)
        // history 객체의 location 속성을 통해서도 앞서 살펴본 location 객체 접근 가능
        // (단, history 객체의 location을 이용하여 location 정보에 접근하는 것은 권장되지 않음)
        console.log(history.location === location) // true
        // debugger;
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    // push 메소드로 다른 주소로 이동 가능
                    this.props.history.push("/")

                    // replace 메소드 사용도 가능 (이 경우에는 history 내역에 내용을 추가하지 않고 이동)
                    // https://stackoverflow.com/questions/39340108/what-is-thetrade-off-between-history-push-and-replace
                    // this.props.history.replace("/")
                }}>Go</button>
            </div>
        )
    }
}

const PropsPage = ({ title }) => {
    return (
        <h3>{title}</h3>
    )
}

function App() {
    return (
        <Router>
            <Link to="/hello/world?name=john&age=20">HelloWorld</Link><br />
            <Link to="/params/1234">With ID Param (1234)</Link><br />
            <Link to="/params/5678">With ID Param (5678)</Link><br />
            <Link to="/props-through-render">Props through render</Link>

            <Route path="/" exact><div>Home</div></Route>
            <Route path="/params/:id" component={ParamComponent}></Route>
            <Route path="/hello/world" component={HelloWorld}>
            </Route>

            {/* https://learnwithparam.com/blog/how-to-pass-props-in-reactrouter/ */}
            <Route exact path="/props-through-render" render={(props) =>
                <PropsPage {...props} title={`Props through render`} />} />
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))