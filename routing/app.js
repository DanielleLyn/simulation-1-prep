import { Route, Link} from 'react-router-dom';


class App extends Component {
    render() {
      return (
        <div>
          <nav className='navBar'>
          <Link className='navLink' to='/'>Home</Link>
          <Link className='navLink' to='/about'>About</Link>
          <Link className='navLink' to='/people'>People</Link>
          </nav>
          <Route exact path='/' component={Home}/>
          <Route path='/about' render={() => <About>
              <Route path='/about/faq' component={FAQ}/>
              <Route path='/about/company' component={Company}/> 
            </About> } />
          <Route exact path='/people' component={People} />
          <Route path='/people/:id' component={Character} />
        </div>
      );
    }
  }
  
  export default App;

  // Idea for Cancel button 
  <Link to='/' className='links'><button>Back to Home</button></Link>