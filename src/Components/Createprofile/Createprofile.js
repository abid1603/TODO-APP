import React, { useEffect } from 'react'
import './Createprofile.css'
import {useState,useContext} from 'react'
// import { EmployersContext } from '../../App';
import { v4 as uuidv4 } from 'uuid';

function Createprofile() {
    // const abid = useContext(EmployersContext);
    const [employers, setEmployers] = useState([]);
   const [person, setPerson] = useState({
       name : '',
       id : '',
       desination: '',
       email: '',
       phone: '',
       key: ''
   });
   let name,value;

   const handelcreateprofile = (e) =>{
        e.preventDefault();
        //console.log(person);
           // setPerson({...person, key:uuidv4()});
            localStorage.setItem('employers', JSON.stringify([...employers, person]));
        // console.log(employers)
        setPerson({
            name : '',
            id : '',
            desination: '',
            email: '',
            phone: '',
            key: ''
            });
        
           // console.log(person);
    }
    const handelinputs = (e) =>{
        if(!person.key){
            setPerson({...person, key:uuidv4()})
        }else{
            name = e.target.name;
            value = e.target.value;
            setPerson({...person, [name]:value});
        }
       // console.log(person)
    }

    useEffect(() => {
        setEmployers(JSON.parse(localStorage.getItem("employers")) || [])
    }, [])

    return (
        <div className='container frame'>
            <div className='body'>
                <form onSubmit={handelcreateprofile}>
                <h2 className='profileTitle'>CREATE PROFILE</h2>
                <div className='Fild my-2'>
                    <label for="exampleFormControlInput1" class="form-label">Employee Name</label>
                    <input type="text" value={person.name} onChange={handelinputs} name='name' id='name' class="form-control" ></input>
                </div>
                <div className='Fild my-2'>
                    <label for="exampleFormControlInput1" class="form-label">Employee ID</label>
                    <input type="text" value={person.id} onChange={handelinputs} name='id' id='id' class="form-control" ></input>
                </div>
                <div className='Fild my-2'>
                    <label for="exampleFormControlInput1" class="form-label">Designation</label>
                    <input type="text" value={person.desination} onChange={handelinputs} name='desination' id='designation' class="form-control" ></input>
                </div>
                <div className='Fild my-2'>
                    <label for="exampleFormControlInput1" class="form-label">Email Address</label>
                    <input type="email" value={person.email} onChange={handelinputs} name='email' id='email' class="form-control" ></input>
                </div>
                <div className='Fild my-2'>
                    <label for="exampleFormControlInput1" class="form-label">Phone number</label>
                    <input type="number" value={person.phone} onChange={handelinputs} name='phone' id='phone' class="form-control" ></input>
                </div>
                    <input className='btn btn-success mt-2' type='submit' value='Create' ></input>
                </form>
            </div>
        </div>
    )
}

export default Createprofile
