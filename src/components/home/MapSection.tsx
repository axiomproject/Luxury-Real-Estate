import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom luxury marker icon
const luxuryMarkerIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Apply custom styles to the map
const applyMapStyles = () => {
  const mapContainers = document.querySelectorAll('.leaflet-container');
  mapContainers.forEach(container => {
    (container as HTMLElement).style.border = '1px solid #e5e7eb';
    (container as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
  });

  // Hide the attribution control completely
  const attributionControls = document.querySelectorAll('.leaflet-control-attribution');
  attributionControls.forEach(control => {
    (control as HTMLElement).style.display = 'none';
  });
};

const MapSection = () => {
  useEffect(() => {
    // Apply custom styles after the map is rendered
    setTimeout(applyMapStyles, 100);
  }, []);

  // Exact coordinates for the location
  const position: [number, number] = [36.18444423819955, -115.95522637791113];

  return (
    <section className="py-0">
      <div className="h-[500px] w-full relative">
        <MapContainer 
          center={position} 
          zoom={15} 
          scrollWheelZoom={false}
          style={{ height: '100%', width: '100%' }}
          className="z-10 map-luxury no-attribution"
          zoomControl={false} // We'll add zoom control to bottom right for better aesthetics
        >
          {/* Premium map tiles for luxury appearance */}
          <TileLayer
            attribution=''
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          
          {/* Custom positioned zoom control */}
          <div className="leaflet-control-zoom leaflet-bar leaflet-control" style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 1000 }}></div>
          
          {/* Luxury gold marker */}
          <Marker position={position} icon={luxuryMarkerIcon}>
            <Popup className="luxury-popup">
              <div className="text-center p-3 font-serif">
                <strong className="text-lg text-primary">Marci Metzger</strong>
                <p className="text-sm mt-1">THE RIDGE REALTY GROUP</p>
                <p className="text-xs mt-2">3190 HW-160, Suite F<br />Pahrump, Nevada 89048</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
        
        {/* Contact card overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-16 md:translate-x-0 bg-white shadow-lg p-8 max-w-md w-full z-20">
          <h3 className="text-2xl font-serif font-light mb-6">
            <span className="text-primary">Visit Our </span>
            <span>Office</span>
          </h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-light">Marci Metzger - THE RIDGE REALTY GROUP</p>
                <p className="font-light">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center mr-4 text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-light">Open daily: 8:00 am - 7:00 pm</p>
                <p className="font-light mt-2">Appointments outside office hours available upon request. Just call!</p>
                <p className="font-light mt-2">(206) 919-6886</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://www.google.com/maps?daddr=3190+HW-160,+Suite+F,+Pahrump,+Nevada+89048,+United+States"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 hover:bg-primary/90 transition-colors duration-300 uppercase tracking-widest text-sm font-light w-full flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              Get Directions
            </a>
            <a 
              href="https://wa.me/12069196886" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-3 hover:bg-[#25D366]/90 transition-colors duration-300 uppercase tracking-widest text-sm font-light w-full flex items-center justify-center"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;