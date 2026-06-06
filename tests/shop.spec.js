import { test, expect } from '@playwright/test';

test.describe('Shop Page', () => {
  test('should display paper editions and goodies with their details', async ({ page }) => {
    // Navigate to shop page
    await page.goto('/shop');

    // Verify section headings
    await expect(page.getByRole('heading', { name: 'ÉDITIONS PAPIER', level: 1 })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GOODIES', level: 1 })).toBeVisible();

    // Verify some paper editions products are listed
    await expect(page.getByRole('heading', { name: 'Batman: The Dark Knight Returns — Édition Deluxe', level: 2 })).toBeVisible();
    await expect(page.getByText("L'édition deluxe du chef-d'œuvre de Frank Miller")).toBeVisible();
    await expect(page.getByText('29.99 €', { exact: true })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Batman: La Cour des Hiboux — Tome 1', level: 2 })).toBeVisible();
    await expect(page.getByText('17.99 €', { exact: true })).toBeVisible();

    // Verify some goodies products are listed
    await expect(page.getByRole('heading', { name: 'Figurine Batman — The Dark Knight', level: 2 })).toBeVisible();
    await expect(page.getByText('Figurine de collection Batman posé sur le Bat-Signal')).toBeVisible();
    await expect(page.getByText('49.99 €', { exact: true })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Badge Pack — Batman Collection', level: 2 })).toBeVisible();
    await expect(page.getByText('9.99 €', { exact: true })).toBeVisible();

    // Verify we have 12 product cards in total (6 paper editions + 6 goodies)
    const productHeadings = page.locator('main h2');
    await expect(productHeadings).toHaveCount(12);
  });
});
