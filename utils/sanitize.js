const { JSDOM } = require('jsdom');
const DOMPurify = require('dompurify');

const { window } = new JSDOM('');
const purify = DOMPurify(window);

module.exports = (dirty) => purify.sanitize(dirty);

// EXEMPLO DE COMO USAR
// ---------------------------------------------------
// exports.createUser = (req, res, next) => {
//   const { name, email, bio } = req.body;

//   const cleanBio = sanitize(bio); // <- sanitiza somente o campo necessário

//   // Salvar no banco de dados
//   User.create({ name, email, bio: cleanBio })
//     .then(user => res.status(201).json({ user }))
//     .catch(next);
// };

// -------------------------------------

// Se quiser sanitizar vários campos ao mesmo tempo:

// const fieldsToSanitize = ['bio', 'description', 'comment'];

// fieldsToSanitize.forEach((field) => {
//   if (req.body[field]) {
//     req.body[field] = sanitize(req.body[field]);
//   }
// });
