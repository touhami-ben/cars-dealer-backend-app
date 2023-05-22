const createValidator = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    console.log('error', error)
    if (error) {
      console.log('error is here',error)
      return res.status(400).json({ error: error.message });
    }
    next();
  };
  
  module.exports = createValidator;
  