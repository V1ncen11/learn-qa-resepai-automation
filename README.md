# ResepAI End-to-End (E2E) Automated Testing & CI/CD Pipeline

Proyek *automated end-to-end testing* untuk aplikasi web **[ResepAI](https://www.resepai.web.id/)** menggunakan **Playwright** dan terintegrasi dalam *pipeline* CI/CD **Jenkins**.

## Tech Stack
- **Automation Framework:** Playwright (JavaScript / Node.js)
- **CI/CD Server:** Jenkins (Pipeline as Code via `Jenkinsfile`)
- **Version Control:** Git & GitHub
- **Reporting:** Playwright HTML Reporter & Jenkins Build Artifacts

## Struktur Proyek
```text
├── fixtures/
│   └── sample-bahan.jpeg      # Data uji gambar untuk deteksi YOLOv11
├── test/
│   ├── beranda.spec.js        # Pengujian navigasi halaman utama
│   ├── resep.spec.js          # Pengujian filter kategori resep
│   └── deteksi.spec.js        # Pengujian upload gambar & deteksi AI YOLOv11
├── Jenkinsfile                # Definisi tahapan pipeline CI/CD Jenkins
├── playwright.config.js       # Konfigurasi test directory & HTML reporter
└── package.json
```

## Ringkasan Skenario & Hasil Eksekusi (Build #2)
- **Environment:** Chromium Headless (Jenkins CI)
- **Total Test Case:** 3 | **Passed:** 3 (100%) | **Failed:** 0

| Test ID | File Pengujian | Skenario Pengujian | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | `beranda.spec.js` | Navigasi kembali ke halaman Beranda dari halaman Contoh Resep | Halaman kembali ke beranda dan tombol **Deteksi** tampil | PASS |
| **TC-02** | `resep.spec.js` | Filter kategori **Tahu & Tempe** pada halaman Contoh Resep | Kategori merespons klik tanpa error dan daftar resep terfilter | PASS |
| **TC-03** | `deteksi.spec.js` | Upload foto bahan makanan dan deteksi objek dengan YOLOv11 | Heading **Hasil Deteksi** dan gambar teranotasi **Deteksi YOLO** muncul | PASS |

## Cara Menjalankan di Lokal
1. *Clone* repository ini:
   ```bash
   git clone [https://github.com/V1ncen11/learn-qa-resepai-automation.git](https://github.com/V1ncen11/learn-qa-resepai-automation.git)
   cd learn-qa-resepai-automation
   ```
2. *Install dependencies* dan browser Chromium:
   ```bash
   npm ci
   npx playwright install chromium
   ```
3. Jalankan seluruh skrip pengujian:
   ```bash
   npx playwright test
   ```
4. Buka laporan visual HTML:
   ```bash
   npx playwright show-report
   ```