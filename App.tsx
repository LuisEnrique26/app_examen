import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserNavigator } from "./src/navigator/UserNavigator";
import { AuthProvider } from "./src/context/AuthContext";

const AppState = ( { children }: { children: ReactNode } ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <UserNavigator/>
      </AppState>
    </NavigationContainer>
  );
}
