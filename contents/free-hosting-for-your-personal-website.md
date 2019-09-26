---
title: Free Hosting For Your Personal Website
url: free-hosting-for-your-personal-website
date: 17 Sep 2019
online: true
description: So you are about to embark on a whole new journey into the industry. You have finally graduated but you have no experience. You want to spice up your resume but can't afford to buy a hosting service and domain to host your personal website. How do you even show your capabilities? Github has the answer.
img: /images/portfolio.svg
---

If you have been working with multiple projects with different developers, you have probably heard of Github. If you are new to development and writing codes, you might want to learn more about [Git](https://git-scm.com) and [Github](https://github.com) first.


A piece of quick information about Github but you can totally skip this part.

<div class="well">

Github is basically a web GUI version of Git and a whole lot more. You can create your projects there and track changes done by other teams or even yourself. Git can even be used if you're a solo developer. You can create small updates or features by creating a new 'branch' from the main project.

With this workflow, the master/main 'branch' won't be affected by any changes made by the newly created 'branch'. This is ideal as any code changes are isolated on this new branch and won't affect the master 'branch'. Once you are completely satisfied with the changes, you can simply merge the create branch to the master branch and you are all set! I highly recommend learning about git if you have no experience with it.
</div>

## Github Pages
---

![Github Pages](https://i.ytimg.com/vi/2MsN8gpT6jY/maxresdefault.jpg)


The feature in Github we are going to look at is Github Pages. Github Pages allows you to host your projects under your username (yourusername.github.io). You can only host static websites, meaning projects written in server languages such as PHP, Java or Ruby won't work.

Your repository (folder project) on Github __needs__ to be public as well, meaning other developers/users will be able to see your project and codes. In our situation, it is ideal that your source code is public so your potential employer can see what you can do and what you are capable of.

> You should never upload any important or confidential information.


## Create A Github Account
---

Create an account with [Github](https://github.com) if you don't have one. Choose the free plan and get your email verified!

![Github Page](/images/github-signup.jpeg)



## Create A New Repository
---

Once you have set up your account, go ahead and [Create a new repository](https://github.com/new). The repository name should be :

__yourusername.github.io__

where __yourusername__ is the user name you have created for Github. __yourusername__ must match the user name you have created with Github or else, it won't work. Also, make sure it is set to public. Github won't be able to publish your site if it is set to private.

![Github New Repo](/images/github-new-repo.jpg)


## Create A New File (index.html)
---

Go to your repository and click on _create new file_.

![Github New File](/images/create-new-file.jpg)


Name the file __index.html__ and add a `<h2>` tag with __Hello World__ and _commit new file_.

![Github Hello World](/images/hello-world.jpg)


## Test Your New Site!
---

Go to your browser and enter __yourusername.github.io__. You should see the site live now!

![Github Page Hello World](/images/test-website.jpg)

If you still can't see your site, fret not. We may need to publish the site to Github Pages. On your repository, go to settings.

![Github Settings](/images/settings.jpg)

Under __Github Pages__ , __source__, use the dropdown and select __master__ as the source.

![Source](/images/source.jpg)



You are all set to build your new site! This is the most basic way to get your site up and running. You can upload your static files here and start working on it! However, we did not fully utilise the capabilities of Git in this example like cloning the repository to your local machine. You can even push your changes up to the repository as well using terminal or Github Desktop without the need to upload the files again and again. 
