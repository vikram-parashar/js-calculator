import { useState } from 'react';
import Button from './components/Button';

const { Parser } = require('expr-eval');

const keysData = [
  ['AC', ''],
  ['<-', ''],
  ['/', ''],
  ['*', ''],
  ['7', ''],
  ['8', ''],
  ['9', ''],
  ['-', ''],
  ['4', ''],
  ['5', ''],
  ['6', ''],
  ['+', ''],
  ['1', ''],
  ['2', ''],
  ['3', ''],
  ['=', 'row-span-2'],
  ['0', 'col-span-2'],
  ['.', ''],
];

function App() {
  const [expression, setExpression] = useState<string>('');
  function handleKeys(key: string) {
    switch (key) {
      case 'AC':
        setExpression('');
        break;
      case '<-':
        setExpression((prev) => {
          return prev.slice(0, -1);
        });
        break;
      case '=':
        setExpression((prev: string) => {
          try {
            return Parser.evaluate(prev);
          } catch {
            alert('Invalid expression');
            return '';
          }
        });
        break;
      default:
        setExpression((prev) => {
          return prev + key;
        });
        break;
    }
  }
  return (
    <div className="h-screen w-screen grid place-content-center bg-[url('./images/leafy-dawn.png')] bg-left-bottom bg-cover">
      {/* Calculator */}
      <div className="bg-[#d7827e] p-4 h-[70vh] w-[40vh] rounded-xl flex flex-col justify-end">
        {/* Output */}
        <div className="w-full h-[20%] flex justify-end items-end p-4 break-all text-dawn-overlay text-3xl">
          {expression}
        </div>
        {/* Keys */}
        <div className="mt-3">
          {/* Main Keys */}
          <div className="grid grid-cols-4 gap-3 mt-2">
            {keysData.map((item) => {
              return (
                <Button
                  char={item[0]}
                  className={item[1]}
                  onPress={(key: string) => handleKeys(key)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
