export const checkTextValidation = (text) => {
  return !(text.length >= 50 && text.length <= 400);
};
