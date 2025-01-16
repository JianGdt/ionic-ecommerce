import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ecommerce',
  webDir: 'dist',
  android: {
    flavor: "qa",
  },
  plugins: {
    LiveUpdates: {
      appId: '225a6279',
      channel: 'Development',
      autoUpdateMethod: 'none',
      maxVersions: 2
    },
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

export default config;
 