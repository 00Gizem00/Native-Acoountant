import { View, Button, Text, Image } from 'react-native-ui-lib';


export default function SplashPage() {

  return (
    <View flex center bg-white>
      <Image source={require('@/assets/images/react-logo.png')} width={100} height={100} />
      <Text marginT-20 text24 bold>Uygulama Adı</Text>
    </View>
  );
};


