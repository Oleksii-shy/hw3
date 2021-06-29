import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./users/Users";
import Posts from "./posts/Posts";
import Comments from "./comments/Comments";


function App() {
  return (
      <Router>
        <div>
          <div><Link to={'/home'}>Home</Link></div>
          <div><Link to={'/users'}>Users</Link></div>
          <div><Link to={'/posts'}>Posts</Link></div>
          <div><Link to={'/comments'}>Comments</Link></div>
          <hr/>
          <Switch>
            <Route path={'/users'} render={() => <Users/>}/>
            <Route path={'/posts'} render={() => <Posts/>}/>
            <Route path={'/comments'} component={Comments}/>
          </Switch>
          <hr/>
        </div>
      </Router>
  );
}

export default App;
