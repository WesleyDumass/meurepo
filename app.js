const express = require('express');
const app = express();
const sequelize = require('./config/config');
const userRoutes = require ('./routes/userRoutes');
const AlunoCursoRoutes = require('./routes/AlunoCursoRoutes')
const TutoriaRoutes = require ('./routes/TutoriaRoutes');
const authRoutes = require('./routes/authRoutes');
const setupSwagger = require('./swagger/swagger');

app.use (express.json());
setupSwagger(app);

app.use('/api', userRoutes);
app.use('/api', AlunoCursoRoutes);
app.use('/api', authRoutes);
app.use('/api', TutoriaRoutes);


sequelize.sync()
    .then(
    ()=>{
        console.log('Database conneted and synced')
    })
    .catch(
        (error)=>{
            console.error('Unable to connect to the database', error);
        }
    );

module.exports = app;
