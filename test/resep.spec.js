import { test, expect } from '@playwright/test';

test('TC02 - Filter kategori dan reset di halaman Contoh Resep', async ({ page }) => {
  await page.goto('https://www.resepai.web.id/');
  await page.getByRole('link', { name: 'Lihat Contoh Resep' }).click();
  await page.getByRole('button', { name: 'Ayam' }).click();
  await expect(page.getByRole('button', { name: 'Ayam' })).toBeVisible();
});