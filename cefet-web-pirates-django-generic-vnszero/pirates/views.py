from django.db.models.query import QuerySet
from django.shortcuts import render
from django.db.models import F,ExpressionWrapper,DecimalField
from django.http import HttpResponseRedirect
from django.views import View
from django.forms import ModelForm
from django.urls import reverse, reverse_lazy

from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic.list import ListView
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Tesouro

class ListarTesouros(ListView):
    model = Tesouro
    template_name = 'lista_tesouros.html'

    def get_queryset(self):
        queryset = super().get_queryset()
    
        return queryset.annotate(valor_total=ExpressionWrapper(F('quantidade')*F('preco'),\
                            output_field=DecimalField(max_digits=10,\
                                                    decimal_places=2,\
                                                     blank=True)\
                                                    )\
                            )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total_geral'] = 0
        for tesouro in context['object_list']:
            context['total_geral'] += tesouro.valor_total
        return context
    
class SalvarTesouro(LoginRequiredMixin):
    login_url = '/login/'
    redirect_field_name = 'next'
    model = Tesouro
    fields = ['nome', 'quantidade', 'preco', 'img_tesouro']
    template_name = 'salvar_tesouro.html'
    success_url = reverse_lazy('lista_tesouros')

class InserirTesouro(SalvarTesouro, CreateView):
    pass

class AtualizarTesouro(SalvarTesouro, UpdateView):
    pass

class RemoverTesouro(DeleteView):
    model = Tesouro
    success_url = reverse_lazy('lista_tesouros')
