import MainNav from "../components/MainNav";
import StateCountDemo from "../demoComponents/StateCountDemo";
import Todo from "../demoComponents/Todo";

function DemoList() {
  return (
    <div>
      <MainNav></MainNav>
      <h1>Demo List</h1>
      <StateCountDemo></StateCountDemo>
      <h2>To do List Demo</h2>
      <Todo name='Bob'></Todo>
      <Todo name='Charlie'></Todo>
    </div>
  );
}

export default DemoList;
