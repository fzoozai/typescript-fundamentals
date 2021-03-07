// Interfaces

interface CryptoCurrency {
  name: string;
  abbreviation: string;
  price: number;
}

const printCryptoDetails = ({ name, abbreviation, price }: CryptoCurrency) => {
  console.log(name);
  return name;
};

printCryptoDetails({ name: "Binance Coin", abbreviation: "BNB", price: 240 });
