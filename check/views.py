from django.shortcuts import render
from . import models


def login_page(request):
    return render(request, 'check/login.html')


def login_action(request):
    name = request.POST.get('name', 'USER')
    password = request.POST.get('password', 'PWD')
    models.user.objects.create(name='name', password='password')  # create a class
    user_info = models.user.objects.all()  # get all users' information
    return render(request, 'check/login.html', {'user_info': user_info})  # jump to a new page, remain to design


def mainpage(request):
    return render(request, 'check/mainpage.html')
