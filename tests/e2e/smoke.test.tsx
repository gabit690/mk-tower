import { test, expect } from "@playwright/test";

test.describe("smoke: Playwright", () => {
  test("el navegador arranca y renderiza HTML", async ({ page }) => {
    await page.setContent("<h1>Hola Playwright</h1>");
    await expect(
      page.getByRole("heading", { name: "Hola Playwright" }),
    ).toBeVisible();
  });

  test("maneja eventos y subida de archivos", async ({ page }) => {
    await page.setContent(`
      <input type="file" id="img" accept="image/*" />
      <p id="nombre"></p>
      <script>
        document.getElementById('img').addEventListener('change', (e) => {
          document.getElementById('nombre').textContent = e.target.files[0].name
        })
      </script>
    `);

    await page.setInputFiles("#img", {
      name: "foto.png",
      mimeType: "image/png",
      buffer: Buffer.from("contenido"),
    });

    await expect(page.locator("#nombre")).toHaveText("foto.png");
  });

  test("canvas real: dibuja y lee un píxel", async ({ page }) => {
    await page.setContent('<canvas id="c" width="10" height="10"></canvas>');

    const pixel = await page.evaluate(() => {
      const canvas = document.getElementById("c") as HTMLCanvasElement;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "rgb(255, 0, 0)";
      ctx.fillRect(0, 0, 10, 10);
      return Array.from(ctx.getImageData(5, 5, 1, 1).data);
    });

    expect(pixel).toEqual([255, 0, 0, 255]);
  });
});
