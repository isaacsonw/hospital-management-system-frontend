import React, { Component } from 'react';
import DatePicker from 'react-datetime';
import moment from "moment";
import { ShowMessage } from '../../tools/ShowMessage';
import { Form, Button,Ref, Divider,Label,Grid} from 'semantic-ui-react';
import {GenderOptions} from '../../tools/SignupOptions';
import ImageControl from '../../tools/ImageControl'
import reqwest from "reqwest";

const ApiUrl = "http://localhost:4003/";
export default class AddPatient extends Component{
    state={reset:false};
    handleFormInput =({target})=>{
        let {value,name} = target;
        this.setState({[name]:value},()=>{
            console.log(this.state)
        });
    };
    handelSelection=(a,{value,name})=>{
        this.setState({[name]:value},()=>{
            console.log(this.state)
        });
    };
    handleDobChange=(e)=>{
        this.setState({dob:moment(e._d).format('DD-MM-YYYY')})
    };
    ResetForm=()=>{
        let newData ={};
        this.setState({reset:true},()=>{
            this.form.reset();

            for (let key in this.state) {
                if (this.state.hasOwnProperty(key)) {
                    newData[key]=null
                }
            }
        });

        this.setState({...newData})
    };
    handlePost =()=>{
        console.log(JSON.stringify(this.state));
        reqwest({
            url:`${ApiUrl}patient_management/createPatient`,
            method: 'post',
            data:this.state || {} ,
            type: 'json',
            // withCredentials: true,
            crossOrigin: true,
            crossDomain: true,
            timeout: 9000
        }).then((e)=>{
            this.ResetForm();
            ShowMessage({
                header:"DONE",
                message: "Patient registered successfully"
            });
        }).catch((e)=>{
            console.error(e)
        })
    };
    onUploadComplete=(destination)=>{
        this.setState({...destination})
    };
    handleRef = node => this.form = node;
    render(){
        let reset = this.state;
        return(
            <div>
                <Grid>
                    <Grid.Column >
                        <Ref innerRef={this.handleRef}>
                        <Form onChange={this.handleFormInput}>
                            <Divider horizontal><Label>Patient Information</Label></Divider>
                            <Form.Group  widths={2}>
                                <Form.Input
                                    type='text'
                                    name={'first_name'}
                                    placeholder='First name' />
                                <Form.Input
                                    type='text'
                                    name={'last_name'}
                                    placeholder='Last name' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Field
                                    inputProps={{ placeholder: 'Date of Birth' }}
                                    control={DatePicker}
                                    dateFormat="MM/DD/YYYY"
                                    name={'dob'}
                                    utc={true}
                                    onChange={this.handleDobChange}
                                    timeFormat={false}
                                    placeholder=''
                                    style={styles.input}
                                />
                                <Form.Dropdown
                                    onChange={this.handelSelection}
                                    placeholder='-Gender-'
                                    style={styles.input}
                                    name={'gender'}
                                    options={GenderOptions}
                                    search
                                    selection
                                />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input
                                    type='text'
                                    placeholder='Your address'
                                    name={'address'}
                                />
                                <Form.Input
                                    type='text'
                                    placeholder='Phone'
                                    name={'phone'}
                                />
                            </Form.Group>
                            <Form.Group widths={3}>
                                <Form.Input
                                    type='text'
                                    placeholder='Email address (optional)'
                                    name={'email'}
                                />
                                <Form.Input
                                    type='text'
                                    placeholder='Height'
                                    name={'height'}
                                />
                                <Form.Input
                                    type='text'
                                    placeholder='Weight'
                                    name={'weight'}
                                />
                            </Form.Group>
                            <ImageControl reset={reset} onUploadComplete={this.onUploadComplete} destination="passport"/>
                            <Divider hidden />
                            {/*<p style={styles.para}><span style={styles.basic}>Basic</span> Information</p>                            <Form.Group widths={2}>*/}
                        {/*</Form.Group>*/}
                            {/*<Form.Dropdown*/}
                                {/*placeholder="Assigned Doctors Name"*/}
                                {/*name={'doctorInCharge'}*/}
                                {/*style={styles.input}*/}
                                {/*options={EmploymentType}*/}
                                {/*search*/}
                                {/*selection*/}
                                {/*scrolling*/}
                                {/*fluid*/}
                            {/*/>*/}
                            {/*<Form.Dropdown*/}
                                {/*placeholder='Staff on Duty'*/}
                                {/*name={'staff_on_duty'}*/}
                                {/*style={styles.input}*/}
                                {/*options={EmploymentType}*/}
                                {/*search*/}
                                {/*selection*/}
                                {/*multiple*/}
                                {/*scrolling*/}
                                {/*fluid*/}
                            {/*/>*/}
                            {/*<Form.Group widths={2}>*/}
                                {/*<Form.Input*/}
                                    {/*type='text'*/}
                                    {/*placeholder='Ward No'*/}
                                    {/*name={'ward_no'}*/}
                                {/*/>*/}
                                {/*<Form.Input*/}
                                    {/*type='date'*/}
                                    {/*placeholder=''*/}
                                    {/*name={'Dob'}*/}
                                {/*/>*/}
                            {/*</Form.Group>*/}

                            <Divider hidden/>
                            <Divider horizontal><Label>Next of Kin Information</Label></Divider>
                            <Divider hidden/>
                            <Form.Group widths={2}>
                                <Form.Input
                                    type='text'
                                    name={'next_of_kin_first_name'}
                                    placeholder='Next Of Kin First name' />
                                <Form.Input
                                    type='text'
                                    name={'next_of_kin_last_name'}
                                    placeholder='Next Of Kin Last name' />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input
                                    type='text'
                                    name={'next_of_kin_phone'}
                                    placeholder='Next Of Kin mobile number' />
                                <Form.Dropdown
                                    onChange={this.handelSelection}
                                    placeholder='Next Of Kin Gender'
                                    style={styles.input}
                                    name={'next_of_kin_gender'}
                                    options={GenderOptions}
                                    search
                                    selection
                                />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input
                                    type='text'
                                    name={'next_of_kin_phone'}
                                    placeholder='Next Of Kins Address' />
                                <Form.Input
                                    type='text'
                                    name={'next_of_kin_relationship'}
                                    placeholder='Next Of Kins Relationship' />

                            </Form.Group>
                            <ImageControl reset={reset} onUploadComplete={this.onUploadComplete}  destination="next_of_kin_passport"/>
                        </Form>
                        </Ref>
                        <Divider hidden/>
                        <Button type='submit' onClick={this.handlePost} style={styles.button}>Submit</Button>
                        <Button type='reset' style={styles.reset}>Cancel</Button>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const styles = {
    addForm:{
        marginTop: 55
    },
    button:{
        float: 'left',
        borderRadius: 40,
        background: 'rgb(33, 133, 208) none repeat scroll 0% 0%',
        color: '#fff'
    },
    reset:{
        float: 'left',
        borderRadius: 40,
        background: '#f3f3f3',
        border: '1px solid #999'
    },
    socials:{
        textAlign: 'left'
    },
    socName:{
        color:'#01d8da',
        fontSize:15
    },
    divider:{
        marginTop:40,
        background: '#ff0000'
    },
    imageUpload:{
        height:200,
        background: '#eee !important'
    },
    para:{
        textAlign: 'left'
    },
    heading:{
        background: '#01d8da',
        height: 140,
        paddingLeft:30,
        color: '#fff'
    },
    myDoctors:{
        marginTop: 15,
    },
    welcome:{
        marginTop: -65
    },
    toTop:{
        background: '#fff',
        marginTop: -40,
        marginRight: 10,
        marginLeft: 1,
        borderRadius: 5,
        boxShadow: '1px 2px 2px #6b6b6b'
    },
    basic:{
        color: '#01d8da',
        fontWeight: 'bold'
    },
    content: {
        marginBottom: 30,
    }
};