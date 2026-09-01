import { expect, test } from '@playwright/test'

test('increments the counter', async ({ page }) => {
  await page.goto('/')

  const initialCounter = page.getByRole('button', { name: /count is 0/i })

  await expect(initialCounter).toBeVisible()
  await initialCounter.click()
  await expect(page.getByRole('button', { name: /count is 1/i })).toBeVisible()
})
