import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css/login.css';
import bg from '../assets/bg.png';
import logo from '../assets/logo-g.png';

function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (usuario === 'obany' && contrasena === '12345') {
      navigate('/editor');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${bg})` }}>
      <div className="login-box">
        <img src={logo} alt="Logo" className="login-logo" />
        <h2 className='login-title'>Editor de Esquelas</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <label>Nombre de Usuario</label>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
          <button type="submit" className='btn-login'>Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
