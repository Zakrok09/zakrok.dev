import { test, expect } from '@playwright/test';

test('meta is correct', async ({ page }) => {
    await page.goto("http://localhost:4321/");

    await expect(page).toHaveTitle('Zakrok');
});

test('theme switch works', async ({ page }) => {
    await page.goto("http://localhost:4321/");

    const token = 'light';
    await page.evaluate(token => localStorage.setItem('theme', token), token)

    await page.getByTestId('theme-switch').click();

    await expect(page.getByTestId('html')).toHaveClass('dark');
});