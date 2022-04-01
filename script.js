// Started at 5:10 3-31-2022

// forEach with Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
});

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

// Coding Challenge #1

const Julia = [3, 5, 2, 12, 7];
const Kate = [4, 1, 15, 8, 3];

const Julia2 = [9, 16, 6, 8, 3];
const Kate2 = [10, 5, 6, 1, 4];

const JuliaCorrect = Julia.slice();
JuliaCorrect.splice(0, 1);
JuliaCorrect.splice(-2);

const fens = JuliaCorrect.concat(Kate)
const fens2 = Julia2.concat(Kate2);

fens.forEach(function (dog, i, arr) {
  if (dog < 3) {
    console.log(`Dog number ${dog} is not an adult`);
  } else if (dog > 3) {
    console.log(`Dog number ${dog} is an adult`);
  }
});

console.log('---- TEST DATA 2 ----');

fens2.forEach(function (dog) {
  if (dog < 3) {
    console.log(`Dog number ${dog} is not an adult`);
  } else if (dog > 3) {
    console.log(`Dog number ${dog} is an adult`);
  }
});

// Ended at 7:14 3-31-2022
