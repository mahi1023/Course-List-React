
import './CourseGoalList.css';
function CourseGoalList(props){
 const deleteHandler = ()=>{
    props.onDelete(props.id);
 }

    return(
        <div className="add-list">
            <div className="add-list-control">
                <li onClick={deleteHandler}>{props.title} </li>
            </div>
        </div>
    )
}
export default CourseGoalList;