import { IdTokenClaims } from "@logto/next";

export interface User {
    isAuthenticated: boolean;
    claims: IdTokenClaims;
}