import Doctor from "../../../component/pages/Doctors/Doctor"
import React, { Component } from 'react';
import {Tab } from  'semantic-ui-react'
const panes = [
    { menuItem: 'Permanent', render: () => <Tab.Pane style={style.Tabs} attached={false}><Doctor/></Tab.Pane> },
    { menuItem: 'Consultant', render: () => <Tab.Pane style={style.Tabs} attached={false}><Doctor/></Tab.Pane> },
    { menuItem: 'Interns', render: () => <Tab.Pane style={style.Tabs} attached={false}><Doctor/></Tab.Pane> },
];



class App extends Component {
    render() {
        return (
            <Tab menu={{pointing: true }} panes={panes} />
        );
    }
}
let style = {
    Tabs:{
        border: "none",
        boxShadow: "none",
        padding: 0
    }

};
export default App;
