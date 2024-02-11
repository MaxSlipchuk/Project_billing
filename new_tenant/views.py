from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, authenticate
from django.db.utils import IntegrityError
from django.contrib.auth.models import User

# Create your views here.

def registration_view(request):
    context = {}
    if request.method == 'POST':
        reg_login = request.POST.get("reg-login")
        name = request.POST.get("name")
        surname = request.POST.get("surname")
        reg_password = request.POST.get("reg-password")
        email = request.POST.get('email')
        confirm = request.POST.get("reg-confirm")

        log_login = request.POST.get('log-login')
        log_password = request.POST.get('log-password')

        if reg_login and name and surname and reg_password and confirm and email:
            if len(reg_password) >= 8:
                if reg_password == confirm:
                    try:   
                        User.objects.create_user(
                            first_name = name,
                            email = email,
                            last_name = surname,
                            password = reg_password,
                            username = reg_login
                        )
                        # return redirect('login')   
                    except IntegrityError:
                        context['error'] = 'Такий користувач вже існує'
                else:           
                    context['error'] = 'Паролі не співпадають'                        
            else:
                context['error'] = 'Кількість символів має бути довшою або дорівнювати 8'
        else:
            context['error'] = 'Заповніть всі поля'

        if log_login and log_password:
            user = authenticate(username = log_login, password = log_password)
            if user:
                user.is_authenticated
                login(request, user)
                return redirect('main')
            else:
                context['error'] = 'Логін або пароль невірні'

    return render(request, 'new_tenant/index.html', context)
    