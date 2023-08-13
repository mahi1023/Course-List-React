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
  return (
    <div className="App">
      <AddNewGoal  getAddedGoals ={getAddedGoalsHandler}></AddNewGoal>
      <CourseList goals ={goalData}></CourseList>
    </div>
  );
}

export default App;
