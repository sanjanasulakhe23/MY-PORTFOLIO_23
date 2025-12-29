export function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Arjun Kumar. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
