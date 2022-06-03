export default function sleep(ms) {
  new Promise((r) => setTimeout(r, ms));
}
