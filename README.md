# protractor-experimental


##**Installation:**

Copy repository:

```sh
$ git clone https://github.com/oliverfrost/protractor-experimental
```

Switch to the directory:

```sh
$ cd protractor-experimental
```

Install project dependencies:

```sh
$ npm install
```

Install protractor globally:

```sh
$ npm install -g protractor
```

Update web driver version:

```sh
$ webdriver-manager update
```

Launch web driver server:

```sh
$ webdriver-manager start
```

Run tests:

```sh
$ protractor conf.js
```


Or to run a test suite type:

```sh
$ protractor conf.js --suite suite_name
```

Suites names can be found in [conf.js][confjs] file under 'suites' section.



## Allure Report

1. Follow [this link][allure-cli] to find out how to install Allure Command Line tool.
2. Run any test.
3. Type:

```sh
$ allure generate directory-with-results/
```

And when report is generate successfully do:

```sh
$ allure report open
```



[allure-cli]: <http://wiki.qatools.ru/display/AL/Allure+Commandline>
[confjs]: <https://github.com/oliverfrost/protractor-experimental/blob/master/conf.js>



