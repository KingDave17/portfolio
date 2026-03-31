import React, { useState, useEffect } from 'react';
import './TuraFlow.css';
import { 
  Bell, MapPin, Search, Home, Heart, User, ChevronRight, Settings, 
  Map as MapIcon, Star, X, Shield, PlusCircle, Activity, ArrowLeft,
  Moon, Trash2, Key, Info, Share2, Plane
} from 'lucide-react';

const COLORS = {
  primary: '#008751',
  secondary: '#005633',
  background: '#F9FAFB',
  cardBg: '#FFFFFF',
  text: '#111827',
  subText: '#6B7280',
  border: '#E5E7EB',
  inputBg: '#F3F4F6',
  danger: '#EF4444',
  warning: '#F59E0B'
};

const STORY_LOCATIONS = [
  { id: 's1', name: 'Lekki', image: '/tura/lekki.jpg' },
  { id: 's2', name: 'Ikeja', image: '/tura/ikeja.jpg' },
  { id: 's3', name: 'V.I.', image: '/tura/vi.jpg' },
  { id: 's4', name: 'Ikoyi', image: '/tura/ikoyi.jpg' }
];

const ESSENTIALS = [
  { id: 'e1', name: 'Ride', icon: <ChevronRight size={18} color="#10B981"/>, bgColor: '#D1FAE5' },
  { id: 'e2', name: 'Food', icon: <PlusCircle size={18} color="#F59E0B"/>, bgColor: '#FEF3C7' },
  { id: 'e3', name: 'Health', icon: <Activity size={18} color="#EF4444"/>, bgColor: '#FEE2E2', action: 'emergency' }, 
  { id: 'e4', name: 'Stay', icon: <Settings size={18} color="#8B5CF6"/>, bgColor: '#EDE9FE' }
];

const CATEGORIES = ['All', 'Beaches', 'Hotels', 'Restaurants', 'Nightlife', 'Shopping'];

const PLACES = [
  {
    id: 1, name: 'Lekki Conservation Centre', location: 'Lekki, Lagos', distance: '12', 
    rating: 4.8, price: '3000', category: 'Nature', image: '/tura/lekki.jpg'
  },
  {
    id: 2, name: 'Tarkwa Bay Beach', location: 'Victoria Island, Lagos', distance: '8', 
    rating: 4.5, price: '1500', category: 'Beaches', image: '/tura/vi.jpg'
  }
];

const TuraFlow = () => {
  const [screen, setScreen] = useState('splash');
  const [activeTab, setActiveTab] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All');
  
  const [showNotifs, setShowNotifs] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [savedItems, setSavedItems] = useState([PLACES[0], PLACES[1]]);
  
  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('welcome'), 2500);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  const toggleSaved = (item) => {
    if (savedItems.find(s => s.id === item.id)) {
      setSavedItems(savedItems.filter(s => s.id !== item.id));
    } else {
      setSavedItems([...savedItems, item]);
    }
  };

  const renderCard = (item) => {
    const isSaved = savedItems.find(s => s.id === item.id);
    return (
      <div key={item.id} className="tura-card">
        <div className="tura-card-img-wrap">
          <img src={item.image} alt={item.name} className="tura-card-img" />
          <div className="tura-card-tag">{item.category}</div>
          <button className="tura-heart-icon" onClick={() => toggleSaved(item)}>
            <Heart size={16} color={isSaved ? COLORS.danger : COLORS.subText} fill={isSaved ? COLORS.danger : 'none'} />
          </button>
        </div>
        <div className="tura-card-content">
          <div className="tura-title-row">
            <span className="tura-card-title">{item.name}</span>
            <div className="tura-rating">
              <Star size={12} color="#F59E0B" fill="#F59E0B" />
              <span>{item.rating}</span>
            </div>
          </div>
          <div className="tura-location-row">
            <MapPin size={12} color={COLORS.subText} />
            <span>{item.location} • {item.distance} km</span>
          </div>
          <div className="tura-card-footer">
            <span className="tura-price">₦{item.price}</span>
            <div className="tura-btn-row">
              <button className="tura-icon-btn"><MapIcon size={14} color={COLORS.text} /></button>
              <button className="tura-book-btn" onClick={() => setShowBooking(true)}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div className="tura-scroll-area">
      <div className="tura-header">
        <div className="tura-header-left">
          <div className="tura-profile-circle">D</div>
          <div className="tura-location-container">
            <span className="tura-loc-label">Current Location</span>
            <div className="tura-loc-header">
              <MapPin size={12} color={COLORS.primary} fill={COLORS.primary} style={{marginRight: '2px'}} />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </div>
        <button className="tura-bell" onClick={() => setShowNotifs(true)}>
          <Bell size={18} color={COLORS.text} />
          <div className="tura-red-dot" />
        </button>
      </div>

      <div className="tura-search">
        <Search size={16} color={COLORS.subText} />
        <input type="text" placeholder="Search places..." disabled />
      </div>

      <div className="tura-stories">
        {STORY_LOCATIONS.map(s => (
          <div key={s.id} className="tura-story">
            <div className="tura-story-ring"><img src={s.image} alt={s.name} /></div>
            <span>{s.name}</span>
          </div>
        ))}
      </div>

      <h4 className="tura-section-title">Travel Essentials</h4>
      <div className="tura-essentials">
        {ESSENTIALS.map(e => (
          <div key={e.id} className="tura-essential" onClick={() => e.action === 'emergency' && setShowEmergency(true)}>
            <div className="tura-e-icon" style={{ backgroundColor: e.bgColor }}>{e.icon}</div>
            <span>{e.name}</span>
          </div>
        ))}
      </div>

      <div className="tura-categories">
        {CATEGORIES.map(c => (
          <button key={c} className={`tura-cat-pill ${activeCategory === c ? 'active' : ''}`} onClick={() => setActiveCategory(c)}>
            {c}
          </button>
        ))}
      </div>

      <h4 className="tura-section-title">Nearby Places</h4>
      <div className="tura-places">
        {PLACES.map(renderCard)}
      </div>
    </div>
  );

  const renderSaved = () => (
    <div className="tura-scroll-area" style={{ backgroundColor: COLORS.background }}>
      <div className="tura-header-border">
        <button onClick={() => setActiveTab('home')} style={{background:'none',border:'none'}}><ArrowLeft size={24} color={COLORS.text} /></button>
        <span style={{fontSize:'16px', fontWeight:'bold'}}>Saved Places</span>
        <div style={{width:'24px'}} />
      </div>
      
      {savedItems.length === 0 ? (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'50px', color:COLORS.subText}}>
          <Heart size={60} />
          <span style={{marginTop:'10px'}}>No saved places yet.</span>
        </div>
      ) : (
        <div style={{padding:'20px', display:'flex', flexDirection:'column', gap:'15px'}}>
          {savedItems.map(item => (
            <div key={item.id} className="tura-saved-card">
              <img src={item.image} alt={item.name} />
              <div className="tura-saved-info">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <span style={{fontWeight:'bold', fontSize:'14px'}}>{item.name}</span>
                  <button style={{background:'none',border:'none',padding:0}} onClick={() => toggleSaved(item)}>
                    <Heart size={20} color={COLORS.danger} fill={COLORS.danger} />
                  </button>
                </div>
                <span style={{fontSize:'12px', color:COLORS.subText}}>{item.location}</span>
                <span style={{fontSize:'14px', fontWeight:'bold', color:COLORS.primary, marginTop:'8px'}}>₦{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderProfile = () => (
    <div className="tura-scroll-area">
      <div className="tura-header-border">
        <button onClick={() => setActiveTab('home')} style={{background:'none',border:'none'}}><ArrowLeft size={24} color={COLORS.text} /></button>
        <span style={{fontSize:'16px', fontWeight:'bold'}}>Settings</span>
        <div style={{width:'24px'}} />
      </div>
      
      <div style={{padding:'20px'}}>
        <span className="tura-settings-label">APP PREFERENCES</span>
        <div className="tura-settings-card">
          <div className="tura-settings-row">
            <div><strong>Dark Mode</strong><br/><span style={{fontSize:'11px', color:COLORS.subText}}>Switch themes</span></div>
            <div className="tura-toggle"><div className="tura-toggle-thumb"/></div>
          </div>
          <div className="tura-settings-row">
            <div><strong>Haptic Feedback</strong><br/><span style={{fontSize:'11px', color:COLORS.subText}}>Vibrate on tap</span></div>
            <div className="tura-toggle active"><div className="tura-toggle-thumb"/></div>
          </div>
        </div>

        <span className="tura-settings-label">SECURITY</span>
        <div className="tura-settings-card">
          <div className="tura-settings-row" style={{cursor: 'pointer'}}>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
              <Key size={18} color={COLORS.subText} />
              <strong>Change Password</strong>
            </div>
            <ChevronRight size={16} color={COLORS.border} />
          </div>
        </div>

        <span className="tura-settings-label">DANGER ZONE</span>
        <div className="tura-settings-card">
          <div className="tura-settings-row" style={{cursor: 'pointer'}} onClick={() => {}}>
            <div style={{display:'flex', alignItems:'center', gap:'10px', color:COLORS.danger}}>
              <Trash2 size={18} color={COLORS.danger} />
              <strong>Delete Account</strong>
            </div>
          </div>
        </div>
        
        <div style={{textAlign:'center', marginTop:'30px', opacity:0.6}}>
           <span style={{fontSize:'11px', color:COLORS.subText}}>Tura Travel App • Made in Nigeria<br/>v1.0.2</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="phone-mockup">
      <div className="phone-bezel">
        <div className="phone-screen tura-app">
          {/* Status Bar */}
          <div className="status-bar">
            <span>9:41</span>
            <div className="status-icons">
              <Shield size={10} color="#000" />
              <div className="battery"></div>
            </div>
          </div>

          {screen === 'splash' && (
            <div className="screen splash-screen" style={{ backgroundColor: COLORS.primary }}>
              <div className="logo-circle"><Plane size={48} color={COLORS.primary} fill={COLORS.primary} /></div>
              <h1 className="app-name" style={{color:'white'}}>TURA</h1>
            </div>
          )}

          {screen === 'welcome' && (
            <div className="screen welcome-screen">
              <div className="welcome-bg" style={{ backgroundImage: "url('/tura/lekki.jpg')" }}>
                <div className="overlay"></div>
              </div>
              <div className="welcome-content">
                <h2 style={{color:'white', fontSize:'24px', marginBottom:'10px'}}>Explore Nigeria like a local</h2>
                <p style={{color:'#ddd', fontSize:'14px', marginBottom:'20px'}}>Discover hidden gems, cultural landmarks, and the best of Nigerian hospitality.</p>
                <button onClick={() => { setScreen('app'); setActiveTab('home'); }} className="tura-book-btn" style={{ width: '100%', padding: '15px', fontSize: '16px' }}>
                  Get Started
                </button>
              </div>
            </div>
          )}

          {screen === 'app' && (
            <>
              {activeTab === 'home' && renderHome()}
              {activeTab === 'saved' && renderSaved()}
              {activeTab === 'profile' && renderProfile()}
              {activeTab === 'explore' && renderHome() /* Mirror home for simple explore demo */}

              {/* Bottom Nav */}
              <div className="tura-bottom-nav">
                <button className={`tura-nav-btn ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                  <Home size={20} color={activeTab === 'home' ? COLORS.primary : COLORS.subText} />
                  <span style={{color: activeTab === 'home' ? COLORS.primary : COLORS.subText}}>Home</span>
                </button>
                <button className={`tura-nav-btn ${activeTab === 'explore' ? 'active' : ''}`} onClick={() => setActiveTab('explore')}>
                  <Search size={20} color={activeTab === 'explore' ? COLORS.primary : COLORS.subText} />
                  <span style={{color: activeTab === 'explore' ? COLORS.primary : COLORS.subText}}>Explore</span>
                </button>
                <button className={`tura-nav-btn ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>
                  <Heart size={20} color={activeTab === 'saved' ? COLORS.primary : COLORS.subText} />
                  <span style={{color: activeTab === 'saved' ? COLORS.primary : COLORS.subText}}>Saved</span>
                </button>
                <button className={`tura-nav-btn ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                  <Settings size={20} color={activeTab === 'profile' ? COLORS.primary : COLORS.subText} />
                  <span style={{color: activeTab === 'profile' ? COLORS.primary : COLORS.subText}}>Profile</span>
                </button>
              </div>
            </>
          )}

          {/* Overlays / Modals */}
          {showNotifs && (
            <div className="tura-overlay" onClick={() => setShowNotifs(false)}>
              <div className="tura-modal" onClick={e => e.stopPropagation()}>
                <div className="tura-modal-header">
                  <h3>Notifications</h3>
                  <button onClick={() => setShowNotifs(false)} style={{background:'none',border:'none'}}><X size={18} /></button>
                </div>
                <div className="tura-notif-item">
                  <div className="tura-notif-top"><strong>Welcome!</strong><span>Now</span></div>
                  <p>Explore the world with Tura.</p>
                </div>
                <div className="tura-notif-item" style={{borderBottom:'none'}}>
                  <div className="tura-notif-top"><strong>Setup Profile</strong><span>2h ago</span></div>
                  <p>Add a photo to your profile.</p>
                </div>
              </div>
            </div>
          )}

          {showEmergency && (
            <div className="tura-overlay" onClick={() => setShowEmergency(false)}>
              <div className="tura-modal" onClick={e => e.stopPropagation()}>
                <div className="tura-modal-header">
                  <div style={{display:'flex', alignItems:'center', gap: '8px', color: COLORS.danger}}>
                    <Activity size={20} color={COLORS.danger} /> <h3>Emergency Hub</h3>
                  </div>
                  <button onClick={() => setShowEmergency(false)} style={{background:'none',border:'none'}}><X size={18} /></button>
                </div>
                <p style={{fontSize:'12px', color: COLORS.subText, marginBottom: '16px'}}>Tap to call reliable emergency services instantly.</p>
                {['Police / General', 'Medical Ambulance', 'Fire Service'].map((svc, i) => (
                  <div key={i} className="tura-e-row">
                    <div className="tura-e-row-left">
                      <strong>{svc}</strong>
                      <span>Quick Response ({112+i})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {showBooking && (
            <div className="tura-overlay" onClick={() => setShowBooking(false)}>
              <div className="tura-modal" style={{textAlign: 'center'}} onClick={e => e.stopPropagation()}>
                <div className="tura-icon-huge" style={{backgroundColor: '#E8F5E9'}}>
                  <Shield size={32} color={COLORS.primary} />
                </div>
                <h3 style={{marginBottom:'8px'}}>Booking Confirmed!</h3>
                <p style={{fontSize:'13px', color:COLORS.subText, marginBottom:'16px'}}>You are booked successfully in the mock-simulator.</p>
                <button className="tura-book-btn" style={{width:'100%', padding:'12px', fontSize:'14px'}} onClick={() => setShowBooking(false)}>Awesome!</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default TuraFlow;
