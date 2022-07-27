import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { babel } from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'out/cjs/paragon.min.js',
            format: 'cjs',
            sourcemap: true,
            name: 'Paragon'
        },
        {
            file: 'out/umd/paragon.min.js',
            format: 'umd',
            sourcemap: true,
            name: 'Paragon'
        },
        { file: "out/index.d.ts", format: "es" }
    ],
    plugins: [
        external({
          packageJsonPath: './package.json'
        }),
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        image(),
        json(),
        resolve({
          extensions: ['.js', '.jsx'],
        }),
        babel({ 
          exclude: 'node_modules/**',
          presets: ['@babel/env', '@babel/preset-react']
        }),
        commonjs(),
        postcss(),
        terser()
    ],
    external: ['react', 'react-dom']
}