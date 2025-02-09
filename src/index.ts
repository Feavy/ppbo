import { Elysia } from "elysia";

const app = new Elysia().get("/api", () => "Hello Elysia").listen(8181);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
