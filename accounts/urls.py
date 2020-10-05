from django.urls import path
from .views import SignupView, GetUserView

urlpatterns = [
    path('signup/', SignupView.as_view()),
    path('data/', GetUserView.as_view()),
]
