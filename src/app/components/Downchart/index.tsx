import * as React from 'react';
import ReactEcharts from "echarts-for-react";
import * as style from './style.css';
import { TodoModel } from 'app/models/TodoModel';
// import { render } from 'react-dom';

export namespace Downchart {
    export interface Props {
      todos: TodoModel[],
    }
  }

export class Downchart extends React.Component<Downchart.Props> {
    getOption = () => {
        const { todos } = this.props
        // console.log(todos);
        return {
          title: {
            text: 'Content Distribution'
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            data:['Amount of ']
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : todos.map(todo => todo.text)
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              type:'bar',
              data: todos.map(todo => todo.amount)
            },
          ]
        };
      };

    render(){
        return (
        <div>
            <label className={style.label}><strong className={style.strongColor}>Demo</strong> Diagram</label>

            <ReactEcharts
            option={this.getOption()}
            notMerge={true}
            style={{height: '350px', width: '90%', margin: '5px 20px 5px 30px'}}
            lazyUpdate={true}
            /> 

        </div>
        )}
}