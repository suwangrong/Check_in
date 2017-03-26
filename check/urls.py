from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^login/$', views.login_page),
    url(r'^mainpage/$', views.mainpage),
]
