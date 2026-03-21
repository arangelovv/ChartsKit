import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/lib/index.js",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "chartkit.js",
    library: 'chartskit',
    libraryTarget: 'umd',
  },
};