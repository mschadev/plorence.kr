docker rmi -f $(docker images -f "dangling=true" -q)
#ĳ�� �̹��� ����
docker build --force-rm=false --no-cache=false --rm=true -t plorence-kr:latest .
#Dockerfile�� �̿��� ����
docker save -o plorence-kr.img plorence-kr:latest
#������ �̹����� .img ���Ϸ� ����
docker image rm -f plorence-kr:latest
#��Ŀ�� �̹��� ����
docker rmi $(docker images -f "dangling=true" -q)
#ĳ�� �̹��� ����