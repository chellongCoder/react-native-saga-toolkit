import { TablePassPhrase } from '@redux/wallet/types';

export const mapDataTablePassphrase = (data: any[]): TablePassPhrase[] => {
  return data.map((value, index) => {
    return {
      name: value,
      index,
    };
  });
};
