import * as React from 'react';
import * as classNames from 'classnames';
import * as style from './style.css';

export namespace TodoTextInput {
  export interface Props {
    text?: string;
    amount?: string;
    placeholderName?: string;
    placeholderAmount?: string;
    newTodo?: boolean;
    editing?: boolean;
    onSave: (text: string, amount: string) => void;
  }

  export interface State {
    text: string;
    amount: string;
  }
}

export class TodoTextInput extends React.Component<TodoTextInput.Props, TodoTextInput.State> {
  constructor(props: TodoTextInput.Props, context?: any) {
    super(props, context);
    this.state = { text: this.props.text || '' , amount: this.props.amount || '',};
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    
  }

  handleSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
    const text = this.state.text.trim();
    const amount = this.state.amount.trim()
    if (isNaN(parseInt(amount))){
      this.setState({ amount:'',});
      return
    }
    if (event.which === 13) {
      this.props.onSave(text,parseInt(amount).toString());
      if (this.props.newTodo) {
        this.setState({ text: '' , amount:'',});
      }
    }
  }

  handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ text: event.target.value });
  }

  handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    // if (parseInt(event.target.value) === NaN){
    //   this.setState({amount:'Please Enter Correct Number'})
    // }
    this.setState({ amount: event.target.value });
  }

  handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    const text = this.state.text.trim();
    const amount = this.state.amount.trim()
    if (!this.props.newTodo) {
      this.props.onSave(text, amount);
    }
  }

  render() {
    const classes = classNames(
      {
        [style.edit]: this.props.editing,
        [style.new]: this.props.newTodo
      },
      style.normal
    );

    return (
      <div>
      <input
        className={classes}
        type="text"
        // autoFocus
        placeholder={this.props.placeholderName}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChangeName}
        onKeyDown={this.handleSubmit}
      />
      <input
        className={classes}
        type="text"
        // autoFocus
        placeholder={this.props.placeholderAmount}
        value={this.state.amount}
        onBlur={this.handleBlur}
        onChange={this.handleChangeAmount}
        onKeyDown={this.handleSubmit}
    />
    </div>
    );
  }
}
