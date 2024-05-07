# 이미지 처리

<br>

## 소개

고용량 이미지로 인한 로딩 속도 문제를 해결한 경험, 회고, 더 나은 해결책에 관련된 저장소 입니다.

블로그 글을 통해 해당 내용을 자세히 확인하실 수 있습니다.

[블로그 글 보러가기](https://woosungkim0123.github.io/2023_05_04_image_processing/)

<br>

## 발전 과정

프로젝트 발전 과정을 브랜치로 분리 했습니다. 링크를 통해 해당 브랜치로 바로 이동할 수 있습니다.

<br>

### 1. 이미지 처리 전

아무 처리도 하지 않은 상태의 프로젝트 입니다. 페이지 로딩 속도 문제가 발생하고 있습니다.

[이미지 처리 전 브랜치로 이동](https://github.com/woosungkim0123/image-processing-server/tree/before-image-processing) 

<br>

### 2. 하나의 서버에서 처리

하나의 서버에서 이미지를 저장하고, 압축, 사이즈 조절을 하는 프로젝트 입니다.

[하나의 서버에서 처리 브랜치로 이동](https://github.com/woosungkim0123/image-processing-server/tree/after-image-processing) 

<br>

### 3. S3 사용 - 1

백엔드 서버를 거쳐서 S3에 파일을 저장하는 프로젝트 입니다.

[S3 사용 - 1 브랜치로 이동](https://github.com/woosungkim0123/image-processing-server/tree/backend-to-s3-implementation) 

<br>

### 4. S3 사용 - 2

백엔드 서버를 거치지 않고 Pre Signed URL 방식을 사용해서 클라이언트에서 직접 S3에 파일을 저장하는 프로젝트 입니다.

[S3 사용 - 2 브랜치로 이동](https://github.com/woosungkim0123/image-processing-server/tree/pre_signed_url) 

<br>

### 4. Lambda 사용, CDN 적용

Lamda를 사용하여 이미지를 처리하고 CDN을 사용한 프로젝트

[Lambda 사용, CDN 적용 브랜치로 이동](https://github.com/woosungkim0123/image-processing-server/tree/use_lambda_and_cdn) 
