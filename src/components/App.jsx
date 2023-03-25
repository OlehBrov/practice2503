import { nanoid } from 'nanoid'
import { StudyForm } from "./StudyForm/StudyForm";
import { Component } from "react";
import { ListStudy } from "./ListStudy/ListStudy";


export class App extends Component{

  state = {
    todos :[],
}
 
  createTasks = (task) =>{
    const todo = {
      task: task,
      id:nanoid()
    }
    this.setState((prevState) =>
    { return { todos: [todo, ...prevState.todos] } })
} 

deleteTodo = (todoId) => {
  console.log(todoId)
  this.setState(prevState => {
   return { todos: prevState.todos.filter(todo => todoId !== todo.id)}
  })
}
 
  render() {
    return<>
      <StudyForm createTasks ={this.createTasks} />
 <ListStudy todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </>
  }
};
