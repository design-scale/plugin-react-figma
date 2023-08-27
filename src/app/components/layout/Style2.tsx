import React, { useState } from 'react';

import '../../styles/ui.css';
import "react-figma-plugin-ds/figma-plugin-ds.css";
import Button from '../Button';
import Checkbox from '../Checkbox';
import Select from '../Select';
import Input from '../Input';
import  Icon from '../Icon';

function Style2() {

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
    },
    {
      label: 'Assinafy',
      title: 'Investida desde 2008',
      value: 3
    },
    {
      label: 'Cobre Fácil',
      title: 'Investida desde 2008',
      value: 4
    },
    {
      label: 'Atletis',
      title: 'Investida desde 2008',
      value: 5
    }

  ];

  const [count, setCount] = useState('0');
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
    <header className='header-options'>
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
          },
          {
            label: 'Assinafy',
            title: 'Investida desde 2008',
            value: 3
          },
          {
            label: 'Cobre Fácil',
            title: 'Investida desde 2008',
            value: 4
          },
          {
            label: 'Atletis',
            title: 'Investida desde 2008',
            value: 5
          }
        ]}
        placeholder="Selecione uma investida*"
      />

      <div className="right-content">
      <Select
  
  className="lp"
  defaultValue={12}
  onChange={() => {}}
  onExpand={function _() {}}
  options={[
    {
      label: 'Landing Page',
      title: 'Investida desde 2006',
      value: 12
    },
    {
      label: 'E-mail',
      title: 'Investida desde 2008',
      value: 13
    },
    {
      label: 'Social Media',
      title: 'Investida desde 2008',
      value: 14
    }
  ]}
  placeholder="Selecione uma investida*"
/>
<a className='adjust'><Icon name='adjust'  color='black' className='icon-adjust'></Icon></a> 

      </div>
    </header>
  

<div className="content">
        <Input
        placeholder="Insira um título para o projeto"
        //defaultValue={count} // Add this line to pass the value prop
        onChange={(newValue) => setCount(newValue)}
      />
      <div className="preview-card">
        {(count === '0' || count.length === 0)?<span className="preview-spam">Insira um título para começar</span>
:<span className="preview-spam">{count}</span>}
      </div>
      




      <Button className='fullwidth' onClick={onCreate}>Criar </Button>
 

      <span>value: {selectedOption} / {options[selectedOption - 1].label}</span>
      </div>
     </div>
<div className={`container-pages ${isPage? 'selected' : ''}`}>
<Checkbox className={`${isPage? 'text-selected' : ''}`} label="Criar estrutura de Pages" type='switch' defaultValue={isPage} onChange={(newValue) => setPage(newValue)} name='pages'/>

<span>{isPage ? <Icon name='settings'></Icon> : <Icon name='adjust'></Icon>}</span> 
</div>
    </div>
  );
}

export default Style2;
