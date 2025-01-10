# 4) Dado o valor de faturamento mensal de uma distribuidora, 
# detalhado por estado:
#   • SP – R$67.836,43
#   • RJ – R$36.678,66
#   • MG – R$29.229,88
#   • ES – R$27.165,48
#   • Outros – R$19.849,53

# Escreva um programa na linguagem que 
# desejar onde calcule o percentual de representação 
# que cada estado teve dentro do valor total mensal da distribuidora. 
#####################################################################

# Definir o faturamento mensal por estado
faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
}

# Calcular o valor total de faturamento
total_faturamento = sum(faturamento.values())

# Calcular e exibir o percentual de representação de cada estado
print("Percentual de representação por estado:")

for estado, valor in faturamento.items():
    percentual = (valor / total_faturamento) * 100
    print(f"{estado}: {percentual:.2f}%")

#print(f"Total de faturamento: {total_faturamento}")