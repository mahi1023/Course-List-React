import "./AddNewGoalForm.css";
import styled from 'styled-components'
import React, { useState } from "react";

// const FormControl = styled.div`


// & h3{
//   font-size: 24px;
//   font-weight: bold;
//   height: 20px;
//   color: ${props=>{
//     return props.isValid ?'red':'black'
//   }};
// }

// & input{
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 10px;
//   outline: none;
//   border: 1px solid ${props=>{
//     return props.isValid ?'red':'black'
//   }};
//   border-radius: 5px;
//   height: 40px;
//   width: 400px;
// }
// & button{
//   height: 40px;
//   margin-bottom: 20px;
//   width: 150px;
//   align-items: center;
//   border-radius: 2px;
//   border:  2px solid rgb(148, 35, 228);
//   background-color: rgb(148, 35, 228);
//   color: white;
//   font-size: 18px;
//   font-weight: bold;
// }

// &.invalid input{
//   border-color: red;
//   background: #ffd7d7;
// }

// &.invalid h3{
//   color: red;
// }

// `;
function AddNewGoalForm(props) {
  const [goalText, setGoalText] = useState("");
  const[isValid,setValid]=useState(true);
  const onGoalTextHandler = (event) => {
    if(event.target.value.trim().length > 0){
      setValid(true)
    }
    console.log(event.target.value);
    setGoalText(event.target.value);
  };
  const onGoalSubmitHandler = (event) => {
    event.preventDefault();
    console.log(goalText);
    let goal={
        courseTitle : goalText
    }
    if(goalText.trim().length === 0){
      setValid(false);
      return;
    }
    props.onGoalSaveData(goal);
   
    setGoalText('');
  };
  return (
    <form onSubmit={onGoalSubmitHandler}>
      <div className="add-goals">
      <div className={`add-goals-controls ${!isValid ?'invalid':''}`}>
          <h3 >Course Goal</h3>
          {/* style={{color :  !isValid ? 'red' :'black'}} */}
          <input  type="text" onChange={onGoalTextHandler} value={goalText} />
          {/* style={{ borderColor: !isValid ? 'red':'black',backgroundColor : !isValid? 'red': 'lightgrey'}} */}
          <button type="submit">Add Goal</button>
        </div> 


      {/* using styled components  we can style a button and pass the props */}
        {/* <FormControl isValid ={!isValid}>
        <h3 >Course Goal</h3>
          <input  type="text" onChange={onGoalTextHandler} value={goalText} />
          <button type="submit">Add Goal</button>
        </FormControl>  */}
      </div>
    </form>
  );
}

export default AddNewGoalForm;

