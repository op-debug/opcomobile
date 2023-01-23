const userReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {...state, login: {...action.login}, isLoggedIn: true};
    case 'USER_LOGOUT':
      return {...state, login: {}, isLoggedIn: false};
    case 'ADD_PEMBELIAN':
      return {
        ...state,
        keranjangPembelian: [...state.keranjangPembelian, action.item],
      };
    case 'REMOVE_PEMBELIAN':
      let newPembelian = state.keranjangPembelian.filter(
        (item) => item.id !== action.id,
      );
      return {...state, keranjangPembelian: [...newPembelian]};
    case 'RESET_PEMBELIAN':
      return {...state, keranjangPembelian: []};
    case 'ADD_PENJUALAN':
      return {
        ...state,
        keranjangPenjualan: [...state.keranjangPenjualan, action.item],
      };
    case 'REMOVE_PENJUALAN':
      let newPenjualan = state.keranjangPenjualan.filter(
        (item) => item.id !== action.id,
      );
      return {...state, keranjangPenjualan: [...newPenjualan]};
    case 'RESET_PENJUALAN':
      return {...state, keranjangPenjualan: []};
    default:
      return state;
      break;
  }
};

export {userReducer};
