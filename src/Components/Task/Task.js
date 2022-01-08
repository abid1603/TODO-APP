import React from 'react'
import './Task.css';
import {useState, useEffect} from 'react'

function Task() {
    const [name, setname] = useState([]);
    const [alltask, setalltask] = useState([]);
    const [task, settask] = useState({
        title: '',
        description: '',
        employer: ''
    });
    useEffect(()=>{
        const abid = localStorage.getItem("employers");
        setname(JSON.parse(abid));
        setalltask(JSON.parse(localStorage.getItem('alltask')) || []);
    }, []);

    let names,value;
    const createtask = (e) =>{
       // alert(e.target.name)
        names = e.target.name;
        value = e.target.value;
        settask({...task, [names]:value});
        
    }
    const handeltask = (e) =>{
        e.preventDefault();
        setalltask([...alltask,task]);
        localStorage.setItem('alltask',JSON.stringify([...alltask,task]));
        setalltask({
            title: '',
            description: '',
            employer: ''
        });
        
    }

    return (
        <div className='taskpage'>
            <div className='container taskcontent'>
                 <form onSubmit={handeltask} className='taskform'>
                    <h2 className='profileTitle'>Create Task</h2>
                    <div className='Fild my-2'>
                        <label for="exampleFormControlInput1" class="form-label task">Task Name</label>
                        <input type="text" name='title'   onChange={createtask} class="form-control" ></input>
                    </div>
                    <div style={{display:'block'}} className='Fild my-2 '>
                        <label for="exampleFormControlInput1" class="form-label task">Description</label><br></br>
                        <textarea className='form-control'  onChange={createtask} name='description' id="textarea" rows="6" cols="65"></textarea>
                    </div>

                    <select name='employer'  onChange={createtask} class="form-select" aria-label="Default select example">
                        <option selected>Select employer</option>
                        {
                            name.map(single =>{
                                return(
                                    <option value={single.name}>{single.name}</option>
                                );
                            })
                        }
                    </select>

                   <div className='createbtn'>
                        <input className='btn btn-success mt-2' type='submit' value='Create'></input>
                   </div>
                 </form>
            </div>
        </div>
        
    )
}

export default Task
