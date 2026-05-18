
import crypto from 'crypto';

export type Webhook = {
  id: string;
  userId: string;
  url: string;
  secret: string;
  events: string[];
  isActive: boolean;
  createdAt: Date;
};

export function signPayload(secret: string, payload: object): string {
  return crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
}

export function generateSecret(): string {
  return crypto.randomBytes(32).toString('hex');
}
