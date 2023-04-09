import React, { useState, useEffect } from "react";

function Form({ items, setItems, filter, completedItems, activeItems }) {
    // Seçili öğeyi siler
  const deleteItem = (e) => {
    if (e.target.id) {
      let itemArray = [...items];
      itemArray.splice(e.target.id, 1);
      setItems([...itemArray]);
    }
  };
// öğeleri seçme/kaldırma işlemleri
  const [allItems, setAllItems] = useState(items);

  //Checkbox. itemin durumunu değiştirmek için
  const toggleCheck = (e) => {
    let itemId = e.target.id.slice("checkbox", 1);

    const newItemList = items.map((item) => {
      if (item.id === parseInt(itemId)) {
        item.status = !item.status;
      }
      return item;
    });

    setItems(newItemList);
  };

  const selectAll = (e) => {
    if (allItems) {
      const allChecked = allItems.map((item) => {
        item.status = true;
        return item;
      });
      setAllItems(allChecked);
    }
  };

  // Filtreleme
  useEffect(() => {
    if (filter === "completed") {
      setAllItems(completedItems);
    } else if (filter === "active") {
      setAllItems(activeItems);
    } else {
      setAllItems(items);
    }
  }, [items, filter]);

  return (
    <section className="main">
       {/* Tüm öğeleri seçme/kaldırma */}
    <input className="toggle-all" type="checkbox" />
    <label htmlFor="toggle-all" onClick={selectAll}>
      Mark all as complete
    </label>

      {/* Öğe listesi */}
    <ul className="todo-list">
      {allItems.map((item, key) => {
        return (
          <li className={item.status ? "completed" : null} key={key}>
            <div className="view">
              <input
                id={item.id + "checkbox"}
                checked={item.status}
                className="toggle"
                onChange={toggleCheck}
                type="checkbox"
              />
              <label>{item.value}</label>
              <button
                id={item.id + "destroy"}
                onClick={deleteItem}
                className="destroy"
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  </section>
  );
}

export default Form;
