---
title: ' How GIT Works '
subtitle: '#git'
date: '2021-02-16'
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
thumb_img_path: images/mighty-lime.webp
---
In this post I will be covering how GIT works under the hood. So first lets take an example if you are making a project and you want to try some changes which is going to break the code and definitely you want to revert those changes so there are to ways to approach the problem one way is to just ctrl+z it but this solution is not good for many changed files and ctrl+z also has its limit. **A good solution** is to use GIT each GIT commit is a restore point and you can revert to that commit if you don't want to keep the changes but if you do want to keep the changes you made you can create a commit and GIT will keep all the changes you made and GIT will make you a restore point which can be used in the future.

## What is a GIT repository

A GIT repository is a hidden folder which contains all the commits or I like to call them restore points that can be used to revert to that commit.

## How GIT commit works

GIT commit has 3 stages they are :-

1.  **Working directory** :- The directory in which you will make changes.

2.  **Staging area** :- The directory in which you will select which files to keep and which files to discard.

3.  **Repository** :- The place where the commit is saved.

So I am ending this post here bye and have a nice day!
