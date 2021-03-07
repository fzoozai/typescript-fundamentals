// Interfaces

interface CryptoCurrency {
  name: string;
  abbreviation?: string;
  price: number;
}

const printCryptoDetails = ({
  name,
  abbreviation,
  price,
}: CryptoCurrency): CryptoCurrency => {
  console.log({ name, price });
  return { name, price };
};

printCryptoDetails({ name: "Binance Coin", abbreviation: "BNB", price: 240 });

// Enums used for example: if you need a list of exact items

// numeric enums
enum CarTypeNums {
  ELECTRIC, // 0
  HYBRID, // 1
  PETROL, // 2
}

// string enums
enum CarType {
  ELECTRIC = "ELECTRIC",
  HYBRID = "HYBRID",
  PETROL = "PETROL",
}

const createCarType = (carType: CarType) => {};
createCarType(CarType.ELECTRIC);
console.log(CarType.ELECTRIC);
