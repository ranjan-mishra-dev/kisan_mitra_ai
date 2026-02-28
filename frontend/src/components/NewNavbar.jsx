import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthProvider.jsx";
import { Link, useNavigate } from "react-router-dom";
import NavItem from "./NavItem.jsx";

const Navbar = () => {
  const { user, logout, login, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  return (
    <nav className="bg-[#F9FAFB] border-b border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Tagline */}

          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://n2r5uux6k5.ucarecd.net/9399c158-f5e5-41c5-bbe6-e84bc6331484/-/preview/1000x992/"
              alt="Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <h1 className="text-[#2E7D32] font-bold text-lg leading-tight">
                KisanMitra AI
              </h1>
              <p className="text-xs text-[#6D4C41] hidden sm:block">
                Grow more, worry less — the AI way
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem text="Features" to="/features" mobile={false} />
            <NavItem text="How to Use" to="/how-to-use" mobile={false} />
            <NavItem text="Contact" to="/contact" mobile={false}/>
            <NavItem text="About" to="/about" mobile={false}/>

            {/* Profile */}

            {/* if user is not logged in */}
            {!user && (
              <button
                onClick={login}
                className="px-4 py-2 bg-[#2E7D32] text-white rounded-lg"
              >
                Sign In
              </button>
            )}

            {/* if user logged in */}
            {user && (
              <div
                className="relative"
                onMouseEnter={() => setProfileOpen(true)}
                onMouseLeave={() => setProfileOpen(false)}
              >
                <div className="flex items-center justify-between w-full">
                  <p className="font-medium text-gray-800 mx-2">{user.name}</p>

                  <img
                    src={user.avatar}
                    alt="Profile"
                    className="w-9 h-9 rounded-full border-2 border-[#2E7D32] cursor-pointer"
                  />
                </div>

                {profileOpen && (
                  <div className="absolute right-0 mt-0 w-40 bg-white rounded-lg shadow-lg border">
                    <button
                      onClick={() => navigate("/profile")}
                      className="block w-full text-left px-4 py-2 cursor-pointer transition"
                    >
                      Edit Profile
                    </button>

                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 cursor-pointer transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1F2933]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-4 py-3 gap-3">
               <NavItem text="Features" to="/features" mobile={true} />
            <NavItem text="How to Use" to="/how-to-use" mobile={true} />
            <NavItem text="Contact" to="/contact" mobile={true}/>
            <NavItem text="About" to="/about" mobile={true}/>

            <div className="flex items-center gap-3 pt-3 border-t">
              <img
                src={user?.avatar}
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-[#2E7D32]"
                onClick={() => setProfileOpen(!profileOpen)}
              />
              <span className="text-sm text-[#1F2933]">My Account</span>
            </div>

            {profileOpen && (
              <div className="ml-12 flex flex-col gap-2">
                <DropdownItem text="Edit" mobile />
                <DropdownItem text="Logout" danger mobile />
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};


const DropdownItem = ({ text, danger, mobile }) => (
  <button
    className={`w-full px-4 py-2 text-sm text-left ${
      danger
        ? "text-red-600 hover:bg-red-50"
        : "text-[#1F2933] hover:bg-gray-100"
    } ${mobile ? "px-0" : ""}`}
  >
    {text}
  </button>
);

export default Navbar;
