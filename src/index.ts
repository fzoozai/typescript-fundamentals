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

// Classes

class Currency {
  price: number;

  constructor(price) {
    this.price = price;
  }

  printValue(): number {
    console.log(this.price);
    return this.price;
  }
}

const binance = new Currency(241);
binance.printValue();

// Generics

const outputInput = <T>(input: T): T => {
  console.log(input);
  return input;
};

// Duck typing

class CryptoWiz implements CryptoCurrency {
  name: string;
  abbreviation?: string;
  price: number;
}

const dummy = {
  name: "BNB",
  price: 250,
};

let currency: CryptoCurrency = new CryptoWiz();
currency = dummy;
