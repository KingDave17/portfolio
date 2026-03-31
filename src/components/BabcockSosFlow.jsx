import React, { useState, useEffect } from 'react';
import './BabcockSosFlow.css';
import { 
  Bell, MapPin, Search, Shield, ShieldAlert, Car, Flame, Home, User, BellRing, UserCheck, Users,
  CheckCircle, Navigation, RadioReceiver, LogOut, Radio, Focus, Activity, TriangleAlert, MoveRight, ChevronRight, X
} from 'lucide-react';

// Hardcoded mock data to simulate Firebase
const MOCK_USER = { name: 'Mervin' };

const ALERTS = [
  { id: '1', type: 'Medical Emergency', location: 'Neal Wilson Hall', distance: '12', time: 'Just now', status: 'Active', color: '#DC2626', role: 'student', reporter: 'Adeola B.' },
  { id: '2', type: 'Fire Outbreak', location: 'Cafeteria', distance: '45', time: '2m ago', status: 'Active', color: '#F59E0B', role: 'student', reporter: 'Jane D.' },
  { id: '3', type: 'Security Threat', location: 'Main Gate', distance: '120', time: '10m ago', status: 'Resolved', color: '#3B82F6', role: 'staff', reporter: 'Mr. Johnson' },
];

const RECENT_ALERTS_ADMIN = [
  ...ALERTS,
  { id: '4', type: 'Critical SOS', location: 'Babcock Business School', distance: '400', time: '1h ago', status: 'Resolved', color: '#DC2626', role: 'student', reporter: 'Michael U.' }
];

const BabcockSosFlow = () => {
  const [view, setView] = useState('student'); // 'student' | 'security' | 'admin'
  const [isSOSActive, setIsSOSActive] = useState(false);
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);

  // Student Flow state
  const [sliderWidth, setSliderWidth] = useState(0); 
  const isHolding = false; // Mocking

  useEffect(() => {
     // Re-trigger animation effects when mounting views normally handled by React Native Animated
  }, [view]);

  // --- Student View ---
  const renderStudent = () => (
    <div className="bsos-screen bsos-student">
      {/* Header */}
      <div className="bsos-header">
        <div>
          <span className="bsos-greeting">Hello,</span>
          <h2 className="bsos-name">{MOCK_USER.name}</h2>
        </div>
        <div className="bsos-header-icons">
          <button className="bsos-icon-btn"><Bell size={18} color="#111" /><div className="bsos-red-dot" /></button>
        </div>
      </div>

      <div className="bsos-live-pill-wrap">
        <div className={`bsos-live-pill ${isSOSActive ? 'danger' : ''}`}>
          <div className="bsos-live-dot" />
          <span>{isSOSActive ? 'EMERGENCY BROADCASTING' : 'LIVE MONITORING ACTIVE'}</span>
        </div>
      </div>

      {/* Map Card */}
      <div className={`bsos-map-card ${isSOSActive ? 'danger-border' : ''}`}>
        <div className="bsos-map-bg">
          <div className="bsos-radar-center">
             <div className="bsos-radar-pulse" />
             <div className="bsos-radar-core" />
          </div>
        </div>
        <div className="bsos-map-top">
           <div className="bsos-map-badge"><MapPin size={12} color="#DC2626"/><span>Babcock University</span></div>
           <div className={`bsos-map-status ${isSOSActive ? 'active' : ''}`}>
             <span>{isSOSActive ? 'SOS ACTIVE' : 'GPS ACTIVE'}</span>
           </div>
        </div>
        <div className="bsos-map-bottom">
           <span>LAT: 6.8912 | LNG: 3.7197</span>
        </div>
      </div>

      {/* SOS Slider */}
      <div className="bsos-slider-container">
        {isSOSActive ? (
          <div className="bsos-sos-hold">
            <div className="bsos-sos-hold-fill" />
            <span className="bsos-sos-text">CLICK TO CANCEL</span>
            <button className="bsos-invisible-cancel" onClick={() => setIsSOSActive(false)}></button>
          </div>
        ) : (
          <div className="bsos-sos-slide" onClick={() => setIsSOSActive(true)}>
             <span className="bsos-sos-text">TAP TO SOS »</span>
             <div className="bsos-sos-thumb">
               <Shield size={24} color="#DC2626" />
             </div>
          </div>
        )}
        <span className="bsos-sos-sub">
          {isSOSActive ? 'SOS BROADCASTED. HELP IS ON THE WAY.' : 'Tap right to alert campus security instantly'}
        </span>
      </div>

      {/* Quick Report */}
      <div className="bsos-section">
        <div className="bsos-section-title"><div className="bsos-bar-blue"/> Quick Report</div>
        <div className="bsos-quick-grid">
           <button className="bsos-quick-btn"><div className="bsos-q-icon red"><Activity size={24} /></div><span>Medical</span></button>
           <button className="bsos-quick-btn"><div className="bsos-q-icon orange"><Flame size={24} /></div><span>Fire</span></button>
           <button className="bsos-quick-btn"><div className="bsos-q-icon blue"><Shield size={24} /></div><span>Security</span></button>
           <button className="bsos-quick-btn"><div className="bsos-q-icon purple"><TriangleAlert size={24} /></div><span>Accident</span></button>
        </div>
      </div>

      <div className="bsos-section" style={{marginBottom: 20}}>
        <div className="bsos-section-title"><div className="bsos-bar-orange"/> Nearby Alerts</div>
        {ALERTS.slice(0, 2).map(alert => (
          <div key={alert.id} className="bsos-alert-card">
            <div className="bsos-alert-bar" style={{backgroundColor: alert.color}} />
            <div className="bsos-alert-icon" style={{backgroundColor: alert.color + '20'}}>
               <ShieldAlert size={20} color={alert.color} />
            </div>
            <div className="bsos-alert-info">
               <h4>{alert.type}</h4>
               <span>{alert.location}</span>
               <div className="bsos-alert-meta">
                  <span style={{color: alert.color, fontWeight: 'bold'}}>{alert.status}</span>
                  <span className="dot">•</span>
                  <span>{alert.distance}m</span>
               </div>
            </div>
            <span className="bsos-alert-time">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Security View ---
  const renderSecurity = () => (
    <div className="bsos-screen bsos-security">
       <div className="bsos-sec-header">
         <div>
           <div className="bsos-sec-role"><div className="dot red"/> SECURITY PORTAL</div>
           <h2>Officer David</h2>
         </div>
         <div className="bsos-header-icons">
          <button className="bsos-icon-btn dark"><Bell size={18} color="#fff" /></button>
         </div>
       </div>

       <div className="bsos-sec-subhead">
         <h3>Live Incidents</h3>
         <div className="bsos-sec-badge">2 ACTIVE</div>
       </div>

       <div className="bsos-sec-scroll">
         {ALERTS.filter(a => a.status === 'Active').map(alert => (
            <div key={alert.id} className="bsos-sec-card">
              <div className="bsos-sec-card-top">
                <div style={{display:'flex', alignItems:'center'}}>
                   <div style={{backgroundColor: alert.color, padding:8, borderRadius:20}}><ShieldAlert size={16} color="#fff"/></div>
                   <div style={{marginLeft: 10}}>
                      <h4 style={{color:'#fff', margin:0, fontSize:14}}>{alert.type}</h4>
                      <span style={{color:'#aaa', fontSize:11}}>{alert.time} • {alert.distance}m away</span>
                   </div>
                </div>
                <div className="bsos-sec-urgent" style={{borderColor: alert.color, color: alert.color}}>URGENT</div>
              </div>

              <div className="bsos-sec-details">
                <div className="bsos-sec-col">
                  <span className="bsos-sec-label">REPORTER</span>
                  <span className="bsos-sec-val"><User size={12} style={{marginRight:4}}/> {alert.reporter}</span>
                  <span className="bsos-sec-subval">{alert.role}</span>
                </div>
                <div className="bsos-sec-col">
                  <span className="bsos-sec-label">LOCATION</span>
                  <span className="bsos-sec-val"><MapPin size={12} style={{marginRight:4}}/> {alert.location}</span>
                  <span className="bsos-sec-subval">Campus Area</span>
                </div>
              </div>

              <div className="bsos-sec-req-bg" style={{borderLeftColor: alert.color}}>
                 <p>Immediate assistance required at site.</p>
              </div>

              <div className="bsos-sec-actions">
                 <button className="bsos-sec-btn-map"><MapPin size={14}/> Map</button>
                 <button className="bsos-sec-btn-resolve"><CheckCircle size={14}/> Resolve</button>
                 <button className="bsos-sec-btn-respond"><RadioReceiver size={14}/> Respond</button>
              </div>
            </div>
         ))}
       </div>
    </div>
  );

  // --- Admin View ---
  const renderAdmin = () => (
    <div className="bsos-screen bsos-admin">
      <div className="bsos-admin-bg" />
      <div className="bsos-admin-header">
         <div>
            <span className="bsos-admin-sub">ADMIN CONTROL CENTER</span>
            <h2>Administrator</h2>
         </div>
         <div className="bsos-header-icons">
           <button className="bsos-icon-btn dark" onClick={() => setShowBroadcastModal(true)}><Radio size={18} color="#7C3AED" /></button>
           <button className="bsos-icon-btn dark"><LogOut size={18} color="#EF4444" /></button>
         </div>
      </div>

      <div className="bsos-admin-scroll">
        <div className="bsos-admin-welcome">
          <div>
            <h3>System Overview</h3>
            <p>All units monitored • Real-time data</p>
          </div>
          <ShieldAlert size={40} color="rgba(255,255,255,0.2)" />
        </div>

        <div className="bsos-admin-stats">
          <div className="bsos-stat-card">
             <div className="icon purple"><BellRing size={20} color="#7C3AED"/></div>
             <h2>1,245</h2>
             <span>TOTAL ALERTS</span>
          </div>
          <div className="bsos-stat-card">
             <div className="icon red"><Activity size={20} color="#DC2626"/></div>
             <h2>2</h2>
             <span>ACTIVE NOW</span>
             <span className="sub red">LIVE</span>
          </div>
          <div className="bsos-stat-card">
             <div className="icon green"><CheckCircle size={20} color="#10B981"/></div>
             <h2>1,243</h2>
             <span>RESOLVED</span>
          </div>
          <div className="bsos-stat-card">
             <div className="icon blue"><Users size={20} color="#3B82F6"/></div>
             <h2>8,432</h2>
             <span>TOTAL USERS</span>
          </div>
        </div>

        <div className="bsos-admin-section-head">
          <h3>Recent Activity</h3>
          <div className="bsos-live-pill danger"><div className="bsos-live-dot"/><span>ACTIVE</span></div>
        </div>

        <div className="bsos-admin-feed">
           {RECENT_ALERTS_ADMIN.map(alert => (
             <div key={alert.id} className="bsos-feed-card">
               <div className="bsos-feed-stripe" style={{backgroundColor: alert.status === 'Resolved' ? '#9CA3AF' : alert.color}} />
               <div className="bsos-feed-content">
                  <div className="bsos-feed-row">
                     <span className="bsos-feed-type" style={{color: alert.status === 'Resolved' ? '#9CA3AF' : alert.color}}>{alert.type}</span>
                     <div className={`bsos-feed-badge ${alert.status === 'Resolved' ? 'resolved' : 'active'}`}>{alert.status.toUpperCase()}</div>
                  </div>
                  <span className="bsos-feed-loc">{alert.location}</span>
                  <span className="bsos-feed-meta">{alert.reporter} · {alert.time}</span>
               </div>
             </div>
           ))}
        </div>

        <div className="bsos-sys-card">
           <h4 className="bsos-sys-title">SYSTEM STATUS</h4>
           {['Firebase Auth', 'Firestore DB', 'Push Notifications', 'Alert Broadcast'].map((sys, i) => (
             <div key={i} className="bsos-sys-row">
                <span>{sys}</span>
                <div className="bsos-sys-stat"><div className="dot green"/> Operational</div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="phone-mockup bsos-mockup">
      <div className="phone-bezel">
        <div className="phone-screen bsos-app">
          {/* Internal View Toggle (Simulating App Ecosystem) */}
          <div className="bsos-view-toggle">
            <button className={view === 'student' ? 'active' : ''} onClick={() => setView('student')}>Student</button>
            <button className={view === 'security' ? 'active' : ''} onClick={() => setView('security')}>Security</button>
            <button className={view === 'admin' ? 'active' : ''} onClick={() => setView('admin')}>Admin</button>
          </div>

          <div className="bsos-view-container">
            {view === 'student' && renderStudent()}
            {view === 'security' && renderSecurity()}
            {view === 'admin' && renderAdmin()}
          </div>

          {/* Broadcast Modal for Admin */}
          {showBroadcastModal && view === 'admin' && (
            <div className="bsos-modal-overlay" onClick={() => setShowBroadcastModal(false)}>
               <div className="bsos-modal" onClick={e => e.stopPropagation()}>
                 <div className="bsos-modal-icon-bg"><Radio size={30} color="#7C3AED" /></div>
                 <h3>Send Campus Broadcast</h3>
                 
                 <div className="bsos-input-group">
                   <label>TITLE</label>
                   <input type="text" placeholder="e.g. Mandatory Hall Meeting" disabled />
                 </div>
                 <div className="bsos-input-group">
                   <label>MESSAGE</label>
                   <textarea placeholder="Provide details..." disabled rows={3}></textarea>
                 </div>

                 <div className="bsos-modal-btns">
                   <button className="bsos-modal-cancel" onClick={() => setShowBroadcastModal(false)}>Cancel</button>
                   <button className="bsos-modal-confirm" onClick={() => setShowBroadcastModal(false)}>Push Alert</button>
                 </div>
               </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default BabcockSosFlow;
