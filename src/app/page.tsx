// src/app/page.tsx

'use client';

import Navbar from '../components/Navbar';
import useScrollAnimations from '../hooks/useScrollAnimations';
import './styles.css';

export default function Home() {
  useScrollAnimations();

  return (
    <>
      <Navbar />

      <main className="pt-20 max-w-4xl mx-auto px-4 space-y-16">
        {/* Sección Perfil */}
        <section id="perfil" className="section-profile">
          <h2 className="section-title">Perfil Profesional</h2>
          <p className="section-text">
            Apasionado por el desarrollo backend, redes e infraestructura, con interés en ciberseguridad y soluciones escalables. Me destaco por ser proactivo, analítico y orientado a resultados. Actualmente colaboro en el backend de <strong>Vero</strong>, una app de viajes por suscripción. Busco realizar mis prácticas profesionales en un entorno real.
          </p>
        </section>

        {/* Sección Educación */}
        <section id="educacion" className="section-profile">
          <h2 className="section-title">Educación</h2>
          <ul className="list">
            <li><strong>Ingeniería en Sistemas</strong> – UNAH (2021 - Actualidad)</li>
            <li><strong>Bachillerato General</strong> – Metropolitan School (2011 - 2020)</li>
          </ul>
        </section>

        {/* Sección Proyectos */}
        <section id="proyectos" className="section-profile section-proyectos">
          <h2 className="section-title">Proyectos Destacados</h2>
          <div className="proyecto-card">
            <h3>Readigo</h3>
            <p>Aplicación web para la compra y venta de libros, con un panel de administración que permite gestionar a los motoristas. Incluye una estructura de base de datos optimizada y endpoints funcionales.</p>
          </div>
          <div className="proyecto-card">
            <h3>Diancrohet</h3>
            <p>Página web de compra y venta de productos de crochet, que incluye un panel administrativo para gestionar inventarios. Cuenta con una estructura de base de datos eficiente y endpoints completamente funcionales.</p>
          </div>
          <div className="proyecto-card">
            <h3>SkyVibe</h3>
            <p>Página web para la reserva y compra de boletos de avión, con una estructura de base de datos robusta y endpoints funcionales.</p>
          </div>
          <div className="proyecto-card">
            <h3>Congreso UNAH 2025</h3>
            <p>Página web destinada al Congreso de la Universidad Nacional Autónoma de Honduras 2025. Incluye una estructura de base de datos bien definida y endpoints funcionales.</p>
          </div>
          <div className="proyecto-card">
            <h3>Vero</h3>
            <p>Aplicación para la gestión de suscripciones de viajes semanales y mensuales. Cuenta con una estructura de base de datos optimizada y endpoints completamente funcionales.</p>
          </div>
        </section>


        {/* Sección Habilidades */}
        <section id="habilidades" className="section-profile section-habilidades">
          <h2 className="section-title">Habilidades</h2>
          <div className="habilidades-card">
            <h3>Técnicas</h3>
            <ul className="list">
              <li><strong>Lenguajes:</strong> JavaScript, Python, TypeScript, Java</li>
              <li><strong>Frameworks:</strong> Django, Laravel, Node.js, Next.js, Spring Boot</li>
              <li><strong>Bases de datos:</strong> MongoDB, Oracle, MySQL, PostgreSQL</li>
              <li><strong>Despliegue:</strong> Vercel, Render</li>
              <li><strong>Control de versiones:</strong> Git, GitHub</li>
            </ul>
          </div>
          <div className="habilidades-card">
            <h3>Blandas</h3>
            <ul className="list">
              <li>Trabajo en equipo y comunicación efectiva</li>
              <li>Compromiso, responsabilidad y autonomía</li>
              <li>Aprendizaje continuo y pensamiento lógico</li>
            </ul>
          </div>
        </section>

        {/* Sección Contacto */}
        <section id="contacto" className="section-profile section-contacto">
          <h2 className="section-title">Contacto</h2>
          <p className="section-text">
            📧 josueisacsalomonlanda@gmail.com <br />
            📱 +504 9704 7919 <br />
            🧑‍💻 <a href="https://github.com/JosueSalomon" className="link">github.com/JosueSalomon</a>
          </p>
          <h3 className="sub-title">Referencias</h3>
          <ul className="list">
            <li><strong>Ing. Alex Moncada:</strong> +504 9525-7750</li>
            <li><strong>Ing. Erick Reyes:</strong> +504 9890-3878</li>
          </ul>
        </section>
      </main>
    </>
  );
}
