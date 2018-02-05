import React,{ Component } from 'react';
//样式
import './pages.scss';
class App extends Component {

    render(){
        return (
            <div>
                {this.props.children}
            </div> 
        );
    }
}

export default App;