'use client';

import { useAuth } from '../auth/useAuth';

export function UserProfile() {
  const { user, login, logout } = useAuth();

  return (
    <div className="p-5 border border-gray-300 rounded-lg max-w-xs mx-auto my-5">
      {user ? (
        <>
          <h2 className="text-xl font-bold mb-2">Perfil de Usuario</h2>
          <p className="mb-3">
            Bienvenido, <strong>{user.username}</strong>!
            {user.email && <><br />Email: {user.email}</>}
          </p>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-bold mb-2">No autenticado</h2>
          <p className="mb-3">Por favor inicia sesión</p>
          <button
            onClick={() => login('UsuarioEjemplo', 'usuario@ejemplo.com')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Iniciar Sesión
          </button>
        </>
      )}
    </div>
  );
}