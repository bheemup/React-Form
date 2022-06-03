import React, { useState } from 'react'
import Table from "./Table"
import "./Table.css"

function Form() {
  const [show, setShow]=useState(false)

  const [form,setForm]=useState(
    {
     
     isIndian:false,    


    }
    
  )
  const [data, setData]=useState()


  const handleChange=(e)=>{
    let {checked,type,name,value,files}=e.target;
    console.log(checked,name,type,value);

    if(type==='checkbox'){
      setForm({
        ...form, [name]:checked,
      })
    }
    if(type==='file'){
          setForm({
            ...form,[name]:files,
          })
    }
    else{
      setForm({
        ...form, [name]:value,
      })
    }
   
  }

  const onSubmit=(e)=>{
        e.preventDefault();
        // console.log(form)
        setData(form)
        console.log(form)
        setShow(true)
  }

  return (
    <>
         <form action="">
            <br />
            <br />
          <div>
            <label htmlFor="name">Name : </label>
            <input type="text" placeholder='Enter Your Name'
            name='name' value={form.name}  onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="age">Age :    </label>
            <input type="number" placeholder='age' 
            name='age' value={form.age}   onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email :    </label>
            <input type="email" placeholder='email'
            name='email' value={form.email}  onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password :    </label>
            <input type="password"  placeholder='Password'
            name='password' value={form.password}  onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="Address">Address</label>
            <input type="text" placeholder='Address..' name='Address'
            value={form.Address} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="city">City : </label>
            <select name="city" value={form.city} onChange={handleChange} >
              <option value="mathura">Mathura</option>
              <option value="agra">Agra</option>
            </select>
          </div>
          <div>
            <input type="checkbox" 
            name='isIndian' checked={form.isIndian}  onChange={handleChange}/>
            <label htmlFor="india">Is Indian</label>
          </div>
          <div>
            <input type="radio" name='male' value="male"  onChange={handleChange}/>
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input type="radio" name='Female' value="Female"  onChange={handleChange}/>
            <label htmlFor="Female">Female</label>
          </div>
          <div>
            <label htmlFor="resume"> Resume   :  </label>
            <input type="file" name='resume' 
            files={form.resume}  accept="image/jpeg,image/png,application/pdf,"
            onChange={handleChange} />
          </div>



             <input type="submit" onClick={onSubmit}/>


         </form>

         <div className='container'>
           {show ?   <Table info={data}/>  :null}
       
         </div>
      </>
  )


}

export default Form
