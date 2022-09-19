/// <reference types="vitest" />

import { resolve } from "path"

import { defineConfig } from "vite"

import vue from "@vitejs/plugin-vue"
import typescript2 from "rollup-plugin-typescript2"
import dts from "vite-plugin-dts"
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    dts({
      insertTypesEntry: true,
      exclude:[
        "__test__/**/*.ts"
      ]
    }),
    copy({
      targets:[
        { src: 'src/assets/scss/*', dest: 'dist/scss' }
      ],
      hook: 'writeBundle'
    }),
    typescript2({
      check: false,
      include: ["src/components/**/*.vue"],
      tsconfigOverride: {
        compilerOptions: {
          sourceMap: true,
          declaration: true,
          declarationMap: true,
        },
        exclude: [
          "vite.config.ts",
          "src/main.ts",
          "src/router.ts",
          "src/views/*.vue",
          "src/plugins/*.ts",
          "__test_/**/*.ts",
        ],
      },
    })
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(resolve(__dirname), "src"),
      },
      {
        find: "~bootstrap",
        replacement: "bootstrap",
      },
    ]
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/plugin.ts",
      formats: ["es", "cjs"],
      name: "npmCommonsPoliglota",
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  }
})
