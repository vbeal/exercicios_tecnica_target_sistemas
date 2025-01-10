# 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
# Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
# Imprimir(SOMA);
# Ao final do processamento, qual será o valor da variável SOMA?

# Definindo as variáveis
INDICE = 13
SOMA = 0
K = 0

# Loop para calcular a SOMA
while K < INDICE:
    K += 1
    SOMA += K

# Imprimindo o resultado
print("O valor da SOMA eh:", SOMA)
