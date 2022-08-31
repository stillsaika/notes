const Note = require('./models/Note')


class control {
    async message(req, res) {
        res.set('Access-Control-Allow-Origin', 'http://localhost:3004');
        try{
            const body = req.body
            const user = new Note(body);
            await user.save()
        } catch(e) {
            console.log(e)
            res.status(400).json({message:'error'})
        }
    }
}

module.exports = new control() 
