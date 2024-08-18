from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from django.views import View
from . import models, forms

class ListaTesouros(View):
    def get(self, request):
        tesouros = models.Tesouro.objects.all()
        total_geral = sum(tesouro.preco * tesouro.quantidade for tesouro in tesouros)

        context = {'tesouros': tesouros, 'total_geral': total_geral}
        return render(request, "lista_tesouros.html", context)
    
class SalvarTesouro(View):
    def get(self, request, id=None):
        tesouro = models.Tesouro.objects.get(id=id) if id != None else None
        form = forms.TesouroForm(instance=tesouro)
        context = {"form":form}
        return render(request, "salvar_tesouro.html", context)
    
    def post(self, request, id=None):
        tesouro = models.Tesouro.objects.get(id=id) if id != None else None
        form = forms.TesouroForm(request.POST, request.FILES, instance=tesouro)
        context = {"form":form}

        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('listar_tesouros'))
        else:
            return render(request, "salvar_tesouro.html", context)
        
class DeletarTesouro(View):
    def get(self, request, id):
        tesouro = models.Tesouro.objects.get(id=id)
        tesouro.delete()
        return HttpResponseRedirect(reverse('listar_tesouros'))