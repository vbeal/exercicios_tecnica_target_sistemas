# 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, 
# faça um programa, na linguagem que desejar, que calcule e retorne:
#   •   O menor valor de faturamento ocorrido em um dia do mês;
#   •   O maior valor de faturamento ocorrido em um dia do mês;
#   •   Número de dias no mês em que o valor de faturamento diário 
#       foi superior à média mensal.

# IMPORTANTE:
#   a)  Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
#   b)  Podem existir dias sem faturamento, como nos finais de semana e feriados. 
#       Estes dias devem ser ignorados no cálculo da média;
#####################################################################
import json

# Carregar dados do JSON
with open('dados_tecnica3.json') as file:
    dados = json.load(file)

# Variáveis para armazenar o menor e maior faturamento, a soma dos faturamentos, e os dias com faturamento
menor_valor = float('inf')
maior_valor = float('-inf')
soma_faturamento = 0
dias_com_faturamento = 0

# Processar os dados para encontrar o menor, maior valor e calcular a soma
for registro in dados:
    valor = registro["valor"]
    if valor > 0:  # Ignorar dias sem faturamento (valor zero)
        if valor < menor_valor:
            menor_valor = valor
        if valor > maior_valor:
            maior_valor = valor
        soma_faturamento += valor
        dias_com_faturamento += 1

# Calcular a média mensal
media_mensal = soma_faturamento / dias_com_faturamento

# Contar o número de dias com faturamento superior à média mensal
dias_acima_da_media = sum(1 for registro in dados if registro["valor"] > media_mensal)

# Resultados
print(f"Menor valor de faturamento: {menor_valor}")
print(f"Maior valor de faturamento: {maior_valor}")
print(f"Dias com faturamento acima da média: {dias_acima_da_media}")

