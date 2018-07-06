module.exports = {
    create: ( req, res ) => {
      const { name, description, price, imageurl } = req.body;
      req.app.get('db').create_product([ name, description, price, imageurl ])
        .then( () => res.sendStatus(200) )
        .catch( error => {
          res.status(500).send({errorMessage: "There is an error on the server"});
          console.log('error', error)
        } );
    },
    getOne: ( req, res ) => {
      req.app.get('db').read_product([ req.params.id ])
        .then( product => res.status(200).send( product ) )
        .catch( error => {
          res.status(500).send({errorMessage: "There is an error on the server"});
          console.log('error', error)
        } );
    },
    getAll: ( req, res ) => {
      req.app.get('db').read_products()
        .then( products => res.status(200).send( products ) )
        .catch( error => {
          res.status(500).send({errorMessage: "There is an error on the server"});
          console.log('error', error)
        } );
    },
    update: ( req, res ) => {
      req.app.get('db').update_product([ req.params.id, req.query.desc ])
        .then( () => res.sendStatus(200) )
        .catch( error => {
          res.status(500).send({errorMessage: "There is an error on the server"});
          console.log('error', error)
        });
    },
    delete: ( req, res ) => {
      req.app.get('db').delete_product([ req.params.id ])
        .then( () => res.sendStatus(200) )
        .catch( error => {
          res.status(500).send({errorMessage: "There is an error on the server"});
          console.log('error', error)
        } );
    }
  };