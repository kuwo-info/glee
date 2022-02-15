# Git GitHub 操作

.gitのconfigを編集することで別アカウントからpush origin masterできる

```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://kuwo-info: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@github.com/kuwo-info/glee.git
	# https://github.com/kuwo-info/glee
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
```

personal access tokenはsettings→deveropper settings→から．repoにチェックを入れてgenerate

https://[ユーザー名]:[パスワード]@github.com/[ユーザー名]/[リポジトリ名].git

アクセストークンは2か所で使われると消えてしまう！

## clone

git clone https://github.com/kuwo-info/glee.git

リポジトリのhttpsからとれる

→git initでバージョン管理開始



## pull

git pull origin master



やりとりができているか？

OKです．
