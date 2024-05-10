import { getLoggedInTerminal } from "./backend_helper";

export const getBalanceResult = (result) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const balance = result[0].Balance;
    const config = getLoggedInTerminal();
    //const balanceTotal = (balance / 100) * config.Factor;
    const balanceTotal = (balance / 100);
    if (isNaN(balanceTotal)) throw "Valor no valido";
    if (config.Factor) return balanceTotal;

    throw "Error al obtener el saldo";
  } catch (err) {
    throw err;
  }
};

export const getUri = (uri) => {
  const token = getLoggedInTerminal().AccessToken;
  const newUri = uri.replace("{generatedValidPlayerToken}", token);
  return newUri;
};
