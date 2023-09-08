import { Calculator } from "./utils/Calculator";
import * as readline from 'readline';

const calculator = new Calculator();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForNumbers(operation: string) {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      switch (operation) {
        case 'add':
          console.log(`Resultado: ${calculator.add(a, b)}`);
          break;
        case 'subtract':
          console.log(`Resultado: ${calculator.subtract(a, b)}`);
          break;
        case 'multiply':
          console.log(`Resultado: ${calculator.multiply(a, b)}`);
          break;
        case 'divide':
          try {
            console.log(`Resultado: ${calculator.divide(a, b)}`);
          } catch (e: any) {
            console.log(e.message);
          }
          break;
      }

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
  console.log('5. Sair');

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


