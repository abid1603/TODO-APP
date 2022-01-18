import "./Employers.css";
import { useState, useEffect } from "react";


function Employers() {
  const [employes, setemployes] = useState([]);
  useEffect(() => {
    const abid = localStorage.getItem("employers");
    setemployes(JSON.parse(abid));
    // console.log(employes);
  }, []);

  const [getdata, setgetdata] = useState({
    name: "",
    id: "",
    desination: "",
    email: "",
    phone: "",
    key: ""
  });

  const handelupdateprofile = (e) =>{
    e.preventDefault();
    let x = [];
    x = employes.filter((value) => {
      console.log(value.id !== getdata.id);
      return value.id !== getdata.id;
    });

    localStorage.setItem('employers', JSON.stringify([...x, getdata]));
    const abid = localStorage.getItem("employers");
    setemployes(JSON.parse(abid));
  }
  const changeHandler = (e) => {
            const { name, value } = e.target;
            setgetdata({...getdata, [name]:value});
  }

  return (
    <div className="employersbody">
      <div className="container">
        <div className="single row my-2 py-2">
          <div className="col-2 name">
            <p>Name</p>
          </div>
          <div className="col-3 email">
            <p>Email</p>
          </div>
          <div className="col-1 id">
            <p>ID</p>
          </div>
          <div className="col-2 post">
            <p>Designation</p>
          </div>
          <div className="col-2 phone">
            <p>Phone</p>
          </div>
          <div className="col-2 action">
            <p>Action</p>
          </div>
        </div>
        {employes.map((single, index) => {
          return (
            <div className="single-employer row my-2 p-3">
              <div className="col-2 name">
                <h6>{single.name}</h6>
              </div>
              <div className="col-3 email">
                <h6>{single.email}</h6>
              </div>
              <div className="col-1 id">
                <h6>{single.id}</h6>
              </div>
              <div className="col-2 post">
                <h6>{single.desination}</h6>
              </div>
              <div className="col-2 phone">
                <h6>{single.phone}</h6>
              </div>

              <div className="col-2 action">
                <span
                  data-toggle="modal"
                  className="edit"
                  data-target={'#editModal'}
                  onClick={() => {
                    // console.log(single.key)
                    setgetdata(single);
                  }}
                >
                  <i className="fa fa-pencil-square"></i>
                </span>
                <span
                  data-toggle="modal"
                  data-target="#deleteModal"
                  className="delete"
                  onClick={() => {
                    // console.log(single.key)
                    setgetdata(single);
                  }}
                >
                  <i className="fa fa-trash"></i>
                </span>
              </div>

              
            </div>
          );
        })}
      </div>

      {/* editmodal */}
      <div className="modal" id={'editModal'}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <form onSubmit={handelupdateprofile} className="form">
                      <h2 className="updatetitle">Update Profile</h2>
                      <div className="Fild my-2">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Employee Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          onChange={changeHandler}
                          value={getdata.name}
                          class="form-control"
                        ></input>
                      </div>
                      <div className="Fild my-2">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Employee ID
                        </label>
                        <input type="text" class="form-control"
                        onChange={changeHandler}
                        value={getdata.id}
                        name="id"
                        ></input>
                      </div>
                      <div className="Fild my-2">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Designation
                        </label>
                        <input type="text" class="form-control"
                        value={getdata.desination}
                        onChange={changeHandler}
                        name="desination"
                        ></input>
                      </div>
                      <div className="Fild my-2">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Email Address
                        </label>
                        <input type="email" class="form-control"
                        value={getdata.email}
                        onChange={changeHandler}
                        name="email"
                        ></input>
                      </div>
                      <div className="Fild my-2">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label"
                        >
                          Phone number
                        </label>
                        <input type="number" class="form-control"
                        value={getdata.phone}
                        onChange={changeHandler}
                        name="phone"
                        ></input>
                      </div>
                      <input
                        className="btn btn-success mt-2"
                        type="submit"
                        value="Update"
                      ></input>
                    </form>
                  </div>
                </div>
      </div>

      {/* deletemodal */}
      <div className="modal" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={(e) => {
              e.preventDefault();
              let x = [];
              x = employes.filter((value) => {
                console.log(value.id !== getdata.id);
                return value.id !== getdata.id;
              });
          
              localStorage.setItem('employers', JSON.stringify([...x]));
              const abid = localStorage.getItem("employers");
              setemployes(JSON.parse(abid));

            }} action="" className="form">
              <h2 className="deletetitle">
                Are You Sure You Want to Delete The Information..?
              </h2>
              <input
                className="btn btn-success mt-2"
                type="submit"
                value="Ok"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employers;
