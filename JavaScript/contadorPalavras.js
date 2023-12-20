/*Exercício

Criar uma tela contendo um “textarea” (campo multiline) e um botão “contar palavras”. O desafio é contar quantas palavras foram digitadas no campo ao clicar no botão. 
Wireframe:
Tag HTML <textarea>
<textarea id="texto" name="texto" rows="5" cols="33">...</textarea>
cols: números de colunas;
rows: número de linhas; 
*/

document.getElementById('botao').addEventListener('click', (e) => {
    const texto = document.getElementById('areaPalavras').value.replaceAll('\n'," ").trim().split(' ');

    const resultado = texto.filter(function(texto) {
        return texto !== '';
    });
    //ou um ou outro aqui da certo
    const resultado2 = texto.filter(item => item != '');

    console.log(resultado2);
    console.log(resultado2.length);

});