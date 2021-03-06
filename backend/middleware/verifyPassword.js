// Mise en place de la vérification des passwords

const passwordSchema = require('../constraints/Password');                  // Importation du schéma des passwords avec leurs contraintes

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        console.log('Mot de passe trop simple');
        res.status(400).json({error: 'Mot de passe trop simple !' });
    } else {
        next();
    }
};