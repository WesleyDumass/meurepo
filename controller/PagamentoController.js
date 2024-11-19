const Pagamento = require ('../models/Pagamento');

//CREATE
exports.CreatePagamento = async (req, res) =>{
    try {
        const pagamento = await Pagamento.create(req.body);
        res.status(200).json(pagamento);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//READ
exports.ListPagamento = async (req, res) =>{
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