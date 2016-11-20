# My portfolio
Just my portfolio. If you are interested in even just a little bit, please visit and see my productions. I am looking forward to you comming:smile:

[noraworld.jp](https://noraworld.jp)

## Screenshot
![screenshot](https://github.com/noraworld/noraworld.jp/blob/master/screenshot.png)

Would you like to see previous version? - See [v0.1](https://github.com/noraworld/noraworld.jp/releases/tag/v0.1)

## Usage
This project uses gulp. If you have not installed gulp on global environment yet, you should install it first.

```bash
# if you have not installed gulp on global environment yet
$ npm install gulp -g
```

Execute the following commands.

```bash
$ npm install
$ gulp
```

Then gulp tasks run and watch some files to transpile and minify etc. until pressing Ctrl-C.

## Environment

* Node.js 6.7.0
* npm 3.10.3

`server.js` requires some internal configs. Create `config.js` file under `app/` directory after cloning this repository. Then append the configs below.

```js
exports.port = ANY_PORT_NUMBER_YOU_LIKE;
```
