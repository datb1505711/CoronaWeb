import React from 'react';

export default class HistoryItem extends React.Component{

  convertDate(data){
  
     var d= new Date(data);
     return (d.getMonth()+1)+'\\'+d.getDate()+"\\"+ d.getFullYear();}
  
  render(){

       if(this.props.historyItem.WorkPerformedSummary==='')
       
        return null;
       

       return( 
          <div className = 'row' >
                <tr >
                      <td > <strong > {this.props.historyItem.WorkPerformedSummary}</ strong> </ td>

                      { this.props.historyItem.CompletedDate ? <td >
                                  {this.convertDate(this.props.historyItem.CompletedDate)}
                                  </ td>: <td > {'n/a'} </ td>  }
                </ tr>
          </ div>
          );
  
}
}