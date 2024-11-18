const Tutoria = require ('../models/Tutoria');

//CREATE
exports.CreateTutoria = async (req, res) =>{
    try {
        const tutoria = await Tutoria.create(req.body);
        res.status(200).json(tutoria);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//READ
exports.ListTutoria = async (req, res) =>{
    try{
        const tutoria = await Tutoria.findAll({
            atributes: ['cod_tutoria','dia_agendado', 'hora_agendada', 'aval_tutor', 'cod_curso'],
        });
        if(tutoria.length === 0){
            return res.status(404).json({message: 'Tutoria not exist'});
        }
        res.json(tutoria);
    } catch(error) {
        res.status(500).send(error.message)
    }
};