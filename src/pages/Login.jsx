import { useState }  from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData , setFormData] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = _ => {
    var params = new URLSearchParams();
    params.append('username', formData.username);
    params.append('password', formData.password);
    axios.post('https://em.kku.ac.th/poison/api/login.php', params)
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
        }
        else {
          console.log(response.data);
          window.localStorage.setItem('user', JSON.stringify(response.data));
          window.localStorage.setItem('password', formData.password);
          navigate('/poison');
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='h-screen bg-stone-300 flex justify-center items-center'>
       <div className='flex flex-col gap-2 p-10'>
           <input type="text" placeholder="username" className="input input-bordered" name="username" onChange={handleChange} />
           <input type="password" placeholder='password' className="input input-bordered" name="password" onChange={handleChange} />
           <button className='btn btn-accent' onClick={handleSubmit}>Login</button>
       </div>
    </div>
  )
}

export default Login