import { ProfileWallet, TablePassPhrase, WalletDetail, WalletsHome } from '@redux/wallet/types';

export const mapDataTablePassphrase = (data: any[]): TablePassPhrase[] => {
  return data.map((value, index) => {
    return {
      name: value,
      index,
    };
  });
};

export const mapDataWallet = (data: any[]): WalletDetail[] => {
  return data.map((value, index) => {
    return {
      id: value._id,
      ...value,
    };
  });
};

export const mapWalletsList = (data: any[]): ProfileWallet[] => {
  return data.map((value, index) => {
    return {
      name: value.name,
      price: '$ 12,039',
      isSelected: index === 0,
    };
  });
};

export const mapWalletsHome = (data: any[]): WalletsHome[] => {
  return data.map((value, index) => {
    return {
      name: value.name,
      note: '',
      id: value._id,
    };
  });
};
