import Header from "./components/Header";
import Form from "./components/Form";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState([
    { id: 1, value: "Shopping", status: false },
    { id: 2, value: "Homeworks", status: false },
    { id: 3, value: "Meeting", status: false },
  ]);

  const [filter, setFilter] = useState("all");
  const completedItem = item.filter((item) => item.status === true);
  const activeItem = item.filter((item) => item.status === false);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  const clearCompleted = () => setItem(activeItem);

  return (
    <div className="app">
      <div className="todoapp">
        <Header items={item} setItems={setItem} />
        <Form
          items={item}
          setItems={setItem}
          filter={filter}
          completedItems={completedItem}
          activeItems={activeItem}
        />
        <Events
          item={item}
          filter={filter}
          changeFilter={changeFilter}
          clearCompleted={clearCompleted}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
