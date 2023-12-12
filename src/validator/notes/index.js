const InvariantError = require('../../exceptions/InvariantError');
const { NotePayLoadSchema } = require('./schema');

const NotesValidator = {
  validateNotePayLoad: (payload) => {
    const validationResult = NotePayLoadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = NotesValidator;
