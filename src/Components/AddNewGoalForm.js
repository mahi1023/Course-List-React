import "./AddNewGoalForm.css";
import React, { useState } from "react";

function AddNewGoalForm(props) {
  const [goalText, setGoalText] = useState("");
  const onGoalTextHandler = (event) => {
    console.log(event.target.value);
    setGoalText(event.target.value);
  };
  const onGoalSubmitHandler = (event) => {
    event.preventDefault();
    console.log(goalText);
    let goal={
        courseTitle : goalText
    }
    props.onGoalSaveData(goal);
    setGoalText('');
  };
  return (
    <form onSubmit={onGoalSubmitHandler}>
      <div className="add-goals">
        <div className="add-goals-controls">
          <h3>Course Goal</h3>
          <input type="text" onChange={onGoalTextHandler} value={goalText} />
          <button type="submit">Add Goal</button>
        </div>
      </div>
    </form>
  );
}

export default AddNewGoalForm;
