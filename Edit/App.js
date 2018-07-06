class App extends Component {
    constructor(){
      super(); 
      this.state = {
        array: [],
        name: '',
      }
      this.update = this.update.bind(this)
    }
  
    changeHandler = (val) => {
      this.setState({
        name: val
      })
    }
  
    update = (id, name) => {
      axios.put(`/api/test?id=${id}`, {name}).then(response => {
        this.setState({
          array: response.data,
        })
      })
    }

    render() {
       let displayArray = this.state.array.map(element => {
         return <div key={element.id} className="container"> <Edit key={element.id} id={element.id} name={element.name} update={this.update}/> </div>
       })
      return (
        <div>
          {displayArray}
        </div>
      );
    }
  }
  
  export default App;