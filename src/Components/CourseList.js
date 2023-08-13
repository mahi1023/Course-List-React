
import CourseGoalList from "./CourseGoalList";
function CourseList(props){
    return(
        <ul >

            {props.goals.map(obj=>{
                return <CourseGoalList key ={obj.id}
                id ={obj.id} title ={obj.courseTitle}
                onDelete = {props.onDeleteItem}>
                    
                </CourseGoalList>
                        
                
            })}
        </ul>
    )
}
export default CourseList;