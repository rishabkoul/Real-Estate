from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import get_user_model
User = get_user_model()


class SignupView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data

        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email already exist'})
            else:
                if len(password) < 6:
                    return Response({'error': 'Password must be atleast 6 characters'})
                else:
                    user = User.objects.create_user(
                        email=email, password=password, name=name)
                    user.save()
                    return Response({'success': 'User created successfully'})
        else:
            return Response({'error': 'Passwords do not match'})


class GetUserView(APIView):
    def get(self, request, format=None):
        user_profile = User.objects.get(id=self.request.user.id)

        if(user_profile):
            return Response({'name': user_profile.name, 'email': user_profile.email, 'password': user_profile.password})
        else:
            return({'error': 'Wrong token'})
