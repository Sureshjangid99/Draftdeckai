// lib/webhook.ts
import crypto from 'crypto';

// Webhook का type define करो
export type Webhook = {
  id: string;
  userId: string;
  url: string;
  secret: string;
  events: string[];
  isActive: boolean;
  createdAt: Date;
};

// HMAC Signature बनाओ
export function signPayload(secret: string, payload: object): string {
  return crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
}

// Random secret generate करो
export function generateSecret(): string {
  return crypto.randomBytes(32).toString('hex');
}
