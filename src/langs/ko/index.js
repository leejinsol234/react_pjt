import common from './common';
import validation from './validation';
import error from './error';

const message = { ...common, ...validation, ...error };

export default message;
