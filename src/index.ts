import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BanK8PfQ3B1x9fpsm2iP9qFpxwFrgSawyXFUKi5tzfRw'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'FArm7gQCS39qKRTNt6TTqCMKiFuNdZEHN8KVDKZKAT21'
);
