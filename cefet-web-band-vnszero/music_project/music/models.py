from django.db import models

class EstiloMusical(models.Model):
    nome = models.CharField(max_length=45)
    derivado = models.BooleanField()
    dancante = models.BooleanField()
    cultural = models.BooleanField()

    def __str__(self):
        return f"{self.nome} (Derivado: {self.derivado}, Dançante: {self.dancante}, Cultural: {self.cultural})"

class Musico(models.Model):
    nome = models.CharField(max_length=45)
    instrumento_preferido = models.CharField(max_length=45)
    data_nascimento = models.DateField()
    altura = models.DecimalField(max_digits=5, decimal_places=2)
    genero = models.CharField(max_length=10, choices=[('M', 'Masculino'), ('F', 'Feminino'), ('O', 'Outro')], default='O')

    def __str__(self):
        return f"{self.nome} (Instrumento: {self.instrumento_preferido}, Nascimento: {self.data_nascimento}, Altura: {self.altura}m, Gênero: {self.genero})"

class Banda(models.Model):
    nome = models.CharField(max_length=45)
    cidade_origem = models.CharField(max_length=45)
    numero_albuns = models.IntegerField()
    logo = models.ImageField(upload_to="imgs")
    estilo_musical = models.ForeignKey(EstiloMusical, on_delete=models.CASCADE)
    musicos = models.ManyToManyField(Musico)

    def __str__(self):
        return f"{self.nome} (Origem: {self.cidade_origem}, Álbuns: {self.numero_albuns})"
