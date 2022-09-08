export const handler = {
  GET() {
    return Response.json({ message: "Hello, world!" });
  },
};

export const config = {
  rewrite: [
    "/sprog",
    "/språk"
  ]
}