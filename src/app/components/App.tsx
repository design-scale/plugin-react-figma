import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';
import "react-figma-plugin-ds/figma-plugin-ds.css";
import Button from './Button';
import Checkbox from './Checkbox';
import Select from './Select';
import Input from './Input';
import  Icon from './Icon';

function App() {

  const options = [
    {
      label: 'Abrahão',
      title: 'Investida desde 2006',
      value: 1
    },
    {
      label: 'Coalize',
      title: 'Investida desde 2008',
      value: 2
    }
  ];

  const [count, setCount] = useState('8');
  const [isPage, setPage] = useState(true)

  const [selectedOption, setSelectedOption] = useState(1);

  const handleSelectChange = (selected) => {
    setSelectedOption(selected.value);
  };


  const onCreate = () => {
    const parsedCount = parseInt(count, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count: parsedCount } }, '*');
  };

  // const onCancel = () => {
  //   parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  // };

  React.useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className='main'>
     <div className="container">
     <img src={logo} alt="Logo" />
      <h2>Figma Plugin React Env</h2>
      <Select
  
        className=""
        defaultValue={selectedOption}
        onChange={handleSelectChange}
        onExpand={function _() {}}
        options={[
          {
            label: 'Abrahão',
            title: 'Investida desde 2006',
            value: 1
          },
          {
            label: 'Coalize',
            title: 'Investida desde 2008',
            value: 2
          }
        ]}
        placeholder="Selecione uma investida*"
      />
      <p>

        <Input
        placeholder="Insira um título para o projeto"
        //defaultValue={count} // Add this line to pass the value prop
        onChange={(newValue) => setCount(newValue)}
      />
      </p>



      <Button className='fullwidth' onClick={onCreate}>Criar </Button>
 
      <span>{count}</span>
      <span>value: {selectedOption} / {options[selectedOption - 1].label}</span>
     </div>
<div className={`container-pages ${isPage? 'selected' : ''}`}>
<Checkbox className={`${isPage? 'text-selected' : ''}`} label="Criar estrutura de Pages" type='switch' defaultValue={isPage} onChange={(newValue) => setPage(newValue)} name='pages'/>

<span>{isPage ? <Icon name='settings'></Icon> : <Icon name='adjust'></Icon>}</span> 
</div>
    </div>
  );
}

export default App;
