---
created: 2022-01-25T20:03:45 (UTC -08:00)
tags: []
source: https://jigarius.com/blog/multiple-git-remote-repositories
author: 
---

# Working with Git remotes and pushing to multiple Git repositories | Jigarius.com

> ## Excerpt
> Learn to work with multiple Git repositories – pull from and push to multiple git remotes with easy commands.

---
As a programmer, one of the best things that has happened to me is Git! If you don’t know what [Git](https://en.wikipedia.org/wiki/Git) is, you should probably read a paragraph about it before you continue. Git allows you to synchronize the code on your computer with code on a remote repo shared with other developers – usually team members. In this tutorial we will learn to configure one or more Git remotes and pushing code to them with a single command.

## Two Minute Version

-   Define a git remote which will point to multiple git remotes.
    -   Say, we call it “all”: `git remote add all REMOTE-URL-1`.
-   Register 1st push URL: `git remote set-url --add --push all REMOTE-URL-1`.
-   Register 2nd push URL: `git remote set-url --add --push all REMOTE-URL-2`.
-   Push a branch to all the remotes with `git push all BRANCH` – replace `BRANCH` with a real branch name.
-   You cannot pull from multiple remotes, but you can fetch updates from multiple remotes with `git fetch --all`.

## Prerequisites

-   Working knowledge of Git – `git init`, `git pull`, `git commit` and `git push`.
-   Have write access to one or more remote Git repositories.

## Adding multiple remotes

When you do `git init`, you initialize a local Git repository. In general, the purpose is to synchronize this repo with a remote Git repo. To be able to synchronize code with a remote repo, you need to specify where the remote repo exists.

The first step is to add remote repos to your project.

```

git remote add REMOTE-ID REMOTE-URL
```

 By convention, the original / primary remote repo is called `origin`. Here’s a real example:

```

git remote add origin git@github.com:jigarius/toggl2redmine.git

git remote add upstream git@bitbucket.org:jigarius/toggl2redmine.git
```

In the above example, we add the remote repository of a project called [Toggl 2 Redmine](https://github.com/jigarius/toggl2redmine) found on GitHub. Use the above command to add one or more remote Git repos – make sure that each repo has its unique ID, i.e. `origin`, `upstream` in the above example.

### Configure primary remote

Though you can add multiple remotes, usually, each branch of your project can be configured to track a single remote branch. You can setup a branch to track a remote branch as follows:

```

git checkout BRANCH

git branch -u origin/BRANCH
```

Here, `BRANCH` is the name of the remote branch, which is usually the same as your local branch.

### Change remote URL

If you want to change the URL associated to a remote that you’ve already added, you can do it with the following command:

```

git remote set-url upstream git@foobar.com:jigarius/toggl2redmine.git
```

## List all remotes

To see a list of all remotes, simply use the following command:

```
$git remote -v
origin    git@github.com:jigarius/toggl2redmine.git (fetch)
origin    git@github.com:jigarius/toggl2redmine.git (push)
upstream    git@bitbucket.org:jigarius/toggl2redmine.git (fetch)
upstream    git@bitbucket.org:jigarius/toggl2redmine.git (push)
```

## Remove a remote

If you’ve added a remote which you no longer require, you can remove it as follows:

```

git remote remove upstream
```

## Push to multiple remotes

Now that you have a primary remote repo and other remotes as well, it’s time to configure the push. The objective is to _push to multiple Git remotes_ with a single `git push` command.

To do this, choose a remote ID which will refer to all the remotes. I usually call it `all`, but there are developers who prefer `origin`. The idea is to add all the remote repo URLs as  “push URLs” to this remote. Here’s what you do:

```

git remote add all git@github.com:jigarius/toggl2redmine.git

git remote set-url --add --push all git@github.com:jigarius/toggl2redmine.git

git remote set-url --add --push all git@bitbucket.org:jigarius/toggl2redmine.git
```

If you don’t want to create an extra remote named `all`, you can skip the first command and use the remote `origin` instead of `all` in the subsequent command(s).

Now, you can push to all remote repositories with a single command!

```

git push all BRANCH
```

## Pull from multiple remotes

It is not possible to `git pull` from multiple repos. However, you can `git fetch` from multiple repos with the following command:

```
git fetch --all
```

This will _fetch_ information from all remote repos. You can switch to the latest version of a branch on a particular remote with the command:

```

git checkout BRANCH

git reset --hard REMOTE-ID/BRANCH
```

## Conclusion

It is easy to synchronize code between multiple git repositories, especially, pushing to multiple remotes. This is helpful when you’re maintaining mirrors / copies of the same repository. All you need to do is set up multiple push URLs on a remote and then perform `git push` to that remote as you usually do.

## Next steps

-   Read the official [documentation about git remotes](https://git-scm.com/docs/git-remote).
-   Share any tips you might have for working with multiple git remotes.
