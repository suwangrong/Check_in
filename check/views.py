# coding=utf-8
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from . import models
from django import forms


class UserForm(forms.Form):
    username = forms.CharField(label='用户名', max_length=100)
    password = forms.CharField(label='密码', widget=forms.PasswordInput())


def login_page(request):
    if request.method == 'POST':
        uf = UserForm(request.POST)
        if uf.is_valid():
            username = uf.cleaned_data['username']
            password = uf.cleaned_data['password']
            user = User.objects.filter(username__exact=username, password__exact=password)
            if user:
                return HttpResponse("1")
            else:
                return HttpResponse("2")
    else:
        uf = UserForm()
    return render(request, 'check/login.html', {'form': uf})


def login_action(requestuest):
    name = requestuest.POST.get('name', 'USER')
    password = requestuest.POST.get('password', 'PWD')
    models.user.objects.create(name='name', password='password')  # create a class
    user_info = models.user.objects.all()  # get all users' information
    return render(requestuest, 'check/login.html', {'user_info': user_info})  # jump to a new page, remain to design


def mainpage(requestuest):
    return render(requestuest, 'check/mainpage.html')
