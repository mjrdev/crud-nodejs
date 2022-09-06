const User = require('./Model')

module.exports =  {
    index: async (req, res) => {
        const users = await User.find()

        return res.json(users)
    },
    show: async (req, res) => {
        const id = req.params.id

        const user = await User.findById(id)

        return res.json(user)
    },
    store: async (req, res) => {
        const body = req.body
        const user = await User.create(body)

        return res.json(user)
    },
    update: async (req, res) => {
        const id = req.params.id 
        const update = req.body

        const user = await User.findByIdAndUpdate(id, update);
        return res.send(user);
    },      
    destroy: async (req, res) => {
        const id = req.params.id 
        
        await User.findByIdAndDelete(id)

        return res.json({
            msg: "user deleted sucess"
        })
    }
}