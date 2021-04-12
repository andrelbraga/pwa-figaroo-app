const currencyFormat = (value: number): string => {
  if (value) {
    return new Intl.NumberFormat([], {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  }

  return '';
};

export default currencyFormat;
