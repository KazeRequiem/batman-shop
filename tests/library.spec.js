import { test, expect } from '@playwright/test';

test.describe('Library Page', () => {
  test('should display loading indicator, then render comics cards', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/');

    // Verify that the loading indicator is visible first
    const loader = page.getByText('CHARGEMENT...');
    await expect(loader).toBeVisible();

    // Wait for loading to finish (the loader should become hidden)
    await expect(loader).toBeHidden({ timeout: 5000 });

    // Verify page header is present
    await expect(page.getByRole('heading', { name: 'BIBLIOTHÈQUE' })).toBeVisible();

    // Verify that comic titles are rendered (at least the ones from data/comics.js)
    const comicTitles = [
      "Batman: The Dark Knight Returns",
      "Batman: Année Un",
      "Batman: The Killing Joke",
      "Batman: La Cour des Hiboux"
    ];

    for (const title of comicTitles) {
      await expect(page.getByRole('heading', { name: title })).toBeVisible();
    }

    // Verify we have the correct number of comics in the grid
    const cards = page.locator('main h2');
    await expect(cards).toHaveCount(10);
  });
});
