import { describe, it } from 'vitest';
import { exec } from 'child_process';

describe('TypeScript', () => {
  it('compiles without errors', () => {
    return new Promise<void>((resolve, reject) => {
      exec('npx tsc --noEmit', (error, _stdout, stderr) => {
        if (error) {
          reject(error);
        } else if (stderr) {
          reject(new Error(stderr));
        } else {
          resolve();
        }
      });
    });
  });
});
