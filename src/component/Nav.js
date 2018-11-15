import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

export default class MenuBar extends Component {
    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu secondary inverted size="huge" style={{background:"#2185d0"}} pointing>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
                <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
                <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
                </Menu.Menu>
            </Menu>
        )
    }
}
