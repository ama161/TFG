import React from 'react';
import { withRouter } from 'react-router'
import Box from '../utils/Box';
import Modal from '../utils/Modal';
import ClassForm from '../class/ClassForm';
import StudentForm from '../student/StudentForm';
import language from '../../language/language'

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.changeLanguage = this.changeLanguage.bind(this, language);
    this.state = {
      language: 0,
    }
  }

  changeLanguage(global, language){
    let languageNumber = 0;
    if(language === 'EN') languageNumber = 1;

    this.props.updateLanguage(languageNumber);
  }

  componentDidMount(){
    this.setState({language: this.props.language})
  }
  componentWillReceiveProps(nextProps){
    this.setState({language: nextProps.language})    
  }

  render(){
    return(
      <div>
        {/* <Modal title="Nueva Clase">
          <ClassForm/>
        </Modal>
        <Modal title="Nuevo Alumno">
          <StudentForm/>
        </Modal> */}
        
        <div className="home-buttons">
          <button className="button-fill" onClick={() => this.props.history.push("/register")}>{language[this.state.language].register}</button>
          <button className="button-fill" onClick={() => this.props.history.push("/login")}>{language[this.state.language].login}</button>
          <p>
            <span onClick={() => this.changeLanguage('ES')}>ES</span> 
            | <span onClick={() => this.changeLanguage('EN')}>EN</span>
          </p>
        </div>
        <div className="home-boxes">
          <Box type="brown" typeIcon="icon-chat">
            <p>{language[this.state.language].chat}</p>
          </Box>
          <Box type="brown" typeIcon="icon-blackboard">
            <p>{language[this.state.language].class}</p>
          </Box>
          <Box type="brown" typeIcon="icon-file">
            <p>{language[this.state.language].evaluation}</p>
          </Box>
          <Box type="brown" typeIcon="icon-calendar">
            <p>{language[this.state.language].calendar}</p>
          </Box>
          <Box type="brown" typeIcon="icon-statistics">
            <p>{language[this.state.language].statistics}</p>
          </Box>
          <Box type="brown" typeIcon="icon-test">
            <p>{language[this.state.language].test}</p>
          </Box>
        </div>

      </div>
      
    )
  }
}

export default withRouter(Home)
