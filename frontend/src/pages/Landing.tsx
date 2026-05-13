import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
          Transform Your Content into <span className="text-blue-600">Viral Assets</span>
        </h1>
        <p className="text-xl text-slate-600">
          Input a blog or article, and our AI instantly generates Twitter threads, LinkedIn posts, and email newsletters.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link to="/register" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition">
            Start for Free
          </Link>
          <Link to="/login" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 transition">
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
