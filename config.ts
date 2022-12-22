interface IConfig {
    buildType: string;
    buildStage: string;
    environment: string;
    isEndToEnd: boolean;
    firebase: {
      apiKey: string;
      authDomain: string;
      databaseURL: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
      measurementId: string;
      emailVerificationURL: string;
      firestore: { local: boolean; host: string; port: number };
      functions: { local: boolean; host: string; port: number };
      auth: { local: boolean; host: string };
      database: { local: boolean; host: string; port: number };
      bff: { baseURL: string };
    };
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  function buildConfig(env: any): IConfig {
    return {
      buildStage: env.VUE_APP_STAGE,
      buildType: env.NODE_ENV,
      environment: env.VUE_APP_ENVIRONMENT,
      firebase: {
        apiKey: env.VUE_APP_FIRESTORE_API_KEY,
        authDomain: env.VUE_APP_FIRESTORE_AUTH_DOMAIN,
        databaseURL: env.VUE_APP_FIRESTORE_DATABASE_URL,
        projectId: env.VUE_APP_FIRESTORE_PROJECT_ID,
        storageBucket: env.VUE_APP_FIRESTORE_STORAGE_BUCKET,
        messagingSenderId: env.VUE_APP_FIRESTORE_MESSAGING_SENDER_ID,
        appId: env.VUE_APP_FIRESTORE_APP_ID,
        measurementId: env.VUE_APP_FIRESTORE_MEASUREMENT_ID,
        emailVerificationURL: env.VUE_APP_FIREBASE_EMAIL_VERIFICATION_URL,
        firestore: {
          local: env.VUE_APP_FIREBASE_FIRESTORE_LOCAL === 'true' ? true : false,
          host: env.VUE_APP_FIREBASE_FIRESTORE_HOST,
          port: env.VUE_APP_FIREBASE_FIRESTORE_PORT
        },
        functions: {
          local: env.VUE_APP_FIREBASE_FUNCTIONS_LOCAL === 'true' ? true : false,
          host: env.VUE_APP_FIREBASE_FUNCTIONS_HOST,
          port: env.VUE_APP_FIREBASE_FUNCTIONS_PORT
        },
        database: {
          local: env.VUE_APP_FIREBASE_DATABASE_LOCAL === 'true' ? true : false,
          host: env.VUE_APP_FIREBASE_DATABASE_HOST,
          port: env.VUE_APP_FIREBASE_DATABASE_PORT
        },
        auth: {
          local: env.VUE_APP_FIREBASE_AUTH_LOCAL === 'true' ? true : false,
          host: env.VUE_APP_FIREBASE_AUTH_HOST
        },
        bff: {
          baseURL: env.VUE_APP_FIREBASE_BFF_BASE_URL
        }
      }
    };
  }
  
  export default buildConfig(process.env);
  
  export { IConfig, buildConfig };
  