export const calculateOriginalPrice = (discountedPrice, discountPercentage) => {
  if (discountPercentage === 0 || discountedPrice === 0) return 0;
  const originalPrice = discountedPrice / (1 - discountPercentage / 100);
  return Math.round(originalPrice / 1000) * 1000;
};

export const formatToRupiah = (amount) => {
    if (typeof amount !== 'number') {
        return 'Invalid Input';
    }

    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};
