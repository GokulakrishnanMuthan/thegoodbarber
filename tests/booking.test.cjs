const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");

// Transpile in memory with the project's existing TypeScript dependency.
// Resolve only the configuration import, without writing build artifacts.
function load(file, imports = {}) {
  const source = fs.readFileSync(path.join(__dirname, "..", file), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  });
  const exports = {};
  new Function("exports", "require", outputText)(exports, (id) => {
    if (!(id in imports)) throw new Error(`Unexpected import: ${id}`);
    return imports[id];
  });
  return exports;
}

function loadBooking(whatsapp) {
  const siteConfig = {
    name: "The Good Barber",
    whatsapp,
    address: { city: "Coimbatore" },
  };
  return load("src/lib/booking.ts", { "@/lib/site": { siteConfig } });
}

test("whatsappUrl builds a wa.me deep link for a valid number", () => {
  const { whatsappUrl } = loadBooking("918838742490");
  const url = whatsappUrl("Hello there");
  assert.equal(url, "https://wa.me/918838742490?text=Hello%20there");
});

test("whatsappUrl rejects invalid or unconfigured numbers", () => {
  assert.equal(loadBooking("").whatsappUrl("Hi"), null);
  assert.equal(loadBooking("0123456").whatsappUrl("Hi"), null); // leading zero
  assert.equal(loadBooking("12").whatsappUrl("Hi"), null); // too short
  assert.equal(loadBooking("1234567890123456").whatsappUrl("Hi"), null); // too long
});

test("bookingMessage mentions the city and an optional service", () => {
  const { bookingMessage } = loadBooking("918838742490");
  assert.match(bookingMessage(), /Coimbatore/);
  assert.doesNotMatch(bookingMessage(), /Service:/);
  assert.match(bookingMessage("Haircut"), /Service: Haircut\./);
});

test("bookingUrl encodes the booking message for a valid number", () => {
  const { bookingUrl } = loadBooking("918838742490");
  const url = bookingUrl("Combo 999");
  assert.ok(url.startsWith("https://wa.me/918838742490?text="));
  assert.match(decodeURIComponent(url), /Service: Combo 999\./);
});

test("the live site number is a valid WhatsApp number", () => {
  const { siteConfig } = load("src/lib/site.ts");
  const { whatsappUrl } = load("src/lib/booking.ts", { "@/lib/site": { siteConfig } });
  assert.ok(whatsappUrl("Test") !== null, "configured WhatsApp number must be valid");
});
