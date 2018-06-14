import React from 'react';
import { withRouter } from 'react-router'
import Box from '../utils/Box';
import Modal from '../utils/Modal';
import ClassForm from '../class/ClassForm';
import StudentForm from '../student/StudentForm';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Modal title="Nueva Clase">
          <ClassForm/>
        </Modal>
        <Modal title="Nuevo Alumno">
          <StudentForm/>
        </Modal>
        <div className="home-buttons">
          <button className="button-fill" onClick={() => this.props.history.push("/register")}>Registro</button>
          <button className="button-fill" onClick={() => this.props.history.push("/login")}>Iniciar sesión</button>
        </div>
        <div className="home-boxes">
          <Box type="brown" typeIcon="icon-chat">
            <p>CONTACTA CON LOS PADRES DE TUS ALUMNOS EN CUALQUIER MOMENTO</p>
          </Box>
          <Box type="brown" typeIcon="icon-blackboard">
            <p>ORGANIZA TODOS TUS ALUMNOS POR AULAS</p>
          </Box>
          <Box type="brown" typeIcon="icon-file">
            <p>CREA EXPEDIENTES PARA ORGANIZAR TODAS LAS NOTAS DE TUS ALUMNOS</p>
          </Box>
          <Box type="brown" typeIcon="icon-calendar">
            <p>ORGANIZA LAS FALTAS DE LOS ALUMNOS Y FACILITA A LOS PADRES SU JUSTIFICACIÓN</p>
          </Box>
          <Box type="brown" typeIcon="icon-statistics">
            <p>ESTUDIOS ESTADÍSTICOS DE TUS ALUMNOS Y AULAS</p>
          </Box>
          <Box type="brown" typeIcon="icon-test">
            <p>CREA TEST PARA COMPARTIR CON QUIEN QUIERAS</p>
          </Box>
        </div>

      </div>
      
    )
  }
}

export default withRouter(Home)
