import { Calculator } from "./utils/Calculator";
import * as readline from 'readline';

const calculator = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function callOperation(operation: string, numberA: number, numberB: number) {
  switch (operation) {
    case 'add':
      console.log(`Resultado: ${calculator.add(numberA, numberB)}`);
      break;
    case 'subtract':
      console.log(`Resultado: ${calculator.subtract(numberA, numberB)}`);
      break;
    case 'multiply':
      console.log(`Resultado: ${calculator.multiply(numberA, numberB)}`);
      break;
    case 'divide':
      try {
        console.log(`Resultado: ${calculator.divide(numberA, numberB)}`);
      } catch (e: any) {
        console.log(e.message);
      }
      break;
    case 'pow':
      console.log(`Resultado: ${calculator.pow(numberA, numberB)}`);
      break;
    case 'sqrt':
      console.log(`Resultado: ${calculator.sqrt(numberA)}`);
      break;
  }
}

function askForNumbers(operation: string) {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      const numberA = parseFloat(num1);
      const numberB = parseFloat(num2);

      callOperation(operation, numberA, numberB);
      showMenu();
    });
  });
}

function showMenu() {
  console.log('\nEscolha uma opção:');
  console.log('1. Somar');
  console.log('2. Subtrair');
  console.log('3. Multiplicar');
  console.log('4. Dividir');
  console.log('5. Potência');
  console.log('6. Sair');

  rl.question('Opção: ', (answer) => {
    switch (answer) {
      case '1':
        askForNumbers('add');
        break;
      case '2':
        askForNumbers('subtract');
        break;
      case '3':
        askForNumbers('multiply');
        break;
      case '4':
        askForNumbers('divide');
        break;
      case '5':
        askForNumbers('pow');
        break;
      case '6':
        rl.close();
        break;
      default:
        console.log('Opção inválida, tente novamente.');
        showMenu();
        break;
    }
  });
}

showMenu();


