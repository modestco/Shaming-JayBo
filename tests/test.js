import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
	await page.goto('/honorable');
	await expect(page.getByRole('heading', { name: 'About this app' })).toBeVisible();
});
