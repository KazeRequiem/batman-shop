import { test, expect } from '@playwright/test';

test.describe('Navigation & Responsiveness', () => {
  test('should navigate between pages on desktop viewport', async ({ page }) => {
    // Start at homepage (Library)
    await page.goto('/');

    // Check main title on Library page
    await expect(page.getByRole('heading', { name: 'BIBLIOTHÈQUE' })).toBeVisible();

    // Navigate to Boutique
    const shopLink = page.locator('nav').getByRole('link', { name: 'Boutique' });
    await shopLink.click();
    await expect(page).toHaveURL(/\/shop/);
    await expect(page.getByRole('heading', { name: 'ÉDITIONS PAPIER' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'GOODIES' })).toBeVisible();

    // Navigate to Réseau social
    const socialLink = page.locator('nav').getByRole('link', { name: 'Réseau social' });
    await socialLink.click();
    await expect(page).toHaveURL(/\/social/);
    await expect(page.getByRole('heading', { name: 'RÉSEAU SOCIAL' })).toBeVisible();

    // Navigate back to Bibliothèque via brand logo
    const logoLink = page.locator('nav').getByRole('link', { name: 'GOTHAM READS' });
    await logoLink.click();
    await expect(page).toHaveURL(/\//);
    await expect(page.getByRole('heading', { name: 'BIBLIOTHÈQUE' })).toBeVisible();
  });

  test('should show hamburger menu on mobile viewport and toggle properly', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Desktop navbar menu should be hidden
    const desktopMenu = page.locator('nav ul.hidden.md\\:flex');
    await expect(desktopMenu).toBeHidden();

    // Hamburger button should be visible
    const hamburgerBtn = page.getByRole('button', { name: 'Menu' });
    await expect(hamburgerBtn).toBeVisible();

    // Mobile menu container should be closed (max-h-0 class should be present)
    const mobileMenuContainer = page.locator('nav > div.md\\:hidden');
    await expect(mobileMenuContainer).toHaveClass(/max-h-0/);

    // Open hamburger menu
    await hamburgerBtn.click();

    // Mobile menu container should now be expanded (max-h-64 class should be present)
    await expect(mobileMenuContainer).toHaveClass(/max-h-64/);

    // Click on "Boutique" inside mobile menu
    const boutiqueMobileLink = mobileMenuContainer.getByRole('link', { name: 'Boutique' });
    await boutiqueMobileLink.click();

    // Should navigate and close menu
    await expect(page).toHaveURL(/\/shop/);
    await expect(mobileMenuContainer).toHaveClass(/max-h-0/);
    await expect(page.getByRole('heading', { name: 'ÉDITIONS PAPIER' })).toBeVisible();
  });
});
