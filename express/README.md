To perform the test first start the app:
```shell
$ node app.js
```
Then execute the k6 against it (in my case, using docker):
```shell
$ docker run -i loadimpact/k6 run - <load-test.js
```
