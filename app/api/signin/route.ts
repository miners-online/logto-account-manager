import { signIn } from '@logto/next/server-actions';
import { NextRequest } from 'next/server';
import { logtoConfig } from '@/lib/logto';

export async function GET(request: NextRequest) {
    console.log(logtoConfig.baseUrl)
    await signIn(logtoConfig);
}