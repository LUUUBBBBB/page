import React, { Component } from 'react';
import _ from 'lodash';
const students =[
{id:12, name:'Big Shaq',score: 2},
{id:13, name:'Ibrahimovic',score: 3},
{id:15, name:'Braham',score: 1}

]
const StudenLine = ({id,name,score}) => (
  <div>{id} {name} =  {score}</div>
)
class App extends Component {
  render() {
    return (
    <div>
      {
        _.map(students, student => <StudenLine {...student} />)

     }
   </div>     
    );
  }
}

export default App;