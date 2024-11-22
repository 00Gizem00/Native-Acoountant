import { StyleSheet, TouchableOpacity } from "react-native";

import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "@/context/auth";
import { TextField, View, Colors, Button, Text, Checkbox } from "react-native-ui-lib";
import { FontAwesome5 } from "@expo/vector-icons";


export default function LoginForm() {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("testtest");
  const [isChecked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const navigation = useNavigation();
  const router = useRouter();

  const homePage = "/(main)/(tabs)";

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Handle Login
  const handleLogin = async () => {
    try {
      // Kullanıcının giriş durumunu kaydet
      await AsyncStorage.setItem("isLoggedIn", "true");
      console.log("User logged in successfully!");
      
      // Kullanıcıyı yönlendir
      router.push(homePage);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  useLayoutEffect(() => {
    // Customize the top header using Expo Router's header configuration:
    const headerOptions = {
      headerShown: false,
    };

    // Ensure your navigation object is accessible:
    if (navigation) {
      navigation.setOptions(headerOptions);
    }
  }, []);

  return (
    <View flex-2 gap-16>
      <TextField
          placeholder={'Email'}
          value={email}
          floatingPlaceholder
          onChangeText={(text) => setEmail(text)}
          enableErrors
          validateOnChange
          validate={['required', (value) => value.length > 6]}
          validationMessage={['Field is required', 'Password is too short']}
          showCharCounter
          maxLength={30}
          style={styles.horizontalBar}
        />
      <TextField
            placeholder={'Password'}
            value={password}
            floatingPlaceholder
            onChangeText={(text) => setPassword(text)}
            enableErrors
            validateOnChange
            validate={['required', (value) => value.length > 6]}
            validationMessage={['Field is required', 'Name is too short']}
            showCharCounter
            maxLength={30}
            style={styles.horizontalBar}
            secureTextEntry={password ? !showPassword : false}
            trailingAccessory={
              <TouchableOpacity 
                onPress={toggleShowPassword}
              >
                <FontAwesome5
                  name={showPassword ? "eye-slash" : "eye"}
                  size={20}
                  color={Colors.darkBlack}
                />
              </TouchableOpacity>
            }
          />



      <View flex-2>
        <View row style={{ flexWrap: 'wrap' }} gap-10 centerV spread>
          {/* Checkbox ve Stay Logged In */}
          <View row gap-10 centerV>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text flexS>Stay Logged In</Text>
          </View>

          {/* Forgot Password */}
          <Text flexS red10 marginT-10>
            Forgot Password?
          </Text>
        </View>
      </View>


      {/* Sign In Button */}
      <Button
        label="Sign In"
        onPress={handleLogin}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  horizontalBar: {
    borderBottomWidth: 2,
    borderBottomColor: Colors.grey50,
  },
});
