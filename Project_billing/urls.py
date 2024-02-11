"""
URL configuration for Project_billing project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .settings import MEDIA_URL, MEDIA_ROOT, DEBUG
from django.conf.urls.static import static
from base_settings.views import base
from new_tenant.views import registration_view
from main_page.views import main
from cost_accouting.views import cost_accout

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('new_tenant', new_tenant, name='new_tenant'),
    path('registration/', registration_view, name='registration'),
    path('', main, name='main'),
    path("cost_accout/", cost_accout, name="cost_accout"),
]

if DEBUG:
    urlpatterns += static(MEDIA_URL, document_root = MEDIA_ROOT)
