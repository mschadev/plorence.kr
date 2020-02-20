docker rmi -f $(docker images -f "dangling=true" -q)
#캐시 이미지 삭제
docker build --force-rm=false --no-cache=false --rm=true -t plorence-kr:latest .
#Dockerfile를 이용해 빌드
docker save -o plorence-kr.img plorence-kr:latest
#생성된 이미지를 .img 파일로 저장
docker image rm -f plorence-kr:latest
#도커에 이미지 삭제
docker rmi $(docker images -f "dangling=true" -q)
#캐시 이미지 삭제