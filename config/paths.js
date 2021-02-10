const fs = require('fs');
const path = require('path');
/* directory local */
const appDirectory = fs.realpathSync(process.cwd());
/* resolve paths */
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);
/* extensions */
const moduleFileExtensions = [
    'web.mjs',
    'mjs',
    'web.js',
    'js',
    'web.ts',
    'ts',
    'web.tsx',
    'tsx',
    'json',
    'web.jsx',
    'jsx',
    'html',
    'png',
    'jpg',
    'jpeg',
];
/* resolve paths module */
const resolveModule = (resolveFn, filePath) => {
    const extension = moduleFileExtensions.find(extension =>
      fs.existsSync(resolveFn(`${filePath}.${extension}`))
    );
  
    if (extension) {
      return resolveFn(`${filePath}.${extension}`);
    }
  
    return resolveFn(`${filePath}.js`);
};
/* export */
module.exports = {
  pathSrc: resolvePath('src'),
  pathEnv: resolvePath('.env'),
  pathDist: resolvePath('dist'),
  pathBuild: resolvePath('build'),
  pathPublic: resolvePath('public'),
  pathConfig: resolvePath('config'),
  pathEnvDev: resolvePath('.env.local'),
  resolvePath: item => resolvePath(item),
  pathDistAssets: resolvePath('dist/assets'),
  pathBuildAssets: resolvePath('build/assets'),
  pathIndex: resolveModule(resolvePath, 'src/index'),
  resolveModule: item => resolveModule(resolvePath ,item),
  pathManifest: resolveModule(resolvePath, 'src/manifest'), 
  pathSw: resolveModule(resolvePath, 'src/service-worker'),
  pathIndexHtml: resolveModule(resolvePath, 'public/index'),
}

