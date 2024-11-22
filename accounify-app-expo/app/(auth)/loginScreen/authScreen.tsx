import { ScrollView, StyleSheet } from "react-native";
import { View, Button, Colors } from "react-native-ui-lib";
import React, { useState } from "react";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";



const AuthPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleShowLogin = () => {
    setShowLoginForm(true);
  };
  
  const handleShowRegister = () => {
    setShowLoginForm(false);
  };

  return (
    <ScrollView>
      <View flex paddingH-32 paddingV-48 bg-white>
        {/* Logo & Headline */}

        {/* Login & Register Buttons */}
        <View row center marginB-20 gap-16>
          <Button
           label={'Login'} 
           labelStyle={{fontWeight: 'bold', color: showLoginForm ? Colors.white : Colors.blue30}} 
           size={Button.sizes.medium} 
           
           backgroundColor={showLoginForm ? Colors.blue70 : Colors.transparent} 
           onPress={handleShowLogin}
          />

          <Button
           label={'Register'} 
           labelStyle={{fontWeight: 'bold', color: !showLoginForm ? Colors.white : Colors.blue30}} 
           size={Button.sizes.medium} 
           
           backgroundColor={!showLoginForm ? Colors.blue70 : Colors.transparent} 
           onPress={handleShowRegister}
          />
        </View>

        {/* Horizontal Barrier */}
        <View style={styles.horizontalBar} />

        {showLoginForm ? (
          <>
            {/* Login Form */}
            <LoginForm />
          </>
        ) : (
          <>
            {/* Registration Form */}
            <RegisterForm />
          </>
        )}

        {/* Social Media Login */}

      </View>
    </ScrollView>
  );
};

export default AuthPage;

const styles = StyleSheet.create({
  horizontalBar: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.softGrey,
    marginVertical: 20,
  },
});