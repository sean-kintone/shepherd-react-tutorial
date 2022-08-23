/// <reference types="node" />
/// <reference types="node" />
import https from "https";
export declare const readFileFromPath: (filePath: string) => Promise<{
    data: Buffer;
    name: string;
}>;
export declare const getRequestToken: () => never;
export declare const getDefaultAuth: () => never;
export declare const buildPlatformDependentConfig: ({ httpsAgent, clientCertAuth, }: {
    httpsAgent?: https.Agent | undefined;
    clientCertAuth?: {
        pfx: Buffer;
        password: string;
    } | {
        pfxFilePath: string;
        password: string;
    } | undefined;
}) => {
    httpsAgent: https.Agent;
} | {
    httpsAgent?: undefined;
};
export declare const buildHeaders: (params: {
    userAgent?: string | undefined;
}) => {
    "User-Agent": string;
};
export declare const buildFormDataValue: (data: unknown) => unknown;
export declare const buildBaseUrl: (baseUrl: string | undefined) => string;
export declare const getVersion: () => any;
