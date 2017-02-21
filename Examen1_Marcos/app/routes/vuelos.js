var express = require('express');
var router = express.Router();

// server routes ===========================================================
// handle things like api calls
// authentication routes

//tomando el modelo
var Aerolinea = require('../models/Aerolinea');

router.get('/',function (req, res){
    Aerolinea.find(function (err, personas) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else
            res.status(200).json(aerolineas);
    });
});

router.get('/:id',function(req,res){
    Persona.findById(req.params.id,function(err, aerolinea) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (persona != null) {
                res.status(200).json(aerolinea);
            }
            else
                res.status(404).send('No se encontro ninguna aerolinea');
        }
    });
});
