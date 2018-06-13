import { createActions } from 'spunky';
import { api } from '@cityofzion/neon-js';

export const ID = 'claim';

const claimGas = async ({ net, address, wif }) => {
  const config = {
    net,
    address,
    privateKey: wif
  };

  const { response: { result, txid } } = await api.claimGas(config, api.neoscan);

  if (!result) {
    throw new Error('Claim failed.');
  }

  return txid;
};

export default createActions(ID, ({ net, address, wif }) => () => {
  return claimGas({ net, address, wif });
});
