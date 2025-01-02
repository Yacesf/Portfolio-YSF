function Footer() {
  return (
    <footer className="p-16 flex justify-between text-gray-700">
      <p>© 2025 Yacine SAFSAFI, Tous droits réservés.</p>
      <div className="flex gap-10">
        <a href="https://github.com/Yacesf">
          <i className="fa-brands fa-github text-3xl"></i>
        </a>
        <a href="mailto:yacine.sf@outlook.fr?subject=Contact%20via%20site%20web&body=Bonjour,%20je%20souhaite%20discuter%20de%20mon%20projet!">
          <i className="fa-solid fa-envelope text-3xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/yacine-safsafi/">
          <i className="fa-brands fa-linkedin text-3xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
