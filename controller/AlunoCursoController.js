const AlunoCurso = require ('../models/AulunoCurso');

exports.ListAlunoCurso = async (req, res) =>{
    try{
        const alunocurso = await AlunoCurso.findAll({
            atributes: ['cod_aluno','cod_curso', 'progresso'],
        });
        if(alunocurso.length === 0){
            return res.status(404).json({message: 'Describle not exist'});
        }
        res.json(alunocurso);
    } catch(error) {
        res.status(500).send(error.message)
    }
};