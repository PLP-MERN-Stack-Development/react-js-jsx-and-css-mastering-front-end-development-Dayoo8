const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 p-4 mt-10 text-center">
      <div className="flex justify-center gap-4 mb-2">
        <a href="#" className="hover:text-white">Privacy</a>
        <a href="#" className="hover:text-white">Terms</a>
        <a href="#" className="hover:text-white">Contact</a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
