import React, {Component} from 'react';
import projecttwo from '../pictures/projecttwo.jpg';
import note from '../pictures/note.png'; 
import npmInstall from '../pictures/npmInstall.png';
import schedule from '../pictures/schedule.png'; 
import toread from '../pictures/toread.png';
import styled from 'styled-components';

const Styles = styled.div`
.gallery{
    text-align: center;
    margin-top: 100px;
    margin-bottom: 50px; 
}

button{
    margin-top: 2%; 
    margin-left: 2%; 
    color:  #9FFFCB; 
    background-color: white; 
}
`

class Main extends Component {   


    state = {
        index: 0, 
        picList: [projecttwo, note, npmInstall, schedule, toread]
      }
      
      onClickNext= () => {
          if (this.state.index + 1 === this.state.picList.length ){
              this.setState({ 
                  index: 0 
                })
            } else {
                this.setState({
                    index: this.state.index + 1
                })
            }

          }
          onClickPrevious= () => {
            if (this.state.index - 1 === -1 ){
                this.setState({ 
                    index: this.state.picList.length - 1
                  })
              } else {
                  this.setState({
                      index: this.state.index - 1
                  })
              }
            }
      
      render() {
        return (
            <Styles>
          <div class = 'gallery'>
            <img src={this.state.picList[this.state.index]} style={{"maxHeight":"40%","maxWidth":"40%"}} alt="" /> <br/>
            <button style={{"fontSize":"18px"}} onClick={this.onClickPrevious}> Previous </button>
            <button style={{"margin-left":"5px", "fontSize":"18px"}} onClick={this.onClickNext}> Next </button>
          </div>
          </Styles>
        );
      }

}


export default Main;