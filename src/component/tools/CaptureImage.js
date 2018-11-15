import React, { Component } from 'react'
import { Grid,Button} from 'semantic-ui-react';
import Webcam from 'react-webcam';
export default class CaptureImage extends Component {
    state = {
        filename:"",
        captured:false
    };
    setRef = (webcam) => {
        this.webcam = webcam;
    };
    capture = () => {
        let {destination} = this.props;
        const imageSrc = this.webcam.getScreenshot();
        this.webcam.video.pause();
        this.props.onUploadComplete({[destination]:imageSrc});
    };
    componentWillReceiveProps(nextProps){
        let {destination} = this.props;
        if(nextProps.reset){
            this.setState({preview:""});
            this.props.onUploadComplete({[destination]:""});
        }
    }
    Clear = ()=>{
        this.webcam.video.play()
    };
    render() {
        return (
            <div>
                <Grid columns={2}  textAlign="bottom">
                    <Grid.Row>
                        <Grid.Column>
                            <Webcam
                                style={{height:"50%", ...styles.dropfile}}
                                onUserMedia={(e)=>console.log(e)}
                                audio={false}
                                height={250}
                                ref={this.setRef}
                                screenshotFormat="image/jpeg"
                                width={250}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button.Group style={{background: "#efefef"}}>
                                <Button basic color="gray" className="captureBtn" compact onClick={this.capture}>Capture</Button>
                                <Button.Or />
                                <Button onClick={this.Clear} style={{background: "#466f8f",color:"#fff"}}  compact positive>Cancel</Button>
                            </Button.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
};
const styles = {
    dropfile:{
        margin:'auto',
        border: '2px dashed rgba(34,36,38,.15)',
        color: 'rgba(34,36,38,.15)'
    }
};