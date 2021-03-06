---
title: "Deceptive Security using Python"
speaker: gajendra-deshpande
con_link: https://2020.pycon.org.au/program/GGGTVY/
youtube: "LYifJ0e1vbw"
cw: 

excerpt:
---

The talk begins with introduction to deception technology, deception types and methods, deceptive security life cycle. In this talk, we will demonstrate the following deception tools implemented using python language: • WebTrap (https://github.com/IllusiveNetworks-Labs/WebTrap): is designed to create deceptive webpages to deceive and redirect attackers away from real websites. The deceptive webpages are generated by cloning real websites, specifically their login pages. • DemonHunter (https://github.com/RevengeComing/DemonHunter): is a distributed low interaction honeypot with Agent/Master design Finally, we will conclude the talk with how built a deception tool and demonstrate its working. We will demonstrate how our count-based validation technique combined with the LSTM machine learning algorithm was used to protect from XPath injection attacks. We will also demonstrate how deceiving attackers can be an effective strategy in protecting resources.

Imagine you are passing through an unknown street at midnight and you find that some anti-social elements are following you. To save yourself from them you start running and look for a safe place to hide yourself. On the way, you will find a good person and request the person to help you. The person hides you in the secure place to protect you. When these anti-social elements visit a good person’s place and enquire about you, the good person misguides them and redirects them to some other place in order to protect you. This is exactly how deception works. In this analogy, YOU are the resources to be protected, anti-social elements are the hackers who want to gain access to the resources, and a good person is a deception technique that protects the resources from hackers by making them fall in the trap.

How we implemented deception tool in python using machine learning We designed a deception tool in python language using PyBRAIN package to model and mitigate XPath injection attacks for web services. It is known that XML can be used to store the data and this data can be queried using XPath query language. XPath as a query language, it has injection issues similar to SQL. To handle this issue, we proposed a solution, which uses count-based validation technique and Long Short-Term Memory (LSTM) modular neural networks to identify and classify atypical behavior in user input. Once the atypical user input is identified, the attacker is redirected to fake resources to protect the critical data. Our experiment resulted in over 90% accuracy in classification of input vectors.