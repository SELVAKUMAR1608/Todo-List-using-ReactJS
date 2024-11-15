import React from 'react';
import styles from '../css/list.module.css'
import Button from './Button';

function Input({ enterValue,editRef,data,addData,toggle,update}) {
  return (
      
        <div className={styles.inputContainer}>
            <div>
              <input type="text"  onChange={enterValue} ref={editRef} value={data}/>
            </div>
            <div>
              <Button text='ADD' clickHandler={addData} className={styles.inputButton}/>
            </div>

            <div>
              {toggle.show&& 
              <Button text='UPDATE' clickHandler={update} className={styles.updateButton} />}
            </div>
               <br />
        
        </div>)
}

export default Input