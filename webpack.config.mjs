import path from 'path';
import { fileURLToPath } from 'url';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'index'),
  output: {
    path: path.resolve(__dirname, 'dist', 'server'),
    filename: 'index.js',
    clean: true,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'node',
  externals: { 'bufferutil': 'bufferutil', 'utf-8-validate': 'utf-8-validate' },
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['ts'],
      fix: false,
    }),
  ],
};
