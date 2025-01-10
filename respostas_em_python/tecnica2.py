# 2) Dado a sequência de Fibonacci, 
# onde se inicia por 0 e 1 e o próximo valor 
# sempre será a soma dos 2 valores anteriores 
# (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
# escreva um programa na linguagem que desejar onde, 
# informado um número, ele calcule a sequência de Fibonacci 
# e retorne uma mensagem avisando se o número informado 
# pertence ou não a sequência.
# IMPORTANTE: Esse número pode ser informado através de qualquer 
# entrada de sua preferência ou pode ser previamente definido no código;


#####################################################
# Função para gerar a sequência de Fibonacci até um número n
def fibonacci_sequence(n):
    # Inicializa a sequência com os dois primeiros números
    fib_sequence = [0, 1]
    
    # Continua calculando a sequência enquanto o último número for menor que n
    while fib_sequence[-1] < n:
        # Calcula o próximo número na sequência
        next_value = fib_sequence[-1] + fib_sequence[-2]
        # Adiciona o próximo número à sequência
        fib_sequence.append(next_value)
    
    # Retorna a sequência de Fibonacci gerada
    return fib_sequence

# Função para verificar se um número pertence à sequência de Fibonacci
def is_fibonacci_number(n):
    # Gera a sequência de Fibonacci até n
    fib_sequence = fibonacci_sequence(n)
    
    # Verifica se n está na sequência gerada
    if n in fib_sequence:
        return f"{n} pertence à sequência de Fibonacci."
    else:
        return f"{n} não pertence à sequência de Fibonacci."

################################################
# Exemplo de uso
# Solicita ao usuário que informe um número
numero = int(input("Informe um número: "))
# Verifica se o número informado pertence à sequência de Fibonacci
resultado = is_fibonacci_number(numero)
# Imprime o resultado
print(resultado)
################################################
