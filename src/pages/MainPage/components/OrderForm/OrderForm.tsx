import { InputRange } from 'components/InputRange';
import { Select } from 'components/Select';
import React, { useEffect, useState } from 'react'; 

export const OrderForm:React.FC = () => {
  const [selectValue, setSelectValue] = useState('Выберите тип системы');

  const handleSelectChange = (value: string) => {
    console.log('value', value)
    setSelectValue(value);
  }

  useEffect(() => {
    setSelectValue('Выберите тип системы');
  }, []);

  return (
    <form className="order__form form" action='#' encType='multipart/form-data'>
      <div className='form__select input'>
        <Select 
          items={[
           { text: 'Выберите тип системы', value: 'Выберите тип системы' },
           { text: 'Тип системы1', value: 'Тип системы1' },
           { text: 'Тип системы2', value: 'Тип системы2' },
          //  { text: 'Тип системы3', value: '3' },
          //  { text: 'Тип системы4', value: '4' },
         ]}
         currentValue={selectValue}
         onChange={(newValue) =>
           handleSelectChange(newValue)}
          
        />
      </div>
      <div className="form__input-email input">
        <input type="email" name='email' placeholder='Ваш e-mail'/>
      </div>
      <div className="form__input-name input">
        <input type="text" name='name' placeholder='Ваше имя' />
      </div>
      <div className="form__input-range input">
        <InputRange />
      </div>
      <div className="form__input-file input">
        <input type="file" name='file' id='fileId'/>
        <label htmlFor="fileId">Прикрепить файл</label>
      </div>
    </form>
 );
}
