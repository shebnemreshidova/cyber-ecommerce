import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import Button from '../common/Button'
import HeaderActions from './HeaderActions'
import { LogOut, User, Menu, X } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import Search from './Search'

const Header = () => {
  const { userId, logout } = useAuthContext();
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openMenu]);

  const handleProfileClick = () => {
    navigate('/profile');
    setOpenMenu(false);
  };

  const handleLogout = () => {
    logout();
    setOpenMenu(false);
  };

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200 w-full '>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
         
          <Link to={'/'} className='flex-shrink-0'>
            <img src={logo} alt="Logo" className='h-10 w-auto' />
          </Link>

          <div className='hidden md:flex flex-1 mx-8'>
            <Search />
          </div>

          <div className='flex items-center gap-4'>
            <div className='hidden lg:flex'>
              <HeaderActions />
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className='text-gray-700' />
              ) : (
                <Menu size={24} className='text-gray-700' />
              )}
            </button>

            {!userId ? (
              <div className='hidden sm:flex gap-2'>
                <Button
                  onClick={() => navigate('/auth/login')}
                  variant="primary"
                  className='text-sm'
                >
                  Login
                </Button>
                <Button
                  onClick={() => navigate('/auth/register')}
                  variant="secondary"
                  className='text-sm'
                >
                  Register
                </Button>
              </div>
            ) : (
              <div className='relative' ref={menuRef}>
                <button
                  onClick={() => setOpenMenu(!openMenu)}
                  className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                  aria-label="User menu"
                >
                  <User size={24} className='text-gray-700' />
                </button>
                {openMenu && (
                  <div
                    className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200'
                    role="menu"
                  >
                    <div className='px-4 py-2 border-b border-gray-100'>
                      <p className='text-sm font-medium text-gray-900'>Welcome Back</p>
                    </div>
                    <button
                      onClick={handleProfileClick}
                      className='w-full flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors'
                      role="menuitem"
                    >
                      <User size={18} />
                      <span className='text-sm'>Profile</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className='w-full flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors'
                      role="menuitem"
                    >
                      <LogOut size={18} />
                      <span className='text-sm'>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className='md:hidden pb-4'>
          <Search />
        </div>

        {mobileMenuOpen && (
          <div className='md:hidden border-t border-gray-200 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200'>
            <div className='px-4'>
              <HeaderActions />
            </div>

            {!userId && (
              <div className='flex gap-2 px-4'>
                <Button
                  onClick={() => {
                    navigate('/auth/login');
                    setMobileMenuOpen(false);
                  }}
                  variant="primary"
                  className='w-full text-sm'
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate('/auth/register');
                    setMobileMenuOpen(false);
                  }}
                  variant="secondary"
                  className='w-full text-sm'
                >
                  Register
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  )
}

export default Header