---
title: ' Using the GIT CLI '
subtitle: '#git, #bash, #tutorial'
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
thumb_img_path: images/magical-squid.webp
content_img_path: images/polite-aspen.webp
---
In this post I will be explaining how to use the GIT **CLI(Command Line Interface)**. This will require GIT to be installed on your device if you don't have it then install it by following the steps mentioned in the [previous post](https://dev.to/aadityasivas/installing-git-on-your-system-52on).

## Before we start

If you want to check if GIT is installed run this command

    git --version

And if it prints out the version number you are good to go.

## Making a GIT repository with the CLI

To make a GIT repository with the CLI run this

    git init

This will initialize an empty repository

## Moving files to the staging area with GIT

To add a single file to the staging area run this

    git add <FILE TO ADD>

To add all the changed files to the staging area run this

    git add .

## Committing changed files

To commit the files in the staging area to the main repository we need to run.

    git commit -m "<insert commit message here>"

## Viewing all commits in a repository

    git log

This command will log all the commits made to a repository

## Reverting a commit

In order to revert a commit you will need to know the commit id it can be known by running git log

    git revert <commit id>

## Making a new branch

A branch is a copy of the main files it lets you test out features or something else which does not conflict with the main branch so to make a new branch you need to run

    git checkout -b your-branch-name

## Viewing the list of branches

To see the list of branches run this

    git branch -a

## Switching branches

This command will switch the branch

    git checkout -b your-branch-name

## Merging branches with the main branch

To merge a branch with the main branch run this

    git merge your-branch-name

### There are many more commands there but for now I am ending the post here bye and have a nice day!
