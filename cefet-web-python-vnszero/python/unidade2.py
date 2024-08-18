def obtem_mes(num_mes):
    if(num_mes < 1 or num_mes > 12):
        return (f"{num_mes} é inválido")
    
    meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]
    
    return meses[num_mes - 1]