import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [generations, setGenerations] = useState<any[]>([]);
  const [textInput, setTextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchGenerations(token);
  }, [navigate]);

  const fetchGenerations = async (token: string) => {
    try {
      const res = await axios.get('http://localhost:5000/api/generations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setGenerations(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleGenerate = async () => {
    if (!textInput) return;
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/generations', { originalText: textInput }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTextInput('');
      fetchGenerations(token!);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">Content Dashboard</h1>
          <button onClick={handleLogout} className="text-slate-500 hover:text-slate-800">Logout</button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <h2 className="text-lg font-semibold text-slate-700">New Generation</h2>
          <textarea 
            value={textInput} 
            onChange={e => setTextInput(e.target.value)}
            placeholder="Paste your blog text or ideas here..."
            className="w-full h-32 p-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500"
          />
          <button 
            onClick={handleGenerate} 
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Generating AI Content...' : 'Generate Assets'}
          </button>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-700">Your Recent Content</h2>
          {generations.map((gen: any) => (
            <div key={gen._id} className="bg-white p-6 rounded-xl shadow-sm space-y-4">
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase">Twitter Thread</h3>
                <p className="mt-1 text-slate-800 whitespace-pre-wrap">{gen.generatedTwitter}</p>
              </div>
              <hr className="border-slate-100" />
              <div>
                <h3 className="text-sm font-bold text-slate-500 uppercase">LinkedIn Post</h3>
                <p className="mt-1 text-slate-800 whitespace-pre-wrap">{gen.generatedLinkedIn}</p>
              </div>
            </div>
          ))}
          {generations.length === 0 && (
            <p className="text-slate-500 text-center py-8">No content generated yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
