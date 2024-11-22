import React, { useState, useEffect } from "react";
import SplashPage from "@/SplashScreen/SplashPage";
import DimenshonPage from "@/SplashScreen/DimenshonPage";
import HomePage from "@/screens/Home/HomePage";
import { useRouter } from "expo-router"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AuthPage() {
  const [isSplashFinished, setIsSplashFinished] = useState(false); // Splash ekranı durumu
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null); // Login durumu
  const router = useRouter();

  // Uygulama başlatıldığında login durumunu kontrol et
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(loggedIn === "true");
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  // Splash ekranı zamanlayıcısı
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashFinished(true); // Splash ekranı bitti
    }, 3000); // 3 saniye Splash Screen gösteriliyor

    return () => clearTimeout(timer); 
  }, []);


  // Splash bittiğinde login durumuna göre yönlendirme
  if (!isSplashFinished && !isLoggedIn) {
    return <SplashPage />;
  }

  return (
    <>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <DimenshonPage goToLogin={() => router.push("/(auth)/loginScreen/authScreen")} /> // Giriş yapmamışsa yönlendirme sayfası
      )}
    </>
  );
}
