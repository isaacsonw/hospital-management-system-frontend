import React, { Component } from 'react';
import DatePicker from 'react-datetime';
import moment from "moment";
import { ShowMessage } from '../../tools/ShowMessage';
import { Form, Button, Divider,Label,Ref} from 'semantic-ui-react';
import {GenderOptions,NurseSpecialty,Experience} from '../../tools/SignupOptions';
import ImageControl from '../../tools/ImageControl'
import reqwest from "reqwest";

const ApiUrl = "http://localhost:4002/";

export default class AddNurse extends Component {
    state={
        reset:false,
    };
    handleFormInput =({target})=>{
        let {value,name} = target;
        if(!name)return;
        this.setState({[name]:value},()=>{
            console.log(this.state)
        });
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
    handelSelection=(a,{value,name})=>{
        this.setState({[name]:value},()=>{
            console.log(this.state)
        });
    };
    handleDobChange=(e)=>{
        this.setState({dob:moment(e._d).format('DD-MM-YYYY')})
    };
    handlePost =()=>{
        console.log(JSON.stringify(this.state));
        reqwest({
            url:`${ApiUrl}nurse_management/createNurse`,
            method: 'post',
            data:this.state || {} ,
            type: 'json',
            // withCredentials: true,
            crossOrigin: true,
            crossDomain: true,
            timeout: 9000
        }).then((e)=>{
            this.ResetForm();
            console.log(e);
            ShowMessage({
                header:"DONE",
                message: "Nurse registered successfully"
            });
        }).catch((e)=>{
            console.error(e)
        })
    };
    onUploadComplete=(destination)=>{
        this.setState({...destination})
    };
    handleRef = node => this.form = node;
    render() {
        let {reset}=this.state;
        return (
            <div className='doctorForm' style={styles.addForm}>
                <Divider horizontal>
                    <Label>Nurse Information</Label>
                </Divider>
                <Ref innerRef={this.handleRef}>
                <Form  onChange={this.handleFormInput}>
                    <Form.Group widths={2}>
                        <Form.Input
                            type='text'
                            name={'first_name'}
                            placeholder='First name' />
                        <Form.Input
                            type='text'
                            name={'last_name'}
                            placeholder='Last name' />
                    </Form.Group>
                    <Form.Group widths={3}>
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
                         <Form.Input
                            type='text'
                            placeholder='Phone'
                            name={'phone'}
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            type='text'
                            placeholder='Enter your email'
                            name={'email'}
                        />
                        <Form.Input
                            type='text'
                            placeholder='Website url'
                            name={'website'}
                        />
                    </Form.Group>
                    <Form.Input
                        label={"Attach Documents"}
                        type='file'
                        style={styles.imageUpload}
                        name={'document'}
                        placeholder='Documents'
                    />
                    <Form.Group widths={2}>
                        <Form.Input
                            type='text'
                            placeholder='please of internship'
                            name={'internship_location'}
                        />
                        <Form.Dropdown
                            onChange={this.handelSelection}
                            style={styles.input}
                            name={'Specialty'}
                            options={NurseSpecialty}
                            placeholder='Specialty'
                            search
                            selection
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            type='text'
                            placeholder='Certification'
                            name={'certification'}
                        />
                        <Form.Dropdown
                            onChange={this.handelSelection}
                            style={styles.input}
                            name="level_of_experience"
                            options={Experience()}
                            placeholder="Experience"
                            search
                            selection
                        />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            icon='address book'
                            type='text'
                            iconPosition='left'
                            placeholder='Your address'
                            name={'address'}
                        />
                        <Form.Input
                            type='text'
                            placeholder='Medical School'
                            name={'school'}
                        />
                    </Form.Group>
                    <ImageControl reset={reset} onUploadComplete={this.onUploadComplete} destination="passport"/>
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
                    <Divider hidden/>
                </Form>
                </Ref>
                <Divider style={styles.divider} />
                <Button type='submit' onClick={this.handlePost} style={styles.button}>Submit</Button>
                <Button type='reset' style={styles.reset}>Cancel</Button>
            </div>
        )
    }
}

const styles = {
    addForm:{
        marginTop: 40,
        overflow: 'hidden',
    },
    button:{
        float: 'left',
        borderRadius: 40,
        background: 'rgb(33, 133, 208) none repeat scroll 0% 0%',
        color: '#fff'
    },
    capture:{
        border: '2px solid #000',
        width: '105px',
        height: '120px',
        position: 'relative',
        left: '700px',
        marginTop: '-10px',
        margin: '20px',
        paddingTop: '40px',
        paddingLeft: '9px'
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
        // background: '#ff0000'
    },
    captureButton:{
        float: 'right'
    },
    photo:{
        border: '1px dashed  rgba(214, 224, 234, 0.8)',
        width: '120px',
        height: '140px',
        paddingTop: '50px',
        paddingLeft: '15px'
    },
    imageUpload:{
        background: '#eee !important'
    }
};