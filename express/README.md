To perform the test first start the app:
```shell
$ node app.js
```
Then execute the k6 against it (in my case, using docker):
```shell
$ docker run -i loadimpact/k6 run - <load-test.js
```

For more detail, check [this link](https://levelup.gitconnected.com/load-test-your-nodejs-app-using-k6-f7b2bd8fa5cf).
