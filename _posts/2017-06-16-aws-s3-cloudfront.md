---
layout: post
title:  "AWS + S3 + CloudFront"
date:   2017-06-16 16:46:53 EDT 2017
categories: aws devops
---

*This is a short series of posts that go into detail on a hosting "problem" and the steps I took to get there.*

## A Problem
For a recent project, there was a need to provide a few hosted files for a site ran by another company. As the files were small and security wasn't an issue there were a lot of options available.  

After many attempts to find the right person to work with to get the files on an already used machine, I went out and took care of it myself. I wanted to get out of my comfort zone a bit.  

## Goals
 * Low Cost
 * High Uptime
 * Non developers can access
 * Easy to update

Two solutions came to mind. [GitHub](www.github.com) and [Amazon Web Services](https://aws.amazon.com/)  

## GitHub
GitHub serves millions of requests each day, and is where many major companies store their code. They have amazing uptime and make it easy to store files. One problem was that GitHub serves files as `plain/text`. [Ryan Grove](http://wonko.com/) built [RawGit](https://rawgit.com/) that takes your GitHub file urls, updates headers depending on the file type, and provides two options for URLs.

  > RawGit serves raw files directly from GitHub with proper Content-Type headers.

Such a fantastic service that is FREE, efficient and simple. You simply provide your file url `blah blah.css` and it spits out a development URL [(https://rawgit.com/user/repo/branch/file
)](https://rawgit.com/user/repo/branch/file
) and a production URL [(https://cdn.rawgit.com/user/repo/tag/file
)](https://cdn.rawgit.com/user/repo/tag/file
) that is served via CDN. Perfect. Almost. As the service is free, RawGit clearly stated that problems could arise. Still, it's a great solution if you aren't going to be hurt by some potential downtime.

## Amazon Web Services (AWS)
AWS is a group of services that do everything from storage to continuous integration. I'd be lying to you if I said I knew what every service did. What I do know is that they have amazing uptime, low cost solutions, and a gigantic user base. I use two of their services each day: *S3* and *CloudFront*. S3 is the main file storage container for Amazon. Many frameworks have guides that make it easy to incorporate into your larger projects. CloudFront is Amazon's CDN service.

## Next Steps
Now that I've figured the solution I've got a few more steps until I'm ready to host. There will be a short post for each step and one final one to close this out.

1. S3
2. CloudFront
3. AWS CLI
4. Tying it All Together

Thanks for reading.

Troy
