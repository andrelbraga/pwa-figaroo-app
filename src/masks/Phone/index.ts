const phoneMask = (text: string): string => {
  let maskedText = text.replace(/\D/g, '');
  maskedText = maskedText.replace(/\D/g, '');
  maskedText = maskedText.replace(/^(\d{2})(\d)/g, '($1) $2');
  maskedText = maskedText.replace(/(\d)(\d{4})$/, '$1-$2');

  return maskedText;
};

export default phoneMask;
