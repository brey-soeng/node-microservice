import PostCreate from "./components/PostCreate";
import PostList from "./components/PostLit";

function App() {
  return (
    <>
      <div className="container">
        <PostCreate />
        <PostList />
      </div>
    </>
  );
}

export default App;
