import React from 'react';
import Box from '../utils/Box';

class HomeTeacher extends React.Component{
    constructor(props){
        super(props);

        this.state={}
    }

    render(){
        return(
            <div className="teacher-boxes">
                <Box type="white" typeIcon="icon-dog">
                    <p>1º Primaria A</p>
                </Box>
                <Box type="white" typeIcon="icon-cat">
                    <p>1º Primaria B</p>
                </Box>
                <Box type="white" typeIcon="icon-tiger">
                    <p>1º Primaria C</p>
                </Box>
                <Box type="white" typeIcon="icon-bee">
                    <p>1º Primaria D</p>
                </Box>
            </div>
        )
    }
}

export default HomeTeacher