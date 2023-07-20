const { hash } = require('bcryptjs');
const User = require('./User');
const { NotFoundError } = require('../../shared/errors');
const bcryptjs = require('bcryptjs');
const jwt= require('jsonwebtoken');
const config= require('../../shared/config/index.js');

const signInUser = async (data) => {
  const existing= await User.findOne({username:data.username})
  if (!existing) {
    throw new NotFoundError('Foydalanuvchi topilmadi.');
  }

  const match = await bcryptjs.compare(data.password, existing.password);

  if (!match) {
    throw new UnauthorizedError('Login yoki parol xato.');
  }

  const token = jwt.sign({ user: { id: existing.id } }, config.jwt.secret);

  return { token };

};

module.exports = signInUser;