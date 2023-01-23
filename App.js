import React, { useEffect } from 'react';
import Navigation from "./src/navigation";
import * as ScreenOrientation from 'expo-screen-orientation'
import * as Device from 'expo-device';
import UserContextProvider from "./src/context/UserContext";

export default function App() {


  global.TYPE_DEVICE = 1

  useEffect(() => {
    Device.getDeviceTypeAsync().then((deviceType) => {
      global.TYPE_DEVICE = deviceType;
      if (deviceType == 2) {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
      }
      else {
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      }
    });
  }, []);


  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  )
}

