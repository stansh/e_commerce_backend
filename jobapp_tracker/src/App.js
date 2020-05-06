import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import './App.css';



import {applications} from './shared/applications'

const jobapps = applications;




function Jobs ({item}) {
  return(
    <div >
      <Card className ='jumbotron' >
          <CardBody>
            <CardTitle className ='card-title'>{item.company}</CardTitle>
            <CardSubtitle >{item.type}</CardSubtitle>    
            <CardText>{item.jobDescriptionUrl}</CardText>
            <CardText>{item.notes}</CardText>
            <CardText>{item.createdAt}</CardText>
            <CardText>{item.updatedAt}</CardText>
          </CardBody>
        
    </Card>
  </div>
  )

}

function App() {

  const a = 'PhoneInterviewComplete';
  const b = 'PhoneInterviewScheduled';
  const c = 'Applied';
  const type = {}

  const appListA = jobapps.map(
    listItem => {
      if (listItem.type === a){
      return (
        <div key ={listItem.id}> <Jobs item = {listItem} /></div>
      );
      }
    }
  )

  const appListB = jobapps.map(
    listItem => {
      if (listItem.type === b){
      return (
        <div key ={listItem.id}> <Jobs item = {listItem} /></div>
      );
      }
    }
  )

  const appListC = jobapps.map(
    listItem => {
      if (listItem.type === c){
      return (
        <div key ={listItem.id}> <Jobs item = {listItem} /></div>
      );
      }
    }
  )


/*   NOT FINISHED */

 /*  function listA() {
    return (
      <div className ='col-md-4'style={{backgroundColor:'lightgreen'}}>{appListA}</div>
    );
  }
 */


  return (
    
    <div className="container ">
      <div className="row mb-3 ">
         
            <button class="btn btn-info mx-2">Show Phone Interview Complete</button>
            <button class="btn btn-info mx-2">Show Phone Interview Scheduled</button>
            <button class="btn btn-info mx-2">Show Applied</button>
         
        </div> 

       <div className="row ">
       <div className ='col-md-4'style={{backgroundColor:'lightgreen'}}>{appListA}</div>
       <div className ='col-md-4'style={{backgroundColor:'lightyellow'}}>{appListB}</div>
       <div className ='col-md-4'style={{backgroundColor:'lightblue'}}>{appListC}</div>
       </div> *
        
      
    </div>
  );
}

export default App;


/* const appListC = jobapps.map(
  listItem => {
    return (
      <div key ={listItem.id}> <Jobs item = {listItem} /></div>
    );
  }
)
 */