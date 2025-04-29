# 解决github更新资源429问题
# 2025-04-30
  
[rewrite]
^https:\/\/(raw|gist)\.githubusercontent\.com\/ header-replace Accept-Language en-us
^https:\/\/github\.com\/ header-replace Accept-Language en-us

[Mitm]
hostname = raw.githubusercontegithubnt.com,gist.githubusercontent.com,github.com
