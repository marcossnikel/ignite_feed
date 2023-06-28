import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <Post author="marcos nikel" content="hahahaha" />
      <Post author="livia" content="sql" />
    </div>
  );
}
