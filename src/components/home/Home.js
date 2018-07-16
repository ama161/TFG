import React from 'react';
import { withRouter } from 'react-router'
import Box from '../utils/Box';
import Modal from '../utils/Modal';
import ClassForm from '../class/ClassForm';
import StudentForm from '../student/StudentForm';
import language from '../../language/language'
import HeaderHome from './HeaderHome';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let lan = localStorage.language;
    return(
      <div>
        {/* <Modal title="Nueva Clase">
          <ClassForm/>
        </Modal>
        <Modal title="Nuevo Alumno">
          <StudentForm/>
        </Modal> */}
        
        <HeaderHome/>
        <div className="home-boxes">
          <Box type="brown" typeIcon="icon-chat">
            <p>{language[lan].chat}</p>
          </Box>
          <Box type="brown" typeIcon="icon-blackboard">
            <p>{language[lan].class}</p>
          </Box>
          <Box type="brown" typeIcon="icon-file">
            <p>{language[lan].evaluation}</p>
          </Box>
          <Box type="brown" typeIcon="icon-calendar">
            <p>{language[lan].calendar}</p>
          </Box>
          <Box type="brown" typeIcon="icon-statistics">
            <p>{language[lan].statistics}</p>
          </Box>
          <Box type="brown" typeIcon="icon-test">
            <p>{language[lan].test}</p>
          </Box>
        </div>

      </div>
      
    )
  }
}

export default withRouter(Home)
