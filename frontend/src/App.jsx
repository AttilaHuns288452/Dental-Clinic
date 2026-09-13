export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold text-primary-700 mb-4">
          🦷 Dental Clinic
        </h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Your project is ready. Start building something amazing.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Book Appointment
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-white text-primary-600 border border-primary-300 rounded-lg font-medium hover:bg-primary-50 transition-colors"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  )
}
