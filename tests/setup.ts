import "@testing-library/jest-dom/vitest";
import "vitest-canvas-mock";
import { cleanup } from "@testing-library/preact";
import { afterEach, beforeEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

beforeEach(() => {
  // jsdom no implementa estas APIs
  URL.createObjectURL = vi.fn(() => "blob:mock-url");
  URL.revokeObjectURL = vi.fn();

  // jsdom nunca dispara onload en <img>; lo simulamos con dimensiones fijas
  vi.stubGlobal(
    "createImageBitmap",
    vi.fn(async () => ({ width: 200, height: 100, close: vi.fn() })),
  );
});
