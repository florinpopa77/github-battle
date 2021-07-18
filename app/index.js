import React from 'react';
import ReactDom from 'react-dom';
import Popular from './components/Popular';
import Battle from './components/Battle';
import './index.css';


class App extends React.Component{
    render(){
        return (
            <div className='container'>
                <Battle />
            </div>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
)