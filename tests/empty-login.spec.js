import { test, expect } from '@playwright/test';

test('Проверка обязательных полей при пустом входе', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-marker="login-button-desktop"]').click();
  await page.getByText('Войти', { exact: true }).last().click();
  await page.locator('[data-marker="login-submit-button"]').click();
  await expect(page.locator('[data-marker="email-error"]')).toHaveText('Email обязателен');
  await expect(page.locator('[data-marker="password-error"]')).toHaveText('Пароль обязателен');
});
