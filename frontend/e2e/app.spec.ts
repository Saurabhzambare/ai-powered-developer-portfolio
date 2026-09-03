import { expect, test } from '@playwright/test'

test('increments the counter', async ({ page }) => {
  await page.goto('/')

  const initialCounter = page.getByRole('button', { name: /count is 0/i })

  await expect(initialCounter).toBeVisible()
  await initialCounter.click()
  await expect(page.getByRole('button', { name: /count is 1/i })).toBeVisible()
})

test('returns home from an unknown route', async ({ page }) => {
  await page.goto('/this-route-does-not-exist')

  await expect(
    page.getByRole('heading', { name: 'Page not found', level: 1 }),
  ).toBeVisible()

  const returnHomeLink = page.getByRole('link', { name: 'Return home' })

  await expect(returnHomeLink).toBeVisible()
  await returnHomeLink.click()

  await expect(page).toHaveURL('/')
  await expect(page.getByRole('button', { name: /count is 0/i })).toBeVisible()
})
