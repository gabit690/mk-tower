import { defineConfig } from "vitest/config";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "node",
          include: ["tests/unit/**/*.test.{ts,tsx}"],
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          environment: "jsdom",
          setupFiles: ["./tests/setup.ts"],
          include: ["tests/integration/**/*.test.{ts,tsx}"],
        },
      },
    ],
  },
});
