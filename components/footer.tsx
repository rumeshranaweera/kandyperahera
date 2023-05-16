"use client";
import Logo from "./logos";

function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-center bg-contain border border-transparent bg-footer-img border-t-yellow-800/20 bg-yellow-500/5 ">
      <div className="flex flex-col items-center justify-between max-w-4xl px-3 mx-auto sm:py-4 sm:flex-row">
        {/* logo */}
        <div>
          <Logo />
        </div>
        {/* middle */}
        <div>
          <h4 className="capitalize">
            &copy; {new Date().getFullYear().toString()} Events in kandy
          </h4>
        </div>
        {/* right */}
        <h6>tel : 123456789</h6>
      </div>
    </footer>
  );
}

export default Footer;
