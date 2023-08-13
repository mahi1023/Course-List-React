
import './CourseGoalList.css'
function CourseGoalList(props){
    return(
        <div className="add-list">
            <div className="add-list-control">
                <p>{props.title}</p>
            </div>
        </div>
    )
}
export default CourseGoalList;