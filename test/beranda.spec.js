import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.resepai.web.id/');
    await page.getByRole('link', { name: 'Lihat Contoh Resep' }).click();
  await page.getByRole('link', { name: 'Beranda' }).click();
  await expect(page.getByRole('button', { name: 'Deteksi' })).toBeVisible();
});