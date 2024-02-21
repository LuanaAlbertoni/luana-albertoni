import { Nav, Works, Knowledge } from "components";

export default function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Luana Albertoni</h1>
      <Nav />

      <div className="w-1/2">
        <Knowledge />
      </div>
      <div className="flex">
        <div className="w-1/2">
          <Works />
        </div>
      </div>
    </div>
  );
}
