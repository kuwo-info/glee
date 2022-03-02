# Git GitHub 操作

Gitのインストール

http://git-scm.com/download/win

Visual Studio Codeのインストール

https://code.visualstudio.com/

GitHubにログイン

https://github.com/login

personal access tokenはsettings→deveropper settings→から．repoにチェックを入れてgenerate



## clone

```
git clone https://github.com/kuwo-info/info-advertising.git
```

リポジトリのhttpsからとれる

info-advertisingがあるか確認

隠しフォルダ・拡張子を表示する

.gitあるかどうか確認

```
cd info-advertising
```

でディレクトリ（フォルダ）を移動する．



```
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://kuwo-info:アクセストークン@github.com/kuwo-info/info-advertising.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
```



## pull

git pull origin main

毎回ちゃんとpullしてから始めないとpushしたとき怒られる

強制pushはgit push -f origin master
