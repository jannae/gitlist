# Github(ish) Theme for Gitlist

This theme is an updated version of the bootstrap3 theme to include gulp/bower integration and help encourage and automate front-end theme development. Bower integration also allows us to stop version controlling vendor files and bloating our repo. Gulp integration allows seamless code development workflow and testing without the hassle of regenerating sourcefiles constantly.

## Contributing

1. Clone this repository to your local machine.
```
git clone puppet.tss.its.nyu.edu:/opt/git/repos/gitlist
```

2. **Branch** your feature, bugfix, etc, off of master.
```
git checkout -b mynewfeature
```

3. Code, Test, Commit, Repeat.

4. Push **your new branch** back up to the remote. Do not merge to master yourself. Do not ever, ever push master. **Ever**.
```
git push origin mynewfeature
```

5. Email [security@nyu.edu](mailto:security@nyu.edu?subject=Githubish%20Theme%20Update%20pushed%20to%20puppet-git) to explain your changes, and request that they be released. This will also open a ticket for us to be sure we don't miss your proposed fix or improvement!


## How to work on this theme

* Everything outside of this theme directory is code for the Gitlist application itself. You should not need to make modifications outside of the `themes/githubish` directory if you are intending only to make front-end changes.
* If you do intend to make changes to the gitlist core, please do so on a separate branch.

### Getting Started

Prerequisites:

* [PHP](https://secure.php.net/)
* [Node.js](https://nodejs.org/en/)
* [NPM](https://www.npmjs.com/)
* [Gulp.js](http://gulpjs.com/)
* [Bower](http://bower.io/)

Prepping your machine:

1. `cd gitlist`

2. Get gitlist project dependencies:
```
curl -s http://getcomposer.org/installer | php
php composer.phar install
```

3. Get the project dependencies
```
npm install
```

4. Serve it via PHP (from the project root) for testing (Leave this open, or screen this, for continuous serving)
```
cd ../..
php -S localhost:8000
```

5. Get the theme dependencies
```
cd themes/githubish
bower install
```

6. Write some code, make some changes. When you're ready to test:
```
gulp
```

## TODOs

* Enable customization of header bar links
* Show repository owner on homepage
* Create an instruction page for using Git in TSS
* Display repo links/clone instructions from within repositories for easier cloning
