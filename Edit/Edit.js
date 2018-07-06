export default class Edit extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            toggle: false,
            userInput: props.name
        }
    }
    toggle = () => {
        this.setState((prevState) => {
            return {
              toggle: !prevState.toggle
            }
        })
      }
    changeUserInput = (val) => {
        this.setState({
            userInput: val
        })
    }
    edit = () => {
        let {userInput} = this.state; 
        let {id, update} = this.props;
          update(id, userInput)
        this.setState({
            toggle: false
        })
    }
    

      render () {
        const {name} = this.props;
        return (
            // Can flexbox entire dive to display name, input field, and button in one line
            <div className="recordLine"> 
                {this.state.toggle ? <div>Name: <input value={this.state.userInput} onChange={(e) => this.changeUserInput(e.target.value)}></input></div> : <span> Name: {name}</span>}
                {this.state.toggle ?  <button onClick={() => this.edit()}>Save</button>:  <button onClick={() => this.toggle()}>Edit</button>}    
            </div>
        )
      }
}