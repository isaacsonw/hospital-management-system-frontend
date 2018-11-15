import React, { Component } from 'react'
import { Button,Input,Divider,Icon,Progress} from 'semantic-ui-react';
import { ShowMessage } from './ShowMessage';
import UploadTool from './UploadTool'
// import {FormatSizeUnits} from './FormatSize'
let {REACT_APP_File_Management} =  process.env;
let uploadUrl = REACT_APP_File_Management+'/file_management/uploadPassport';
export default class FileUploader extends Component {
    state = {
        filename:"",
        isLoading:false,
        progress:0,
        files:[],
        preview:""
    };
    componentWillReceiveProps(nextProps){
       if(nextProps.reset.reset ===true && this.state.preview !==""){
           let {destination} = this.props;
           this.setState({preview:""});
           this.props.onUploadComplete({[destination]:""});
       }
    }
    uploadFile=() =>{
        let {files} = this.state;
        let {destination} = this.props;
        this.setState({isLoading:true});
        UploadTool(uploadUrl,files[0],this.uploadProgress,destination).then((e)=>{
            this.setState({isLoading:false},()=>{
                this.onUploadComplete(e);
                ShowMessage({
                    header:"DONE",
                    message: e.data
                });
            });
            setTimeout(()=>{
                this.setState({progress:0})
            },1000)
        }).catch((e)=>{
            this.setState({isLoading:false},()=>{
                ShowMessage({
                    header:e.type === "userError"?"INFO":"ERROR",
                    message: e.response
                });
            });

        })
    };
    onUploadComplete=({response})=>{
        this.props.onUploadComplete(response)
    };
    uploadProgress=(evt)=> {
        if(evt.lengthComputable) {
            let progress = Math.round(evt.loaded * 100 / evt.total);
            this.setState({progress})
        } else {
            console.log('lengthComputable not true')
        }
    };

    selectedFile =(e)=>{
        let {files} = e.target;
         if(!e.target.files[0].type.includes("image")){
          return ShowMessage({
               header:"INFO",
               message:"Unsupported file type please select an image"
           });
       }
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload =(event)=>{
            this.setState({preview:event.target.result})
        };
        this.setState({filename:e.target.value.split('\\')[2],files:files});
    };
    render() {
      let {progress,isLoading} = this.state;
        return (
            <div>
                <div className="passport" onClick={()=>{this.simulateClick.click()}} style={{...styles.dropfile,backgroundImage:`url(${this.state.preview})`}}>
                    <p style={{ lineHeight: 10,display:this.state.preview ? "none":null}}>Passport</p>
                </div>
                <Divider fitted hidden/>
                <Input style={{ background:'#f3f3f3'}} type='text' fluid action>
                    <input value={this.state.filename} disabled style={{width:"100%"}}/>
                    <input onInput={this.selectedFile} hidden ref={input => this.simulateClick=input}  className="fileUploader" accept="image/png, image/jpeg, image/gif" type="file"/>
                    <Button onClick={()=>{this.simulateClick.click()}} basic type='submit' icon>
                        <Icon name="open folder"/>
                        Browse
                    </Button>
                    <Button disabled={isLoading} onClick={this.uploadFile} header='submit' icon style={{background: "#466f8f",color:"#fff"}}> <Icon name="upload"/> Upload</Button>
                </Input>
                <Progress attached="bottom" size='tiny' percent={progress} active/>
            </div>
        )
    }
};

const styles = {
    form:{
        width: '100%',
        background:'#f3f3f3',
        height: '30px',

    },
    button: {
        height:30,
        float: 'right',
        width:100,
        background:'#2185d0',
        color: '#fff',
        marginRight: -1
    },
    dropfile:{
        width: 139,
        border: '2px dashed rgba(34,36,38,.15)',
        height: '150px',
        color: 'rgba(34,36,38,.15)',
        textAlign:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"

    }
};

