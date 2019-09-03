import * as React from 'react';
import { TodoTextInput } from '../TodoTextInput';
import { TodoActions } from 'app/actions/todos';

export namespace Header {
  export interface Props {
    addTodo: typeof TodoActions.addTodo;
  }
}

export class Header extends React.Component<Header.Props> {
  constructor(props: Header.Props, context?: any) {
    super(props, context);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text: string, amount: string) {
    if (text.length) {
      this.props.addTodo({ text , amount});
    }
  }

  render() {
    return (
      <header>
        <h1>CMS</h1>
        <TodoTextInput newTodo onSave={this.handleSave} placeholderName="What item to be added?" placeholderAmount='Please enter amount of items here' />
        {/* <TodoTextInput newTodo onSave={this.handleSave} placeholder="What needs to be done?" /> */}
      </header>
    );
  }
}
