const Materia = require ('../models/materia');

exports.ListMateria = async (req, res) =>{
    try{
        const materia = await Materia.findAll({
            atributes: ['id','descricao'],
        });
        if(materia.length === 0){
            return res.status(404).json({message: 'Describle not exist'});
        }
        res.json(materia);
    } catch(error) {
        res.status(500).send(error.message)
    }
};