function Footer() {
  return (
    <footer className="xs:p-6 p-8 lg:p-16 flex items-center bg-vert justify-between text-white">
      <p className="xs:text-sm">© 2025 Yacine SAFSAFI, Tous droits réservés.</p>
      <div className="flex gap-5 lg:gap-10">
        <a href="https://github.com/Yacesf">
          <i className="fa-brands fa-github xs:text-xl text-3xl"></i>
        </a>
        <a href="mailto:yacine.sf@outlook.fr?subject=Contact%20via%20site%20web&body=Bonjour,%20je%20souhaite%20discuter%20de%20mon%20projet!">
          <i className="fa-solid fa-envelope xs:text-xl text-3xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/yacine-safsafi/">
          <i className="fa-brands fa-linkedin xs:text-xl text-3xl"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
