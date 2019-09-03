import * as React from 'react';
import * as style from './style.css';

export namespace TodoTitle {
  export interface Props {
    titleFirst: string;
    titleSecond: string
  }

  export interface State {
    editing: boolean;
  }
}

export class TodoTitle extends React.Component<TodoTitle.Props, TodoTitle.State> {
  constructor(props: TodoTitle.Props, context?: any) {
    super(props, context);
    this.state = { editing: false };
  }

  render() {
    const { titleFirst, titleSecond} = this.props;

    let element = (

        <div className={style.view}>
          <label className={style.name} >{titleFirst}</label>
          <label className={style.amount} >{titleSecond}</label>
        </div>
      );

    return <li className={style.normal}>{element}</li>;
  }
}
