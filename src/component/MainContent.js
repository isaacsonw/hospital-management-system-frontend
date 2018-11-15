import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import { Segment} from 'semantic-ui-react'
import Doctor from "./pages/Doctors/Tabs";
import AddDoctor from "./pages/Doctors/Adddoctor";
import AddPatient from "./pages/Patients/AddPatient";
import Nurse from "./pages/Nurses/Nurse";
import AddNurse from "./pages/Nurses/AddNurse";

export default class MainContent extends Component {
    render() {
        return (
            <Segment basic piled  style={{paddingLeft:11,background:"transparent"}}>
                <Route exact  path='/' component={Doctor}/>
                <Route exact  path='/doctors/add_doctor' component={AddDoctor}/>
                <Route exact  path='/nurses/add_nurse' component={AddNurse}/>
                <Route exact  path='/nurses' component={Nurse}/>
                <Route exact  path='/patients/add_patients' component={AddPatient}/>
            </Segment>
        )
    }
}

