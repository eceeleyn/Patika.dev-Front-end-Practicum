import React, { useState } from "react";

export default function Header({ items, setItems}) {
  const [newtodo, setnewtodo] = useState("");
  const  onSubmit=(e) => {
    //sayfa yenilenmesini önler.
    e.preventDefault();
    console.log(newtodo);
    if (newtodo === "") {
      return false;
    }
    setItems([...items, { value: newtodo, status: false }]);
    setnewtodo('');
  }

  return (
    <div>
      <h1>Todos</h1>
      <form
      // form gönderildiğinde çağrılır
       onSubmit={onSubmit}
      >
        <input
          value={newtodo}
          // girilen metni newtodo stateinde günceller
          onChange={(e) => setnewtodo(e.target.value)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </form>
    </div>
  );
}
