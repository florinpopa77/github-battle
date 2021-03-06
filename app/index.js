import React from 'react';
import ReactDom from 'react-dom';
import Nav from './components/Nav';
import Loading from './components/Loading';
import { ThemeProvider } from './contexts/theme';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

const Popular = React.lazy( () => import('./components/Popular'));
const Battle = React.lazy( () => import('./components/Battle'));
const Results = React.lazy( () => import('./components/Results'));


class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light',
            toggleTheme: () => {
                this.setState(({ theme }) => this.setState({ theme: theme === 'light' ? 'dark' : 'light' }))
            }
        };
    }

    render(){``
        return (
            <Router>
                <ThemeProvider value={ this.state }>
                    <div className={ this.state.theme }>
                        <div className='container'>
                            <Nav/>

                            <React.Suspense fallback={<Loading/>}>
                                <Switch>
                                    <Route exact path='/' component={ Popular }/>
                                    <Route exact path='/battle' component={ Battle }/>
                                    <Route path='/battle/results' component={ Results }/>
                                    <Route render={ () => <h1> 404 Page not found!</h1> }/>
                                </Switch>
                            </React.Suspense>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        )
    }
}

ReactDom.render(
    <App/>, 
    document.getElementById('app')
)