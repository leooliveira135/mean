// app/model/Usuario.js
var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

var schema = mongoose.Schema;

var userSchema = new schema({
    login: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },
    nome: {
        type: String,
        required: true
    },
    inclusao: {
        type: Date,
        default: Date.now
    }
});

try {
    schema.plugin(findOrCreate);
    module.exports = mongoose.model('Contato');
} catch (err) {
    schema.plugin(findOrCreate);
    module.exports = mongoose.model('Contato', userSchema);
}