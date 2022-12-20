# MÉTODO JAVASCRIPT DATE GETHOURS()
 
 - Exemplo:
 -----------------------------------------------------------------------------------------------
 ![image](https://user-images.githubusercontent.com/92840891/208756009-e6777f3b-e38e-478e-819a-f625788b5926.png) 

------------------------------------------------------------------------------------------------

- Saída: 

------------------------------------------------------------------------------------------------
![image](https://user-images.githubusercontent.com/92840891/208756243-5bf5b2e9-8be0-405b-9f1c-b3e7b09b8895.png)

------------------------------------------------------------------------------------------------

### O método date.getHours() é usado para retornar as horas de um determinado objeto Date.
 <strong>Sintaxe:</strong>
 -----------------------------------------------------------------------------------------------------------------
 ![image](https://user-images.githubusercontent.com/92840891/208756717-44c0c747-bfb4-489e-bd4d-1d6db73e589c.png)
-----------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------
#####  Parâmetro: este método não aceita nenhum parâmetro. 
  Valores de retorno: retorna as horas para o objeto Date fornecido. Horas é um valor inteiro que varia de 0 a 23.
  Mais códigos para o método acima são os seguintes:
  Programa 1: Se as horas não forem fornecidas, ele retornará zero (0). É um caso de exceção. 
-----------------------------------------------------------------------------------------------------------------
![image](https://user-images.githubusercontent.com/92840891/208756990-bac40de6-cd05-48c7-88f0-7fa30f9b34bd.png)
-----------------------------------------------------------------------------------------------------------------
- Saída:
-----------------------------------------------------------------------------------------------------------------

![image](https://user-images.githubusercontent.com/92840891/208757534-8752d05f-877a-48b6-9d8c-b3594052c17c.png)
-----------------------------------------------------------------------------------------------------------------

##### Programa 2: aqui a data do mês deve estar entre 1 e 31 porque nenhuma data pode ter um mês maior que 31. É por isso que ele retorna NaN, ou seja, não é um número se o mês no objeto Date for maior que 31. Horas não terá existido quando a data do mês indicada como 33, ou seja, maior que 31. 
-----------------------------------------------------------------------------------------------------------------
![image](https://user-images.githubusercontent.com/92840891/208758106-1181c7fb-faed-4b1f-a115-976a12b12154.png)

-----------------------------------------------------------------------------------------------------------------
- Saída: 
-----------------------------------------------------------------------------------------------------------------

![image](https://user-images.githubusercontent.com/92840891/208758209-042c9f2e-1a3e-45e5-8a44-a81d9eb77561.png)
-----------------------------------------------------------------------------------------------------------------
Navegadores compatíveis: os navegadores compatíveis com o método JavaScript Date getHours() estão listados abaixo: 
<li>Google Chrome</li>
<li>Internet Explorer</li>
<li>Mozilla Firefox</li>
<li>Ópera</li>
<li>Safári</li>




