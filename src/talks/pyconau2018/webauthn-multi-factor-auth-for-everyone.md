---
title: "WebAuthn: Multi-factor Auth For Everyone"
speaker: benno-rice
con-link: https://2018.pycon-au.org/talks/44258-webauthn-multifactor-auth-for-everyone/
youtube: "03sAfmCDjFg"

excerpt: "Everybody knows that passwords suck. Implementing better things, like multi-factor authentication, can be really tricky and require a bunch of specialist bits though.

Or does it?

The new WebAuthn standard makes it dead simple to add multi-factor authentication to your web app. Let’s find out how!"
---

The WebAuthn standard, now at Candidate Review stage at W3C, allows for great ease of accessing hardware security tokens, for example Yubikeys, from browsers. It also specifies everything that’s needed in order to implement authentication workflows using these tokens.

This presentation will cover a brief history of multi-factor authentication and the issues it’s had in adoption, then go into an overview of the WebAuthn spec and how it works and finally demonstrate how to integrate it into Django- and Flask-based web apps.