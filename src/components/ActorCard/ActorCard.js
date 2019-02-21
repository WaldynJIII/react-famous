import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
class ActorCard extends Component{
    
render(){
    return(
<Card>
<CardContent>
    <Typography gutterBottom variant="h5" component="h2">
        {this.props.name}
    </Typography>
    <Typography component="p">
        {this.props.role}
    </Typography>
    </CardContent>
    </Card>
)}}

export default ActorCard