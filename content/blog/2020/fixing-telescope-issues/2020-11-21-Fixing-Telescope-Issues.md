---
title:  "Fixing Issue in Telescope"
date:  2020-11-21 10:29:46-0500 
category: opensource 
---
I have worked on this
[issue](https://github.com/Seneca-CDOT/telescope/issues/1267) in [Telescope](https://github.com/Seneca-CDOT/telescope)
project. Telescope uses [TravisCI](https://travis-ci.org/) for its Continuous
Integration. It also uses [CircleCI](https://circleci.com/) and
[Github Actions](https://github.com/features/actions).
Telescope was having some issues with TravisCI and wanted to remove it.

The task was not very complicated. TravisCI is configured with a `travis.yml`
file. All I needed to do was to remove this file and any other references to
TravisCI within the project. There were not too many references. Once everything
is cleaned up, I opened a
[PR](https://github.com/Seneca-CDOT/telescope/pull/1317)
and it was soon merged into the project.

I learned about TravisCI doing this PR.
