import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ecommerce',
  webDir: 'dist',
  android: {
    flavor: "qa",
  },
};

export default config;
