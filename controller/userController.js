const User = require ('../models/user');

exports.listUsers = async (req, res) => {
    try{
        const users = await User.findAll(
            {
                attributes: ['id','username', 'idade','loginuser', 'celular','active'],
            });
            if(users.length === 0){
                return res.status(404).json({message: 'User not found'});
            }
            res.json(users);

    } catch(error) {
        res.status(500).send(error.message)
    }
};
 
exports.activeUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({where: {id: id}});
        if(user){
            user.active = true;
            await user.save();
            res.status(200).json({message: `User (${user.username}) activeted suscessful`});
        } else{
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};

exports.deactivateUser = async (req,res) => {
    try {
        const {id} = req.params;
        const user = await User.findOne({where:{id: id}})
        if(user){
            user.active = false;
            await user.save();
            res.status(200).json({message: `User (${user.username}) deactiveted suscessfuly`});
        } else{
            res.status(404).send('User not found');
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
};