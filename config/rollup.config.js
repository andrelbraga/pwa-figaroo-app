const html = require('@rollup/plugin-html');
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import commonjs from 'rollup-plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import injectNodeEnv from 'rollup-plugin-inject-process-env'

const paths = require('./paths')
export default env => {
    console.log(env)
    const pathEnv = env.environmet === "development" ? paths.pathEnvDev : paths.pathEnv
    require('dotenv').config({ path: pathEnv })

    return {
        input: paths.pathIndexTs,
        output: {
            file: 'build/bundle.js',
		    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		    sourcemap: true
        },
        plugins: [
            resolve({
                jsnext: true, 
                main: true
            }),
            commonjs({
                include: ["node_modules/**"],
            }),
            typescript(),
            image(),
            postcss({
                inject: true,
                minimize: true,
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            replace({
                process: JSON.stringify({
                    env: {
                        PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
                        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                    }
                }) 
            }),
            injectNodeEnv({
                PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            }),
            html({
                input: '<html><body><div id="root"></div><script src="bundle.js"></script></body></html>',
                injectServiceWorker: true,
                serviceWorkerPath: 'build/service-worker.js',
            }),
            builtins(),
            globals() 
        ]
    }
}