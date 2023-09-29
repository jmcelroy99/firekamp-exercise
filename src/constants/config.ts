interface iConfig {
  API_URL: string;
  API_KEY: string;
}

export const configuration: iConfig = {
  API_URL: process.env.EXPO_PUBLIC_WEATHER_API_URL ?? "",
  API_KEY: process.env.EXPO_PUBLIC_WEATHER_API_KEY ?? ""
};
