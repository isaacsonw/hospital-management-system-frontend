import React, { Component } from 'react';
import Nav from "./component/Nav";
import MainContent from './component/MainContent'
import './App.css';
import {Grid,Segment,Breadcrumb,Header } from  'semantic-ui-react'
import SideMenu from "./component/SideMenu";

class App extends Component {
  render() {
    return (
      <div style={{backgroundImage: "-webkit-linear-gradient(rgb(33, 133, 208), rgba(33, 133, 208,0.5) 16em, transparent 0%, transparent 0%)"}} className="App">
          <Nav/>
          <Grid stackable columns={2}>
              <Grid.Row>
                  <Grid.Column width={4}>
                      <Header inverted style={{marginLeft:10}} textAlign="center" as='h2'>Welcome to Adonai hospital</Header>
                  </Grid.Column>
                  <Grid.Column  width={12}>
                      <Segment style={{padding: 0}} basic textAlign="right">
                          <Breadcrumb  className="SubMenuCumbe" style={{marginRight:30}}>
                              <Breadcrumb.Section link>Home</Breadcrumb.Section>
                              <Breadcrumb.Divider />
                              <Breadcrumb.Section link>Doctors</Breadcrumb.Section>
                              <Breadcrumb.Divider />
                              <Breadcrumb.Section active>Dentist</Breadcrumb.Section>
                          </Breadcrumb>
                      </Segment>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
          <Grid stackable columns={2}>
              <Grid.Row>
                  <Grid.Column width={4}>
                      <SideMenu/>
                  </Grid.Column>
                  <Grid.Column width={12}>
                      <Segment>
                          <MainContent/>
                      </Segment>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
      </div>
    );
  }
}
export default App;
