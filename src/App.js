import logo from "./logo.svg";
import "./App.css";
import "./comp/css/main.css";
import posts from "./posts";
import PostCard from "./comp/components/PostCard";
import PostList from "./comp/components/PostList";

//import "./css style/main.css"
// import PostCard from "./comp/components/PostCard";

function App() {
  return (
    <div className="main-post">
      {/* <PostCard /> */}
      <PostList />
    </div>
  );
}

export default App;
