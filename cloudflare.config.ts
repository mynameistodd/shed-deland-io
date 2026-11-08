import { defineConfig } from "cf/config";

export default defineConfig({
  accountId: "5fdb51f6fe2c2eedabcfd946915edd3f",
  worker: {
    name: "shed-deland-io",
    compatibilityDate: "2026-10-01",
    domains: [
      "shed.deland.io"
    ],
    observability: {
      enabled: true
    }
  }
});
