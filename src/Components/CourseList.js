
import CourseGoalList from "./CourseGoalList";
function CourseList(props){
    return(
        <div >

            {props.goals.map(obj=>{
                return <CourseGoalList key ={obj.id} title ={obj.courseTitle}>
                    
                </CourseGoalList>
                        
                
            })}
        </div>
    )
}
export default CourseList;