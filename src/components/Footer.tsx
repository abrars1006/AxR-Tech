export default function Footer() {
  return (
    <footer className="py-8 bg-subtle border-t border-gray-200 md:flex md:items-center md:justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="flex justify-center md:justify-start">
        <span className="text-xl font-bold tracking-tight text-gray-900">
          AxR Tech.
        </span>
      </div>
      <div className="mt-4 md:mt-0">
        <p className="text-center text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Mohamed Abrar S. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
