import { useColorScheme } from '@/hooks/use-color-scheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import ReactMoE, { MoEGeoLocation, MoEInitConfig, MoEProperties, MoEPushConfig, MoEngageLogConfig, MoEngageLogLevel } from "react-native-moengage";
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    fetch('https://config.prod.oziva.in/config/web/home').then((data) => data.json()).then((data) => {
    })
  }, [])
  useEffect(() => {
    const moEInitConfig = new MoEInitConfig(
      MoEPushConfig.defaultConfig(),
      new MoEngageLogConfig(MoEngageLogLevel.DEBUG, true)
    );
    ReactMoE.initialize('Z4JGV1DYJZ1TC2TYDLCBC93G', moEInitConfig);
    ReactMoE.identifyUser("5457790664748"); //Pass any unique value for your user

    let properties = new MoEProperties();
    properties.addAttribute("quantity", 1);
    properties.addAttribute("product", "iPhone");
    properties.addAttribute("currency", "dollar");
    properties.addAttribute("price", 699);
    properties.addAttribute("new_item", true);
    properties.addAttribute("models", ["iPhone15", "iPhone14"]);
    properties.addDateAttribute("purchase_date", "2020-06-10T12:42:10Z");
    properties.addLocationAttribute(
      "store_location",
      new MoEGeoLocation(90.00001, 180.00001)
    );
    ReactMoE.trackEvent("TestEvent2", properties);
    fetch('https://httpbin.org/get');
  }, []);
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
