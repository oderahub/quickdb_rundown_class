const calculateDiscountedPrice = (price: number, discount: number = 10): number => {
  const discountPrice = price * (1 - discount / 100)
  return discountPrice
}

console.log(calculateDiscountedPrice(100))
