import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const paths = ["", "/stories", "/journal", "/about", "/contact"];
for (const locale of ["en", "zh"]) {
  test(`${locale}: pages, metadata, accessibility, and responsive layout`, async ({
    page,
  }) => {
    for (const path of paths) {
      const response = await page.goto(`/${locale}${path}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        locale === "zh" ? "zh-CN" : "en",
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`/${locale}${path}$`),
      );
      expect(
        await page.locator('meta[name="description"]').getAttribute("content"),
      ).toBeTruthy();
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(results.violations).toEqual([]);
    }
  });
}
test("story filters and a complete reading journey", async ({ page }) => {
  await page.goto("/en/stories");
  await page.getByRole("button", { name: "Fantasy", exact: true }).click();
  await expect(page.locator(".story-card")).toHaveCount(1);
  await page.locator(".story-card a").click();
  await expect(page.locator("h1")).toHaveText("The First World");
  await expect(page.locator("#story-text p")).toHaveCount(7);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
  await page.getByRole("link", { name: "切换到中文" }).click();
  await expect(page).toHaveURL(/\/zh\/stories\/the-first-world$/);
  await expect(page.locator("h1")).toHaveText("第一个世界");
  await page.getByRole("link", { name: "阅读下一篇", exact: true }).click();
  await expect(page).toHaveURL(/letters-from-tomorrow$/);
});
test("navigation, real contact link, journal, and unknown content", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  await expect(page).toHaveURL(/\/en$/);
  if (isMobile) await page.getByRole("button", { name: "Open menu" }).click();
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(
    page.locator('.contact-email[href="mailto:samiyah.china@gmail.com"]'),
  ).toBeVisible();
  if (isMobile)
    await expect(
      page.getByRole("button", { name: "Open menu" }),
    ).toHaveAttribute("aria-expanded", "false");
  await page.goto("/en/journal");
  await page.locator(".journal-list a").first().click();
  await expect(page.locator(".prose p")).toHaveCount(3);
  const response = await page.goto("/en/stories/not-a-story");
  expect(response?.status()).toBe(404);
  await expect(page.locator("h1")).toContainText("unwritten");
});
test("all published internal links resolve and discovery endpoints work", async ({
  page,
  request,
}) => {
  await page.goto("/en");
  const hrefs = await page
    .locator('a[href^="/"]')
    .evaluateAll((nodes) => [
      ...new Set(nodes.map((n) => n.getAttribute("href")!)),
    ]);
  for (const href of hrefs)
    expect((await request.get(href)).status(), href).toBe(200);
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).not.toContain("/stories/the-first-world");
  expect((await request.get("/robots.txt")).status()).toBe(200);
  const og = await request.get("/og");
  expect(og.status()).toBe(200);
  expect(og.headers()["content-type"]).toContain("image/png");
});

test("reference homepage sections and working world discovery", async ({
  page,
}) => {
  await page.goto("/zh");
  await expect(page.locator(".cinema-hero h1")).toContainText(
    "每一个伟大的世界",
  );
  await expect(page.locator(".inspiration")).toBeVisible();
  await expect(page.locator(".world-tile")).toHaveCount(4);
  await expect(page.locator(".creative-journey li")).toHaveCount(6);
  await expect(page.locator(".journey-mail")).toHaveAttribute(
    "href",
    /^mailto:/,
  );
  await page.locator(".world-right").click();
  await expect(
    page.getByRole("button", { name: "科幻", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".story-card")).toHaveCount(1);
  await page.getByRole("searchbox", { name: "搜索故事" }).fill("不存在的故事");
  await expect(page.locator(".story-card")).toHaveCount(0);
  await expect(page.locator(".search-empty")).toBeVisible();
  await page.getByRole("searchbox", { name: "搜索故事" }).fill("明天");
  await expect(page.locator(".story-card")).toHaveCount(1);
});

test("separate short stories and serials with honest empty states", async ({
  page,
}) => {
  await page.goto("/zh/stories");
  const categories = page.getByRole("navigation", { name: "作品分类" });
  await expect(
    categories.getByRole("link", { name: /独立短篇/ }),
  ).toBeVisible();
  await categories.getByRole("link", { name: /连载中/ }).click();
  await expect(page).toHaveURL(/collection=ongoing/);
  await expect(page.locator(".story-card")).toHaveCount(0);
  await expect(page.locator(".collection-empty")).toContainText("即将与你相遇");
  await page.reload();
  await expect(
    categories.getByRole("link", { name: /连载中/ }),
  ).toHaveAttribute("aria-current", "page");
  await categories.getByRole("link", { name: /已完结长篇/ }).click();
  await expect(page.locator(".story-card")).toHaveCount(0);
  await categories.getByRole("link", { name: /独立短篇/ }).click();
  await expect(page.locator(".sample-library .story-card")).toHaveCount(3);
  await page.getByRole("button", { name: "奇幻", exact: true }).click();
  await expect(page.locator(".story-card")).toHaveCount(1);
  const invalid = await page.goto(
    "/zh/stories/the-first-world/chapters/missing",
  );
  expect(invalid?.status()).toBe(404);
});
