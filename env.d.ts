declare namespace NodeJS {
    interface ProcessEnv {
        [key: string]: string | undefined;
        APP_ID: string;
        APP_SECRET: string;
        LOGTO_ENDPOINT: string;
        BASE_URL: string;
        COOKIE_SECRET: string;
    }
}
