---
layout: post
title:  "\"This GAN Page Does Not Exist\" Making-of - Introduction"
date:   2019-05-30 15:52:00 +0200
comments: true
tags: [machine-learning, gan, stylegan, neural-networks, this-gan-page-does-not-exist]
---
I have recently made [This GAN Page Does Not Exist](https://this-gan-page-does-not-exist.herokuapp.com/), a joke-ish website about machine learning, made in reference to various ["This X Does Not Exist"](https://github.com/paubric/thisrepositorydoesnotexist) web pages that have been appearing recently, starting with [ThisPersonDoesNotExist.com](http://www.thispersondoesnotexist.com/).

As an enthusiast about machine learning, I made this project as a way to dip my toes in the field of [artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network), specifically Generative Adversarial Network or "GAN".

I learned a lot while building this fun project, and on this blog I will share how I made it.

This article is an introduction where I'll explain the backstory of the project and how I came to consider it.

## In The Beginning...

Artificial neural networks have been a subject of research in machine learning over the past decade. In 2014, Ian Goodfellow *et al.* published [a paper](https://arxiv.org/abs/1406.2661) about Generative Adversarial Networks (GAN), a type of neural network that is made of two sub-networks, a "generator" that generates artificial content, and a "discriminator" that determines if input content is real or fake. During training, these networks concur with each other, hence the "adversarial", with the end goal of generating realistic content. You can find more about this architecture in the paper, or in the [Wikipedia article](https://en.wikipedia.org/wiki/Generative_adversarial_network).

In late 2018, scientists working for NVIDIA unveiled StyleGAN, a GAN that seemingly achieved what has long been a challenging task in the field: being able to generate realistic, high-definition pictures of peoples' faces from scratch.

<figure>
    <img src="/assets/images/stylegan-teaser.png" alt="StyleGAN Faces" />
    <figcaption>Some pictures generated by StyleGAN (picture courtesy of NVIDIA)</figcaption>
</figure>

The thing about StyleGAN is that it is generic; other than generating human faces, it can be trained to produce images of any kind that you feed it, such as cats or bedrooms. The generic nature of StyleGAN, and the quality of its results for many different applications, has led to it being considered a breakthrough in its field. Another interesting feature of StyleGAN is that certain properties of the resulting picture can be "tweaked" independently, as in the image above where you can see faces that are similar but with different color of hair or skin.

The good news is that StyleGAN is [open-source](https://github.com/NVlabs/stylegan), and therefore can be used by anyone -- provided they have the required technical skill and access to enough computing power.

## The Following

Thus, a few months later, computer engineer Phillip Wang made a website, the aforementioned ThisPersonDoesNotExist.com, using this technology. Every time you refresh the page, a new face appears; the website's name comes from the fact that the pictures do not represent actual people, they were entirely fabricated by a computer. The website was discussed about in the press, bringing further awareness of GAN technology, and StyleGAN in particular, to the general public.

It was then followed by others of the same kind, such as [This Rental Does Not Exist](https://thisrentaldoesnotexist.com/) (formerly *This AirBNB Does Not Exist*) by Christopher Schmidt, which uses both StyleGAN and artificial text generation to produce fake announcements for house rental, complete with artificial descriptions and "imaginary" pictures of rooms. Another website, [This Waifu Does Not Exist](https://www.thiswaifudoesnotexist.net/) by Gwern Branwen, is dedicated to computer generation of anime-style pictures of female cartoon characters.

Plenty of other computer-generated galleries can be found on the Internet, as shown in [this list](https://github.com/paubric/thisrepositorydoesnotexist) compiled by Paul Bricman.

## The Idea
*This Person Does Not Exist*, *This Waifu Does Not Exist*, *This Resume Does Not Exist*... All these websites were showing computer-generated content that came from scratch. Some facetious idea popped up in my head: "What if I go [meta](https://en.wiktionary.org/wiki/meta#Adjective) and do a Web page generating random Web pages?" And so came the idea for *This GAN Page Does Not Exist*, for lack of a more expressive name.

The idea was to make a Web page where, every time the user hits refresh, she is greeted with a new page with a random title: *This Hummingbird Does Not Exist*, *This Mailbox Does Not Exist*, *This Husky Does Not Exist*, *This Bagel Does Not Exist*... so on, and displaying an appropriate, computer-generated picture beneath.

That's for the introduction. In the next article, I will explain how I started my GAN journey to implement this idea. Stay tuned!
