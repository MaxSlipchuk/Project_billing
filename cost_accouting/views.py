from django.shortcuts import render

# Create your views here.

def cost_accout(request):
    return render(request, "cost_accouting/cost.html")