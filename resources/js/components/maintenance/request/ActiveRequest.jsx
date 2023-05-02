import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Menu from '../../Menu';
import Stack from 'react-bootstrap/Stack';
import ActiveRequests from '/src/IconsRequest/ActiveRequests.png';

const theme = {
  nav:{
    backgroundColor:"#1B396A"
  },
  bg: {
    backgroundColor: 'white',
  },
  logo: {
    alignContent: "center",
    width: 70,
    height: 70
  },
  navImg:{
    alignContent: "center",
    weith: 40,
    height: 40
  },
  header: {
    color: 'black',
    fontSize: '96px',
    fontFamily: 'Montserrat'
  },
  fControl: {
    backgroundColor: "#ECECEC",
    borderColor: "black",
    fontFamily: 'Montserrat',
    fontSize: '20px',
    width: '17%',
    borderRadius: 50
  },
  fHText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '20px'
  },
  fDText: {
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: '30px'
  },
  button: {
    color: 'black',
    fontSize: '20px',
    backgroundColor: '#FFFFFF',
    borderRadius: 30
  },
  optionIcons: {
    align: "center",
    width: 350,
    height: 100
  }
};

const card = {
  backgroundColor: "blue"
};
  
function ActiveRequest(){
    return (
      <>
      <Menu/>
      <section>
        <br/>
        <Container>
        <Stack align="center" gap={3}> 
            <div><img className='mb-3' src={ActiveRequests} style={theme.optionIcons} /></div>
          </Stack>
        </Container>
      </section>
      </>
    );
}
export default ActiveRequest;