# idea_backend

|회원가입                    |POST  |/signup         |"{|
|------------------------|
|userId: userId,         |
|pw: pw,                 |
|pwCheck: pwCheck,       |
|nickname: nickname,     |
|}"                      |"{    |
|UserIdExist: userId,    |
|nicknameExist: nickname |
|}"                      |
|로그인                     |POST  |/login          |"{|
|userId: userId,         |
|pw: pw,                 |
|}"                      |      |
|게시글 조회                  |GET   |/post           |  |"{|
|postId: postId,         |
|title: title,           |
|spec: spec              |
|image: image,           |
|nickname: nickname,     |
|place: place,           |
|}"                      |
|게시글 작성                  |POST  |/post           |"{|
|title: title,           |
|spec: spec,             |
|nickname: nickname,     |
|image: image,           |
|desc: desc,             |
|place: place            |
|}"                      |      |
|게시글 수정                  |UPDATE|/post           |"{|
|title: title,           |
|spec: spec,             |
|image: image,           |
|desc: desc,             |
|place: place            |
|}"                      |      |
|게시글 삭제                  |DELETE|/post           |"{|
|userId: userId,         |
|postId: postId,         |
|}"                      |      |
|상세페이지 조회                |GET   |/post/:detail   |  |"{|
|postId: postId,         |
|title: title,           |
|spec: spec,             |
|nickname: nickname,     |
|image: image,           |
|desc: desc,             |
|place: place            |
|}"                      |
|댓글 조회                   |GET   |/comment/:detail|  |"{|
|nickname: nickname,     |
|comment: comment,       |
|commentTime: commentTime|
|}"                      |
|댓글 작성                   |POST  |/comment        |"{|
|nickname: nickname,     |
|comment: comment,       |
|}"                      |      |
|댓글 수정                   |UPDATE|/comment        |"{|
|userId: userId,         |
|comment: comment,       |
|}"                      |      |
|댓글 삭제                   |DELETE|/comment        |"{|
|userId: userId,         |
|commentId: commentId    |
|}"                      |      |
|북마크 조회                  |GET   |/like           |  |"{|
|userId: userId,         |
|postId: postId,         |
|likeId: likeId,         |
|title: title,           |
|spec: spec              |
|image: image,           |
|}"                      |
|북마크 추가                  |POST  |/like           |"{|
|userId: userId,         |
|postId: postId,         |
|}"                      |      |
|북마크 삭제                  |DELETE|/like           |"{|
|userId: userId,         |
|likeId: liketId,        |
|}"                      |      |
|                        |
