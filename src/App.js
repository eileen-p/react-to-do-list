import React, {useState} from "react";

// We can import styles like this. To access styles: styles.remindersList, for example
import styles from "./App.css";

const App = () => {
  /*
   * You can use useState() to give your app the ability to temporarily store data in memory
   */
  const [reminders, setReminders] = useState([]);
  const [value, setValue] = useState("");

  // This is the button handler for the 'Add Reminder' button
  // It adds a reminder to the list, and sets the current input text to empty
  const onClickAdd = () => {
    setReminders(reminders.concat(value));
    setValue("");
  };

  // This returned value is what react will render,
  return (
    <> {/* React fragment */}
      <h2>Reminders</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
      <button onClick={onClickAdd}>Add Reminder</button>
      <ol className={styles.remindersList}>
        {reminders.map((reminder, index) => ( // Map reminders to list item HTML elements
          <li key={index}>
            {reminder}
          </li>
        ))}
      </ol>
    </>
  );
};

export default App;
