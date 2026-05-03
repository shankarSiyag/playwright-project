import { test as baseTest } from '@playwright/test';
import { PageManager } from '../pages/PageManager';

type Pages = {
    pm: PageManager;
}

export const test = baseTest.extend<Pages>({
    pm: async ({ page }, use) => await use(new PageManager(page))
})

export { expect } from '@playwright/test';