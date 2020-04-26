# egg-static-plus

Static server plugin for egg, base on  [egg-static](https://github.com/eggjs/egg-static).

## Install

```sh
$ npm i egg-static-plus
```

## Configuration

egg-static-plus support all configurations in [koa-static-cache](https://github.com/koajs/static-cache). and with default configurations below:

- prefix: `'/public/'`
- dir: `path.join(appInfo.baseDir, 'app/public')`
- dynamic: `true`
- preload: `false`
- maxAge: `31536000` in prod env, `0` in other envs
- buffer: `true` in prod env, `false` in other envs

`egg-static-plus` provides three more option:

- maxFiles: the maximum value of cache items, only effective when dynamic is true, default is `1000`.
- staticFileFilter: `null`, path filter function  **[New!]**
- pathRewrite: `null`, path rewrite function  **[New!]**
