import React from "react";

function Events({ item, filter, changeFilter, clearCompleted }) {
   // item listesindeki tamamlanmamış elemanların sayısını hesaplar
  const count = item.filter((item) => item.status === false).length;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count} </strong>
        items left
      </span>
 {/* Filtreleme düğmeleri */}
      <ul className="filters">
        <li onClick={() => changeFilter("all")}>
          <a href="#/" className={filter === "all" ? "selected" : null}>
            All
          </a>
        </li>
        <li onClick={() => changeFilter("active")}>
          <a href="#/" className={filter === "active" ? "selected" : null}>
            Active
          </a>
        </li>
        <li onClick={() => changeFilter("completed")}>
          <a href="#/" className={filter === "completed" ? "selected" : null}>
            Completed
          </a>
        </li>
      </ul>
 {/* Tamamlanmış elemanları silme butonu */}
      <button
        className={count === item.length ? "hidden" : "clear-completed"}
        onClick={() => clearCompleted()}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Events;
