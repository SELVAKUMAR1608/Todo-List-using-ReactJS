import React from 'react'
import styles from '../css/list.module.css'
import Button from './Button'

function Listdatas({datas,editData,removeData}) {
  return (
    <div>

<ul>
            {datas.map((ele,index)=>{
                return (
                    <div className={styles.addListContainer} key={index}>

                          <div className={styles.addedList}>
                            <div className={styles.elementContainer}>
                                   {ele}
                            </div>

                            <div className={styles.buttonContainer}>
                                <Button text='Edit' clickHandler={()=>editData(index)} className={styles.editButton} />
                                <Button text='remove' clickHandler={()=>removeData(index)} className={styles.removeButton} />
                                {/* <button onClick={()=>editData(index)} className={styles.editButton}>Edit</button>
                                <button onClick={()=>removeData(index)} className={styles.removeButton}>remove</button> */}
                                
                            </div>
                       </div>
                       <hr />
                    </div>)

                })}
        </ul>
    </div>
  )
}

export default Listdatas