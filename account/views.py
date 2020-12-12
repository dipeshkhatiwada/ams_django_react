from django.contrib import messages
from django.contrib.auth.decorators import permission_required,login_required
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash
from django.contrib.auth.forms import PasswordChangeForm
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, redirect
from django.views import View

from ams_django_react.ams_django_react.decorators import admin_only

# Create your views here.

class Login(View):
    template_name = 'backend/auth/login.html'

    def get(self, request):
        return render(request, self.template_name)

    def post(self, request, *arg, **kwargs):
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(email=email, password=password)
        if user is not None:
            if user.is_admin:
                login(request, user)
                return redirect('dashboard')
            else:
                messages.add_message(request, messages.ERROR,
                                     "Login credential doesn't match ! <br/> Please, Enter valid email and password . ")
                return redirect('login')
        else:
            messages.add_message(request, messages.ERROR,
                                 "Login credential doesn't match ! <br/> Please, Enter valid email and password .")
            return redirect('login')


class Signout(LoginRequiredMixin, View):
    login_url = '/backend/login'
    template_name = 'backend/dashboard.html'

    def get(self, request):
        logout(request)
        return redirect('login')


class Dashboard(LoginRequiredMixin, View):
    login_url = '/backend/login'
    template_name = 'backend/dashboard.html'

    @admin_only
    def get(self, request):
        return render(request, self.template_name)


class ChangePassword(LoginRequiredMixin, View):
    login_url = '/backend/login'
    template_name = 'backend/auth/change_password.html'

    def get(self, request):
        return render(request, self.template_name,{'form':PasswordChangeForm(request.user)})

    def post(self, request, *arg, **kwargs):
        form = PasswordChangeForm(request.user, request.POST)
        if request.POST.get('new_password1') == request.POST.get('new_password2'):
            if form.is_valid():
                user = form.save()
                update_session_auth_hash(request, user)  # Important!
                messages.add_message(request, messages.SUCCESS, "Your password was successfully updated!")
                return redirect('change_password')
            else:
                messages.add_message(request, messages.ERROR, "Error updating the password")
                return redirect('change_password')

        else:
            messages.add_message(request, messages.ERROR, "Password and Confirm doesn't match")
            return redirect('change_password')
