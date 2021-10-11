# idea_backend

1	회원가입	POST	/signup	"{
userId: userId,
pw: pw,
pwCheck: pwCheck,
nickname: nickname,
}"	"{
UserIdExist: userId,
nicknameExist: nickname
}"	"userId: 이메일 형식, 중복 제외
pw: 4자 이상
nickname: 중복 제외"	회원가입시 프로필 사진 등록
2	로그인	POST	/login	"{
userId: userId,
pw: pw,
}"			
3	게시글 조회	GET	/post		"{
postId: postId,
title: title,
spec: spec
image: image,
nickname: nickname,
place: place,
}"		포스팅 시간
4	게시글 작성	POST	/post	"{
title: title,
spec: spec,
nickname: nickname,
image: image,
desc: desc,
place: place
}"			
5	게시글 수정	UPDATE	/post	"{
title: title,
spec: spec,
image: image,
desc: desc,
place: place
}"			
6	게시글 삭제	DELETE	/post	"{
userId: userId,
postId: postId,
}"			
7	상세페이지 조회	GET	/post/:detail		"{
postId: postId,
title: title,
spec: spec,
nickname: nickname,
image: image,
desc: desc,
place: place
}"		
8	댓글 조회	GET	/comment/:detail		"{
nickname: nickname,
comment: comment,
commentTime: commentTime
}"	commentTime 형식: YYYY-MM-DD hh:mm:ss	
9	댓글 작성	POST	/comment	"{
nickname: nickname,
comment: comment,
}"			
10	댓글 수정	UPDATE	/comment	"{
userId: userId,
comment: comment,
}"			
11	댓글 삭제	DELETE	/comment	"{
userId: userId,
commentId: commentId
}"			
12	북마크 조회	GET	/like		"{
userId: userId,
postId: postId,
likeId: likeId,
title: title,
spec: spec
image: image,
}"		
13	북마크 추가	POST	/like	"{
userId: userId,
postId: postId,
}"			
14	북마크 삭제	DELETE	/like	"{
userId: userId,
likeId: liketId,
}"			
