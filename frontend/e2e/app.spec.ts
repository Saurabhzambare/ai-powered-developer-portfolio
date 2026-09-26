import { expect, test } from '@playwright/test'

test('shows the homepage introduction without Vite starter content', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page.getByRole('main')).toBeVisible()
  await expect(page.getByRole('region', { name: 'Introduction' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Get started' })).toHaveCount(
    0,
  )
  await expect(page.getByRole('button', { name: /count is/i })).toHaveCount(0)
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
  await expect(page.getByRole('region', { name: 'Introduction' })).toBeVisible()
})
