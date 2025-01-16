import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ecommerce',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  android: {
    flavor: "qa",
  },
  plugins: {
    LiveUpdates: {
      appId: 'c5c28a79',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    },
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

export default config;
 