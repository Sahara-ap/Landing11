import React from 'react'; 

export const OrderForm:React.FC = () => {

  return (
    <form className="order__form form" action='#' encType='multipart/form-data'>
      <div className='form__select'></div>
      <div className="form__input-email input">
        <input type="email" name='email' placeholder='Ваш e-mail'/>
      </div>
      <div className="form__input-name input">
        <input type="text" name='name' placeholder='Ваше имя' />
      </div>
      <div className="form__input-range"></div>
      <div className="form__input-file input">
        <input type="file" name='file' id='fileId'/>
        <label htmlFor="fileId">Прикрепить файл</label>
      </div>
    </form>
 );
}
