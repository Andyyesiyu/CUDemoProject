import * as React from 'react';
import * as style from './style.css';
import { TodoActions } from 'app/actions/todos';
import { TodoItem } from '../TodoItem';
import { TodoTitle } from "../TodoTitle";
import { TodoModel } from 'app/models/TodoModel';

export namespace TodoList {
  export interface Props {
    todos: TodoModel[];
    actions: TodoActions;
  }
}


export class TodoList extends React.Component<TodoList.Props> {
  renderToggleAll(): JSX.Element | void {
    const { todos, actions } = this.props;
    if (todos.length > 0) {
      const hasIncompleted = todos.some((todo) => !todo.completed);
      return (
        <input
          className={style.toggleAll}
          type="checkbox"
          checked={hasIncompleted}
          onChange={actions.completeAll}
        />
      );
    }
  }

  render() {
    const { todos, actions } = this.props;
    return (
      <section className={style.main}>
        <ul className={style.normal}>
          <TodoTitle titleFirst='Content Name' titleSecond='Amount'/>
        </ul>
        {this.renderToggleAll()}
        
        <ul className={style.normal}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={actions.completeTodo}
              deleteTodo={actions.deleteTodo}
              editTodo={actions.editTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}
