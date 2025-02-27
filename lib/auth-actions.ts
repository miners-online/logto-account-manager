"use server";

import { signIn, signOut } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';

export async function signInAction() {
    await signIn(logtoConfig);
}

export async function signOutAction() {
    await signOut(logtoConfig);
}