import { useState } from "preact/hooks";
import { render, screen } from "@testing-library/preact";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

function SmokeForm() {
  const [fileName, setFileName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <form>
      <label>
        Imagen
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFileName(e.currentTarget.files?.[0]?.name ?? "")}
        />
      </label>
      {fileName && <p>Archivo: {fileName}</p>}

      <button type="button" onClick={() => setCount((c) => c + 1)}>
        Contar
      </button>
      <output>Clics: {count}</output>

      <button type="submit" disabled>
        Generar
      </button>
    </form>
  );
}

describe("smoke: Testing Library", () => {
  it("renderiza JSX de Preact en jsdom", () => {
    render(<SmokeForm />);
    expect(screen.getByRole("button", { name: "Contar" })).toBeInTheDocument();
  });

  it("jest-dom funciona (matchers del DOM)", () => {
    render(<SmokeForm />);
    expect(screen.getByRole("button", { name: "Generar" })).toBeDisabled();
  });

  it("user-event simula clics y el estado de Preact se actualiza", async () => {
    const user = userEvent.setup();
    render(<SmokeForm />);

    await user.click(screen.getByRole("button", { name: "Contar" }));
    await user.click(screen.getByRole("button", { name: "Contar" }));

    expect(screen.getByText("Clics: 2")).toBeInTheDocument();
  });

  it("user-event sube un archivo", async () => {
    const user = userEvent.setup();
    render(<SmokeForm />);

    const file = new File(["contenido"], "foto.png", { type: "image/png" });
    await user.upload(screen.getByLabelText("Imagen"), file);

    expect(screen.getByText("Archivo: foto.png")).toBeInTheDocument();
  });

  it("cleanup entre tests: no queda DOM del test anterior", () => {
    render(<SmokeForm />);
    expect(screen.getAllByRole("button", { name: "Contar" })).toHaveLength(1);
  });
});
