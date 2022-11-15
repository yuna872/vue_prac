
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSerializer


@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    username = request.data.get('username')
    password = request.data.get('password')
    password2 = request.data.get('password2')
    print(username, password, password2)

    # 비밀번호 일치 여부 확인
    if password != password2:
        return Response({'error': '비밀번호가 일치하지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # 유효성 검사
    if serializer.is_valid(raise_exception=True):
        # print(serializer.data, '🐱‍🐉')
        user = serializer.save()
        
        # 비밀번호 해싱
        user.set_password(password)
        user.save()
        return Response(status=status.HTTP_201_CREATED)
    