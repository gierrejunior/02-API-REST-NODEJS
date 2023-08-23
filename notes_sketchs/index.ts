
interface User {
  birthyear: number
}

function calculateAgeOfUser(user: User){
  return new Date().getFullYear() - user.birthyear
}

// calculateAgeOfUser('Diego')
calculateAgeOfUser({
  birthyear: 1994,
})


/* Runtime type checking: -> JavaScript
Verificação de tipo em tempo de execução. Nesse método, os tipos das variáveis e expressões são avaliados 
durante a execução do programa para garantir que sejam compatíveis e não levem a erros de tipo.
*/


/* Static Type checking: -> typeScript
Verificação de tipo em tempo de compilação. Nesse método, os tipos das variáveis e expressões são analisados 
pelo compilador antes da execução do programa, a fim de detectar erros de tipo antes mesmo de o código ser executado. 
Isso pode aumentar a robustez e a segurança do software.
*/