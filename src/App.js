import Todo from "./components/Todo";
import MainNav from "./components/MainNav";

function App() {
  return (
    <div>
      <MainNav></MainNav>
      <Todo name='Bob'></Todo>
      <Todo name='Charlie'></Todo>
    </div>
  );
}

export default App;
