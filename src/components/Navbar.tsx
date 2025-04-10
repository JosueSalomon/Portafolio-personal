// src/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Imagen de perfil */}
        <div className="flex items-center space-x-3">
          <img
            src="https://ik.imagekit.io/diancrochet/Foto%20Perfil.jpg"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold text-blue-700">Josué Salomón</h1>
        </div>

        {/* Enlaces del Navbar */}
        <div className="space-x-4 text-sm font-medium hidden md:flex">
          {['perfil', 'educacion', 'proyectos', 'habilidades', 'contacto'].map((id) => (
            <Link key={id} href={`#${id}`} className="text-gray-700 hover:text-blue-600 transition-colors">
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
