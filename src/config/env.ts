const env = {
  DEV: import.meta.env.DEV,
  PROD: import.meta.env.PROD,
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL ?? "",
} as const;

export default env;
