import { expect, test } from '@playwright/test';

test('displays the OpenLayers map', async ({ page }) => {
  await page.goto('.');

  await expect(page.locator('#map .ol-viewport')).toBeVisible();
});

test('shows the clicked region name in a popup', async ({ page }) => {
  await page.route('https://cap.secondlife.com/**', route =>
    route.fulfill({
      contentType: 'application/javascript',
      body: 'globalThis.slRegionName = "Test Region";'
    })
  );
  await page.goto('.');

  const map = page.locator('#map');
  await map.click({ position: { x: 200, y: 200 } });

  await expect(page.locator('#popup-title')).toContainText('Test Region');
  await expect(page.locator('#popup-content')).toContainText('Coordinate:');
});
