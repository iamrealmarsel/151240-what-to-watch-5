export const generateId = () => Math.round(Date.now() * Math.random());

export const checkTextValidation = (text) => {
  return !(text.length >= 50 && text.length <= 400);
};
