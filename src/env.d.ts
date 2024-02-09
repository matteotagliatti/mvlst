/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    pb: any; // doens't work with a standard import of a custom type. This is the right solution
  }
}
