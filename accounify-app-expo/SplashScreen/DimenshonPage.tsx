import React, { useState } from 'react';
import { ScrollView, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { View, Button, Text, Image, Colors } from 'react-native-ui-lib';

const { width } = Dimensions.get('window');

const slides = [
  {
    key: '1',
    title: 'Hoşgeldiniz',
    text: 'Uygulamamıza hoşgeldiniz!',
    image: require('@/assets/images/icon.png'),
  },
  {
    key: '2',
    title: 'Özellikler',
    text: 'Uygulamamızın özelliklerini keşfedin.',
    image: require('@/assets/images/react-logo.png'),
  },
  {
    key: '3',
    title: 'Başlayalım',
    text: 'Hadi başlayalım!',
    image: require('@/assets/images/splash-icon.png'),
  },
];

interface DimenshonPageProps {
  goToLogin: () => void;
}

const DimenshonPage = ({ goToLogin }: DimenshonPageProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View flex center bg-white>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide) => (
          <View key={slide.key} center width={width}>
            <Image source={slide.image} width={200} height={200} marginB-20 />
            <Text bold>{slide.title}</Text>
            <Text bold>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View row marginB-40>
        {slides.map((_, index) => (
          <View
            key={index}
            width={10}
            height={10}
            marginH-5
            marginB-40
            br50
            backgroundColor={index === activeIndex ? Colors.blue50 : Colors.grey30}
          />
        ))}
      </View>
      <Button label="Login'e Git" onPress={goToLogin} marginB-40 />
    </View>
  );
};

export default DimenshonPage;