import { useState } from "react";
import "./App.css";
import { Explorer } from "./types";
import json from "./data.json";

function List({ data }: { data: Explorer[] }) {
  return (
    <div className="container">
      {data.map((node) => (
        <div key={node.id}>
          <span>{node.isFolder && "+"} </span>
          {node.name}
          {node.isFolder && <List data={node.children} />}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [data] = useState<Explorer[]>(json);
  return <List data={data} />;
}

export default App;
