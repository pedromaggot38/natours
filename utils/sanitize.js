const { JSDOM } = require('jsdom');
const createDOMPurify = require('dompurify');

const { window } = new JSDOM('');
const DOMPurify = createDOMPurify(window);

module.exports = (dirty) =>
  DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

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
