var aparecer = document.querySelector('.drop')
function tabela(b,a) {
  aparecer.style.display = 'flex'
  aparecer.innerHTML = null
  if (a === 'ver') {
    aparecer.innerHTML += `  <div class="tabela">   
      <div class="topo" onclick="down()" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
</svg></div>
      <table class="table table-bordered border-primary">
        <tr>
         <th>CLASSIFICAÇÃO</th>
         <th>&nbsp; IMC</th>
        </tr>
       
        <tr>
         <td>Abaixo do peso</td>
         <td>Abaixo de 18,5</td>
        </tr>
         <tr>
         <td>Peso normal</td>
         <td>Entre 18,5-24,9</td>
        </tr>
         <tr>
         <td>Sobrepeso</td>
         <td>Entre 25-29,9</td>
        </tr>
         <tr>
         <td>Obesidade I</td>
         <td>Entre 30-34,9</td>
        </tr>
         <tr>
         <td>Obesidade II</td>
         <td>Entre 35-39,9</td>
        </tr> <tr>
         <td>Obesidade III</td>
         <td>Acima de 40</td>
        </tr>

       </table> 
    </div>  `
}}
function down() {
 aparecer.style.display = 'none'
}