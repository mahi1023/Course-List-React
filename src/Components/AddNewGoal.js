import React from 'react'
import AddNewGoalForm from './AddNewGoalForm'
function AddNewGoal(props){
    const saveGoalDataHandler = (goal)=>{
        console.log(goal);
        const data ={
            ...goal,
            id: Math.random().toString()
        }
        props.getAddedGoals(data)
    }
    return(
       <AddNewGoalForm onGoalSaveData ={saveGoalDataHandler}></AddNewGoalForm>
    )
}
export default AddNewGoal