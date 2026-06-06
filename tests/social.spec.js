import { test, expect } from '@playwright/test';

test.describe('Social Page', () => {
  test('should display all social media platform cards with correct details and links', async ({ page }) => {
    // Navigate to social page
    await page.goto('/social');

    // Verify page heading
    await expect(page.getByRole('heading', { name: 'RÉSEAU SOCIAL', level: 1 })).toBeVisible();
    await expect(page.getByText('Suivez Gotham Reads sur vos plateformes préférées')).toBeVisible();

    // Verify all social media links and handles
    const socialPlatforms = [
      {
        name: 'Twitter / X',
        handle: '@gothamreads',
        href: 'https://twitter.com/gothamreads',
        description: 'Suivez notre actualité, les sorties et les news DC Comics en temps réel.'
      },
      {
        name: 'Instagram',
        handle: '@gothamreads',
        href: 'https://instagram.com/gothamreads',
        description: 'Plongez dans nos galeries, fanarts et couvertures exclusives chaque semaine.'
      },
      {
        name: 'Facebook',
        handle: 'GothamReads',
        href: 'https://facebook.com/gothamreads',
        description: 'Rejoignez notre communauté et participez aux discussions et sondages.'
      },
      {
        name: 'YouTube',
        handle: 'GothamReads',
        href: 'https://youtube.com/@gothamreads',
        description: 'Reviews, unboxings et analyses des meilleurs arcs Batman en vidéo.'
      }
    ];

    for (const platform of socialPlatforms) {
      // Find the link by platform name or href inside main content
      const cardLink = page.locator(`main a[href="${platform.href}"]`);
      await expect(cardLink).toBeVisible();
      
      // Verify target="_blank" is used for external links
      await expect(cardLink).toHaveAttribute('target', '_blank');
      await expect(cardLink).toHaveAttribute('rel', 'noopener noreferrer');

      // Check handle inside the card
      await expect(cardLink.getByText(platform.handle)).toBeVisible();

      // Check name/title of the platform
      await expect(cardLink.getByRole('heading', { name: platform.name, level: 2 })).toBeVisible();

      // Check description
      await expect(cardLink.getByText(platform.description)).toBeVisible();
    }

    // Verify there are exactly 4 platform cards
    const cards = page.locator('main a[target="_blank"]');
    await expect(cards).toHaveCount(4);
  });
});
