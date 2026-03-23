import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, BookmarkIcon, LogOut, Menu, X } from "lucide-react";
import { useApp } from "@/contexts/AppContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useApp();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border/30">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold gradient-text">AI Toolkit</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link to="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</Link>
          
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <Search className="w-4 h-4" />
          </button>

          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link to="/bookmarks" className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <BookmarkIcon className="w-4 h-4" />
              </Link>
              <Link to="/profile" className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-secondary transition-colors">
                <User className="w-4 h-4" />
                <span className="text-sm">{user?.name}</span>
              </Link>
              <button onClick={logout} className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground">
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              Sign In
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Search bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/30"
          >
            <form onSubmit={handleSearch} className="container py-3">
              <input
                autoFocus
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search tools by name or category..."
                className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/30"
          >
            <div className="container py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm py-2">Home</Link>
              <Link to="/categories" onClick={() => setMobileOpen(false)} className="text-sm py-2">Categories</Link>
              <button onClick={() => { setSearchOpen(true); setMobileOpen(false); }} className="text-sm py-2 text-left flex items-center gap-2">
                <Search className="w-4 h-4" /> Search
              </button>
              {isLoggedIn ? (
                <>
                  <Link to="/profile" onClick={() => setMobileOpen(false)} className="text-sm py-2">Profile</Link>
                  <Link to="/bookmarks" onClick={() => setMobileOpen(false)} className="text-sm py-2">Bookmarks</Link>
                  <button onClick={() => { logout(); setMobileOpen(false); }} className="text-sm py-2 text-left text-destructive">Log Out</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMobileOpen(false)} className="text-sm py-2 text-primary">Sign In</Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
