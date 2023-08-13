import logo from './logo.svg';
import './App.css';
import AddNewGoal from './Components/AddNewGoal';
import React,{useState} from 'react';
import CourseList from './Components/CourseList';
const course_list =[
  {
    courseTitle:'python',
    id:2
  }
]
function App() {
    const [goalData,setGoals]=useState(course_list);
  const getAddedGoalsHandler = (goals)=>{
    console.log("in app.js");
    setGoals((prevData)=>[goals,...prevData]);
    console.log(goalData);
  }
  const deleteItemHandler = goalId => {
    setGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div className="App">
      <AddNewGoal  getAddedGoals ={getAddedGoalsHandler}></AddNewGoal>
      {goalData.length > 0 && <CourseList goals ={goalData} onDeleteItem={deleteItemHandler}></CourseList>}
    </div>
  );
}

export default App;
