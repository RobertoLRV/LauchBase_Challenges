/**
 * Crie um programa para realizar operacoes bancarias na conta de um usuario.
 * Comece criando um objeto com o nome do usuario, suas transacoes e saldo.
 * As transacoes(transactions) devem iniciar como array vazio [] e o saldo (balance) em 0 (zero).
 * 
 */

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
};

 /**
  * Crie uma funcao createTransaction para adicionar uma nova transacao no aray de trasancoes de um usuario, essa funcao deve receber como 
  * parametro um objeto de transacao que tem o seguinte formato:
  */


function createTransaction(transaction){

    user.transactions.push(transaction);

    if (transaction.type == "credit"){
        user.balance = user.balance + transaction.value;
    }
    if (transaction.type == "debit") {
        user.balance = user.balance - transaction.value;
    }

    return user;
}

//createTransaction({type: 'credit', value: 50.5});

//console.log(createTransaction({type: 'credit', value: 120}));

/**
 * Crie uma funcao chamada getHigherTransactionByType que recebe como parametro o tipo de transacao credit/debit, percorre as 
 * transacoes do usuario e retorna o objeto da transacao de maior valor com aquele tipo
 */

function getHigherTransactionByType(type){
    let HigherTransaction = 0;
    for (let transaction of user.transactions){
        if (transaction.type == type && transaction.value > HigherTransaction) {
            HigherTransaction = transaction.value;
        }       
    }
    return console.log({type: type,value: HigherTransaction});
}


//console.log(getHigherTransactionByType("credit"));

/**
 * Crie um funcao chamada getAverageTransactionValue que retorna o valor medio das transacoes de um usuario independente do seu tipo:
 */

 function getAverageTransactionValue(){
    let sum = 0;

    for (let transaction of user.transactions){
        sum = sum + transaction.value;
    }
    const AverageTransaction = sum / user.transactions.length

    return console.log(AverageTransaction);
 }


//console.log(getAverageTransactionValue());

/**
 * Crie uma funcao chamada getTransactionsCount que retorna o numero de transacoes de cada tipo credit/debit, o retorno da funcao 
 * deve ser um objeto e seguir exatamente como o modelo apresentado abaixo:
 */

 function getTransactionsCount(){
    let countCredit = 0;
    let countDebit = 0;

     for (let transaction of user.transactions) {
         if (transaction.type == "credit") {
            countCredit = countCredit + 1;
         }
         if(transaction.type == "debit"){
            countDebit = countDebit + 1;
         }
     }
     return console.log({credit: countCredit, debit: countDebit});
 }
 
createTransaction({type: "credit",value: 50});
createTransaction({type: "credit",value: 120});
createTransaction({type: "debit",value: 80});
createTransaction({type: "debit",value: 30});

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // {type: credit', value: 120}
getHigherTransactionByType("debit"); // {type: 'debit', value: 80}

getAverageTransactionValue(); // 70

getTransactionsCount(); // {credit: 2, debit:2}

