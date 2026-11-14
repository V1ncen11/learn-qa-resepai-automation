import { test, expect } from '@playwright/test';
import path from 'path';

test('TC03 - Upload foto bahan berhasil dideteksi oleh YOLOv11', async ({ page }) => {
  await page.goto('https://www.resepai.web.id/');

  // Masuk ke menu upload sesuai rekaman Codegen lu
  await page.getByRole('link', { name: 'Upload foto bahan atau buka' }).click();
  await page.getByRole('button', { name: 'Upload Foto' }).click();

  // Kirim file gambar langsung ke input file
  const fileGambar = path.join(__dirname, '../fixtures/sample-bahan.jpeg');
  await page.locator('input[type="file"]').setInputFiles(fileGambar);

  // Pastikan judul 'Hasil Deteksi' dan gambar hasil anotasi YOLO muncul (batas tunggu 20 detik)
  await expect(page.getByRole('heading', { name: 'Hasil Deteksi' })).toBeVisible({ timeout: 20000 });
  await expect(page.getByRole('img', { name: 'Deteksi YOLO' })).toBeVisible();
});