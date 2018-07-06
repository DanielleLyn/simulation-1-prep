
// Axios post (CREATE)
  makePost = ()  => {
    axios.post(baseUrl, {body}).then( response => {
      this.setState({
        array: response.data,
      })
    }).catch(error => console.log( 'error',error))
  }

// Axios get (READ)
  getPart = () => {
    axios.get(baseUrl).then(response => {
        this.setState({
          array: response.data
        })
    }).catch(error => console.log( 'error',error))
  }
  
// Axios Put (UPDATE)
  updatePart = (id, text) => {
       axios.put(`${baseUrl}/${id}`, {text}).then(response => {
         this.setState({
           array: response.data
         })
       }).catch(error => console.log('error',error))
     } 

// Axios delete (DELETE)
  deletePart = (id) => {
    axios.delete(`${baseUrl}/${id}`).then(response => {
      this.setState({
        array: response.data
      })
    }).catch(error => console.log('-----deleteStory',error))
  }
