import React, { Component } from 'react'
import { Card,Grid, Image,Button } from 'semantic-ui-react'

export default class Doctor extends Component {
    render() {
        return (
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Card  style={{maxWidth: 229,marginBottom:10}} raised >
                            <Image centered src={require('../../../asset/member1.png')}/>
                            <Card.Content textAlign="center">
                                <Card.Header>
                                    Dr. Matthew
                                </Card.Header>
                                <Card.Meta>
                                <span className='date'>
                                    Dentist
                                </span>
                                </Card.Meta>
                                <Card.Description>
                                    795 Folsom Ave, Suite 600 San Francisco, CADGE 94107
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button fluid circular basic>
                                    View Profile
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}
