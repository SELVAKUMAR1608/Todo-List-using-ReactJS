import React,{useRef, useState} from 'react'
import styles from '../css/list.module.css'
import Listdatas from '../Components/Listdatas';
import Input from '../Components/Input';

function List() {
    
    let[data,setdata]=useState("");
    let[datas,setdatas]=useState([]);
    let editRef=useRef(null);
    let[toggle,settoggle]=useState({show:false,id:''})

    let enterValue=(e)=>{
        setdata(e.target.value)
    }

    let addData=()=>{
        setdatas([...datas,data]);
        console.log("added");
        setdata("");
    }

    let removeData=(rindex)=>{
        let rData=datas.filter((_,uindex)=> uindex!==rindex)
        setdatas(rData);

    }
    let editData=(id)=>{
        editRef.current.focus();
        settoggle({show:true,id})
        setdata(datas[id])
    }
    let update=()=>{
        datas[toggle.id]=data;
        setdatas([...datas]);
        setdata('');
        settoggle({show:false})
    }

    
  return (
    <div className={styles.mainContainer}>
        <Input enterValue={enterValue} editRef={editRef} data={data} addData={addData} toggle={toggle} update={update}/>
        <Listdatas datas={datas} editData={editData} removeData={removeData}/>
    </div>
  )
}

export default List