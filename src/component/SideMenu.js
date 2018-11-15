import React, { Component } from 'react'
import {Icon,Accordion, Menu ,Container} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuSubMenu extends Component {
    state = {};
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({ activeIndex: newIndex })
    };

    render() {
        let { activeItem ,activeIndex} = this.state;
        activeItem = 'browse';
        return (
            <Container fluid style={{paddingLeft:11}}>
            <Menu size="huge"  inverted style={{borderRadius: 0,background:"rgb(37, 86, 123) none repeat scroll 0% 0%"}} vertical>
                <Menu.Item  as={ Link } name='home' to='/' style={{backgroundColor:"rgb(37, 86, 123)"}}  active={activeItem === 'browse'} onClick={this.handleItemClick}>
                <Icon  name='dashboard' />
                DashBoard
            </Menu.Item>
                <Menu.Item style={{padding: 0}}>
                    <Accordion inverted fluid styled style={{borderRadius:0,background:"transparent"}}>
                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' style={{float: "left",top: 15,position: "relative"}} />
                            <Menu.Item  active={activeItem === 'browse'} onClick={this.handleItemClick}>
                            <Icon name='doctor' />
                                Doctors
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            <Menu.Item   as={ Link } to='/' style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='user' />
                                All Doctors
                            </Menu.Item>
                            <Menu.Item  as={ Link } to='../doctors/add_doctor' style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='add user' />
                                Add Doctor
                            </Menu.Item>
                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' style={{float: "left",top: 15,position: "relative"}} />
                            <Menu.Item  name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='thermometer quarter' />
                                Patients
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            <Menu.Item  as={ Link } to='../patients/add_patients' style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='user' />
                                All Patients
                            </Menu.Item>
                            <Menu.Item  as={ Link } to='../patients/add_patients'  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='add user' />
                                Add Patients
                            </Menu.Item>
                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown' style={{float: "left",top: 15,position: "relative"}} />
                            <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='treatment' />
                                Nurse
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            <Menu.Item  as={ Link } to='../nurses' style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='user' />
                                All Nurses
                            </Menu.Item>
                            <Menu.Item  as={ Link } to='../nurses/add_nurse' style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='add user' />
                                Add Nurse
                            </Menu.Item>
                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Icon name='dropdown' style={{float: "left",top: 15,position: "relative"}} />
                            <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='money' />
                                Payments
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='payment' />
                               All Payments
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Invoice
                            </Menu.Item>
                        </Accordion.Content>
                        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                            <Icon name='dropdown' style={{float: "left",top: 15,position: "relative"}} />
                            <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='money' />
                                Departments
                            </Menu.Item>
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='payment' />
                                Dental Services
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Eye Clinic Center
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Generic Surgery Services
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Family Planning
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Immunization
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Paediatric Care
                            </Menu.Item>
                            <Menu.Item  style={{backgroundColor:"rgb(37, 86, 123)"}} name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
                                <Icon name='braille' />
                                Scanning Services
                            </Menu.Item>
                        </Accordion.Content>
                    </Accordion>
                </Menu.Item>
            </Menu>
            </Container>
        )
    }
}
