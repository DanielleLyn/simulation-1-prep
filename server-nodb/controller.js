let messages = [];
id = 0;

module.exports = {
    create: (req,res) => {
        const {text, time} = req.body;
        newMessage = {
            text: text,
            time: time,
            id: id
        }
        messages.push(newMessage);
        id++; 
        res.status(200).json(messages);
        },
    read:(req, res) => {
        res.status(200).json(messages);
    },
    update:(req, res)=> {
        const {text} = req.body;
        const updateID = req.params.id;
        const index = messages.findIndex(message => message.id == updateID);
        let message = messages[index];
        messages[index] = {
            id: message.id, 
            text: text || message.text,
            time: message.time
        };
        res.status(200).json(messages);
    },
    delete: (req, res) => {
        deleteID = req.params.id;
        const index = messages.findIndex(message => message.id == deleteID);
        messages.splice(index,1);
        res.status(200).json(messages);

    }
}