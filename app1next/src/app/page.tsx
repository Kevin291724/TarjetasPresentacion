import { UserProfile } from './components/UserProfile';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        Aplicación con Autenticación
      </h1>
      <UserProfile />
    </main>
  );
}