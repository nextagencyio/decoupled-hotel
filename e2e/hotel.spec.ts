import { test, expect } from '@playwright/test'

test.describe('Hotel Homepage', () => {
  test('loads with correct title and hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Grand Meridian/)
    await expect(page.locator('text=Experience Timeless Elegance')).toBeVisible()
  })

  test('displays navigation links', async ({ page }) => {
    await page.goto('/')
    // Use nav-scoped selectors since there are multiple links to /rooms etc.
    const nav = page.locator('nav').first()
    await expect(nav.locator('a[href="/rooms"]')).toBeVisible()
    await expect(nav.locator('a[href="/amenities"]')).toBeVisible()
    await expect(nav.locator('a[href="/events"]')).toBeVisible()
    await expect(nav.locator('a[href="/attractions"]')).toBeVisible()
  })

  test('shows stats section', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('text=200+')).toBeVisible()
    await expect(page.locator('text=Luxury Rooms')).toBeVisible()
  })
})

test.describe('Rooms', () => {
  test('listing page shows rooms', async ({ page }) => {
    await page.goto('/rooms')
    await expect(page).toHaveTitle(/Rooms/)
    await expect(page.locator('text=Deluxe King').first()).toBeVisible()
  })

  test('detail page loads for presidential suite', async ({ page }) => {
    await page.goto('/rooms/presidential-suite', { timeout: 15000 })
    await expect(page.locator('h1:has-text("Presidential Suite")')).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Amenities', () => {
  test('listing page shows amenities', async ({ page }) => {
    await page.goto('/amenities')
    await expect(page).toHaveTitle(/Amenities/)
    await expect(page.locator('text=Fitness Center').first()).toBeVisible()
  })

  test('detail page loads for spa', async ({ page }) => {
    await page.goto('/amenities/spa-wellness-center', { timeout: 15000 })
    await expect(page.locator('h1:has-text("Spa")')).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Events', () => {
  test('listing page shows events', async ({ page }) => {
    await page.goto('/events')
    await expect(page).toHaveTitle(/Events/)
    await expect(page.locator('text=Jazz').first()).toBeVisible()
  })

  test('detail page loads for wine pairing dinner', async ({ page }) => {
    await page.goto('/events/wine-pairing-dinner', { timeout: 15000 })
    await expect(page.locator('h1:has-text("Wine Pairing")')).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Attractions', () => {
  test('listing page shows attractions', async ({ page }) => {
    await page.goto('/attractions')
    await expect(page).toHaveTitle(/Attractions/)
    await expect(page.locator('text=National Art Museum').first()).toBeVisible()
  })

  test('detail page loads for botanical gardens', async ({ page }) => {
    await page.goto('/attractions/botanical-gardens', { timeout: 15000 })
    await expect(page.locator('h1:has-text("Botanical Gardens")')).toBeVisible({ timeout: 10000 })
  })
})

test.describe('Static Pages', () => {
  test('about page loads', async ({ page }) => {
    await page.goto('/about', { timeout: 15000 })
    await expect(page.locator('text=Grand Meridian').first()).toBeVisible({ timeout: 10000 })
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact/)
  })
})
