interface IConfig {
    firebase: {
      apiKey: string;
      projectId: string;
      storageBucket: string;
      appId: string;
      firestore: { local: boolean; host: string; port: number };
    };
  }
function buildConfig (env: any): IConfig {
return {
    firebase: {
    apiKey: env.VUE_APP_FIRESTORE_API_KEY,
    projectId: env.VUE_APP_FIRESTORE_PROJECT_ID,
    storageBucket: env.VUE_APP_FIRESTORE_STORAGE_BUCKET,
    appId: env.VUE_APP_FIRESTORE_APP_ID,
    firestore: {
        local: env.VUE_APP_FIREBASE_FIRESTORE_LOCAL === 'true' ? true : false,
        host: env.VUE_APP_FIREBASE_FIRESTORE_HOST,
        port: env.VUE_APP_FIREBASE_FIRESTORE_PORT
    }
    }
    }
}

export default buildConfig(process.env)

export { IConfig, buildConfig }
