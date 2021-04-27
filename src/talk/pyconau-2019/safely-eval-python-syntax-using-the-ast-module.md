---
title: "Safely eval Python syntax using the AST module"
speaker: tim-savage
con_link: https://2019.pycon-au.org/talks/safely-eval-python-syntax-using-the-ast-module
youtube: "7e-2nUqnNqE"

excerpt: "Allow your users to supply queries or define rules using Python syntax and safely eval them. Processing an AST into safely executable code."
---

Allowing users of your application the ability to provide rules or queries using Python syntax allows, gives control back to end users or allows for new solutions to be implemented without a new release. However, directly executing arbitrary Python syntax is a major security risk.

This talk dives into how to do this safely, along with the pitfalls/risks that must be avoided to ensure your application security.

Main points:

- Processing and parsing Python syntax using the ast module
- Interpreting the generated syntax tree
- Generating executable code that can be safely executed with eval
- Why this is necessary or why eval/compile are not safe