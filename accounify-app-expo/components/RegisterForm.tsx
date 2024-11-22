
import { FontAwesome5 } from "@expo/vector-icons";
import { linkTo } from "expo-router/build/global-state/routing";
import React, { useCallback, useState } from "react";
import { StyleSheet } from "react-native";


import { TextField, View, Colors, Button, Text, Checkbox, TouchableOpacity, DateTimePicker } from "react-native-ui-lib";


const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");


  return (
    <View flex-2 gap-16>
      {/* Full Name or Firm Section */}
      <TextField
          placeholder={'Full Name'}
          floatingPlaceholder
          onChangeText={(text) => console.log(text)}
          enableErrors
          validateOnChange
          validate={['required', (value) => value.length > 6]}
          validationMessage={['Field is required', 'Name is too short']}
          showCharCounter
          maxLength={30}
          style={styles.horizontalBar}
        />
        <TextField
          placeholder={'Firm Name (Optional)'}
          floatingPlaceholder
          onChangeText={(text) => console.log(text)}
          enableErrors
          showCharCounter
          maxLength={30}
          style={styles.horizontalBar}
        />


      {/* Email or Username */}
      <TextField
          placeholder={'Email'}
          floatingPlaceholder
          keyboardType="email-address"
          onChangeText={(text) => console.log(text)}
          enableErrors
          validateOnChange
          validate={['required', 'email', (value) => value.length > 6]}
          validationMessage={['Field is required', 'Email format only', 'Email is too short']}
          maxLength={30}
          style={styles.horizontalBar}
        />

      {/* Password Section */}
      <TextField
        placeholder={'Password'}
        value={password}
        floatingPlaceholder
        onChangeText={(text) => setPassword(text)}
        enableErrors
        validateOnChange
        validate={['required', (value) => value.length > 6]}
        validationMessage={['Field is required', 'Password is too short']}
        maxLength={30}
        style={styles.horizontalBar}
      />

      {/* Confirm Password Section */}
      <TextField
        placeholder={'Repeat your Password'}
        value={passwordRepeat}
        onChangeText={(text) => setPasswordRepeat(text)}
        enableErrors
        validateOnChange
        validate={[
          'required', 
          (value) => value === password
        ]}
        validationMessage={[
          'Field is required', 
          'Passwords do not match'
        ]}
        isPassword={true}
        style={styles.horizontalBar}
      />

      {/* Register Button */}
      <Button
        label="Register"
        onPress={() => console.log("Register")}
        marginT-20
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

export default RegisterForm;

