import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

// Pengujian fungsi sum
test("Fungsi sum menambahkan dua angka dengan benar", () => {
  assert.strictEqual(sum(2, 3), 5, "sum(2, 3) seharusnya menghasilkan 5");
  assert.strictEqual(sum(-1, 1), 0, "sum(-1, 1) seharusnya menghasilkan 0");
  assert.strictEqual(sum(0, 0), 0, "sum(0, 0) seharusnya menghasilkan 0");
  assert.strictEqual(sum(10, -5), 5, "sum(10, -5) seharusnya menghasilkan 5");
});
