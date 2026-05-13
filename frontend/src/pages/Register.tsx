import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Registration failed.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-sm w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 text-center">Create an Account</h2>
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="mt-1 block w-full rounded-md border border-slate-300 p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border border-slate-300 p-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 block w-full rounded-md border border-slate-300 p-2" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Register</button>
        <p className="text-center text-sm text-slate-500">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
