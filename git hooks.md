* I'm testing creating a post-commit hook that copies over new notes to public repo and pushes them to [[gitlab]]
	* OMG it worked heh here it is `cat .git/hooks/post-commit`

```
#!/bin/sh
cd ../yolo-pub
rsync ../yolo/*.md .
git add .
git commit -m post-commit-hook
git push
```

## Backlinks

> - [](2021-01-04.md)
>   - TIL [[git]] comes with examples for [[git hooks]] in `.git/hooks` for every new repo you initialize

_Backlinks last generated 2022-01-28 07:55:20_
