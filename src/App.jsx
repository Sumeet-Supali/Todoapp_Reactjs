import Heading from "./components/Heading";
import Takeinput from "./components/Takeinput";
import "./App.css";
import { useState } from "react";
import Make_list from "./components/Make_list";
import styles from "./App.module.css";
function App() {
  //this will store all to do items list
  const [alltodo, setalltodo] = useState([]);
  //this will take user todo name
  const [todoname, settodoname] = useState("");
  const handle_taking_date = (e) => {
    console.log(e.target.value);
    settododate(e.target.value);
  };

  //this will take user todo date
  const [tododate, settododate] = useState("");
  const handle_taking_input = (e) => {
    console.log(e.target.value);
    settodoname(e.target.value);
  };

  const submit = () => {
    let todo = { todoname, tododate };
    setalltodo([...alltodo, todo]);
  };

  const handle_delete = (obj) => {
    var updatetodos = alltodo.filter((i) => i !== obj);
    setalltodo(updatetodos);
  };
  return (
    <>
      <div className={styles.box}>
        <Heading />
        <Takeinput
          handlesubmit={submit}
          handle_taking_input={handle_taking_input}
          handle_taking_date={handle_taking_date}
        />
        {alltodo.map((eachtodo, index) => (
          <Make_list
            key={index}
            todoname={eachtodo.todoname}
            tododate={eachtodo.tododate}
            ondelete={() => handle_delete(eachtodo)}
          ></Make_list>
        ))}
      </div>
    </>
  );
}

export default App;
