---
title: ' Make and publish a NodeJS CLI in 10 minutes!! '
subtitle: '#node, #npm, #javascript'
date: '2021-01-30'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots:
    - all
  extra: []
  type: stackbit_page_meta
layout: post
thumb_img_path: images/wonderful-kangaroo.webp
content_img_path: images/superb-celery.webp
---
In this post you will make a NodeJS command line calculator and publish it to NPM all in just 10 minutes. So without any further ado lets start

## Step 1 - Setup

*       mkdir <insert project name>
        cd <insert project name>

*       npm init -y

    This command will create a package.json file this file will   contain all the details of our package

*   Create a file called cli.js in the root of our project this is the file in which we will write code

*       #!/usr/bin/env node

    This line will let our code know where to find NodeJS command

*       "bin": "cli.js"

    This line will let NPM know which file contains the code to execute when called

## Step 2 - Code

Open up the cli.js file and add the following code

    let args = process.argv.slice(2);
    console.log(eval(args[0]));

Now your cli.js file should look like this

    #!/usr/bin/env node
    let args = process.argv.slice(2);
    console.log(eval(args[0]));

Now let me explain the code line by line

1.  \#!/usr/bin/env node This line will let our code know where to find NodeJS command

2.  let args = process.argv.slice(2); this line will get the command line arguments given to the command line

3.  console.log(eval(args\[0])); Now this line will get the first argument and evaluate it and then print it out on the console.

## Step 3 - Testing it out locally

First run

    npm link

> This will simulate a global install
> Now open up your package.json and see the "name" value and run like this

    (Your package name in the package.json) 1+1

Now after testing it out run

    npm unlink

## Step 4 - Publishing!

Now before publishing to NPM you project needs to have a git repository so for that run this

    git init .
    git add .
    git commit -m "My awesome CLI is ready"

and after you have initialized a git repository you will need a NPM account for that sign up [here](https://www.npmjs.com/signup) after signing up run this

    npm login

after you enter your credentials you will be logged in
and finally run

    npm publish

Now your command line tool is ready! Congratulation 🎉

## Finishing up

If you are interested in seeing the whole code check them out on my GitHub
https://github.com/aadityasivaS/node-calc-cli

and the package is also on NPM
https://www.npmjs.com/package/@aadityasiva/n-c-c

> **Spoiler:** Yes I saved it for last it may or may not take more than 10 minutes. It took me 5 minutes to do all the steps

Bye 👋 and good day
