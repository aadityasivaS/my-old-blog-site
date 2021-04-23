---
title: ' Protecting API keys in Flutter '
subtitle: '#flutter, #security, #inthirtyseconds'
date: '2021-04-22'
thumb_img_alt: lorem-ipsum
content_img_alt: lorem-ipsum
excerpt: lorem-ipsum
seo:
  title: ''
  description: ''
  robots:
    - all
  extra: []
  type: stackbit_page_meta
layout: post
thumb_img_path: images/royal-parsley.webp
content_img_path: images/caring-sparrow.webp
---
It is always a fear that one day you might end up leaking your API key in a public git repository. In flutter is there are many ways of hiding the API key some are not working and some don't work properly in this article I will be showing you one way to work with API keys in flutter.

## Let's see how we can do it

We will be using [this package](https://pub.dev/packages/flutter_dotenv)
If you are using it in a project **with null safety**

    dependencies:
      flutter_dotenv: ^4.0.0-nullsafety.0

If you are using it in a project **without null safety**

    dependencies:
      flutter_dotenv: ^3.1.0

then create a file in the root directory called .env

> For those of you who don't know **what a .env file is** it is basically a file in which we store secret variables.

In the .env file you can add your secret API keys in this format

    SUPER_SECRET_API_KEY=This is a super secret API key 
    THIS_CAN_BE_CALLED_ANYTHING=This here can be anything like ut4ihyeFn49

> **Important**: Never commit these .env files in your version control.
> If you are using git version control system add the .env file to .gitignore

After making this .env file add it as an asset in the pubspec.yaml

    assets:
      - .env

Then run

    flutter pub get

In your main.dart file load the .env file

    import 'package:flutter_dotenv/flutter_dotenv.dart' as DotEnv;

    Future main() async {
      await DotEnv.load(fileName: ".env");
      //...runapp
    }

Now in your code you can load the variables from the .env file anywhere like this.

    import 'package:flutter_dotenv/flutter_dotenv.dart';
    env['SUPER_SECRET_API_KEY'];

> That's it, thanks for reading hope this short post helps!
