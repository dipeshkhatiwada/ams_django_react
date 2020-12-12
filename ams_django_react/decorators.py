from pprint import pprint

from django.http import HttpResponseRedirect
from django.urls import reverse
from django.core.exceptions import PermissionDenied

def admin_only(view_func):
    def wrap(request, *args, **kwargs):
        if request.request.user.is_admin == True:
            return view_func(request, *args, **kwargs)
        else:
            return HttpResponseRedirect(reverse('login'))
    return wrap

def company_only(view_func):
    def wrap(request, *args, **kwargs):
        if request.request.user.is_company == True:
            return view_func(request, *args, **kwargs)
        else:
            return HttpResponseRedirect(reverse('company_login'))
    return wrap