---
title: "Working with Git Branch"
date: 2020-10-09 17:46:54-0400
---

While working in software projects, we often need to try out different things
like adding new features, fixing bugs etc. For this type of work we should use
git branches. Git branches are also helpful when two or more developers are
working on the same project.

[ Git branch ](https://git-scm.com/docs/git-branch) is simply a copy of another
branch. Generally, the `main` branch contains the code that is good to go. When
we are doing anything new in our project like changing code, updating
documentation, we should create a separate branch. This ensures that the `main`
branch is not impacted if anything goes wrong. You can read about branch [ here ](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell).

In my [Blink](https://github.com/badalsarkar/Blink) project, I wanted to add two
new
features[1](https://github.com/badalsarkar/Blink/issues/4)[2](https://github.com/badalsarkar/Blink/issues/5).
This is the perfect case for using `git branch`. Here, I will explain how I did
it.

### Filling issue in GitHub

As I am hosting my remote repository in GitHub, I wanted to create an issue for
each feature in my repository. This will document the progress of my project. I
created the following issues.

<img src="../asset/images/githubissue.png" alt="" width="400"
style="display:block; margin-left:auto;margin-right:auto">

### Creating git branches

Now, to separate my work on these two features, I created two git branches with
the name of the GitHub issue number. I put my branch name same as GitHub issue
number because this will help me to trace back the work in future. So, I put the
following commands-

```bash
git branch issue-4
git branch issue-5
```

Note that I have two branches created from the `main` branch. This means that I can
work on two issues in parallel. This is another benefit for branching.

Now I am ready to write some code.

### Issue 4: Environment variable to control color output

[Blink](https://github.com/badalsarkar/Blink) currently output the processing
result using color.

<img src="../asset/images/blinkoutput.png" alt="" width="350" style="display:block; margin-left:auto;margin-right:auto">

I was required to implement a
[feature](https://github.com/Seneca-CDOT/topics-in-open-source-2020/wiki/lab-3#step-1-pick-your-features) to
use an environmental variable to control the color output.

`CLICOLOR=1` will print in color.
`CLICOLOR-0` will print without color.

I added a
[class](https://github.com/badalsarkar/Blink/blob/master/src/main/java/com/badalsarkar/Environment.java)
to encapsulate the processing of environment variables and modified the existing
codes. Here is the [commit](https://github.com/badalsarkar/Blink/commit/fa1734513f69df4875633223d52a503a3435e8b1). Now,
Blink reads the environment variable and prints accordingly.`CLICOLOR=0` gives
the following output.

<img src="../asset/images/blinkNewOutput.png" alt="" width="350" style="display:block; margin-left:auto;margin-right:auto">

Once I was done with my work, I committed the necessary changes.

<img src="../asset/images/issue4commit.png" alt="" width="400" style="display:block; margin-left:auto;margin-right:auto">

### Issue 5: Use a flag to determine which URL to print

The default behaviour of [Blink](https://github.com/badalsarkar/Blink) is to
print all URLs with the respective status. This
[feature](https://github.com/badalsarkar/Blink/issues/5) will allow user to
specify the URLs to be printed.

`--all` or `-a` prints all URLs. This is the default behaviour if nothing is specified.

`--good` or `-g` prints URLs with status=GOOD.

`--bad` or `-b` prints URLs with status=BAD.

The process was the same as I have done for issue 4. I need to update my
[CliParser](https://github.com/badalsarkar/Blink/blob/master/src/main/java/com/badalsarkar/CliParser.java) class
to add these options. I also changed the organization of my code a bit to make
it more maintainable. Here is the
[commit](https://github.com/badalsarkar/Blink/commit/13a62303c881931b9616859948c59ab89f6b7408). The feature
was working properly and the command `java -jar blink.jar -bs file/path` will
only print bad URLs as shown below-

<img src="../asset/images/badURL.png" alt="" width="350" style="display:block; margin-left:auto;margin-right:auto">

### Time to merge

Now that both of my features were working properly, it was time to merge two
branches with the master branch. Note that all my work was done in separate
branches and `master` branch is not aware of those changes. To merge to `main`
branch we checkout to `main` branch with command `git checkout main`. Then we
merge a branch with command `git merge [branch to be merged]`

When I merged the branch `issue-4` it was a [fast-forward
merge](https://git-scm.com/docs/git-merge#_fast_forward_merge). In fast forward
merge the `HEAD` is updated to point at the named commit. When merging branch
`issue-5` I got an error due to [merge
conflict](https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging#_advanced_merging).

<img src="../asset/images/mergeConflict.png" alt="" width="450" style="display:block; margin-left:auto;margin-right:auto">

Merge conflict
arises when two or more files have changes in the same line. Read
[here](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts)
to see how to resolve merge conflicts. In a nutshell, we need to review our
changes and fix those ourselves. So, I reviewed all the conflicts and resolved
those and finally, merged `issue-5` branch to the `main` branch. Here is the
[commit](https://github.com/badalsarkar/Blink/commit/5953c58c28c40ffa6cdc0d70a6eb1de68dea20cf).

### Closing issues in GitHub

Finally, the `main` branch is up-to-date and both of the features are working as
expected. Now, I need to close
[issue-4](https://github.com/badalsarkar/Blink/issues/4) and
[issue-5](https://github.com/badalsarkar/Blink/issues/5) in GitHub. In closing
comments, I just reference the commit which closed the issue. Again, this will
help in tracing the work in future.

### My learning

I learned a lot in terms of working with Git and GitHub. Branching, parallel
development, merging, resolving merge conflicts were all new to me. I now have
the confidence to work more efficient with Git.
