import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: 0,
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://localhost:3000",
    trace: "retain-on-failure",
  },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" },
    },
  ],
  webServer: process.env.TEST_BASE_URL
    ? undefined
    : {
        command: "npm run start",
        url: "http://localhost:3000/en",
        reuseExistingServer: true,
        timeout: 60000,
      },
});
