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
