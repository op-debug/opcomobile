import React, {createContext, useReducer, useEffect} from 'react';
import {userReducer} from '../reducers/UserReducer';


export const UserContext = createContext();

const initialState = {
  login: {
    email: '080808op@gmail.com',
  },
  keranjangPembelian: [],
  keranjangPenjualan: [],
  isLoggedIn:true
};
const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        login: state.login,
        keranjangPembelian: state.keranjangPembelian,
        keranjangPenjualan: state.keranjangPenjualan,
        dispatch,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
