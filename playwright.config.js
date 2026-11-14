import { defineConfig } from "@playwright/test";

export default defineConfig({
    testDir: './test',
    reporter: [
        ['list'],
        ['html', { open: 'never' }]
    ],
    use:{
     screenshot:'only-on-failure',
    },
});