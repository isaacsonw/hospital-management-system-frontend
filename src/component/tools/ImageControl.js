import React, { Component } from 'react'
import {Tab} from 'semantic-ui-react';
import FileUploader from '../tools/FileUploader';
import Capture  from '../tools/CaptureImage';

// https://bootsnipp.com/snippets/Z65xO
export default class ImageControl extends Component {
    render() {
        const panes = [
            { menuItem: 'Upload Passport', render: () => <Tab.Pane  className="paneCapture"><FileUploader reset={this.props.reset} onUploadComplete={this.props.onUploadComplete}  destination={this.props.destination}/></Tab.Pane> },
            { menuItem: 'Capture Image', render: () => <Tab.Pane  className="paneCapture"><Capture reset={this.props.reset} onUploadComplete={this.props.onUploadComplete} destination={this.props.destination}/></Tab.Pane> }
        ];
        return (
                <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
        )
    }
}