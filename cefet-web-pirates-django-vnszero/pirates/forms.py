from django.forms import ModelForm
from . import models

class TesouroForm(ModelForm):
    class Meta:
        model = models.Tesouro
        fields = ['nome', 'quantidade', 'preco', 'img_tesouro']
        labels = {'nome': 'Nome', 'quantidade': 'Quantidade', 'preco': 'Preço', 'img_tesouro': 'Imagem'}