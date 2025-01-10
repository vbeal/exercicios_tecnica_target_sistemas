# 5) Escreva um programa que inverta os caracteres de um string.

# IMPORTANTE:
# a) Essa string pode ser informada através de qualquer entrada de 
# sua preferência ou pode ser previamente definida no código;
# b) Evite usar funções prontas, como, por exemplo, reverse;
###################################################################

# Função para inverter uma string
def inverter_string(s):
    # Inicializa uma string vazia para armazenar o resultado
    resultado = ""
    
    # Loop para percorrer a string de trás para frente
    for i in range(len(s) - 1, -1, -1):
        resultado += s[i]
    
    return resultado

# Exemplo de uso com entrada do usuário
string_original = input("Digite uma string para inverter: ")
string_invertida = inverter_string(string_original)

# Imprime a string invertida
print("String invertida:", string_invertida)
