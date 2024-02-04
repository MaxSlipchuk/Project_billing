from django.shortcuts import render

# Create your views here.

def new_tenant(request):
    return render(request, 'new_tenant/index.html')