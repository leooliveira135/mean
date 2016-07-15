//app/model/contato.js

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    emergencia: {
        type: mongoose.Schema.ObjectId,
        ref: 'Contato'
    }
});

try {
    module.exports = mongoose.model('Usuario');
} catch (err) {
    module.exports = mongoose.model('Usuario', userSchema);
}