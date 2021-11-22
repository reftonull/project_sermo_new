---
title: "This Site: The Technical Details, and a Tale of Feature Creep"
description: How this site came together! How very meta.
img: /images/projects/this-site/this-site.png
isFeatured: true
order: 1
---
## Part 1: The Inception
Every project starts off with hope. Lightning strikes out of the blue. This is what happened with this site: I'd wanted a personal site for a *while*, and I wanted to finally make one. I began design work. I had an idea of what I wanted it to look like, and I had a first draft fairly quickly. A concrete design is important: without one, I was going to be somewhat aimless, stuck in a constant cycle of change. I should have iterated on my design, and come up with something I was happy with before touching any code. Instead, I began coding immediately; besides, it was just me, I know what I like! That was my first error, and it led to many knock on effects that railroaded this project for many months. 

![An early draft of the site, looking a little different than it does now, with rounded image thumbnails](/images/projects/this-site/this-site-1.png)
<div class="caption">
    <em>An early draft of the site</em>
</div>


## Part 2: The Point of Inflection
So I'd decided to begin coding, but what was I supposed to use? There are many good options. The first option I considered was a service like [Squarespace]. It produces great looking sites that take little to no maintenance. That would have been easy, allowing me to focus on what to put on the site instead of the site itself. However, Squarespace's templates can sometimes be restrictive, and I wouldn't get exactly what I wanted. I then considered a service like [Wix]. It's powerful, and would allow me to produce exactly what I wanted, all without having to deal with code. *Butttt,* what's the fun in that? I *am* a programmer after all! I should just write everything on my own. But what would I write it using? A vanilla website using HTML, CS and a bit of Javascript would have worked just fine for the purpose, but again, *where is the fun in that?* I considered using [Anglular], a framework I was already very familiar with, having done some work with it in the past. It would work just fine. Instead, I decided to branch out into something completely new. I'd heard a lot of good things about [Vue.js], and decided to give it a go. On top of that, I decided I wanted it to be a static site, so I'd use [Nuxt.js], a framework built on top of Vue. 

This was also when I was trying to form a concrete idea of all the things I wanted to do with the site. At the time, I wanted to make this a blog, where I'd write my thoughts for both topics in computer science, and whatever was interesting to me at the time. At the time, I thought I was going to be writing a lot, and would have multiple different projects running simultaneously. Therefore, I wanted an elaborate tag system to make help me organize the blog. I also wanted to be able to simply write in [markdown] and have the site understand it and render it correctly as a blog. Therefore, I began looking into [nuxt/content], a (really great) CMS module for Nuxt. This, I thought, would fix all my problems, and make development a breeze. 

At this point in the story, I'd made most of the terrible decisions that would lead this project to be almost dropped. I was three layers removed from the vanilla website, and had already let feature creep happen. All without having written a single word. 

## Part 3: Making It Work
This all seems like awful feature creep; making this a project that would never reach completion. I was terrible at estimating how long things would take, and I thought that this would take a weekend at most (Here's the relevant [xkcd](https://imgs.xkcd.com/comics/estimating\_time.png)). Even still, at this point, I had the fire in me. I wanted to make this work, and I wanted it to be extensible, and easily maintainable. From the beginning, I wanted to be able to iterate on things quickly, so I added [Tailwind] to the project. I had no experience in it, but I could still make that work, right? Learning multiple new things at the same time is difficult and frustrating. However, I still find that working on a project is the best way to learn things, and, on the whole, things were going well. A short time later, much of the work on the site was complete. Most of my layout set up very quickly (thanks to Tailwind). Nuxt content had made it really easy to query a set of markdown files with a [MongoDB]-esque syntax. Even my elaborate tag setup was going well. I had set up pagination, and even had a table of contents system set up (which you can see on this article). I had an RSS feed set up, and perma-links were working. 

Even with all my awful feature creep, I had completed the work. It was fast, extensible and pretty. Now, all I had to do was write some things for it. 

![What this site looked like by this point, including the current design for thumbnails](/images/projects/this-site/this-site-2.png)
<div class="caption">
    <em>Where I was by this point; it looks largely the same now. The name "Project Sermo" was dropped</em>
</div>

And that is where I hit my snag: I didn't actually ever feel like writing. All this work had been predicated on me having the capacity to write a lot, and I didn't want write a word. And so, this project sat... for many months. 

## Part 4: The Decline
I kept putting the work off until later. Besides, there was so much time for inspiration to strike! Except, it never really did. I got busy with school, and didn't give this a second thought. 

I think the commit history on this project tell the most succinct story. 

![Commit history showing the first ten commits, all taking place in the first 11 days of the initial commit](/images/projects/this-site/commit-history-1.png)
<div class="caption">
    <em>First ten commits; note the dates</em>
</div>

Here, you can see the first ten commits. It wasn't quite the weekend project I'd planned, but 11 days was not bad for a project. I was happy with it, and am still a little surprised that I was able to iterate so quickly. However, that is, obviously, not the whole story. 

![The following commits, showing the time that had passed (almost 10 months later)](/images/projects/this-site/commit-history-2.png)
<div class="caption">
    <em>Following commits, including the optimistic "Finished everything." commit message</em>
</div>

The rest of the commits tell a much sadder tale. The decline was real, and this site would be in purgatory for almost a whole year. 

## Part 5: The Revival
After a whole lot me saying "I should really get that site up", I have finally gotten around to doing that. I have, now, limited my scope. I'm not quite in the position or the mood to write a lot; and that means that I've had to put the blog on pause, although I might at some point return to the idea. If I do, I have a good system to support it! I suppose, if you're reading this, I will have actually put this up somewhere, and that's progress. Progress I will be happy to make. Perfectionism has, for too long, been a dampener on progress. 

This site is made using the [Nuxt.js] framework, which is built on top of [Vue][Vue.js], using [Tailwind], and is run as a static site on [Github Pages][Pages]. You can find its source code [here](https://github.com/reftonull/reftonull.github.io). 

[Squarespace]: https://www.squarespace.com/
[Wix]: https://www.wix.com/
[Angular]: https://angular.io/
[Vue.js]: https://v3.vuejs.org/
[Nuxt.js]: https://nuxtjs.org/
[Tailwind]: https://tailwindcss.com/
[nuxt/content]: https://content.nuxtjs.org/
[MongoDB]: https://www.mongodb.com
[markdown]: https://daringfireball.net/projects/markdown/
[Pages]: https://pages.github.com/